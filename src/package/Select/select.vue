<template>
  <div class="x-select">
    <div
      class="x-select-input"
      @click.prevent="toggleMenu"
      @mouseover="mouseover"
      @mouseout="mouseout"
    >
      <div class="x-select-array" v-show="multiple && checkArray.length">
        <div class="x-select-array-content">
          <span class="x-con-array">{{checkArray[0]}}</span>
          <span class="x-clearable-array" @click.stop="clearValue">
            <i class="x-icon-x"></i>
          </span>
        </div>
        <span v-if="checkArray.length > 1">+ {{checkArray.length - 1}}</span>
      </div>

      <input
        class="x-input"
        readonly
        ref="selectInput"
        :class="{'is-focus': isActive}"
        @focus.stop="focus"
        :value="checkValue"
        :placeholder="placeholder"
      >

      <transition-group name="fade" mode="out-in" tag="div" class="x-select-icon">
        <div class="x-clearable" v-show="isClear" key="1" @click.stop="clearValue">
          <i class="x-icon-x"></i>
        </div>
        <i class="x-arrow" key="2" v-show="!isClear" :class="{'is-active': isActive}"></i>
      </transition-group>
    </div>

    <transition name="fade-up" mode="out-in">
      <div class="x-select-option" :style="dropStyle" v-show="isActive" ref="optionEl">
        <div class="x-select-search" v-if="search">
          <Input
            iconBefore="x-icon-search"
            size="sm"
            :clearable="true"
            v-model="searchKey"
            @input="searchEv"
          />
        </div>
        <ul>
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import emit from "../utils/emit";

export default {
  name: "xSelect",
  mixins: [emit],
  provide() {
    return {
      rootSelect: this
    };
  },
  props: {
    value: {
      required: true
    },
    multiple: Boolean,
    placeholder: String,
    disabled: Boolean,
    search: [String, Boolean]
  },
  data() {
    return {
      isActive: false,
      checkValue: "",
      checkArray: [],
      dropStyle: null,
      isfocus: false,
      isClear: false,
      searchKey: ""
    };
  },
  mounted() {
    document.addEventListener("click", e => {
      if (!this.$el.contains(e.target)) {
        this.close();
      }
    });

    this.$on("select", ({ label, check }) => {
      if (this.multiple) {
        if (check) {
          this.checkArray.push(label);
        } else {
          this.checkArray.splice(this.checkArray.indexOf(label), 1);
        }
        this.checkValue = this.checkArray.length ? " " : "";
        this.$emit("input", this.checkArray);
      } else {
        this.checkValue = label;
        this.close();
        this.$emit("input", this.checkValue);
      }
    })

  },
  methods: {
    getRect() {
      const SPACE = 5
      const Rect = this.$el.getBoundingClientRect();
      const PageH = document.body.clientHeight
      const OptionH = this.$refs.optionEl.clientHeight
      const ShowH = Rect.top + Rect.height + SPACE + OptionH

      const T = PageH > ShowH ? ~~(Rect.height) + 5 : -(SPACE + OptionH)

      this.dropStyle = {
        minWidth: Rect.width + "px",
        top: T + "px"
      };
    },
    toggleMenu() {
      if (this.isfocus && this.isActive) {
        this.close();
      } else {
        this.show()
        this.getRect()
      }
    },
    close() {
      this.isfocus = false;
      this.isActive = false;
    },
    show() {
      this.searchKey = "";
      this.isActive = true;
      this.isfocus = true;
    },
    focus() {
      this.isActive = true;
    },
    mouseover() {
      if (!this.multiple && this.checkValue.length) {
        this.isClear = true;
      }
    },
    mouseout() {
      this.isClear = false;
    },
    clearValue() {
      let emitValue;
      if (this.multiple) {
        emitValue = this.checkArray.shift();
        this.$emit("input", this.checkArray);
        this.checkValue = this.checkArray.length ? " " : "";
      } else {
        emitValue = this.checkValue;
        this.$emit("input", (this.checkValue = ""));
      }
      this.broadcast("Option", "clearValue", emitValue);
    },
    searchEv() {
      this.broadcast(this.search, "matched", this.searchKey);
    }
  }
};
</script>

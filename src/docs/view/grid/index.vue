<template >
  <div>
    <div class="topbar">
      <div class="page-title-box">
        <h4 class="page-title">Grid 栅格</h4>
        <p class="page-title-decs">24 栅格系统</p>
      </div>
    </div>

    <div class="components-grid-demo">
      <x-row>
        <x-col :span="24" class="blue1">24: 100%</x-col>
      </x-row>
      <x-row>
        <x-col :span="12" class="blue2">12: 50%</x-col>
        <x-col :span="12" class="blue3">12: 50%</x-col>
      </x-row>
      <x-row>
        <x-col :span="8" class="blue1">8: 33.33%</x-col>
        <x-col :span="8" class="blue2">8: 33.33%</x-col>
        <x-col :span="8" class="blue1">8: 33.33%</x-col>
      </x-row>
      <x-row>
        <x-col :span="6" class="blue3">6: 25%</x-col>
        <x-col :span="6" class="blue2">6: 25%</x-col>
        <x-col :span="6" class="blue3">6: 25%</x-col>
        <x-col :span="6" class="blue2">6: 25%</x-col>
      </x-row>
      <x-row>
        <x-col :span="16" class="blue1">16: 66.66%</x-col>
        <x-col :span="8" class="blue2">8: 33.33%</x-col>
      </x-row>
    </div>

    <RelaxTag name="基础用法" class="x-row-style">
      <template slot="temp">
        <x-row>
          <x-col :span="12">col-12</x-col>
          <x-col :span="12">col-12</x-col>
        </x-row>
        <x-row>
          <x-col :span="8">col-8</x-col>
          <x-col :span="8">col-8</x-col>
          <x-col :span="8">col-8</x-col>
        </x-row>
        <x-row>
          <x-col :span="6">col-6</x-col>
          <x-col :span="6">col-6</x-col>
          <x-col :span="6">col-6</x-col>
          <x-col :span="6">col-6</x-col>
        </x-row>
      </template>
      <template slot="desc">
        <i>col</i>必须放在 <i>row</i> 里面
      </template>
      <textarea slot="code">
        <template>
          <x-row>
            <x-col :span="12">col-12</x-col>
            <x-col :span="12">col-12</x-col>
          </x-row>
          <x-row>
            <x-col :span="8">col-8</x-col>
            <x-col :span="8">col-8</x-col>
            <x-col :span="8">col-8</x-col>
          </x-row>
          <x-row>
            <x-col :span="6">col-6</x-col>
            <x-col :span="6">col-6</x-col>
            <x-col :span="6">col-6</x-col>
            <x-col :span="6">col-6</x-col>
          </x-row>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="区块间隔" class="x-row-style gutter">
      <template slot="temp">
        <x-row :gutter="20">
          <x-col :span="6"><div>col-6</div></x-col>
          <x-col :span="6"><div>col-6</div></x-col>
          <x-col :span="6"><div>col-6</div></x-col>
          <x-col :span="6"><div>col-6</div></x-col>
        </x-row>
      </template>
      <template slot="desc">
        通过给 row 添加 gutter 属性，可以给下属的 col 添加间距
      </template>
      <textarea slot="code">
        <template>
          <x-row :gutter="20">
            <x-col :span="6"><div>col-6</div></x-col>
            <x-col :span="6"><div>col-6</div></x-col>
            <x-col :span="6"><div>col-6</div></x-col>
            <x-col :span="6"><div>col-6</div></x-col>
          </x-row>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="栅格顺序[Flex]" class="x-row-style">
      <template slot="temp">
        <x-row type="flex">
          <x-col :span="6" :order="4">1 | order-4</x-col>
          <x-col :span="6" :order="3">2 | order-3</x-col>
          <x-col :span="6" :order="2">3 | order-2</x-col>
          <x-col :span="6" :order="1">4 | order-1</x-col>
        </x-row>
      </template>
      <template slot="desc">
        通过 Flex 布局的order来改变栅格的顺序
      </template>
      <textarea slot="code">
        <template>
          <x-row type="flex">
            <x-col :span="6" :order="1">1 | order-4</x-col>
            <x-col :span="6" :order="2">2 | order-3</x-col>
            <x-col :span="6" :order="3">3 | order-2</x-col>
            <x-col :span="6" :order="4">4 | order-1</x-col>
          </x-row>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="左右偏移" class="x-row-style">
      <template slot="temp">
        <x-row>
          <x-col :span="8">col-8</x-col>
          <x-col :span="8" :offset="8">col-8 | offset-8</x-col>
        </x-row>
        <x-row>
          <x-col :span="6" :offset="8">col-6 | offset-8</x-col>
          <x-col :span="6" :offset="4">col-6 | offset-4</x-col>
        </x-row>
        <x-row>
          <x-col :span="12" :offset="8">col-12 | offset-8</x-col>
        </x-row>
      </template>
      <template slot="desc">
        通过设置offset属性，将列进行左右偏移
      </template>
      <textarea slot="code">
        <template>
          <x-row>
            <x-col :span="8">col-8</x-col>
            <x-col :span="8" :offset="8">col-8 | offset-8</x-col>
          </x-row>
          <x-row>
            <x-col :span="6" :offset="8">col-6 | offset-8</x-col>
            <x-col :span="6" :offset="4">col-6 | offset-4</x-col>
          </x-row>
          <x-row>
            <x-col :span="12" :offset="8">col-12 | offset-8</x-col>
          </x-row>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="flex布局" class="x-row-style code-row-bg">
      <template slot="temp">
        <x-row type="flex" justify="start">
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
        </x-row>
        <x-row type="flex" justify="end">
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
        </x-row>
        <x-row type="flex" justify="center">
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
        </x-row>
        <x-row type="flex" justify="space-between">
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
        </x-row>
        <x-row type="flex" justify="space-around">
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
          <x-col :span="4">col-4</x-col>
        </x-row>
      </template>
      <template slot="desc">
        通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。
      </template>
      <textarea slot="code">
        <template>
          <x-row type="flex" justify="start">
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
          </x-row>
          <x-row type="flex" justify="end">
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
          </x-row>
          <x-row type="flex" justify="center">
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
          </x-row>
          <x-row type="flex" justify="space-between">
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
          </x-row>
          <x-row type="flex" justify="space-around">
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
            <x-col :span="4">col-4</x-col>
          </x-row>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="flex对齐" class="x-row-style code-row-bg">
      <template slot="temp">
        <x-row type="flex" justify="center" align="top">
          <x-col :span="4"><p style="height: 80px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 30px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 100px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 60px">col-4</p></x-col>
        </x-row>
        <x-row type="flex" justify="center" align="center">
          <x-col :span="4"><p style="height: 80px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 30px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 100px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 60px">col-4</p></x-col>
        </x-row>
        <x-row type="flex" justify="center" align="bottom">
          <x-col :span="4"><p style="height: 80px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 30px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 100px">col-4</p></x-col>
          <x-col :span="4"><p style="height: 60px">col-4</p></x-col>
        </x-row>
      </template>
      <template slot="desc">
        通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。
      </template>
      <textarea slot="code">
        <template>
          <x-row type="flex" justify="center" align="top">
            <x-col :span="4"><p style="height: 80px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 30px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 100px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 60px">col-4</p></x-col>
          </x-row>
          <x-row type="flex" justify="center" align="center">
            <x-col :span="4"><p style="height: 80px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 30px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 100px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 60px">col-4</p></x-col>
          </x-row>
          <x-row type="flex" justify="center" align="bottom">
            <x-col :span="4"><p style="height: 80px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 30px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 100px">col-4</p></x-col>
            <x-col :span="4"><p style="height: 60px">col-4</p></x-col>
          </x-row>
        </template>
      </textarea>
    </RelaxTag>

    <RelaxTag name="响应式布局" class="x-row-style code-row-bg">
      <template slot="temp">
        <x-row>
          <x-col :xs="2" :sm="4" :md="6" :lg="8">col</x-col>
          <x-col :xs="20" :sm="16" :md="12" :lg="8">col</x-col>
          <x-col :xs="2" :sm="4" :md="6" :lg="8">col</x-col>
        </x-row>
      </template>
      <template slot="desc">
        参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs sm md lg<br>
        调整浏览器尺寸来查看效果。
      </template>
      <textarea slot="code">
        <template>
          <x-row>
            <x-col :xs="2" :sm="4" :md="6" :lg="8">col</x-col>
            <x-col :xs="20" :sm="16" :md="12" :lg="8">col</x-col>
            <x-col :xs="2" :sm="4" :md="6" :lg="8">col</x-col>
          </x-row>
        </template>
      </textarea>
    </RelaxTag>

  </div>
</template>

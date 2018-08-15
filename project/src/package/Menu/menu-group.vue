<template>
  <li class='re-menu-group'>
    <div class='re-menu-title' v-if="title && title !== ''" @click.stop="">{{title}}</div>
    <ul class='re-menu'>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'MenuGroup',
  props: {
    title: String,
    default: ''
  }
}
</script>

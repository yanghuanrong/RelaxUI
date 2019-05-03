<template>
  <li class='x-menu-group'>
    <div class='x-menu-title' v-if="title && title !== ''" @click.stop="">{{title}}</div>
    <ul class='x-menu'>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'xMenuGroup',
  props: {
    title: String,
    default: ''
  }
}
</script>

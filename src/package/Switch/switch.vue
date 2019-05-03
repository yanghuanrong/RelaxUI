<template>
  <label><input class="mui-switch" type="checkbox" value=""> </label>
</template>

<script>
export default {
  name: 'iSwitch'
}
</script>

<style>
.mui-switch {
width: 52px;
height: 31px;
position: relative;
border: 1px solid #dfdfdf;
background-color: #fdfdfd;
box-shadow: #dfdfdf 0 0 0 0 inset;
border-radius: 20px;
display: inline-block;
-webkit-appearance: none;
outline: none; }
.mui-switch:before {
content: '';
width: 29px;
height: 29px;
position: absolute;
top: 0px;
left: 0;
border-radius: 20px;
background-color: #fff;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
.mui-switch:checked {
background-color: red; }
.mui-switch:checked:before {
left: 21px; }
</style>

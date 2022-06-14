
<script setup>
defineProps(["darwins"]);
</script>

<template>
  <div class="p-8 pr-0">
    <Result v-for="(darwin, index) in darwins" :key="index" v-bind="darwin" />
  </div>
</template>

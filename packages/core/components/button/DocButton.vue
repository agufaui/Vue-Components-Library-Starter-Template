<template lang="pug">
ai-button(id="hi" :text="text" class="m-2")
input(u-bg="blue-400" u-m="2")
</template>

<script lang="ts">
export default {
  name: "DocsButton",
};
</script>

<script setup lang="ts">
const text = ref("TypeScript");
</script>

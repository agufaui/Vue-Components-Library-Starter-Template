<template lang="pug">
button(
  role="button"
  type="button"
  u-pos="relative"
  u-flex="inline"
  u-justify="center items-center"
  u-font="medium"
  u-opacity="disabled:70"
  u-select="none"
  u-cursor="pointer"
  :class="[px, py, size, color, round, bg]"
)
  slot {{ text }}
</template>

<script lang="ts">
export default {
  name: "AiButton", // name field must be specified for plugin (global component registration) to work
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
const props = defineProps({
  py: { type: String, default: "py-2" },
  px: { type: String, default: "px-4" },
  text: { type: String, default: "" },
  size: { type: String, default: "text-sm" },
  color: { type: String, default: "text-white" },
  round: { type: String, default: "rounded-md" },
  bg: { type: String, default: "bg-blue-600" },
});
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  placeholder?: string
  variant: 'small' | 'large'
  width?: number | string
}

const value = ref('')
const inputRef = ref<HTMLInputElement | null>(null)

const props = withDefaults(defineProps<Props>(), {
  variant: 'small',
  width: 'auto',
})

const size = computed(() => {
  return props.variant === 'small' ? 16 : 24
})

const width = computed(() => {
  const safeWidth = typeof props.width === 'string' ? props.width.trim() : props.width
  return typeof safeWidth === 'number' || Number.isInteger(+safeWidth) ? `${safeWidth}px` : safeWidth
})
</script>

<template>
  <div class="wrapper" :class="variant">
    <span class="icon-wrapper" @click="inputRef.focus()">
      <slot :size="size"></slot>
    </span>
    <input ref="inputRef" v-model="value" type="text" v-bind="$props" :style="`width: ${width}`" />
  </div>
</template>

<style scoped>
.small {
  border-width: 1px;
  font-size: 0.875rem;
  height: 1.5rem;
}
.large {
  border-width: 2px;
  font-size: 1.125rem;
  height: 2rem;
}

.wrapper {
  align-items: center;
  border-bottom: solid black;
  color: rgb(101, 101, 101);
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: max-content;
}
.wrapper:focus-within {
  box-shadow: 0 0 0 2px dodgerblue;
}
.wrapper:hover {
  color: black;
}

input {
  border: 0;
  color: inherit;
  font-weight: 700;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: inherit;
}
input:focus {
  outline: none;
}
input::placeholder {
  color: rgb(128, 128, 128);
  font-weight: 400;
}
</style>

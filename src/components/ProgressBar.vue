<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  'aria-label': string
  color: string
  value: number
  variant: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  'aria-label': '',
  color: '#4747EB',
  value: 0,
  variant: 'medium',
})

const height = computed(() => {
  const variantToHeight = {
    small: 8,
    medium: 12,
    large: 16,
  }
  return variantToHeight[props.variant]
})
</script>

<template>
  <div
    role="progressbar"
    :aria-label="props['aria-label']"
    :aria-valuenow="props.value"
    :style="`padding: ${props.variant === 'large' ? '4px' : '0'}`"
  >
    <div
      class="inner-progress"
      :style="`background-color: ${props.color}; height: ${height}px; clip-path: inset(0 ${100 - props.value}% 0 0)`"
    ></div>
  </div>
</template>

<style scoped>
[role='progressbar'] {
  background-color: rgb(128, 128, 128, 0.15);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: block;
  padding: 4px;
}

.inner-progress {
  border-radius: 4px;
  width: 100%;
}
</style>

<script setup lang="ts">
import Chevron from './Chevron.vue'
import { ref } from 'vue'

const value = ref('')
const selectRef = ref<HTMLSelectElement | null>(null)
const valueText = ref('Select a value')

const updateValueText = () => {
  if (selectRef.value) {
    const selectedOption = selectRef.value.options[selectRef.value.selectedIndex]
    valueText.value = selectedOption.text
  }
}
</script>

<template>
  <div class="select-wrapper">
    <select v-model="value" ref="selectRef" @change="updateValueText">
      <slot></slot>
    </select>
    <span>{{ valueText }}</span>
    <Chevron />
  </div>
</template>

<style scoped>
.select-wrapper {
  align-items: center;
  border-radius: 8px;
  background-color: rgb(128, 128, 128, 0.15);
  color: rgb(101, 101, 101);
  display: flex;
  height: 24px;
  padding: 0.5rem 1rem;
  position: relative;
  justify-content: space-between;
  width: fit-content;
}
.select-wrapper:hover {
  color: black;
}

.select-wrapper:focus-within {
  box-shadow: 0 0 0 2px dodgerblue;
}

select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  appearance: none;
}

span {
  font-family: Helvetica, sans-serif;
  line-height: 1.5rem;
  margin-right: 1rem;
  white-space: nowrap;
}
</style>

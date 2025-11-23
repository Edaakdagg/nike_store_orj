<template>
  <button :class="['base-button', variant]" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'A_Button',
  props: {
    variant: {
      type: String,
      default: 'primary', 
    },
  },
};
</script>

<style scoped>
.base-button {
  padding: 10px 20px;
  border-radius: 25px; 
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  text-align: center;
  font-size: 16px;
}

.primary {
  background-color: #111; 
  color: white;
  border: none;
}

.primary:hover {
  background-color: #444;
}

.secondary {
  background-color: white;
  color: #111;
  border: 1px solid #ccc;
}

.secondary:hover {
  border-color: #111;
}

.icon {
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  border: none;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

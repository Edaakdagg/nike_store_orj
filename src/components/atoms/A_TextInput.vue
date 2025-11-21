<template>
  <div class="text-input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="text-input"
      :required="required"
    >
  </div>
</template>

<script>
export default {
  name: 'A_TextInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: String, 
    required: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>
.text-input-wrapper {
  margin-bottom: 15px;
}

.text-input {
  width: 100%;
  padding: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.text-input:focus {
  outline: none;
  border-color: #111;
}
</style>
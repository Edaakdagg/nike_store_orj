<template>
  <div class="molecule-input email-input">
    <label :for="id">{{ label }}</label>
    <input 
      :id="id" 
      type="email" 
      :value="modelValue" 
      
      @input="$emit('update:modelValue', $event.target.value)"
      
      :placeholder="placeholder"
      :required="required"
    >
    <p v-if="error" class="input-error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'M_EmailInput',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'E-posta',
    },
    id: {
      type: String,
      default: 'email',
    },
    placeholder: {
      type: String,
      default: 'example@domain.com',
    },
    error: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped>
.molecule-input {
  margin-bottom: 15px;
}
label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}
.input-error {
  color: #c00;
  font-size: 12px;
  margin-top: 5px;
}
</style>

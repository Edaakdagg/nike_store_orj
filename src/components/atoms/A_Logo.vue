<template>
  <div class="logo-group">
    <svg v-if="type === 'nike'" class="h-6 w-12" viewBox="0 0 100 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 13.9996C67.6667 13.9996 36.3333 13.9996 4 13.9996C-2.66667 13.9996 -4.83333 22.3329 4 25.6663C16.8333 30.6663 33 34.9996 50.5 35.9996C68 36.9996 85.5 33.9996 100 29.9996C100 23.3329 100 18.6663 100 13.9996Z" fill="currentColor"/>
    </svg>
    <svg v-else-if="type === 'jordan'" class="jordan-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 15.5V8.5L16 12L11 15.5Z" fill="currentColor"/>
    </svg>
    <img v-else src="/favicon.ico" alt="Logo" class="h-6 w-6">
  </div>
</template>

<script>
export default {
  name: 'A_Logo',
  props: {
    type: {
      type: String,
      default: 'nike', 
    },
  },
};
</script>

<style scoped>
.logo-group {
  display: flex;
  align-items: center;
  height: 36px;
  color: #111;
}
svg {
  height: 36px;
  width: auto;
}
.jordan-logo {
  height: 24px;
}
</style>
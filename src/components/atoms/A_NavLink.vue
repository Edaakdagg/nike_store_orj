<template>
  <RouterLink :to="to" class="nav-link">
    <slot></slot>
  </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: 'A_NavLink',
  components: {
    RouterLink,
  },
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.nav-link {
  color: #111;
  text-decoration: none;
  font-weight: 500;
  padding: 0 10px;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #777;
}
</style>
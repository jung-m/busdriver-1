<template>
  <div id="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  width: 100vh;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
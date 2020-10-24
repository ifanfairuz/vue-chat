<template>
  <div id="app">
    <div :class="{main: true, container: compact}">
      <Chat v-if="isLogin"/>
      <Login v-else/>
    </div>
  </div>
</template>

<script>
import Chat from './pages/Chat.vue'
import Login from './pages/Login.vue'

export default {
  name: 'App',
  components: {
    Chat,
    Login
  },
  data() {
    return {
      compact: true,
      isLogin: true
    }
  }
}
</script>

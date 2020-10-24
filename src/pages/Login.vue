<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="heading">
        <h2 class="title">Vue-Chat</h2>
        <hr>
        <Description />
      </div>
      <div class="content">
        <button class="btn btn-primary">Get Started with Google Account</button>
      </div>
    </div>
  </div>
</template>

<script>
import Description from '../components/login/Description.vue'

export default {
  name: 'Login',
  props: {
    msg: String
  },
  components: {
    Description
  }
}
</script>

<template>
  <div class="main">
    <div class="login-wrapper">
      <div class="login-box">
        <div class="heading">
          <h2 class="title">Vue-Chat</h2>
          <hr>
          <Description />
        </div>
        <div class="content">
          <GoogleLogin
            class="btn btn-primary google-signin-btn"
            :params="{}"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
            :onFailure="onFailure">
            Get Started with Google Account
          </GoogleLogin>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Description from '../components/login/Description.vue'
  import GoogleLogin from 'vue-google-login'
  import { session } from '../handler/login'


  export default {
    name: 'Login',
    props: {
      msg: String
    },
    components: {
      Description,
      GoogleLogin
    },
    data() {
      return {
        renderParams: {
          longtitle: true
        }
      }
    },
    methods: {
      onSuccess(googleUser) {
        const profile = googleUser.getBasicProfile()
        session.save(profile)
        this.$router.go('Chat')
      },
      onFailure() {
        alert('Sorry, Something Wrong!');
      }
    }
  }
</script>

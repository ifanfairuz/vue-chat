<template>
  <div class="main container">
    <div class="chat-wrapper">
      <History ref="historyComponent" :show="!historyHidden" :logoutClickHandler="logout" />
      <Content ref="contentComponent" :onToggleClick="onToggleHistoryClick" :historyHidden="historyHidden" />
    </div>
  </div>
</template>

<script>
import History from '../components/chat/History.vue'
import Content from '../components/chat/Content.vue'
import { logout } from '../handler/login'

export default {
  name: 'Chat',
  components: {
    History,
    Content
  },
  data() {
    return {
      historyHidden: false
    }
  },
  methods: {
    onToggleHistoryClick(isShow) {
      this.historyHidden = !isShow
    },
    logout() {
      logout(() => {
        this.$router.go('Login')
      })
    }
  }
}
</script>
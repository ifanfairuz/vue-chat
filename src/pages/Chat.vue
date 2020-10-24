<template>
  <div class="chat-wrapper">
    <History ref="historyComponent" :onToggle="onHistoryToggle" />
    <Content ref="contentComponent" :onToggleClick="onToggleHistoryClick" :historyHidden="historyHidden" />
  </div>
</template>

<script>
import History from '../components/chat/History.vue'
import Content from '../components/chat/Content.vue'

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
      this.$refs.historyComponent.setActive(isShow)
    },
    onHistoryToggle(isShow) {
      this.historyHidden = !isShow
    }
  }
}
</script>
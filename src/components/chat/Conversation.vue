<template>
  <div class="conversation" id="cok">
    <Chat v-for="(index) in 20" :key="index" :isMe="(index % 3 == 0)" :chat="{}" />
  </div>
</template>

<script>
import Chat from './Chat.vue'

export default {
  name: 'Chat-Conversation',
  components: {
    Chat
  },
  methods:{
    scrollToBottom() {
      let conversation = this.$el
      conversation.scrollTop = conversation.scrollHeight
    }
  },
  updated() {
    this.scrollToBottom()
  },
  mounted() {
    this.scrollToBottom()
  }
}
</script>
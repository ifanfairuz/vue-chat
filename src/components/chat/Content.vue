<template>
  <div class="chat-content">
    <Profile
      :user="{ name: 'Ifan Fairuz', status_online: true }"
      :toggleClickHandler="toggleHide"
      :historyHidden="historyHidden" />
    <Conversation />
    <FormConversation />
  </div>
</template>

<script>
  import Profile from './Profile.vue'
  import Conversation from './Conversation.vue'
  import FormConversation from './FormConversation.vue'

  export default {
    name: 'Chat-Content',
    components: {
      Profile,
      Conversation,
      FormConversation,
    },
    props: {
      historyHidden: {
        type: Boolean,
        required: false,
        default: false
      },
      onToggleClick: {
        type: Function,
        required: true
      }
    },
    methods: {
      toggleHide() {
        this.onToggleClick(this.historyHidden)
      }
    }
  }
</script>
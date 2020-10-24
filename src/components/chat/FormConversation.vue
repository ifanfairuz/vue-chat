<template>
  <div class="form-conversation">
    <form ref="formComponent">
      <textarea maxlength="300" class="form-control text" placeholder="Type something..." aria-label="Type something..."
        aria-describedby="button-send"></textarea>
      <button class="btn send" type="button" id="button-send">
        <Icon icon="send" :height="25" verticalAlign="bottom" />
      </button>
    </form>
  </div>
</template>

<script>
  import Icon from '@iconify/vue'
  import IconSend from '@iconify-icons/mdi/send'

  Icon.addIcon('send', IconSend)

  export default {
    name: 'Chat-FormConversation',
    components: {
      Icon,
    }
  }
</script>
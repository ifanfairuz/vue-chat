<template>
  <div :class="{chat: true, me: isMe}">
    <p class="text">{{ dataChat.text }}</p>
    <p class="time">
      {{ sendAt }}
      <Icon v-if="isMe" :icon="status" verticalAlign="bottom" :color="dataChat.status == 3 ? '#007bff' : ''" />
    </p>
  </div>
</template>

<script>
  import moment from 'moment'
  import Icon from '@iconify/vue'
  import IconTime from '@iconify-icons/mdi/clock-outline'
  import IconCheck from '@iconify-icons/mdi/check'
  import IconCheckAll from '@iconify-icons/mdi/check-all'

  Icon.addIcon('pending', IconTime)
  Icon.addIcon('sent', IconCheck)
  Icon.addIcon('received', IconCheckAll)
  Icon.addIcon('read', IconCheckAll)

  export default {
    name: 'Chat',
    components: {
      Icon
    },
    props: {
      isMe: {
        type: Boolean,
        required: false,
        default: false
      },
      chat: {
        type: Object,
        required: true,
        default: () => ({})
      }
    },
    data() {
      return {
        dataChat: {
          id: ('id' in this.chat ? this.chat.id : 0),
          from: ('from' in this.chat ? this.chat.from : ''),
          to: ('to' in this.chat ? this.chat.to : ''),
          text: ('text' in this.chat ? this.chat.text : ''),
          status: ('status' in this.chat ? this.chat.status : 0),
          send_at: ('send_at' in this.chat ? this.chat.send_at : 0),
          sent_at: ('sent_at' in this.chat ? this.chat.sent_at : 0),
          receive_at: ('receive_at' in this.chat ? this.chat.receive_at : 0),
          read_at: ('read_at' in this.chat ? this.chat.read_at : 0),
          created_at: ('created_at' in this.chat ? this.chat.created_at : ''),
          updated_at: ('updated_at' in this.chat ? this.chat.updated_at : ''),
        }
      }
    },
    methods: {
      setChat(data) {
        this.dataChat = {
          ...this.dataChat,
          ...data
        }
      }
    },
    computed: {
      status() {
        let icon = 'pending'
        switch (this.dataChat.status) {
          case 1:
            icon = 'sent'
            break
          case 2:
            icon = 'received'
            break
          case 3:
            icon = 'read'
            break
        }
        return icon
      },

      sendAt() {
        const time = this.dataChat.send_at > 0 ? moment(this.dataChat.send_at) : moment()
        return time.format('DD MMM YYYY HH:mm')
      }
    }
  }
</script>
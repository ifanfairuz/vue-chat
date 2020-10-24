<template>
  <div class="profile">
    <div class="history-toggle">
      <button v-if="toggleClickHandler" class="btn" @click="toggleClick">
        <Icon :icon="historyHidden ? 'menu' : 'chevron-left'" :height="30" />
      </button>
    </div>
    <div class="photo-profile">
      <img alt="Profile" :src="'image' in user ? user.image : '/assets/img/default-profile.svg'">
    </div>
    <div class="info-profile">
      <p v-if="'name' in user" class="name">{{ user.name }}</p>
      <p v-if="'name' in user" class="desc">{{ user.status_online ? 'Online' : lastSeen }}</p>
    </div>
  </div>
</template>

<script>
  import Icon from '@iconify/vue'
  import IconChevronLeft from '@iconify-icons/mdi/chevron-left'
  import IconMenu from '@iconify-icons/mdi/menu'
  import moment from 'moment'

  Icon.addIcon('chevron-left', IconChevronLeft)
  Icon.addIcon('menu', IconMenu)

  export default {
    name: 'Chat-Profile',
    props: {
      toggleClickHandler: {
        type: Function,
        required: false
      },
      historyHidden: {
        type: Boolean,
        required: false,
        default: false
      },
      user: {
        type: Object,
        required: false,
        default: () => ({})
      },
    },
    components:{
      Icon
    },
    computed: {
      lastSeen() {
        const time = 'last_online' in this.user ? moment(this.user.last_online) : moment()
        return `Last seen at ${time.format('dddd, DD MMM YYYY HH:mm')}`
      }
    },
    methods: {
      toggleClick(e) {
        this.toggleClickHandler(e)
      }
    }
  }
</script>
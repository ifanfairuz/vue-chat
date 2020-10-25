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
    <dropdown-menu v-if="withDropdown" v-model="dropdownShow" :right="true">
      <button class="btn btn-transparent">
        <Icon icon="dots-vertical" height="30" />
      </button>
      <div slot="dropdown">
        <button class="dropdown-item" @click="logoutClickHandler">Logout</button>
      </div>
    </dropdown-menu>
  </div>
</template>

<script>
  import Icon from '@iconify/vue'
  import IconChevronLeft from '@iconify-icons/mdi/chevron-left'
  import IconMenu from '@iconify-icons/mdi/menu'
  import IconDotsVertical from '@iconify-icons/mdi/dots-vertical'
  import DropdownMenu from '@innologica/vue-dropdown-menu'
  import moment from 'moment'

  Icon.addIcon('chevron-left', IconChevronLeft)
  Icon.addIcon('dots-vertical', IconDotsVertical)
  Icon.addIcon('menu', IconMenu)

  export default {
    name: 'Chat-Profile',
    props: {
      withDropdown: {
        type: Boolean,
        required: false,
        default: false
      },
      toggleClickHandler: {
        type: Function,
        required: false
      },
      logoutClickHandler: {
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
      Icon,
      DropdownMenu
    },
    data(){
      return {
        dropdownShow: false
      }
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
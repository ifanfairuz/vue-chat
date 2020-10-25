<template>
  <div :class="{'chat-history': true, show}">
      <Profile :withDropdown="true" :logoutClickHandler="logoutClickHandler" :user="{image: me.image}" />
      <div class="history">
        <ul>
          <li v-for="(index) in 100" :key="index">
            <Current :current="{name: `user-${index}`, last: 'Hello.....'}" />
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import Current from './Current.vue'
import Profile from './Profile.vue'

export default {
  name: 'Chat-History',
  components: {
    Current,
    Profile,
  },
  props: {
    show: {
      type: Boolean,
      required: false,
      default: true
    },
    logoutClickHandler: {
      type: Function,
      required: false
    }
  },
  computed: {
    me() {
      const { email, name, image } = this.$store.getters.auth
      return { email, name, image }
    }
  }
}
</script>
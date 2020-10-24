<template>
  <div :class="{'chat-history': true, show}">
      <Profile />
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
    active: {
      type: Boolean,
      required: false,
      default: true
    },
    onToggle: {
      type: Function,
      required: false,
      default: (show) => show
    }
  },
  data() {
    return {
      show: this.active
    }
  },
  methods: {
    setActive(show) {
      this.show = show
      this.$props.onToggle(show)
    }
  }
}
</script>
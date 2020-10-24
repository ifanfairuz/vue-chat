<template>
  <div class="current">
    <div class="photo-current">
      <img alt="Profile" :src="'image' in current ? current.imgae : '/assets/img/default-profile.svg'">
    </div>
    <div class="info-current">
      <p class="name">{{ current.name }}</p>
      <p class="desc">{{ current.last }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Chat-Current',
    props: {
      current: {
        type: Object,
        required: false,
        default: () => ({})
      }
    }
  }
</script>
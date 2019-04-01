<template>
  <div class="home">
    {{this.ID}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters(['ID']),
  },
}
</script>

<template>
  <div class="ml-5 text-subtitle-1">
    {{ date }}
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'LiveDateTime',
  data() {
    return {
      date: ''
    }
  },
  methods: {
    getDate() {
      this.date = format(new Date(), 'd MMMM H:mm:ss')
      // trick this method every second
      setTimeout(this.getDate, 1000)
    }
  },
  mounted() {
    this.getDate()
  }
}
</script>

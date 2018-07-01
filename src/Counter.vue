<template>
  <div>
    <p :class="className">
      Counter: {{count}}
    </p>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',

    data () {
      return {
        count: 0,
      }
    },

    computed: {
      className () {
        return this.count % 2 === 0
          ? 'even'
          : 'odd'
      }
    },

    methods: {
      increment () {
        this.count += 1
      },

      decrement () {
        this.count += -1
      }
    }
  }
</script>

<style scoped>
  .even {
    color: green;
  }

  .odd {
    color: red;
  }
</style>

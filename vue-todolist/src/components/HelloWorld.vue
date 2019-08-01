<template>
  <div class="hello">
    <h1>This is a HelloWorld page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul>
      <li v-for="(info, index) in infoList" :key="index">
        <span>我叫{{info.name}}</span>，
        <span>我今年{{info.age}}岁</span>，
        <span>我是{{info.gender}}生</span>。
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return {
      infoList: []
    }
  },
  methods: {
    async getList(){
      this.infoList = await this.$axios('/api/user');
    }
  },
  created() {
    this.getList();
  }
}
</script>

<style scoped>
  ul{
    list-style: none outside none;
  }
</style>

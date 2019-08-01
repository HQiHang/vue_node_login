<template>
  <div class="about">
    <h1>This is an about page</h1>
    <form @submit.prevent="submit" method="post" autocomplete="off">
      <p>用户名：<input type="text" v-model="user.username" name="username"></p>
      <p>密码：<input type="password" v-model="user.password" name="password"></p>
      <input type="submit" value="提交">
    </form>
  </div>
</template>
<script>
  export default {
    name: 'about',
    data(){
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      async submit(){
        let res = await this.$axios('/api/login', this.user, 'POST');
        if(res.code === 200){
          this.$router.push('/');
        }else{
          alert('用户名或密码错误！');
        }
      }
    },
  }
</script>

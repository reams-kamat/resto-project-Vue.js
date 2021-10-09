<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
.register input,.login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
  }
  .register button,.login button{
    width: 320px;
    height: 40px;
    background: skyblue;
    cursor: pointer;
    color: #fff;
    border: 1px solid skyblue;
  }
  .register .btn-def,.login .btn-def{
    width: 320px;
    height: 30px;
    text-decoration: none;
    padding-top: 10px;
    display: block;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    background: red;
    cursor: pointer;
    color: #fff;
    border: 1px solid skyblue; 
  }
  .logo-img{
    height: 125px;
  }
</style>

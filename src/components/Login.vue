<template>
	<img src="../assets/logo1.png" class="logo-img" alt="Logo">
	<h1>Login</h1>
	<div class="login">
		<input type="email" placeholder="Enter Email" v-model="email">
		<input type="password" placeholder="Enter Password" v-model="password">
		<button type="button" v-on:click="Login()">Log In</button>
		<router-link to="/sign-up" class="btn-def">Sign Up</router-link>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
		name:"Login",
		data(){
			return{
				email:'',
				password:''
			}
		},methods:{
			async Login(){
				let result=await axios.get(
					`http://127.0.0.1:3000/users?email=${this.email}&password=${this.password}`
				);
				console.log(result);
				if(result.status==200 && result.data.length>0){					
					localStorage.setItem("user-info",JSON.stringify(result.data[0]));
					this.$router.push({name:'Home'});

				}
			}
		},mounted(){
			let user=localStorage.getItem("user-info");
			if(user){
				this.$router.push({name:'Home'});
			}
		},
	};
</script>
<style type="text/css">
	
</style>
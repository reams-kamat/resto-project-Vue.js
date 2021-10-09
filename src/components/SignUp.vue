<template>
	<img src="../assets/logo1.png" class="logo-img" alt="Logo">
	<h1>SignUp</h1>
	<div class="register">
		<input type="text" placeholder="Enter Name" v-model="name">
		<input type="email" placeholder="Enter Email" v-model="email">
		<input type="password" placeholder="Enter Password" v-model="password">
		<button type="button" v-on:click="SignIn()">Sign In</button>
		<router-link to="/login" class="btn-def">Login</router-link>
	</div>
</template>
<script type="text/javascript">
	import axios from 'axios'
	export default{
		name:"SignUp",
		data(){
			return{
				name:'',
				email:'',
				password:''
			}
		},methods:{
			async SignIn(){
				let result=await axios.post("http://localhost:3000/users",{
					name:this.name,
					email:this.email,
					password:this.password
				});
				console.log(result);
				if(result.status==201){					
					localStorage.setItem("user-info",JSON.stringify(result.data));
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
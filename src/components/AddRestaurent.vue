<template>
	<Header />
	<h1>Hey User !</h1>
	<h3>Welcome to Add Restaurent Page</h3>
	<div class="register">
		<input type="text" placeholder="Enter Restaurent Name" v-model="restaurent.name">
		<input type="text" placeholder="Enter Restaurent Address" v-model="restaurent.address">
		<input type="text" placeholder="Enter Restaurent Contact" v-model="restaurent.contact">
		<button type="button" v-on:click="AddRestaurent()">Add Restaurent</button>
	</div>
</template>
<script type="text/javascript">
	import Header from './Header.vue'
	import axios from 'axios'
	export default{
		name:"AddRestaurent",
		data(){
			return{
				restaurent:{
					name:'',
					address:'',
					contact:''
				}
			}
		},methods:{
			async AddRestaurent(){
				let result=await axios.post("http://localhost:3000/restaurents",{
					name:this.restaurent.name,
					address:this.restaurent.address,
					contact:this.restaurent.contact
				});
				console.log(result);
				if(result.status==201){					
					alert("Restaurent Added Sucessfully !");
					this.$router.push({name:'Home'});
				}
			}
		},mounted(){
			let user=localStorage.getItem("user-info");
			if(!user){
				this.$router.push({name:'SignUp'});
			}
			
		},components:{
			Header
		}
	};
</script>
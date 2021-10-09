<template>
	<Header />
	<h1>Hey User !</h1>
	<h3>Welcome to Update Restaurent Page</h3>
	<div class="register">
		<input type="text" placeholder="Enter Restaurent Name" v-model="restaurent.name">
		<input type="text" placeholder="Enter Restaurent Address" v-model="restaurent.address">
		<input type="text" placeholder="Enter Restaurent Contact" v-model="restaurent.contact">
		<button type="button" v-on:click="UpdateRestaurent()">Update Restaurent</button>
	</div>
</template>
<script type="text/javascript">
	import Header from './Header.vue'
	import axios from 'axios'
	export default{
		name:"UpdateRestaurent",
		data(){
			return{
				restaurent:{
					name:'',
					address:'',
					contact:''
				}
			}
		},methods:{
			async UpdateRestaurent(){
				let result=await axios.put("http://localhost:3000/restaurents/"+this.$route.params.id,{
					name:this.restaurent.name,
					address:this.restaurent.address,
					contact:this.restaurent.contact
				});
				console.log(result);
				if(result.status==200){					
					alert("Restaurent Updated Sucessfully !");
					this.$router.push({name:'Home'});
				}
			}
		},async mounted(){
			let user=localStorage.getItem("user-info");
			if(!user){
				this.$router.push({name:'SignUp'});
			}
			console.log(this.$route.params.id);
			let result=await axios.get('http://127.0.0.1:3000/restaurents/'+this.$route.params.id);
			this.restaurent=result.data;

		},components:{
			Header
		}
	};
</script>
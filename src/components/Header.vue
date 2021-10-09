<template>
	<div class="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/add-restaurent">Add Restaurent</router-link>
		<a href="#" v-on:click="logout">Logout</a>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"Header",
		data(){

		},methods:{
			logout(){
				localStorage.clear();
				this.$router.push({name:'Login'});
			}
		}
	};
</script>
<style type="text/css">
	.nav{
		background: #333;
		overflow: hidden;
	}
	.nav a{
		float: left;
		color: #f2f2f2f2;
		padding: 14px 16px;
		margin-right: 5px;
		text-align: center;
		font-size: 17px;
		text-decoration: none;
	}
	.nav a:hover{
		color: #333;
		background: #ddd;
	}
</style>
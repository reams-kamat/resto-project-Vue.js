<template>
	<Header />
	<h1>Hey {{name}} !</h1>
	<h3>Welcome to Home Page</h3>
	<h3>All Restaurents</h3>
	<table border="1">
		<thead>
			<th>ID</th>
			<th>Name</th>
			<th>Contact</th>
			<th>Address</th>
			<th colspan="2">Address</th>
		</thead>
		<tbody v-for="item in restaurent" :key="item.id">
			<td>{{item.id}}</td>
			<td>{{item.name}}</td>
			<td>{{item.contact}}</td>
			<td>{{item.address}}</td>
			<td><router-link :to="'/update-restaurent/'+item.id">Edit</router-link></td>
			<td><button v-on:click="DeleteResto(item.id)">Delete</button></td>
		</tbody>
	</table>

</template>
<script type="text/javascript">
	import axios from 'axios'
	import Header from './Header.vue'
	export default{
		name:"Home",
		data(){
			return{
				name:'',
				restaurent:[]
			}
		},methods:{
			async DeleteResto(id){
				let result=await axios.delete("http://127.0.0.1:3000/restaurents/"+id);
				if(result.status==200){
					this.loadData();
				}
			},
			async loadData(){
				let user=localStorage.getItem("user-info");
				if(!user){
					this.$router.push({name:'SignUp'});
				}
				this.name=JSON.parse(user).name;

				let restaurentlist=await axios.get("http://127.0.0.1:3000/restaurents");
				this.restaurent=restaurentlist.data;
			}
		},async mounted(){
			this.loadData();
		},components:{
			Header
		}
	};
</script>
<style type="text/css">
	td,th{
		width: 160px;
		height: 40px;
	}
</style>
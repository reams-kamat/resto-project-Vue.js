import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRestaurent from './components/AddRestaurent.vue'
import UpdateRestaurent from './components/UpdateRestaurent.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
	{
		name:'Home',
		path:'/',
		component:Home
	},
	{
		name:'SignUp',
		path:'/sign-up',
		component:SignUp
	},
	{
		name:'Login',
		path:'/login',
		component:Login
	},
	{
		name:'AddRestaurent',
		path:'/add-restaurent',
		component:AddRestaurent
	},
	{
		name:'UpdateRestaurent',
		path:'/update-restaurent/:id',
		component:UpdateRestaurent
	}
];

const router=createRouter({
	history:createWebHistory(),
	routes
});

export default router;
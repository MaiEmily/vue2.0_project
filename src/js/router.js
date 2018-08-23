import VueRouter from 'vue-router'


import tuangou from '../components/content/tuangou/tuangou.vue'
import details from '../components/content/tuangou/details/details.vue'
import near from '../components/content/near/near.vue'
import more from '../components/content/more/more.vue'
import mine from '../components/content/mine/mine.vue'
import address from '../components/others/address.vue'
import login from '../components/others/login.vue'
import register from '../components/others/register.vue'
import start from '../components/others/start.vue'


export default new VueRouter({

	routes:[
		{path:'/start',component:start},		
		{path:'/tuangou',component:tuangou},
		{path:'/near',component:near},
		{path:'/more',component:more},
		{path:'/mine',component:mine},
		{path:'/address',component:address},
		{path:'/login',component:login},
		{path:'/register',component:register},
		{path:'/details',component:details},

		
		{path:'/',redirect:'/start'},//重定向之前，要先写出它的路由路径
	]
})
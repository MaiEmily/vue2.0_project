//vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		//state相当于data
		//使用数据this.$store.state.数据名
		//this.$store.state.index=index可以通过该方式控制数据，
		//但是在工作中禁止这样操作，可以直接使用mutations内部的方法
		name:'初始值', //商家名
		index:0,	//商家id
		address:'广州' //地址
	},
	//mutations相当于method
	//this.$store.commit('方法名'，参数)
	mutations:{
		name_fn(state,name){  
			state.name=name;
		},
		index_fn(state,index){
			state.index=index
		},
		addr_fn(state,addr){
			state.address=addr;
		}
	}
	// 相当于对数据做一些处理，再使用this.$store.getters.方法名
	//getters:{
	//  getNum(state){
	//    return '商家名为：'+state.name
	//  }
	//}
	

})







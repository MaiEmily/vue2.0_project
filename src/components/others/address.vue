<template>
	<div class="address">
		<div class="back">
			<router-link to="/tuangou">
				<span class="iconfont icon-return"></span>
			</router-link>
			<span>选择城市</span>
		</div>
		<div class="find">
			<div>
				<input type="text" placeholder="输入城市名、拼音或字母查询" v-model="msg" @keyup="msg_city"/>
				<b class="iconfont icon-search"></b>
			</div>
			<ul v-if="find_city.length"">
				<li v-for="(v,i) in find_city" @click="alter_city(v)">
					<router-link to="/tuangou">{{v}}</router-link>
				</li>
			</ul>
			<ul class="ul_second" v-else v-show='flag'>
				<li>没有该城市!</li>
			</ul>
			
		</div>
		<div class="now_addr">
			<h3>当前城市：<span>{{this.$store.state.address}}</span></h3>
			
		</div>
		<div class="hot_city">
			<h3>热门城市</h3>
			<ul>
				<li v-for="(v,i) in hot_city" @click="alter_city(v)">
					<router-link to="/tuangou">{{v}}</router-link>
				</li>

			</ul>
		</div>
		<div class="city">
			<h3>城市</h3>
			<div v-for="(v,i) in citylist">
				<h4>{{v.title}}</h4>
				<ul>
					<li v-for="(v1,j) in v.lists" @click="alter_city(v1)">
						<router-link to="/tuangou">{{v1}}</router-link>
					</li>
				</ul>
			</div>
			
		</div>
	</div>
	
</template>

<script>
	function filter(){
		
	}
	
	export default{
		data(){
			return {
				msg:'',
				hot_city:[],
				citylist:[],
				allcity:[],
				find_city:[],
				flag:false //
				
			}
		},
		mounted(){
			
			this.$axios.get('static/jsonData/addr.json')
			.then(res=>{
				console.log(res)
				this.citylist=res.data.city
				this.hot_city=res.data.hotcity
				
				for(let i=0;i<this.citylist.length;i++){
					for(let j=0;j<this.citylist[i].lists.length;j++){
						this.allcity.push(this.citylist[i].lists[j])
					}
				}
				
			})
			
			
		},
		methods:{
			alter_city(city){
				this.$store.commit('addr_fn',city); //vuex 在js/data.js中
			},
			msg_city(){
				
				if(this.msg!=''){
					console.log(this.msg);
					this.find_city=this.allcity.filter((item)=>{
						var reg = new RegExp(this.msg);
						return reg.test(item)
					})
					if(this.find_city.length<=0){
						this.flag=true;
					}else{
						this.flag=false;
					}
				}
				
			}
		}
	}
</script>

<style scoped>
	.address{
		
		position: absolute;
		top: 0;
		z-index: 200;
		max-width: 720px;
		width: 100%;
		margin: 0 auto;
		background: #fff;
		padding-bottom: 2rem;
	}
	.back{
		position: fixed;
		width: 100%;
		max-width: 720px;
		padding: 0.3rem 0.5rem 0.2rem;
		border-bottom: 1px solid #ccc;	
		background: #01a9ff;	
		z-index: 200;
	}	
	.back span{
		font-size: 0.6rem;
		color: #fff;
	}
	.back .icon-return{
		font-size: 1rem;
		color: #fff;
		vertical-align: middle;
		
	}
	.find{
		position: relative;
		margin: 1.7rem 0.5rem 0;
		padding: 0.1rem 0 0.2rem;
	}
	.find input{
		display: inline-block;
		width: 100%;
		height: 1.3rem;
		padding-left: 1rem;
		border: 1px solid #eee;	
		outline: none;	
		font-size: 0.5rem;
		background: #eee;	
		border-radius: 5px;	
	}
	.find b{
		position: absolute;
		left: 0.25rem;
		top: 0.6rem;
		font-size: 0.7rem;
		color: #666;
		font-weight: 100;
		
	}
	.find>ul{
		width: 100%;
		background: #fff;
		margin-top: 0.2rem;
	}
	.find>ul>li{
		font-size: 0.5rem;
		padding: 0.2rem 0;
		
	}
	.find>ul>li:hover{
		background: #eee;
	}

	.ul_second>li{
		color: #E72D4C;
	}
	.now_addr{
		padding: 0.1rem 0.5rem 0.2rem;
		border-bottom: 1px solid #ccc;	
	}
	.now_addr h3{
		font-size: 0.6rem;
		color: #01a9ff;
	}
	.hot_city{
		padding: 0.1rem 0.5rem 0.2rem;
	}
	.hot_city h3{
		font-size: 0.6rem;
		color: #aaa;
	}
	.hot_city{
		background: #fcfcfc;
	}
	.hot_city ul{
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
		padding: 0.5rem 1.2rem 0.5rem 0.5rem;
	}
	.hot_city ul li{
		margin-right: 0.8rem;
		margin-bottom: 0.6rem;
		background: #fff;
	}
	.hot_city ul li a{
		display: block;
		font-size: 0.6rem;
		padding: 0.25rem 0.8rem;
		border: 1px solid #ccc;	
	}
	.city{
		padding: 0.3rem 0.5rem 0.2rem;
		border-top: 1px solid #ccc;
	}
	.city h3{
		font-size: 0.65rem;
		color: #aaa;
	}
	.city div h4{
		font-size: 0.6rem;
		background: #eee;
		padding-left: 0.2rem;
		margin-top: 0.2rem;
	}
	.city ul li{
		border-top: 1px solid #eee;
	}
	
	.city ul li a{
		display: block;
		font-size: 0.6rem;
		padding: 0.2rem 0.2rem;
	}
	.city ul li a:hover{
		background: #eee;	
	}
</style>
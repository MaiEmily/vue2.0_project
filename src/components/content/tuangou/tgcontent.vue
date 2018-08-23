<template>
	<div class="tgcontent">
		<div class="top">
			<p class="p_title">猜你喜欢</p>
			<p class="p_tg">
				<span>全部团购 ></span>
			</p>
		</div>
		<div class="alike">
			<ul>				
				<li v-for="(v,i) in conList"  @click="link(v.title,i)"><router-link to="/details">  <!--:to="'/start?id='+v.id"-->
					<div class="div_img">
						<img :src="v.img" alt="" />
					</div>
					<div class="div_con">
						<ol>
							<li class="first">
								<p>
									<span class="li_name">{{v.title}}</span>
									<span class="li_distance">{{v.dis | distance}}</span>
								</p>
								
							</li>
							<li class="second">
								<p class="li_con">{{v.des}}</p>
							</li>
							<li class="third">
								<p>
									<span class="li_price">{{v.price | price}}</span>
									<span class="li_delprice"><del>{{v.delprice | price}}</del></span>
									<span class="li_discount">
										<b>减</b>{{v.discount}}
									</span>
								</p>
							</li>
							<li class="fourth">
								<p class="li_score">{{v.appraise | score}}</p>
							</li>
						</ol>
					</div>
				</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				conList:[]
			}
		},
		filters:{
			price(n){
				return '¥'+n;
			},
			distance(n){
				return n+'km'
			},
			score(n){
				return n+'分';
			},
			
		},
		mounted(){
			
			this.$axios.get('static/jsonData/tg.json')
			.then(res=>{
				console.log(res)
				this.conList=res.data.youlike
				console.log(res.data.youlike)
			})
		},
		methods:{
			link(title,index){
				//vuex 在js/data.js中
				this.$store.commit('name_fn',title); 
				this.$store.commit('index_fn',index); 

			}
		}
	}
</script>

<style scoped>
	.tgcontent{
		padding: 0.5rem;
	}
	.tgcontent>div{
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	.top{
		margin-bottom: 0.3rem;
	}
	.p_title{
		font-size: 0.65rem;
		color: #000;
		flex-grow: 1;
	}
	.p_tg{
		font-size: 0.5rem;
	}
	.alike ul{
		width: 100%;
	}
	.alike ul>li{
		margin-bottom: 0.5rem;
	}
	.alike a{
		width: 100%;
		display: flex;
		display: -webkit-flex;
	}

	.div_img{
		width: 30%;
	}
	.div_img img{
		width: 100%;
	}
	.div_con{
		width: 70%;
		padding-left: 0.5rem;
	}
	.div_con ol li{
		margin-bottom: 0.2rem;
	}
	
	.first p{
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	.first .li_name{
		font-size: 0.7rem;
		color: #000;
	}
	.first .li_distance{
		vertical-align: top;
		font-size: 0.6rem;
	}
	.second .li_con{
		width: 80%;
		font-size: 0.6rem;
		color: #666;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.third {
		font-size: 0.6rem;
	}
	.third .li_price{
		color: #E72D4C;
	}
	.third .li_delprice{
		font-size: 0.5rem;	
	}
	.third .li_discount{
		display: block;
		padding: 0.3rem 0.1rem;
		
	}
	.third .li_discount b{		
		display: inline-block;
		padding: 0.05rem 0.2rem;
		margin-right: 0.2rem;
		color: #fff;
		background: #E72D4C;		
		border-radius: 5px;
		font-weight: normal;
		
	}
	
	.fourth .li_score{
		text-align: right;
		color: #e1b84b;
		font-size: 0.6rem;	
	}


</style>
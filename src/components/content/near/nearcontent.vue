<template>
	<div class="nearcontent">
		<div class="header">
			<ul>
				<li>
					综合排序<b class="iconfont icon-moreunfold"></b>
				</li>
				
				<li>
					距离最近<b class="iconfont icon-moreunfold"></b>
				</li>
				<li>
					会员领红包<b class="iconfont icon-moreunfold"></b>
				</li>
				<li>
					筛选<b class="iconfont icon-moreunfold"></b>
				</li>
			</ul>
		</div>
		<section>
			<div v-for="(v,i) in conList">
				<div class="con_header">
					<p class="h_name">{{v.storeName[0].title}}</p>
					<p>
						<span class="h_score">{{v.storeName[0].appraise | appraise}}</span>
						<span class="h_appraise">{{v.storeName[0].numappr | numappr}}</span>
						<span class="h_addr">{{v.storeName[0].address}}</span>
					</p>
				</div>
				<article>
					<ul v-for="(v2,g) in v.prolist">				
						<li>
							<div class="div_img">
								<img :src="v2.img" alt="" />
							</div>
							<div class="div_con">
								<ol>
									<li class="first">
										<p>
											<span class="li_name">{{v2.proname}}</span>
										</p>
										
									</li>
									<li class="second">
										<p class="li_con">{{v2.des}}</p>
									</li>
									<li class="third">
										<p>
											<span class="li_price">{{v2.price | price}}</span>
											<span class="li_delprice"><del>{{v2.delprice | price}}</del></span>
										</p>
									</li>
									<li class="fourth">
										<p class="li_score">{{v2.sale | sale}}</p>
									</li>
								</ol>
							</div>
						</li>
					</ul>
				</article>
			</div>
		</section>
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
			appraise(n){
				return n+'分';
			},
			numappr(n){
				return n+'人评价';
			},
			sale(n){
				return '月销售'+n+'份'
			},
			
			
		},
		mounted(){
			
			this.$axios.get('static/jsonData/near.json')
			.then(res=>{
				console.log(res)
				this.conList=res.data.shangjia
				console.log(res.data.shangjia)
			})
		}
	}
</script>

<style scoped>
	.header{
		border-bottom: 1px solid #eee;
	}
	.header>ul{
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0.5rem 1.5rem;
	}
	.header>ul>li{
		font-size: 0.6rem;
		
	}
	section{
		margin-bottom: 0.5rem;
	}
	.con_header{
		margin-top: 0.5rem;
		padding:0 0.6rem;
		border-bottom: 1px solid #ccc;
	}
	.con_header .h_name{
		color: #000;
		font-size: 0.7rem;
		font-weight: 600;
		margin-bottom: 0.1rem;
		
	}

	.con_header p:nth-of-type(2){
		margin-bottom: 0.1rem;
	} 
	.con_header p:nth-of-type(2) span{
		font-size: 0.55rem;
		margin-right: 1.5rem;
		color: #666;
		vertical-align: middle;
	}
	.con_header p:nth-of-type(2) span.h_score{
		color:#e1b84b;
	}
	article{
		padding: 0 0.7rem;
	}
	article ul{
		width: 100%;
		border-bottom: 1px solid #ccc;
	}
	article ul>li{
		margin-bottom: 0.5rem;
		display: flex;
		display: -webkit-flex;
		margin: 0.5rem 0;
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
	.div_con p{
		
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
		color: #01a9ff;
		border: 1px solid #01a9ff;
		padding: 0.1rem;
		border-radius: 5px;
	}
	.fourth .li_score{
		text-align: right;
		color: #ccc;
		font-size: 0.6rem;	
	}
	
</style>
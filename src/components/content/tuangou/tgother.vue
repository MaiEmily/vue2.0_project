<template>
	<div class="tgother">
		<div>
			<p class="p_title">精选抢购</p>
			<p class="p_time">
				<span>距开始</span>
				<span class="span_time">03</span>
				<span>:</span>
				<span class="span_time">33</span>
				<span>:</span>
				<span class="span_time">33</span>
				<span>></span>
			</p>
		</div>
		<div>
			 <!-- Swiper -->
		  <div class="swiper-container">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="(v,i) in jxList">
		      	<p class="swiper_img">
		      		<img :src="v.img"/>
		      	</p>
		      	<p class="swiper_title">{{v.name}}</p>
		      	<p class="swiper_price">
		      		<span class="discount">{{v.discount | price}}</span>
				    <span class="originalPrice"><del>{{v.delprice | price}}</del></span>
		      	</p>
		      </div>
			</div>
		    
		  </div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	export default{
		data(){
			return {
				jxList:[]  //精选
			}
		},
		filters:{
			price(n){
				return '¥'+n;
			}
		},
		mounted(){
			var swiper1 = new Swiper('.swiper-container', {
				slidesPerView: 'auto',
			  	spaceBetween: 30,
			  	pagination: {
			    	el: '.swiper-pagination',
			    	clickable: true,
			  	}
			});
			
			this.$axios.get('static/jsonData/tg.json')
			.then(res=>{
				console.log(res)
				this.jxList=res.data.jingxuan
			})
		}
	}
</script>

<style scoped>
	.tgother{
		
		padding: 0.5rem;
		border-bottom: 1px solid #ccc;
	}
	.tgother>div{
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	.p_title{
		font-size: 0.65rem;
		color: #000;
		flex-grow: 1;
	}
	.p_time{
		font-size: 0.5rem;
	}
	.span_time{

		background: #505050;
		color: #fff;
		font-size: 0.4rem;
		padding: 0.1rem;
		border-radius: 6px;
	}
	.swiper-container {
	    width: 100%;

	    margin-top: 0.5rem;
	}
	.swiper-slide{
		width: 26%;
		margin-right: 0.1rem !important;
	}
	.swiper-slide p{
		text-align: center;
	}
	.swiper_img img{
		width: 100%;
		vertical-align: top;
	}
	.swiper_title{
		padding: 0.35rem 0.5rem 0.1rem;
		font-size: 0.65rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.swiper_price{
		font-size: 0.6rem;
	}
	.swiper_price .discount{
		color: #E72D4C;
	}
	.swiper_price .originalPrice{
		font-size: 0.5rem;
	}
	
</style>
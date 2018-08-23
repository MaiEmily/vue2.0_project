<template>
	<div class="near">
		<v-header></v-header>
		<v-content></v-content>
		<div class="loading">
			<mt-spinner type="fading-circle"></mt-spinner>
			<span>加载中...</span>
		</div>
		<div class="footer_bottom"></div>
	</div>
</template>

<script>
	
	import vheader from './nearhead.vue'
	import vcontent from './nearcontent.vue'
	export default{
		components:{
			'v-header':vheader,
			'v-content':vcontent,
			
		},
		mounted(){
			nav(2); //调用函数，刚开加载时，footer 对应导航栏变色, 在js/data.js中定义该函数
		}
	}
	
</script>

<style scoped>
	.loading{
		position: relative;
		margin: 0 auto;
		width: 36%;
	}
	.loading span:nth-of-type(2){
		position: absolute;
		top:5px ;
		left: 46px;
		color: #aaa;
		font-size: 0.7rem;
	}
	.footer_bottom{
		height: 2.6rem;
		
	}
</style>
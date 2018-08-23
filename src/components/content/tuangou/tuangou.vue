<template>
	<div class="tuangou">
		<v-header></v-header>
		<v-banner></v-banner>
		<v-nav></v-nav>
		<v-other></v-other>
		<v-content></v-content>
		<div class="loading">
			<mt-spinner type="fading-circle"></mt-spinner>
			<span>加载中...</span>
		</div>
		<div class="footer_bottom"></div>
	</div>
</template>

<script>

	import vheader from './tghead.vue'
	import vbanner from './tgbanner.vue'
	import vnav from './tgnav.vue'
	import vother from './tgother.vue'
	import vcontent from './tgcontent.vue'
	export default {
		components:{
			'v-header':vheader,
			'v-banner':vbanner,
			'v-nav':vnav,
			'v-other':vother,
			'v-content':vcontent
		},
		mounted(){
			//调用函数，刚开加载时，footer 对应导航栏变色, 在js/data.js中定义该函数
			nav(1); 
		}
	}
</script>

<style scoped="scoped">
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
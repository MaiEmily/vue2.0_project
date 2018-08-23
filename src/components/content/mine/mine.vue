<template>
	<div class="mine">
		<v-header></v-header>
		<v-content></v-content>
		<div class="footer_bottom"></div>
	</div>
</template>

<script>

	import vheader from './minehead.vue'
	import vcontent from './minecontent.vue'
	export default{
		components:{
			'v-header':vheader,
			'v-content':vcontent,
			
		},
		mounted(){
			nav(4); //调用函数，刚开加载时，footer 对应导航栏变色, 在js/data.js中定义该函数
		}
	}
	
</script>

<style scoped>
	.mine{
		background: url(../../../assets/images/bg.jpg) no-repeat;
	}
	.footer_bottom{
		height: 2.6rem;
		background: #fff;
	}
</style>
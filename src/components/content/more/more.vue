<template>
	<div class="near">
		<v-header></v-header>
		<v-content></v-content>

	</div>
</template>

<script>
	
	import vheader from './morehead.vue'
	import vcontent from './morecontent.vue'
	export default{
		components:{
			'v-header':vheader,
			'v-content':vcontent,
			
		},
		mounted(){
			nav(3); //调用函数，刚开加载时，footer 对应导航栏变色, 在js/data.js中定义该函数
		}
	}
	
</script>

<style scoped>

</style>
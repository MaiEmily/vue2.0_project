<template>
	<div class="detail">
		<v-header></v-header>
		<v-content></v-content>
		
		<div class="footer_bottom"></div>
		
	</div>

</template>

<script>
	import vheader from './detailshead.vue'
	import vcontent from './detailscontent.vue'
	export default{
		components:{
			'v-header':vheader,
			'v-content':vcontent
		},
		
	}
</script>

<style scoped>
	.footer_bottom{
		height: 2.6rem;
		
	}		
</style>
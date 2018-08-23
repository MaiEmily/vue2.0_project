<template>
	<main>
		<router-view></router-view>
		<v-footer></v-footer>
		
	</main>
</template>

<script>
	import vfooter from './components/index/footer.vue'
	export default {
	  components:{
	  	"v-footer":vfooter
	  }
	}
</script>

<style>

</style>

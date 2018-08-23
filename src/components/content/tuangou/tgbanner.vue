<template>
	<div class="tgbanner">
		<mt-swipe :auto="8000">
			<mt-swipe-item>
				<img src="../../../assets/images/banner01.jpg"/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../../assets/images/banner02.jpg"/>
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../../assets/images/banner03.jpg"/>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
</script>

<style scoped>
	main{
		background: pink;
	}
	
	img{
		width: 100%;
		vertical-align: top;
	}
	

</style>
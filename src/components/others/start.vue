<template>
	<div class="start">
		<div>
			<div>
				<p class="animated bounceInDown p_title">饿了团购，随心而购</p>
				<p class="animated zoomIn p_img">
				<img src="../../assets/images/logo1.png" alt="" />
				</p>				
				<p class="animated bounceInUp p_link">
					<router-link to="/tuangou">进入应用</router-link>
				</p>
			</div>
			
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.start{
		position: fixed;
		margin: 0 auto;
		max-width: 720px;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 101;
		
	}
	.start>div{
		height: 100%;
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;	
		align-items: center;
	}
	.start>div>div{
		margin:0 auto;
	}
	div p{
		width: 100%;
		text-align: center;
		margin: 0 auto;
	}
	.p_title{
		color: #01a9ff;
		font-size: 1rem;
		margin-top:-4rem;
		
	}
	.p_img{				
		text-align: center;
		margin-top: 2rem;
	}
	.p_img img{
		width: 3.5rem;
		border-radius: 20px;
	}
	
	.p_link{
		margin-top: 1rem;
	}
	.p_link a{
		display: inline-block;
		color: #01a9ff;
		font-size: 0.8rem;;
		border: 1px solid #01a9ff;
		padding: 0.3rem 0.7rem;
		border-radius: 4px;
	}
</style>
<template>
	<div class="tgnav">
		<ul>
			<li>
				<img src="../../../assets/images/nav1.png"/>
				<p>美食</p>
			</li>
			<li>
				<img src="../../../assets/images/nav2.png"/>
				<p>夜宵</p>
			</li>
			<li>
				<img src="../../../assets/images/nav3.png"/>
				<p>商超便利</p>
			</li>
			<li>
				<img src="../../../assets/images/nav4.png"/>
				<p>水果</p>
			</li>
			<li>
				<img src="../../../assets/images/nav5.png"/>
				<p>厨房生鲜</p>
			</li>
			<li>
				<img src="../../../assets/images/nav6.png"/>
				<p>地方小吃</p>
			</li>
			<li>
				<img src="../../../assets/images/nav7.png"/>
				<p>麻辣烫</p>
			</li>
			<li>
				<img src="../../../assets/images/nav8.png"/>
				<p>地方菜系</p>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped>
	.tgnav{
		margin-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #ccc;
	}
	.tgnav ul{
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	.tgnav ul li{
		width: 25%;
		text-align: center;
	}
	img{
		width: 2.1rem;
		
	}
	p{
		font-size: 0.6rem;
	}
</style>
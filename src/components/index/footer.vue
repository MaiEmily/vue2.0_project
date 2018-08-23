<template>
	<footer class="index-footer">
		<ul>
			<li>
				<router-link to="/tuangou">
					<p class="iconfont icon-shouye p_icon"></p>
					<p class="p_font">团购</p>
				</router-link>
			</li>
			<li>
				<router-link to="/near">
					<p class="iconfont icon-shouhuodizhi p_icon"></p>
					<p class="p_font">附近</p>
				</router-link>
			</li>
			<li>
				<router-link to="/more">
					<p class="iconfont icon-more1 p_icon"></p>
					<p class="p_font">更多</p>
				</router-link>
			</li>
			<li>
				<router-link to="/mine">
					<p class="iconfont icon-account p_icon"></p>
					<p class="p_font">我的</p>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
</script>

<style scoped>

	ul{
		width: 100%;
		max-width: 720px;
		position: fixed;
		bottom: 0;
		margin: 0 auto;
		z-index: 100;
		border-top: 1px solid #ccc;
		background: #FFF;
	}
	ul li{
		width: 25%;
		float: left;	
	}
	ul li a{
		display: block;
	}
	.p_icon{
		font-size: 1.2rem;
		text-align: center;
		
	}
	.p_font{
		font-size: 0.65rem;
		text-align: center;
	}
</style>
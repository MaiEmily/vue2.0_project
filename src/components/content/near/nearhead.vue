<template>
	<header>
		<div>
			<ul>
				<li class="li_index">
					<router-link to="/tuangou">
						<span class="iconfont icon-shouye"></span>
					</router-link>
				</li>
				<li class="li_title">
					<p>附近</p>
				</li>
				<li class="li_other">
					<b class="iconfont icon-cart"></b>
					<b class="iconfont icon-search"></b>
				</li>
			</ul>
		</div>
		<div></div>
		
	</header>
</template>

<script>
</script>

<style scoped>
	header{	
				
		line-height: 2.3rem;						
	}
	header>div{
		max-width: 720px;
		width: 100%;
		height: 2.3rem;
		background: #01a9ff;
		padding: 0 0.6rem;
	}
	header>div:nth-of-type(1){
		position: fixed;
		top: 0;
		z-index: 100;
	}
	ul{
		height: 100%;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	ul>li{
		height: 100%;
	}
	.li_index a{
		height: 100%;
		display: block;
		color: #fff;
		
	}
	.li_index a span{
		font-size: 0.8rem;
	}

	.li_title{
		width: 60%;
		flex-grow: 1;
		color: #fff;
		
	}
	.li_title p{
		text-align: center;
	}

	.li_other {
		
		text-align: right;
		/*flex-grow: 1;*/
	}
	.li_other b{
		color: #fff;
		font-size: 0.9rem;
	}
</style>
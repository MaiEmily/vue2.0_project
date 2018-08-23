<template>
	<header>
		<div>
			<ul>
				<li class="li_addr">
					<router-link to="/address">						
						<span>{{this.$store.state.address}}</span>
						<b class="iconfont icon-moreunfold"></b>
					</router-link>
				</li>
				<li class="li_search">
					<input type="text" placeholder="搜索商家或地址" />
					<b class="iconfont icon-search"></b>
				</li>
				<li class="li_other">
					<b class="iconfont icon-cart"></b>
					<b class="iconfont icon-saoyisao"></b>
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
	}
	ul>li{
		height: 100%;
	}
	.li_addr{
		width: 15%;
	}
	.li_addr a{
		height: 100%;
		display: block;
		white-space: nowrap;
		
		color: #fff;
		font-size: 0.6rem;
	}
	.li_addr a span{
		max-width: 80%;
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.li_addr a b{
		width: 20%;
		font-size: 0.6rem;
		display: inline-block;
		vertical-align: top;
		position: relative;
		top: 0.1rem;
		left: -0.15rem;
	}
	.li_search{
		width: 60%;
		position: relative;
		flex-grow: 1;
		margin-left: 0.5rem;
		
	}
	.li_search input{
		position: relative;
		top: -0.12rem;
		display: inline-block;
		width: 100%;
		height: 1.4rem;
		vertical-align: middle;
		outline: none;
		border: none;
		border-radius: 30px;
		padding-left: 20px;
		font-size: 0.5rem;
	}
	.li_search input::-webkit-input-placeholder{
		display: inline-block;
		
		padding-top: 1rem;
	}
	.li_search b{
		position: absolute;
		right: 0.45rem;
		top: 0;
		font-size: 1rem;
		font-weight: normal;	
		color: #01a9ff;	
	}
	.li_other {
		text-align: right;
		margin-left: 0.5rem;
		/*flex-grow: 1;*/
	}
	.li_other b{
		color: #fff;
		font-size: 0.9rem;
	}
</style>
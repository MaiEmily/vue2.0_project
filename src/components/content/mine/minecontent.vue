<template>
	<div class="minecontent">
		<div class="mine_top">
			<p class="login"><router-link to="/login">
				<span>登录</span>
			</router-link></p>
		
			
			<p class="register"><router-link to="/register">
				<span>注册账号></span>
			</router-link></p>
		</div>
		<div class="mine_center">			
			<ul>
				<li>
					<p class="iconfont icon-coupons"></p>
					<p>优惠券</p>
				</li>
				<li>
					<p class="iconfont icon-daifukuan"></p>
					<p>待付款</p>
				</li>
				<li>
					<p class="iconfont icon-redpacket"></p>
					<p>卡包</p>
				</li>
				<li>
					<p class="iconfont icon-collection"></p>
					<p>收藏</p>
				</li>
			</ul>
		</div>
		
		<div class="mine_con">
			<ul class="ul_first">
				<li>
					<p>订单</p>
					<p class="iconfont icon-enter"></p>
				</li>
				<li>
					<p>VIP会员<i>成长值达600可升为会员</i></p>
					<p class="iconfont icon-enter"></p>
				</li>
			</ul>
			<ul class="ul_second">
				<li>
					<p>积分</p>
					<p class="iconfont icon-enter"></p>
				</li>
				<li>
					<p>余额（充值卡充值）</p>
					<p class="iconfont icon-enter"></p>
				</li>
				<li>
					<p>促销包</p>
					<p class="iconfont icon-enter"></p>
				</li>
				<li>
					<p>红包</p>
					<p class="iconfont icon-enter"></p>
				</li>
				<li>
					<p>抵用券</p>
					<p class="iconfont icon-enter"></p>
				</li>
			</ul>
		
		</div>
	
	</div>
</template>

<script>

</script>

<style scoped>
	.mine_top{
		margin: 2rem 0;
	}
	.mine_top p a{
		display: block;
		text-align: center;
		font-size: 0.6rem;
		color: #fff;
	}
	.mine_top .login span{
		display: inline-block;
		background: #01a9ff;
		padding: 0.15rem 0.7rem;
		border-radius: 5px;
	}
	.mine_top .register{
		margin-top: 0.2rem;
	}
	
	.mine_center{
		background: #fff;
	}
	.mine_center>ul{
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		padding-bottom: 0.3rem;
	}
	.mine_center>ul>li{
		width: 25%;
		text-align: center;
	}
	.mine_center>ul>li>p:nth-of-type(1){
		font-size: 1.2rem;
	}
	.mine_center>ul>li>p:nth-of-type(2){
		font-size: 0.6rem;
		color: #666;
	}
	.mine_con>ul.ul_first{
		background: #f9f9f9;
	}
	
	.mine_con>ul.ul_second{
		background: #fff;
	}
	.mine_con>ul>li{
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		padding: 0.8rem 0.7rem;
		border-bottom: 1px solid #eee;
	}
	.mine_con>ul>li>p{
		font-size: 0.7rem;
		color: #000;
	}
	.mine_con>ul>li>p:nth-of-type(2){
		color: #888;
	}
	.ul_first{
		overflow: hidden;
	}
	.ul_first li{
		background: #fff;
		margin: 0.5rem 0;
		border-bottom: 1px solid #eee;		
	}

</style>
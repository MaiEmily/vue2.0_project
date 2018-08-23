<template>
	<div class="morecontent">
		<ul>
			<li>
				<p>仅在wifi下显示图片</p>
				<p class="iconfont icon-right"></p>
			</li>
			<li>
				<p>消息提醒</p>
				<p class="iconfont icon-enter"></p>
			</li>
			<li>
				<p>分享设置</p>
				<p class="iconfont icon-enter"></p>
			</li>
			<li>
				<p>清除缓存</p>
				<p>8.65MB</p>
			</li>
			<li>
				<p>赏个好评</p>
			</li>
			<li>
				<p>意见反馈</p>
			</li>
			<li>
				<p>联系客服<b class="b_time">(8:00-22:00)</b></p>
				<p>623421</p>
			</li>
			<li>
				<p>当前版本 v8.10</p>
				<p class="iconfont icon-enter"></p>
			</li>
			<li>
				<p>关于</p>
			</li>
		</ul>
	</div>
</template>

<script>

</script>

<style scoped>
	ul>li{
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		padding: 0.8rem 0.7rem;
		border-bottom: 1px solid #eee;
	}
	ul>li>p{
		font-size: 0.7rem;
		color: #000;
	}
	ul>li>p:nth-of-type(2){
		color: #888;
	}
	ul>li:first-of-type>p:nth-of-type(2){
		color: red;
	}
	.b_time{
		font-size: 0.5rem;
		color: #888;
		font-weight: normal;
	}
</style>
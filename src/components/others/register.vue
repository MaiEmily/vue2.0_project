<template>
	<div class="register">
		<div class="back"><router-link to="/mine">
			<p class="iconfont icon-return"></p>
		</router-link></div>
		<div class="logo">
			<img src="../../assets/images/logo1.png"/>
		</div>
		<form action="">
			<div>
				<label class="iconfont icon-people" for=""></label>
				<input type="text" placeholder="账号"/>
			</div>
			<div>
				<label class="iconfont icon-unlock" for=""></label>
				<input type="text" placeholder="密码"/>
			</div>
			<div>
				<label class="iconfont icon-unlock" for=""></label>
				<input type="text" placeholder="确认密码"/>
			</div>
			<div>
				<label class="iconfont icon-mail" for=""></label>
				<input type="text" placeholder="邮箱"/>
			</div>
			<div class="registerButton">
				<button>注册</button>
			</div>
		</form>
		<div class="bottom">
			<p>
				<router-link to="/login">已有账号？去登录</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	
	.register{
		position: fixed;
		width: 100%;		
		max-width: 720px;
		height: 100%;
		z-index: 101;
		background: #fff;
		padding: 0.6rem 0.8rem;
	}
	.register div{
		text-align: center;
	}
	.register .back{
		display: inline-block;
		text-align: left;
		font-size: 1rem;
	}
	.register .back a{
		display: block;
	}
	.register .back a p{
		font-size: 1rem;
		color: #01a9ff;
		font-weight: 600;
	}
	.logo{
		margin-top: 1rem;
	}
	.logo img{
		width: 25%;
		border-radius: 20px;
	}
	form{
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	form>div{
		margin-bottom: 0.3rem;
	}
	form label{
		color: #01a9ff;
		font-size: 1rem;
		vertical-align: top;
	}
	form input{
		display: inline;
		font-size: 0.6rem;
		outline: none;
		border: none;
		border-bottom: 1px solid #aaa;
		vertical-align: middle;
		padding:0 0 0.15rem 0.2rem;
	}
	.registerButton{
		margin-top: 1rem;
	}
	button{
		font-size: 0.6rem;
		color: #fff;
		background: #01a9ff;
		outline: none;
		border: none;
		padding: 0.25rem 3.3rem;
		white-space: nowrap;
		
	}
	.bottom p{
		font-size: 0.5rem;
	}
	.bottom p a{
		color: #888;
		text-decoration: underline;
		white-space: nowrap;
		padding-left: 3.2rem;
	}
	.bottom p b{
		color: #000;
		font-weight: normal;
	}
	@media(min-width:721px) {
		.logo{
			margin-top: 0;
		}
		.logo img{
			width: 25%;
		}
		.registerButton{
			margin-top: 0.6rem;
		}
	}
</style>
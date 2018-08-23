<template>
	<div class="login">
		<div class="back"><router-link to="/mine">
			<p class="iconfont icon-return"></p>
		</router-link></div>
		<div class="logo">
			<img src="../../assets/images/logo1.png"/>
		</div>
		<form action="">
			<div>
				<label class="iconfont icon-people" for=""></label>
				<input type="text" placeholder="请输入用户名"/>
			</div>
			<div>
				<label class="iconfont icon-unlock" for=""></label>
				<input type="text" placeholder="请输入密码"/>
			</div>
			<div class="loginButton">
				<button>登录</button>
			</div>
		</form>
		<div class="bottom">
			<p>
				<a href="#">忘记密码?</a>
				<b>|</b>
				<router-link to="/register">新用户注册</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	
	.login{
		position: fixed;
		width: 100%;
		max-width: 720px;
		height: 100%;
		z-index: 101;
		background: #fff;
		padding: 0.6rem 0.8rem;
	}
	.login div{
		text-align: center;
	}
	.login .back{
		display: inline-block;
		text-align: left;
		font-size: 1rem;
	}
	.login .back a{
		display: block;
	}
	.login .back a p{
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
		margin-top: 1rem;
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
	.loginButton{
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
	}
	.bottom p b{
		color: #000;
		font-weight: normal;
	}
</style>
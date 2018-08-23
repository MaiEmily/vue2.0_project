<template>
	<section>
		<article>
			<ul>				
				<li v-for="(v,i) in conList">
					<div class="div_img">
						<img :src="v.img" alt="" />
					</div>
					<div class="div_con">
						<ol>
							<li class="first">
								<p>
									<span class="li_name">{{v.name}}</span>
								</p>
								
							</li>

							<li class="second">
								<p>
									<span class="li_price">{{v.price | price}}</span>
								</p>
							</li>
							<li class="third">
								<p >
									<span class="iconfont icon-offline" v-show="v.num" @click="sub(i)"></span>									
									<span class="num" v-show="v.num">{{v.num}}</span>
									<span class="iconfont icon-addition_fill" @click="add(i)"></span>
								</p>
							</li>
						</ol>
					</div>
				</li>
			</ul>
		</article>
		<div>
			<div class="account">
				<div>
					<span class="iconfont icon-category" @click="show"></span>
					<mt-badge size="small" type="error" v-show="tolNum">{{tolNum}}</mt-badge>
					<p class="total">{{tolPrice | price}}</p>
					<button @click="cal">去结算</button>
				</div>
			</div>
			<transition enter-active-class="animated bounceInUp" leave-active-class="animated slideOutDown">
				<div class="order" v-show="msg">
					<span class="iconfont icon-moreunfold" @click="hide"></span>
					<div class="orderList">
						<ul>
							<li v-for="(v,i) in orderList">
								<p>{{v.name}}</p>
								<p>{{v.num | num}}</p>
							</li>
						</ul>
					</div>
				</div>
			</transition>
		</div>

	</section>
</template>

<script>
	export default{
		data(){
			return {
				
				num:'', //下单数量
				conList:[], //json数据
				tolNum:0,//商品总数量
				tolPrice:0, //商品总价
				msg:false,//控制已点菜单显示隐藏
				orderList:[]//已点菜单
				
			}
		},
		filters:{
			price(n){
				return '¥'+n;
			},
			num(n){
				return n+'份';
			}
		},
		mounted(){
	//			//商家名称   name1：全局变量  在js/data.js
	//			this.name=name1;
			
			this.$axios.get('static/jsonData/details.json')
			.then(res=>{
				this.conList=res.data.data[this.$store.state.index].details
				console.log(res.data.data[this.$store.state.index].details)
			})
		},
		methods:{
			//商品增加
			add(n){
				this.conList[n].num++; //商品下单数量
				this.tolPrice=0;//商品总价
				this.tolNum=0;//商品总数量
				this.orderList=[]; //已点菜单
				console.log('商品总数量'+this.tolNum);
				for(let i=0;i<this.conList.length;i++){
					this.tolPrice+=this.conList[i].price*this.conList[i].num;
					this.tolNum+=this.conList[i].num;
					if(this.conList[i].num){
						this.orderList.push({
							'name': this.conList[i].name,
							'num': this.conList[i].num
						})
					}
					
				}
			},
			//商品减少
			sub(n){
				this.conList[n].num==0?0:this.conList[n].num--; //商品下单数量				
				this.tolPrice=0;//商品总价
				this.tolNum=0;//商品总数量
				this.orderList=[]; //已点菜单
				for(let i=0;i<this.conList.length;i++){
					this.tolPrice+=this.conList[i].price*this.conList[i].num;
					this.tolNum+=this.conList[i].num;
					if(this.conList[i].num){
						this.orderList.push({
							'name': this.conList[i].name,
							'num': this.conList[i].num
						})
					}
				}
			},
			//显示已点菜单
			show(){
				this.msg=true;
			},
			//隐藏已点菜单
			hide(){
				this.msg=false;
			},
			cal(){
				if(this.tolPrice!=0){
					
					this.orderList=[]; //结算时，清空已点菜单
					this.$toast({
					  message: '结算成功！',
					  iconClass: 'iconfont icon-success',
					  duration:1500,
					});
				}else{
					this.$toast({
					  message: '你还没有点餐！',
					  duration:1500,
					});
				}
			}
		}
	}
	
</script>

<style scoped>
	article{
		padding: 0 0.7rem;
	}
	article ul{
		width: 100%;
		
	}
	article ul>li{
		display: flex;
		display: -webkit-flex;
		margin-top: 0.5rem;
		border-bottom: 1px solid #ccc;
	}


	.div_img{
		width: 33%;
		height: 3.5rem;
	}
	.div_img img{
		width: 100%;
		height: 100%;
		vertical-align: top;
	}
	.div_con{
		width: 60%;
		padding-left: 0.5rem;
	}
	.div_con ol li{
		margin-bottom: 0.2rem;
	}
	.div_con p{
		
	}
	
	.first p{
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		font-weight: 600;
	}
	.first .li_name{
		font-size: 0.7rem;
		color: #000;
	}
	.first .li_distance{
		vertical-align: top;
		font-size: 0.6rem;
	}

	.second {
		font-size: 0.6rem;
	}
	.second .li_price{
		color: #E72D4C;
	}
	.second .li_delprice{
		font-size: 0.5rem;	
	}
	.second .li_discount{
		color: #E72D4C;
		border: 1px solid #01a9ff;
		padding: 0.1rem;
		border-radius: 5px;
	}
	.third p{
		text-align: right;
		color: #E72D4C;;
		font-size: 0.6rem;
		cursor: pointer;	
	}
	.third p .num{
		color: #000;
		cursor: initial;
		padding: 0 0.2rem;
	}
	.third p span.iconfont{
		font-size: 1rem;
		color: #01a9ff;
	}
	.account{
		position: fixed;
		bottom: 0;
		width: 100%;
		max-width: 720px;
		height: 2.4rem;
		background: #444;
		z-index: 101;
	}
	.account>div{
		height: 100%;
	}
	.account .icon-category{
		width: 20%;
		height: 2.4rem;
		line-height: 2.1rem;
		position: absolute;
		top: 7px;
		left:20px;
		font-size: 1.6rem;
		color: #fff;
	}
	.account .mint-badge{
		position: absolute;
		top: 0.6rem;
		left: 2rem;		
		font-size: 0.4rem;
	}
	.total{
		position: absolute;
		top: 0.5rem;
		left:4.5rem;
		color: #fff;
		font-size: 0.8rem;
	}
	.account button{
		position: absolute;
		top: 0px;
		right: 0px;
		width: 20%;
		height: 100%;
		font-size: 0.65rem;
		text-align: center;		
		background: #01a9ff;
		color: #fff;
		border: none;
		outline: none;		
	}
	
	.order{
		position: fixed;
		bottom:0px;
		max-width: 720px;
		width: 100%;
		min-height: 10rem;
		background: rgba(0,0,0,0.6);
	}
	.order .icon-moreunfold{
		display: inline-block;
		width: 100%;
		margin-top: 0.1rem;
		text-align: center;
		color: #fff;
		font-size: 1.2rem;
		cursor: pointer;
	}
	.orderList ul li{
		padding: 0 0.5rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	.orderList ul li p{
		color: #fff;
	}
	.orderList ul li p:first-of-type{
		width: 80%;
	}
	.orderList ul li p:nth-of-type(2){
		width: 20%;
	}
</style>
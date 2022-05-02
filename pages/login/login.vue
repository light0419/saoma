<template>
	<view class="login">
		<view class="logo-tit">
			<image src="../../static/logo@2x.png" mode=""></image>
			<text>智能终端设备全流程运营管理平台</text>
		</view>
		<view class="main-bg">
			<view class="main-box">
				<view class="iptbox">
					<image src="../../static/yh@2x.png" mode=""></image>
					<input type="text" v-model="username" placeholder="请输入用户名" placeholder-style="color: #999999;font-size: 28rpx;" />
				</view>
				<view class="iptbox">
					<image src="../../static/m@2x.png" mode=""></image>
					<input type="password" v-model="password" placeholder="请输入密码" placeholder-style="color: #999999;font-size: 28rpx;" />
				</view>
				<view class="iptbox">
					<image src="../../static/yzm@2x.png" mode=""></image>
					<input type="text" v-model="inputCode" placeholder="请输入验证码" placeholder-style="color: #999999;font-size: 28rpx;" />
					<view class="inputCode">
						<image v-if="requestCodeSuccess" :src="randCodeImage" mode="" @click="handleChangeCheckCode"></image>
						<image v-else src="../../static/checkcode.png" mode="" @click="handleChangeCheckCode"></image>
					</view>
				</view>
				<button type="default" @click="login">登录</button>
				<text class="footertext">山西路桥智慧交通信息科技有限公司 &nbsp;&nbsp;&nbsp; v1.0.1</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data:function() {
			return {
				requestCodeSuccess: false,
				randCodeImage: '',
				currdatetime: '',
				username:"",
				password:"",
				inputCode:""
			}
		},
		mounted() {
			console.log(this.app.apiHost)
			this.handleChangeCheckCode()
		},
		methods:{
			handleChangeCheckCode(){
				var that = this
				that.currdatetime = new Date().getTime();
				uni.request({
					url: that.app.apiHost + "sys/randomImage/" + that.currdatetime,
					data:"",
					success:function(res){
						if(res.data.success){
							that.randCodeImage = res.data.result
							that.requestCodeSuccess=true
						}else{
							uni.showToast({
								title:res.data.message,
								icon:"none"
							})
							that.requestCodeSuccess=false
							}
					},
					
				})
			},
			login(){
				var that = this
				let loginParams = {
					username: that.username||'admin',
					password: that.password||'123456',
					captcha: that.inputCode,
					checkKey: that.currdatetime,
					remember_me: false,
				}
				uni.request({
					url: that.app.apiHost + "sys/login",
					method:"POST",
					data:loginParams,
					success:function(res){
						if(res.data.success){
							//设置缓存
							let userinfo = res.data.result.userInfo
							uni.setStorageSync('userinfo',userinfo);
							uni.setStorageSync('token',res.data.result.token);
							// console.log(userinfo)
							uni.switchTab({
								url:"../index/index"
							})
						}else{
							uni.showToast({
								title:res.data.message,
								icon:"none"
							})
							that.requestCodeSuccess=false
						}
					},
					
				})
				if(that.username == ""){
					uni.showToast({
						title:"请输入用户名！",
						icon:'none'
					})
				}else if(that.password == ""){
					uni.showToast({
						title:"请输入密码！",
						icon:'none'
					})
				}
				else{
					let loginParams = {
						username: that.username,
						password: that.password,
						captcha: that.inputCode,
						checkKey: that.currdatetime,
						remember_me: false,
					}
					uni.request({
						url: that.app.apiHost + "sys/login",
						method:"POST",
						data:loginParams,
						success:function(res){
							if(res.data.success){
								//设置缓存
								let userinfo = res.data.result.userInfo
								uni.setStorageSync('userinfo',userinfo);
								uni.setStorageSync('token',res.data.result.token);
								// console.log(userinfo)
								uni.switchTab({
									url:"../index/index"
								})
							}else{
								uni.showToast({
									title:res.data.message,
									icon:"none"
								})
								that.requestCodeSuccess=false
							}
						},
						
					})
				}
			}
		}
	}
</script>

<style>
	.login{
		width: 100%;
		height: 100vh;
		background: url(../../static/bg@2x.png) no-repeat;
		background-size: 100% 100%;
	}
	.logo-tit{
		/* padding-top: 117rpx; */
		padding-top: 25%;
		margin-bottom: 78rpx;
	}
	.logo-tit image{
		display: block;
		width: 146rpx;
		height: 97rpx;
		margin: 0 auto;
	}
	.logo-tit text{
		display: block;
		font-size: 38rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		margin-top: 53rpx;
		letter-spacing: 2rpx;
	}
	.main-bg{
		width: 612rpx;
		height: 701rpx;
		background: url(../../static/bg-1@2x.png) no-repeat;
		background-size: 100% 100%;
		margin: 0 auto;
		position: relative;
	}
	.main-box{
		width: 690rpx;
		height: 667rpx;
		padding: 0 65rpx;
		padding-top: 80rpx;
		background: #FFFFFF;
		border-radius: 26rpx;
		position: absolute;
		top: 0;
		left: -39rpx;
	}
	.iptbox{
		display: flex;
		align-items: center;
		width: 100%;
		height: 100rpx;
		border-bottom: 1rpx solid #EBEBEB;
	}
	.iptbox image{
		width: 34rpx;
		height: 36rpx;
		margin-right: 38rpx;
	}
	.iptbox input{
		font-size: 28rpx;
	}
	.iptbox .inputCode{
		width: 160rpx;
		height: 70rpx;
		margin-left: 20rpx;
		background: #C8C7CC;
	}
	.iptbox .inputCode image{
		width: 100%;
		height: 100%;
	}
	button{
		width: 560rpx !important;
		height: 86rpx !important;
		color: #fff !important;
		font-size: 32rpx !important;
		line-height: 86rpx !important;
		text-align: center !important;
		margin: 0 auto !important;
		margin-top: 50rpx !important;
		background: #016BA9 !important;
		border-radius: 10rpx !important;
	}
	.footertext{
		display: block;
		font-size: 20rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #B3B3B3;
		line-height: 28rpx;
		text-align: center;
		margin-top: 53rpx;
	}
</style>

<template>
	<view class="content rel">
		<view class="item">
			<view class="name">原密码</view>
			<view class="cont">
				<input type="text" @input="psd1"  password="true" placeholder="请输入原密码" />
			</view>
		</view>
		<view class="item">
			<view class="name">新密码</view>
			<view class="cont">
				<input type="text" @input="psd2" password="true" placeholder="请输入新密码" />
			</view>
		</view>
		<view class="item">
			<view class="name">确认密码</view>
			<view class="cont">
				<input type="text" @input="psd3" password="true" placeholder="请确认密码" />
			</view>
		</view>
		<view class="item">
			<button type="primary" @click="submit">修改密码</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password1:'',
				password2:'',
				password3:''
			}
		},
		onLoad() {
			
		},
		methods: {
			//去清单页
			// toBill: function(str) {
			// 	uni.navigateTo({
			// 		url:"../tempBill/index?type="+str
			// 	})
			// },
			psd1(e){
				this.password1=e.detail.value;
			},
			psd2(e){
				this.password2=e.detail.value;
			},
			psd3(e){
				this.password3=e.detail.value;
			},
			submit(){
				if(this.password1&&this.password2&&this.password3){
					if(this.password2!=this.password3){
						uni.showToast({
							icon:'none',
							title: "新密码和确认密码不一致",
							duration: 2000
						});
					}
					else{
						let data={
							username:JSON.parse(JSON.stringify(uni.getStorageSync('userinfo'))).username,
							oldpassword:this.password1,
							password:this.password2,
							confirmpassword:this.password3
							
						}
						
						this.$api.updatePassword(data).then(res => {
							if(res.code==200){
								uni.showToast({
									title: "操作成功,请重新登录",
									duration: 2000
								});
								setTimeout(function(){
									uni.navigateTo({
										url:"../login/login"
									})
								},2000)
							
							}
							// 获得数据 
						}).catch(res => {
						　　// 失败进行的操作
						})
					}
				}
				else{
					uni.showToast({
						icon:'none',
						title: "请输入全部内容",
						duration: 2000
					});
				}
			}
		}
	}
</script>

<style lang="less">
	.content{
		padding:30rpx;
		.item{
			margin-top: 25rpx;
			.name{
				font-size:30rpx;
				color:#666;
			}
			.cont{
				margin-top: 10rpx;
				input{
					width:100%;
					height:80rpx;
					background: #eee;
					padding:0 30rpx;
					border-radius:10rpx;
				}
			}
			button{
				margin-top: 100rpx;
			}
		}
	}
</style>

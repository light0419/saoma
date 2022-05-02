<template>
	<view class="content rel">
		<view class="lank abs"></view>
		<view class="my_top rel">
			<view class="top_btn">
				已登录
			</view>
			<view class="my_top1 fix">
				<view class="icon fl">
					<image src="../../static/touxiang.png" mode="widthFix"></image>
				</view>
				<view class="cont ovh">
					<view class="name">{{userName}}</view>
					<view class="note">{{orgCode}}</view>
				</view>
			</view>
			<view class="my_bot1 fix">
				<view class="item1 fl">
					<view class="num">{{storageInformationsum}}</view>
					<view class="tit">总入库单</view>
				</view>
				<view class="item1 fl">
					<view class="num">{{storagefacilitysum}}</view>
					<view class="tit">总入库数量</view>
				</view>
				<view class="item1 fl">
					<view class="num">{{storagechecksum}}</view>
					<view class="tit">入库检验数量</view>
				</view>
				<view class="item1 fl">
					<view class="num">{{stockRemovalInformationsum}}</view>
					<view class="tit">总出库单</view>
				</view>
				<view class="item1 fl">
					<view class="num">{{stockRemovalfacilitysum}}</view>
					<view class="tit">总出库数量</view>
				</view>
				<view class="item1 fl">
					<view class="num">{{stockchecksum}}</view>
					<view class="tit">出库检验数量</view>
				</view>
			</view>
		</view>
		<view class="my_bot">
			<view class="item fix">
				<view class="icon fl">
					<image src="../../static/xtb1.png" mode="widthFix"></image>
				</view>
				<view class="name fl">
					消息通知
				</view>
				<view class="jiantou fr">
					<image src="../../static/huijian.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="item fix">
				<view class="icon fl">
					<image src="../../static/xtb2.png" mode="widthFix"></image>
				</view>
				<view class="name fl">
					修改密码
				</view>
				<view class="jiantou fr">
					<image src="../../static/huijian.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				equipmentoriginalvalues:'',
				stockRemovalInformationsum:'',
				stockRemovalfacilitysum:'',
				stockchecksum:'',
				storageInformationsum:'',
				storagechecksum:'',
				storagefacilitysum:'',
				userName:'',
				orgCode:'',
			}
		},
		onLoad() {
			console.log(uni.getStorageSync('userinfo'))
			this.userName=JSON.parse(JSON.stringify(uni.getStorageSync('userinfo'))).realname;
			this.orgCode=JSON.parse(JSON.stringify(uni.getStorageSync('userinfo'))).orgCode;
			this.$api.getMyData().then(res => {
				console.log(res)
				if(res.code==200){
					this.equipmentoriginalvalues=res.result.equipmentoriginalvalues;
					this.stockRemovalInformationsum=res.result.stockRemovalInformationsum;
					this.stockRemovalfacilitysum=res.result.stockRemovalfacilitysum;
					this.stockchecksum=res.result.stockchecksum;
					this.storageInformationsum=res.result.storageInformationsum;
					this.storagechecksum=res.result.storagechecksum;
					this.storagefacilitysum=res.result.storagefacilitysum;
				}
				// 获得数据 
			}).catch(res => {
			　　// 失败进行的操作
			})
		},
		methods: {
			//去清单页
			// toBill: function(str) {
			// 	uni.navigateTo({
			// 		url:"../tempBill/index?type="+str
			// 	})
			// },
			
		}
	}
</script>

<style lang="less">
	.content{
		height:100%;
		.lank{
			height:300rpx;
			background: #016ba9;
			width:100%;
			top:0;
			left:0;
		}
		.my_top{
			z-index:2;
			border-radius: 16rpx;
			background-color: rgb(255, 255, 255);
			box-shadow: 0rpx 6rpx 24rpx 0rpx rgba(214, 236, 249, 0.3);
			width: 692rpx;
			height: 459rpx;
			margin:0 auto;
			.top_btn{
				background-color: rgb(1, 107, 169);
				box-shadow: -0.314rpx 5.992rpx 5rpx 0rpx rgba(1, 98, 160, 0.19);
				width: 124rpx;
				height: 52rpx;
				text-align: center;
				line-height:52rpx;
				color:#fff;
				font-size:26rpx;
				position: absolute;
				right:0;
				top:64rpx;
				border-radius:26rpx 0 0 26rpx;
			}
			.my_top1{
				padding-top: 45rpx;
				padding-left: 35rpx;
				.icon{
					width:91rpx;
					height:91rpx;
					border-radius:100%;
					image{
						width:100%;
						height:100%;
						border-radius:100%;
					}
				}
				.cont{
					margin-left: 120rpx;
					padding-top: 10rpx;
					.name{
						color:#333333;
						font-size:32rpx;
					}
					.note{
						color:#999999;
						font-size:22rpx;
					}
				}
			}
			.my_bot1{
				margin-top: 40rpx;
				margin-left: 30rpx;
				margin-right: 30rpx;
				overflow: hidden;
				.item1{
					width:33.33%;
					box-sizing: border-box;
					border-top:solid 1rpx #eaeaea;
					border-left:solid 1rpx #eaeaea;
					margin-top: -2rpx;
					margin-left: -1rpx;
					height:140rpx;
					padding-top: 25rpx;
					text-align: center;
					.num{
						color:#016ba9;
						line-height:46rpx;
						font-size:46rpx;
					}
					.tit{
						color:#666666;
						font-size:22rpx;
						margin-top: 10rpx;
					}
				}
			}
		}
		.my_bot{
			border-top:solid 10rpx #f2f2f2;
			padding-left: 55rpx;
			padding-right: 55rpx;
			.item{
				height:110rpx;
				border-bottom:solid 1rpx #eaeaea;
				line-height:110rpx;
				.icon{
					width:30rpx;
					margin-right: 20rpx;
					image{
						width:27rpx;
						position: relative;
						top:4rpx;
					}
				}
				.name{
					color:#333333;
					font-size:28rpx;
				}
				.jiantou{
					width:14rpx;
					image{
						width:100%;
					}
				}
			}
		}
	}
</style>

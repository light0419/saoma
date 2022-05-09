<template>
	<view class="content">
		<view class="banner"></view>
		<view class="in-out-box">
			<view class="qrcodebox">
				<view class="qrcode-fl" @click="toBill('in')">
					<image src="../../static/rk@2x.png" mode=""></image>
					<text>扫码入库</text>
				</view>
				<view class="qrcode-fl" @click="toBill('out')">
					<image src="../../static/ckj@2x.png" mode=""></image>
					<text>扫码出库</text>
				</view>
				<view class="centerline"></view>
			</view>
			<view class="inOutForeModel">
				
				<view class="inoutItem" @click="toBill('inware')">
					<image src="../../static/rkgl@2x.png" mode=""></image>
					<text>入库管理</text>
				</view>
				<view class="inoutItem" @click="toBill('outware')">
					<image src="../../static/ckgl@2x.png" mode=""></image>
					<text>出库管理</text>
				</view>
				<view class="inoutItem"  @click="toBill('incheck')">
					<image src="../../static/srkd@2x.png" mode=""></image>
					<text>待入库检验</text>
				</view>
				<view class="inoutItem" @click="toBill('outcheck')">
					<image src="../../static/dckd@2x.png" mode=""></image>
					<text>待出库检验</text>
				</view>
			</view>
		</view>
		<view class="main2-box">
			<view class="main2-box-tit">
				<!-- <span></span> -->
				<text>设备管理</text>
			</view>
			<view class="main2">
				<navigator class="main2-list"  @click="toBill('inwarecheck')" url="../homeModule/applyMustRead" hover-class="none">
					<view class="main2-list-text">
						<text>设备入库检验</text>
						<text style="color: #999999;font-size: 24rpx;margin-top: 23rpx;">查看入库检验</text>
					</view>
					<view class="main2-list-img">
						<image src="../../static/sbjy@2x.png" mode=""></image>
					</view>
				</navigator>
				<navigator class="main2-list"  @click="toBill('waitcheck')" url="../homeModule/securityObject" hover-class="none">
					<view class="main2-list-text">
						<text>待盘点单</text>
						<text style="color: #999999;font-size: 24rpx;margin-top: 23rpx;">查看待盘点单</text>
					</view>
					<view class="main2-list-img">
						<image src="../../static/xcys@2x.png" mode=""></image>
					</view>
				</navigator>
				<navigator class="main2-list" @click="toBill('outwarecheck')" url="../homeModule/FundsToIssue" hover-class="none">
					<view class="main2-list-text">
						<text>设备出库检验</text>
						<text style="color: #999999;font-size: 24rpx;margin-top: 23rpx;">查看出库检验</text>
					</view>
					<view class="main2-list-img">
						<image src="../../static/xcgl@2x.png" mode=""></image>
					</view>
				</navigator>
				<navigator class="main2-list" @click="toBill('alreadycheck')" url="../homeModule/theApplication" hover-class="none">
					<view class="main2-list-text">
						<text>盘点管理</text>
						<text style="color: #999999;font-size: 24rpx;margin-top: 23rpx;">线上快速盘点</text>
					</view>
					<view class="main2-list-img">
						<image src="../../static/xcysgl@2x.png" mode=""></image>
					</view>
				</navigator>
			</view>
		</view>
		<view class="main2-box light_main1">
			<view class="main2-box-tit">
				<!-- <span></span> -->
				<text>资产统计</text>
			</view>
			<view class="light_m1">
				<view class="item fix">
					<view class="item1 fl">
						<view class="num">{{storagefacilitysum}}<span>个</span></view>
						<view class="tit">库存设备数量</view>
					</view>
					<view class="item1 fl">
						<view class="num">{{leasefacilitysum}}<span>个</span></view>
						<view class="tit">已租出设备数量</view>
					</view>
				</view>
				<view class="item fix">
					<view class="item1 fl">
						<view class="num">{{equipmentoriginalvalues}}<span>万元</span></view>
						<view class="tit">库存设备原值</view>
					</view>
					<view class="item1 fl">
						<view class="num">{{leaseequipmentoriginalvalues}}<span>万元</span></view>
						<view class="tit">已租出设备原值</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				equipmentoriginalvalues:0,
				leaseequipmentoriginalvalues:0,
				leasefacilitysum: 0,
				storagefacilitysum: 0
			}
		},
		onLoad() {

		},
		onShow(){
			this.$api.getIndexNumber().then(res => {
				if(res.code==200){
					this.equipmentoriginalvalues=res.result.equipmentoriginalvalues
					this.leaseequipmentoriginalvalues=res.result.leaseequipmentoriginalvalues
					this.leasefacilitysum=res.result.leasefacilitysum
					this.storagefacilitysum=res.result.storagefacilitysum

				}
				// 获得数据 
			}).catch(res => {
			　　// 失败进行的操作
			})
		},
		methods: {
			//去清单页
			toBill: function(str) {
				uni.navigateTo({
					url:"../tempBill/index?type="+str
				})
			},
			
		}
	}
</script>

<style>
	.banner{
		width: 100%;
		height: 400rpx;
		background: url(../../static/homebanner.png) no-repeat;
		background-size: 100% 100%;
	}
	.in-out-box{
		width: 100%;
		height: 323rpx;
		padding-top: 122rpx;
		position: relative;
		background: #FFFFFF;
		border-bottom: 10rpx solid #F2F2F2;
	}
	.qrcodebox{
		display: flex;
		align-items: center;
		width: 711rpx;
		height: 210rpx;
		background: #fff;
		box-shadow: 0rpx 3rpx 24rpx 0rpx rgba(1, 107, 169, 0.07);
		border-radius: 14rpx;
		position: absolute;
		top: -122rpx;
		left: 50%;
		transform: translateX(-50%);
	}
	.qrcode-fl{
		width: 50%;
		height: 100%;
		padding-top: 58rpx;
	}
	.qrcode-fl image{
		display: block;
		width: 58rpx;
		height: 50rpx;
		margin: 0 auto;
		margin-bottom: 30rpx;
	}
	.qrcode-fl text{
		display: block;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #333333;
		text-align: center;
	}
	.centerline{
		width: 1rpx;
		height: 29rpx;
		border: 2rpx solid #016BA9;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.inOutForeModel{
		display: flex;
		align-items: center;
		width: 100%;
	}
	.inoutItem{
		width: 25%;
	}
	.inoutItem image{
		display: block;
		width: 103rpx;
		height: 103rpx;
		margin: 0 auto;
		border-radius: 50%;
	}
	.inoutItem text{
		display: block;
		color: #333333;
		font-size: 24rpx;
		text-align: center;
		margin-top: 21rpx;
	}
	
	.main2-box-tit{
		display: flex;
		align-items: center;
		width: 100%;
		padding: 39rpx 45rpx;
	}
	.main2-box-tit text{
		display: block;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 400;
		color: #4F4F4F;
		position: relative;
	}
	.main2-box-tit text::before{
		display: block;
		content: "";
		width: 8rpx;
		height: 30rpx;
		background: #016BA9;
		position: absolute;
		top: 8rpx;
		left: -20rpx;
	}
	.main2{
		padding: 0rpx 45rpx 30rpx;
		margin-top:-30rpx;
		box-sizing: border-box;
		background: #fff;
		overflow: hidden;
	}
	.main2-list{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 315rpx;
		height: 134rpx;
		float: left;
		margin-right: 18rpx;
		margin-bottom: 22rpx;
		padding: 45rpx 20rpx;
		box-sizing: border-box;
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 15rpx 0rpx rgba(4, 0, 0, 0.06);
		border-radius: 16rpx;
	}
	.main2-list-img{
		width: 74rpx;
		height: 74rpx;
	}
	.main2-list-img image{
		width: 100%;
		height: 100%;
	}
	.main2-list:nth-child(2n){
		margin-right: 0;
	}
	.main2-list-text text{
		display: block;
		color: #333333;
		font-size: 24rpx;
	}
	.main2-list-text:first-child{
		font-size: 30rpx;
	}
	.light_main1{
		border-top:solid 10rpx #f2f2f2;
		padding-bottom: 60rpx;
	}
	.light_m1 .item{
		border-radius: 10rpx;
		background-color: rgb(255, 255, 255);
		box-shadow: 0rpx 2rpx 15rpx 0rpx rgba(4, 0, 0, 0.06);
		width: 660rpx;
		margin-left: auto;
		margin-right: auto;
		padding:50rpx 0 ;
		margin-bottom: 24rpx;
	}
		.light_m1 .item .item1{
			width:50%;
			position: relative;
			text-align: center;
			
		}
		.light_m1 .item .item1:nth-child(1):before{
			content:'';
			width:2rpx;
			background: rgb(153, 153, 153);
			position: absolute;
			height: 62rpx;
			top:50%;
			margin-top: -31rpx;
			left:100%;
			opacity: 0.5;
		}
		.light_m1 .item .item1 .num{
			color:#666666;
			font-size:36rpx;
		}
		.light_m1 .item .item1 .num span{
			margin-left: 10rpx;
			font-size:24rpx;
		}
		.light_m1 .item .item1 .tit{
			color:#666666;
			font-size:26rpx;
		}
</style>

<template>
	<view class="content">
		<view class="top">
			<image src="../../static/saoma.png" mode="widthFix"></image>
			<view class="word">
				点击扫码入库
			</view>	
		</view>
		<view class="main auto">
			<view class="item rel">
				<view class="item_abs abs">已扫码</view>
				<view class="item_tit fix">
					<view class="tit fl">
						<image src="../../static/icon1.png" mode="widthFix"></image>
					</view>
					<view class="note fr">仓库1-货架1-货位A</view>
				</view>
				<view class="item_mid fix">
					<view class="item1 fl">
						设备编号：<view class="vmid">LQZHJT-0110004</view>
					</view>
					<view class="item2 fl">
						品牌：<view class="vmid">海康威视\大华</view>
					</view>
					<view class="item1 fl">
						规格型号：<view class="vmid">4寸</view>
					</view>
					<view class="item2 fl">
						设备原值：<view class="vmid">111</view>
					</view>
					<view class="item1 fl">
						使用寿命（年）：<view class="vmid">闲置</view>
					</view>
					<view class="item2 fl">
						计量单位：<view class="vmid">台</view>
					</view>
					<view class="item1 fl">
						登记时间：<view class="vmid">2022-03-21 19:09:51</view>
					</view>
					
				</view>
			</view>
			<view class="item rel">
				<view class="item_abs abs">已扫码</view>
				<view class="item_tit fix">
					<view class="tit fl">
						<image src="../../static/icon1.png" mode="widthFix"></image>
					</view>
					<view class="note fr">仓库1-货架1-货位A</view>
				</view>
				<view class="item_mid fix">
					<view class="item1 fl">
						设备编号：<view class="vmid">LQZHJT-0110004</view>
					</view>
					<view class="item2 fl">
						品牌：<view class="vmid">海康威视\大华</view>
					</view>
					<view class="item1 fl">
						规格型号：<view class="vmid">4寸</view>
					</view>
					<view class="item2 fl">
						设备原值：<view class="vmid">111</view>
					</view>
					<view class="item1 fl">
						使用寿命（年）：<view class="vmid">闲置</view>
					</view>
					<view class="item2 fl">
						计量单位：<view class="vmid">台</view>
					</view>
					<view class="item1 fl">
						登记时间：<view class="vmid">2022-03-21 19:09:51</view>
					</view>
					
				</view>
			</view>
			<view class="item rel">
				<view class="item_abs abs">已扫码</view>
				<view class="item_tit fix">
					<view class="tit fl">
						<image src="../../static/icon1.png" mode="widthFix"></image>
					</view>
					<view class="note fr">仓库1-货架1-货位A</view>
				</view>
				<view class="item_mid fix">
					<view class="item1 fl">
						设备编号：<view class="vmid">LQZHJT-0110004</view>
					</view>
					<view class="item2 fl">
						品牌：<view class="vmid">海康威视\大华</view>
					</view>
					<view class="item1 fl">
						规格型号：<view class="vmid">4寸</view>
					</view>
					<view class="item2 fl">
						设备原值：<view class="vmid">111</view>
					</view>
					<view class="item1 fl">
						使用寿命（年）：<view class="vmid">闲置</view>
					</view>
					<view class="item2 fl">
						计量单位：<view class="vmid">台</view>
					</view>
					<view class="item1 fl">
						登记时间：<view class="vmid">2022-03-21 19:09:51</view>
					</view>
					
				</view>
			</view>
			<view class="item rel">
				<view class="item_abs abs">已扫码</view>
				<view class="item_tit fix">
					<view class="tit fl">
						<image src="../../static/icon1.png" mode="widthFix"></image>
					</view>
					<view class="note fr">仓库1-货架1-货位A</view>
				</view>
				<view class="item_mid fix">
					<view class="item1 fl">
						设备编号：<view class="vmid">LQZHJT-0110004</view>
					</view>
					<view class="item2 fl">
						品牌：<view class="vmid">海康威视\大华</view>
					</view>
					<view class="item1 fl">
						规格型号：<view class="vmid">4寸</view>
					</view>
					<view class="item2 fl">
						设备原值：<view class="vmid">111</view>
					</view>
					<view class="item1 fl">
						使用寿命（年）：<view class="vmid">闲置</view>
					</view>
					<view class="item2 fl">
						计量单位：<view class="vmid">台</view>
					</view>
					<view class="item1 fl">
						登记时间：<view class="vmid">2022-03-21 19:09:51</view>
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
				searchTxt:'',
			}
		},
		onLoad() {

		},
		methods: {
			scancodestorage: function() {
				uni.navigateTo({
					url:"../sweepCodeStorage/sweepCodeStorage"
				})
			},
			search(){
				console.log(this.searchTxt)
			}
		}
	}
</script>

<style lang="less">
	.content{
		background:url(@/static/banyuan.png) no-repeat center top;
		background-size:750rpx;
		padding-top: 1rpx;
		.top{
			border-radius: 20rpx;
			background-color: rgb( 255, 255, 255 );
			box-shadow: 1.5rpx 2.598rpx 7rpx 0rpx rgb( 181, 179, 177 );
			width: 667rpx;
			height: 222rpx;
			margin-left: auto;
			margin-right: auto;
			margin-top: 30px;
			padding-top: 35rpx;
			padding-left: 130rpx;
			image{
				width:150rpx;
				height:150rpx;
				display: inline-block;
				vertical-align: middle;
				margin-right: 90rpx;
			}
			.word{
				color:#016ba9;
				text-decoration: underline;
				display: inline-block;
				vertical-align: middle;
			}
		}
		.main{
			width: 712rpx;
			padding-bottom: 100rpx;
			.item{
				border-radius: 10rpx;
				background-color: rgb( 255, 255, 255 );
				box-shadow: 0rpx 5rpx 10rpx 4rpx rgba( 1, 107, 169 ,.13);
				width: 712rpx;
				height: 358rpx;
				margin-top: 28rpx;
				.item_abs{
					bottom:0;
					right:0;
					background-color: rgb( 165, 218, 248 );
					width: 152rpx;
					height: 50rpx;
					border-radius:10rpx 0 10rpx 0;
					text-align: center;
					line-height:50rpx;
					color:#ffffff;
					font-size:28rpx;
				}
				.item_tit{
					height:89rpx;
					line-height:88rpx;
					padding-left: 30rpx;
					padding-right: 30rpx;
					border-bottom:solid 1rpx #e8ebf2;
					.tit{
						color:#016ba9;
						font-size:32rpx;
						image{
							width:32rpx;
						}
						
					}
					.note{
						color:#999999;
						font-size:26rpx;
					}
				}
				.item_mid{
					padding:25rpx 30rpx;
					line-height:56rpx;
					.item1{
						width:390rpx;
						color:#666666;
						font-size:26rpx;
					}
					.vmid{
						color:#999999;
					}
					.item2{
						width:260rpx;
						color:#666666;
						font-size:26rpx;
					}
				}
			}
		}
	}
</style>

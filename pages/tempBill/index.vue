<template>
	<view class="content">
		<view class="banner">
			<image src="../../static/pic1.jpg" mode="widthFix"></image>
		</view>
		<view class="search fix">
			<input type="text" class="inp1 fl" v-model="searchTxt" placeholder="请输入用户名" placeholder-style="color: #999999;font-size: 28rpx;" />
			<button class="btn1 fr" @click="search">搜索</button>
		</view>
		<view class="main">
			<view class="item">
				<view class="item_top fix">
					<view class="num fl">202203211909516981</view>
					<view class="note fr">待出库</view>
				</view>
				<view class="item_bot">
					<view class="item1 fix">
						<view class="name fl">上级单位</view>
						<view class="cont fr">昔榆公司</view>
					</view>
					<view class="item1 fix">
						<view class="name fl">使用单位</view>
						<view class="cont fr">昔榆一分部</view>
					</view>
					<view class="item1 fix">
						<view class="name fl">检验单编号</view>
						<view class="cont fr">202204061729394144</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="item_top fix">
					<view class="num fl">202203211909516981</view>
					<view class="note fr">待出库</view>
				</view>
				<view class="item_bot">
					<view class="item1 fix">
						<view class="name fl">上级单位</view>
						<view class="cont fr">昔榆公司</view>
					</view>
					<view class="item1 fix">
						<view class="name fl">使用单位</view>
						<view class="cont fr">昔榆一分部</view>
					</view>
					<view class="item1 fix">
						<view class="name fl">检验单编号</view>
						<view class="cont fr">202204061729394144</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="item_top fix">
					<view class="num fl">202203211909516981</view>
					<view class="note fr">待出库</view>
				</view>
				<view class="item_bot">
					<view class="item1 fix">
						<view class="name fl">上级单位</view>
						<view class="cont fr">昔榆公司</view>
					</view>
					<view class="item1 fix">
						<view class="name fl">使用单位</view>
						<view class="cont fr">昔榆一分部</view>
					</view>
					<view class="item1 fix">
						<view class="name fl">检验单编号</view>
						<view class="cont fr">202204061729394144</view>
					</view>
				</view>
			</view>
			<view class="item">
				<view class="item_top fix">
					<view class="num fl">202203211909516981</view>
					<view class="note fr">待出库</view>
				</view>
				<view class="item_bot">
					<view class="item1 fix">
						<view class="name fl">上级单位</view>
						<view class="cont fr">昔榆公司</view>
					</view>
					<view class="item1 fix">
						<view class="name fl">使用单位</view>
						<view class="cont fr">昔榆一分部</view>
					</view>
					<view class="item1 fix">
						<view class="name fl">检验单编号</view>
						<view class="cont fr">202204061729394144</view>
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
	.banner image{
		width:100%;
	}
	.search{
		padding-left: 20rpx;
		padding-right: 20rpx;
		margin-top: -44rpx;
		position: relative;
		z-index:2;
		.inp1{
			border-radius: 8rpx;
			background-color: rgb( 255, 255, 255 );
			box-shadow: 0rpx 5rpx 10rpx 4rpx rgba( 1, 107, 169 ,.13);
			width: 588rpx;
			height: 87rpx;
			padding-left: 80rpx;
			background: url(@/static/fangdajing.png) no-repeat 20rpx center #fff;
			background-size:30rpx 30rpx;
		}
		.btn1{
			border-radius: 8rpx;
			background-color: rgb( 255, 255, 255 );
			box-shadow: 0rpx 5rpx 10rpx 4rpx rgba( 1, 107, 169 ,.13);
			width: 110rpx;
			height: 87rpx;
			line-height:87rpx;
			color:#016ba9;
			font-size:30rpx;
			padding-left: 0;
			padding-right: 0;
		}
	}
	.main{
		padding-top: 25rpx;
		.item{
			width:726rpx;
			height:323rpx;
			background: url(@/static/kuang1.png) no-repeat center center;
			background-size:726rpx 323rpx;
			padding:10rpx 35rpx;
			margin-left: auto;
			margin-right: auto;
			margin-top: 5rpx;
			.item_top{
				height:100rpx;
				padding-top: 30rpx;
				.num{
					color:#fff;
					font-size:24rpx;
					background-color: rgb( 249, 93, 95 );
					height: 40rpx;
					line-hegiht:40rpx;
					border-radius:20rpx;
					padding:0 20rpx;

				}
				.note{
					color:#333333;
					font-size:26rpx;
					margin-right: -5rpx;
				}
			}
			.item_bot{
				padding-top: 22rpx;
				.item1{
					line-height:50rpx;
					color:#666666;
					font-size:26rpx;
					
				}
			}
		}
	}
</style>

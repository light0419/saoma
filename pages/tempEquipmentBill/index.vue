<template>
	<view class="content">
		<view class="top">
			<image src="../../static/saoma.png" mode="widthFix"></image>
			<view class="word">
				点击扫码入库
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
		.top{
			border-radius: 20rpx;
			background-color: rgb( 255, 255, 255 );
			box-shadow: 1.5rpx 2.598rpx 7rpx 0rpx rgb( 181, 179, 177 );
			width: 667rpx;
			height: 222rpx;
		}
	}
</style>

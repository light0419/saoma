<template>
	<view>
		<view class="page">
		  <view class="title">扫码结果</view>
			<view class="result_list">
			  <view v-for="item in list" :key="item" class="result_li">
				{{ item }}
			  </view>
			</view>
			<view style="display: flex;align-items: center;padding-bottom: 30rpx;padding-top: 30rpx;">
				<button type="default" @click="createBarcode">开始扫码</button>
				<button type="default" @click="closeBarcode">关闭扫码</button>
			</view>
			<view class="next" @click="clickNext">下一步</view>
		</view>
	</view>
</template>

<script>
	// import { onReady } from '@dcloudio/uni-app'
	
	let webView = null // webview容器
	let barcode = null // 扫码框
	
	
	export default{
		data () {
			return{
				list:[]
			}
		},
		onLoad(ops) {
			
		},
		methods: {
			// 扫码成功回调
			onmarked(type, result) {
				console.log(result)
			  // 【步骤4】将扫码结果添加到 list 里
			  this.list.push(result)
				console.log(this.list)
			
			  // 【步骤5】1秒后再重新开启扫码
			  setTimeout(() => {
					barcode.start()
			  }, 1000)
			},
			// 创建窗口和扫码控件
			createBarcode() {
				// 【步骤1】判断有没有创建过 webview 容器，如果没有就执行创建操作
				if (!webView) {
					webView = plus.webview.open(
						'',
						'barCodeBox',
						{
							top: '90px',
							width: '100%',
							height: '200px'
						}
					)
					
				}
				// 【步骤2】判断有没有创建过 扫码框，如果没有就执行创建操作
				if(!barcode){
					barcode = plus.barcode.create(
					  'barcode',
					  [plus.barcode.QR], // 只扫二维码
					  {
							top:'0px',
							left:'0px',
							width: '100%',
							height: '200px',
							position: 'static',
							scanbarColor: '#f1c01f',
							frameColor: '#c0ff01'
					  }
					)
				
					barcode.onmarked = this.onmarked // 扫码结果回调函数
				
				  // 【步骤3】将扫码框添加到 webview 里
					
					plus.webview.getWebviewById('barCodeBox').append(barcode)
				}
				
				barcode.start() // 开始扫码
			},
			
			// 关闭扫码
			closeBarcode(){
				// console.log(webView)
				// console.log(barcode)
				setTimeout(() => {
					barcode.close()
			  }, 500)
			},
			clickNext(){
				uni.navigateTo({
					url:"./storageform"
				})
			}
		}
	}
</script>

<style>
	.page {
	  height: 100vh;
	  display: flex;
	  flex-direction: column;
	  box-sizing: border-box;
	  padding: 200px 20rpx 0;
	}
	
	.title {
	  font-size: 30rpx;
	  color: #333;
		margin-top: 50rpx;
	}
	
	.result_list {
	  flex: 1;
	  overflow-y: auto;
	  box-sizing: border-box;
	  padding-top: 20rpx;
	}
	
	.result_li {
	  box-sizing: border-box;
	  margin-bottom: 20rpx;
	  padding: 10rpx 20rpx;
	  border: 1px solid #7298c8;
	  border-radius: 10rpx;
	  font-size: 28rpx;
	}
	.next{
		width: 499rpx;
		height: 76rpx;
		color: #FFFFFF;
		font-size: 33rpx;
		text-align: center;
		line-height: 76rpx;
		margin: 0 auto;
		margin-bottom: 50rpx;
		background: #016BA9;
		border-radius: 38rpx;
	}
</style>

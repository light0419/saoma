<template>
	<view class="content">
		<view class="banner">
			<image src="../../static/pic1.jpg" mode="widthFix"></image>
		</view>
		<view class="search fix">
			<input type="text" class="inp1 fl" v-model="searchTxt" placeholder="请输入用户名" placeholder-style="color: #999999;font-size: 28rpx;" />
			<button class="btn1 fr" @click="search">搜索</button>
		</view>
		<scroll-view scroll-y="true" class="scrollview"  lower-threshold = 100 @scrolltolower='onScrollToLower' :refresher-enabled='true' refresher-background='#F6F6FC' :refresher-triggered='isRefreshing' @refresherpulling='onRefresherPulling'>
			
			<view class="main" v-if="pageType=='in'">
				<view class="item bg1" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">待入库</view>
					</view>
					<view class="item_bot">
						<view class="item1 fix">
							<view class="name fl">接收人</view>
							<view class="cont fr">{{item.tabremark}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">来源</view>
							<view class="cont fr">{{item.source}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">上级单位</view>
							<view class="cont fr">{{item.sysOrgCode}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">使用单位</view>
							<view class="cont fr">{{item.projectdepartment}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">检验单编号</view>
							<view class="cont fr">{{item.checkname}}</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="main" v-if="pageType=='out'">
				<view class="item bg2" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">待出库</view>
					</view>
					<view class="item_bot">
						<view class="item1 fix">
							<view class="name fl">上级单位</view>
							<view class="cont fr">{{item.sysOrgCode}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">使用单位</view>
							<view class="cont fr">{{item.projectdepartment}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">检验单编号</view>
							<view class="cont fr">{{item.checkname}}</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="main" v-if="pageType=='incheck'">
				<view class="item bg3" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">部分检验</view>
					</view>
					<view class="item_bot">
						<view class="item1 fix">
							<view class="name fl">检验类型</view>
							<view class="cont fr">{{item.tabremark}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">上级单位</view>
							<view class="cont fr">{{item.sysOrgCode}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">使用单位</view>
							<view class="cont fr">{{item.projectdepartment}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">检验时间</view>
							<view class="cont fr">{{item.checkname}}</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="main" v-if="pageType=='outcheck'">
				<view class="item bg4" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">待检验</view>
					</view> 
					<view class="item_bot">
						<view class="item1 fix">
							<view class="name fl">检验类型</view>
							<view class="cont fr">{{item.tabremark}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">上级单位</view>
							<view class="cont fr">{{item.sysOrgCode}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">使用单位</view>
							<view class="cont fr">{{item.projectdepartment}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">检验时间</view>
							<view class="cont fr">{{item.checkname}}</view>
						</view>
					</view>
				</view>
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchTxt:'',
				pageType:'',
				dataList:[],
				isRefreshing:false
			}
		},
		onLoad(options) {
			this.pageNo=1;
			if(options.type=='in'){
				this.pageType="in"
				uni.setNavigationBarTitle({
				  title: '待入库单'   //页面标题为路由参数
				})
				let data={
					pageNo:1,
					pageSize:4
				}
				this.$api.getInBillData(data).then(res => {
					console.log(res)
					if(res.code==200){
						this.dataList=res.result.records
						console.log(res.result.records)
						this.setData({
							dataList:res.result.records
						})
					}
				   // 获得数据 
				}).catch(res => {
				　　// 失败进行的操作
				})
			}
			if(options.type=='out'){
				this.pageType="out"
				uni.setNavigationBarTitle({
				  title: '待出库单'   //页面标题为路由参数
				})
				this.$api.getOutBillData().then(res => {
					console.log(res)
					if(res.code==200){
						this.dataList=res.result.records
						console.log(res.result.records)
						this.setData({
							dataList:res.result.records
						})
					}
				   // 获得数据 
				}).catch(res => {
				　　// 失败进行的操作
				})
			}
			if(options.type=='incheck'){
				this.pageType="in"
				uni.setNavigationBarTitle({
				  title: '待入库检验'   //页面标题为路由参数
				})
				let data={
					pageNo:1,
					pageSize:4
				}
				this.$api.getInCheeckBillData(data).then(res => {
					console.log(res)
					if(res.code==200){
						this.dataList=res.result.records
						console.log(res.result.records)
						this.setData({
							dataList:res.result.records
						})
					}
				   // 获得数据 
				}).catch(res => {
				　　// 失败进行的操作
				})
			}
			if(options.type=='outcheck'){
				this.pageType="in"
				uni.setNavigationBarTitle({
				  title: '待入库检验'   //页面标题为路由参数
				})
				let data={
					pageNo:1,
					pageSize:4
				}
				this.$api.getInCheeckBillData(data).then(res => {
					console.log(res)
					if(res.code==200){
						this.dataList=res.result.records
						console.log(res.result.records)
						this.setData({
							dataList:res.result.records
						})
					}
				   // 获得数据 
				}).catch(res => {
				　　// 失败进行的操作
				})
			}
		},
		methods: {
			scancodestorage: function() {
				uni.navigateTo({
					url:"../sweepCodeStorage/sweepCodeStorage"
				})
			},
			search(){
				console.log(this.searchTxt)
			},
			onRefresherPulling(){
				if (!this.isRefreshing) {
					this.isRefreshing = true
					this.getInfo(1);
					setTimeout(()=>{
						this.isRefreshing=false
					},2000)
				}
			},
			async getInfo(pageNum){
				
			},
			//上拉加载下一页
			onScrollToLower (){
				if (this.pageNum >= this.pages) {
					return;
				} else {
					this.getInfo(this.pageNum + 1);
				}
			},
			
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
			background: url(@/static/kuang2.png) no-repeat center center;
			background-size:726rpx 323rpx;
			padding:10rpx 35rpx;
			margin-left: auto;
			margin-right: auto;
			margin-top: 5rpx;
			&:nth-child(1){
				margin-top: -25rpx;
			}
			&.bg1{
				height:427rpx;
				background: url(@/static/kuang1.png) no-repeat center center;
				background-size:726rpx 427rpx;
			}
			&.bg2{
				height:323rpx;
				background: url(@/static/kuang2.png) no-repeat center center;
				background-size:726rpx 323rpx;
			}
			&.bg3{
				height:447rpx;
				background: url(@/static/kuang3.png) no-repeat center center;
				background-size:726rpx 447rpx;
			}
			&.bg4{
				height:375rpx;
				background: url(@/static/kuang4.png) no-repeat center center;
				background-size:726rpx 375rpx;
			}
			.item_top{
				height:100rpx;
				padding-top: 30rpx;
				.num{
					color:#fff;
					font-size:24rpx;
					background-color: rgb( 249, 93, 95 );
					height: 40rpx;
					line-height:36rpx;
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
	.scrollview{
		position: absolute;
		top:390rpx;
		left:0;
		width:100%;
		bottom:0;
	}
</style>

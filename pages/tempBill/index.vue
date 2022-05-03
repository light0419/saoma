<template>
	<view class="content">
		<view class="banner">
			<image src="../../static/pic1.jpg" mode="widthFix"></image>
		</view>
		<view class="search fix">
			<input type="text" class="inp1 fl" v-model="searchTxt" placeholder="请输入单据编号" placeholder-style="color: #999999;font-size: 28rpx;" />
			<button class="btn1 fr" @click="search">搜索</button>
		</view>
		
		<scroll-view scroll-y="true" class="scrollview"  lower-threshold = 100 @scrolltolower='onScrollToLower' :refresher-enabled='true' refresher-background='#F6F6FC' :refresher-triggered='isRefreshing' @refresherpulling='onRefresherPulling'>
			<!-- <view >
				 <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
				            <picker-view-column>
				                <view class="item" v-for="(item,index) in years" :key="index">{{item}}年</view>
				            </picker-view-column>
				            <picker-view-column>
				                <view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
				            </picker-view-column>
				            <picker-view-column>
				                <view class="item" v-for="(item,index) in days" :key="index">{{item}}日</view>
				            </picker-view-column>
							<picker-view-column>
							    <view class="item" v-for="(item,index) in days1" :key="index">{{item}}日</view>
							</picker-view-column>
				        </picker-view>
			</view> -->
			<view class="main" v-if="pageType=='in'">
				<view class="item bg1" @click="toEquBill(item.id)" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">{{item.storagestatus}}</view>
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
				<view class="item bg2" @click="toEquBill(item.id)" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">{{item.storagestatus}}</view>
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
				<view class="item bg3" @click="toEquBill(item.id)" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">{{item.storagestatus}}</view>
					</view>
					<view class="item_bot">
						<view class="item1 fix">
							<view class="name fl">检验类型</view>
							<view class="cont fr">{{item.type_dictText}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">上级单位</view>
							<view class="cont fr">{{item.sysOrgCode}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">使用单位</view>
							<view class="cont fr">{{item.projectdepartment}}</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="main" v-if="pageType=='outcheck'">
				<view class="item bg2" @click="toEquBill(item.id)" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">{{item.storagestatus}}</view>
					</view> 
					<view class="item_bot">
						<view class="item1 fix">
							<view class="name fl">检验类型</view>
							<view class="cont fr">{{item.type_dictText}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">上级单位</view>
							<view class="cont fr">{{item.sysOrgCode}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">使用单位</view>
							<view class="cont fr">{{item.projectdepartment}}</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="main" v-if="pageType=='inware'">
				<view class="item bg4" @click="toEquBill(item.id)" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">{{item.storagestatus}}</view>
					</view> 
					<view class="item_bot">
						<view class="item1 fix">
							<view class="name fl">接收人</view>
							<view class="cont fr">{{item.tabremark_dictText}}</view>
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
							<view class="cont fr">{{item.stockcheckid}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">入库时间</view>
							<view class="cont fr">{{item.storagetime}}</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="main" v-if="pageType=='outware'">
				<view class="item bg5" @click="toEquBill(item.id)" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view class="item_top fix">
						<view class="num fl">{{item.name}}</view>
						<view class="note fr">{{item.storagestatus}}</view>
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
							<view class="cont fr">{{item.stockremovalcheckid}}</view>
						</view>
						<view class="item1 fix">
							<view class="name fl">出库时间</view>
							<view class="cont fr">{{item.stockremovaltime}}</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="main" v-if="pageType=='inwarecheck'">
				<view class="item bg6" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view  @click="toEquBill(item.id)">
						<view class="item_top fix">
							<view class="num fl">{{item.name}}</view>
							<view class="note fr">{{item.storagestatus}}</view>
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
								<view class="cont fr">{{item.name}}</view>
							</view>
							<view class="item1 fix">
								<view class="name fl">入库时间</view>
								<view class="cont fr">{{item.checkouttime}}</view>
							</view>
						</view>
					</view>
					<view class="item_botn">
						生成入库单
					</view>
				</view>
				
			</view>
			<view class="main" v-if="pageType=='outwarecheck'">
				<view class="item bg6" v-for="(item,index) in dataList" :key="index" :data-id="item.id">
					<view @click="toEquBill(item.id)">
						<view class="item_top fix">
							<view class="num fl">{{item.name}}</view>
							<view class="note fr">{{item.storagestatus}}</view>
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
								<view class="cont fr">{{item.name}}</view>
							</view>
							<view class="item1 fix">
								<view class="name fl">出库时间</view>
								<view class="cont fr">{{item.checkouttime}}</view>
							</view>
						</view>
					</view>
					<view class="item_botn">
						生成出库单
					</view>
				</view>
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			// const date = new Date()
			// const years = []
			// const year = date.getFullYear()
			// const months = []
			// const month = date.getMonth() + 1
			// const days = []
			// const day = date.getDate()
			// for (let i = 1990; i <= date.getFullYear(); i++) {
			// 	years.push(i)
			// }
			// for (let i = 1; i <= 12; i++) {
			// 	months.push(i)
			// }
			// for (let i = 1; i <= 31; i++) {
			// 	days.push(i)
			// }
			return {
				searchTxt:'',
				pageType:'',
				dataList:[],
				isRefreshing:false,
				options:{},
				pageNo:1,
				pageSize:4,
				pages:1,
				// title:'123',
				// days1:[1,2,3],
				// years,
				// year,
				// months,
				// month,
				// days,
				// day,
				// value: [9999, month - 1, day - 1],
				// visible: true,
				// indicatorStyle: `height: 50px;`
			}
		},
		onLoad(options) {
			this.pageNo=1;
			this.pageType=options.type;
			this.getListData();
		},
		methods: {
			// bindChange: function (e) {
			// 	const val = e.detail.value
			// 	this.year = this.years[val[0]]
			// 	this.month = this.months[val[1]]
			// 	this.day = this.days[val[2]]
			// 	console.log(e)
			// },
			
			scancodestorage: function() {
				uni.navigateTo({
					url:"../sweepCodeStorage/sweepCodeStorage"
				})
			},
			search(){
				this.pageNo=1;
				this.dataList=[];
				this.getListData()
			},
			getListData(num){
				console.log(this.pageType)
				if(this.pageType=='in'){
					uni.setNavigationBarTitle({
					  title: '待入库单'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						name:this.searchTxt	
					}
					this.$api.getInBillData(data).then(res => {
						console.log(res)
						if(res.code==200){
							let list=this.dataList;
							res.result.records.forEach((item,index)=>{
								list.push(item);
							})
							
							this.pages=res.result.pages;
							this.dataList=list;
						}
					   // 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
				if(this.pageType=='out'){
					uni.setNavigationBarTitle({
					  title: '待出库单'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						name:this.searchTxt	
					}
					this.$api.getOutBillData(data).then(res => {
						console.log(res)
						if(res.code==200){
							let list=this.dataList;
							res.result.records.forEach((item,index)=>{
								list.push(item);
							})
							
							this.pages=res.result.pages;
							this.dataList=list;
						}
					   // 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
				if(this.pageType=='incheck'){
					uni.setNavigationBarTitle({
					  title: '待入库检验'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						name:this.searchTxt,
						type:'入库检验'

					}
					this.$api.getInCheeckBillData(data).then(res => {
						console.log(res)
						if(res.code==200){
							let list=this.dataList;
							res.result.records.forEach((item,index)=>{
								list.push(item);
							})
							console.log(res.result.pages)
							
							this.pages=res.result.pages;
							this.dataList=list;
						}
					   // 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
				if(this.pageType=='outcheck'){
					uni.setNavigationBarTitle({
					  title: '待出库检验'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						name:this.searchTxt,
						type:'出库检验'
					}
					this.$api.getOutCheeckBillData(data).then(res => {
						console.log(res)
						if(res.code==200){
							let list=this.dataList;
							res.result.records.forEach((item,index)=>{
								list.push(item);
							})
							
							this.pages=res.result.pages;
							this.dataList=list;
						}
					   // 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
				if(this.pageType=='inware'){
					uni.setNavigationBarTitle({
					  title: '入库管理'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						name:this.searchTxt,
						storagestatus:'已入库'
					}
					this.$api.getInWareData(data).then(res => {
						console.log(res)
						if(res.code==200){
							let list=this.dataList;
							res.result.records.forEach((item,index)=>{
								list.push(item);
							})
							
							this.pages=res.result.pages;
							this.dataList=list;
						}
					   // 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
				if(this.pageType=='outware'){
					uni.setNavigationBarTitle({
					  title: '出库管理'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						name:this.searchTxt,
						storagestatus:'已出库'
					}
					this.$api.getOutWareData(data).then(res => {
						console.log(res)
						if(res.code==200){
							let list=this.dataList;
							res.result.records.forEach((item,index)=>{
								list.push(item);
							})
							
							this.pages=res.result.pages;
							this.dataList=list;
						}
					   // 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
				if(this.pageType=='inwarecheck'){
					uni.setNavigationBarTitle({
					  title: '设备入库检验'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						name:this.searchTxt,
						type:'入库检验',
						inspectionstatus:'已检验'
					}
					this.$api.getInWareCheckData(data).then(res => {
						console.log(res)
						if(res.code==200){
							let list=this.dataList;
							res.result.records.forEach((item,index)=>{
								list.push(item);
							})
							
							this.pages=res.result.pages;
							this.dataList=list;
						}
					   // 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
				if(this.pageType=='outwarecheck'){
					uni.setNavigationBarTitle({
					  title: '设备出库检验'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						name:this.searchTxt,
						type:'出库检验',
						inspectionstatus:'已检验'
					}
					this.$api.getInWareCheckData(data).then(res => {
						console.log(res)
						if(res.code==200){
							let list=this.dataList;
							res.result.records.forEach((item,index)=>{
								list.push(item);
							})
							
							this.pages=res.result.pages;
							this.dataList=list;
						}
					   // 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
			},
			onRefresherPulling(){
				if (!this.isRefreshing) {
					this.isRefreshing = true

					setTimeout(()=>{
						this.isRefreshing=false
					},2000)
				}
			},
		
			//上拉加载下一页
			onScrollToLower (){
				
				console.log(this.pageNo,this.pages)
				if (this.pageNo >= this.pages) {
					return;
				} else {
					console.log(11)
					this.pageNo=this.pageNo+1;
					
					this.getListData();
				}
			},
			//去设备清单页面
			toEquBill(id){
				uni.navigateTo({
					url:"../tempEquipmentBill/index?type="+this.pageType+"&id="+id
				})
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
			&.bg4{
				height:477rpx;
				background: url(@/static/kuang5.png) no-repeat center center;
				background-size:726rpx 477rpx;
			}
			&.bg5{
				height:374rpx;
				background: url(@/static/kuang6.png) no-repeat center center;
				background-size:726rpx 374rpx;
			}
			&.bg6{
				height:447rpx;
				background: url(@/static/kuang7.png) no-repeat center center;
				background-size:726rpx 447rpx;
			}
			.item_botn{
				color:#016ba9;
				font-size:28rpx;
				text-align: center;
				line-height:60rpx;
				margin-top: 30rpx;
			}
			// &.bg3{
			// 	height:323rpx;
			// 	background: url(@/static/kuang2.png) no-repeat center center;
			// 	background-size:726rpx 323rpx;
			// }
			// &.bg4{
			// 	height:375rpx;
			// 	background: url(@/static/kuang4.png) no-repeat center center;
			// 	background-size:726rpx 375rpx;
			// }
			.item_top{
				height:100rpx;
				padding-top: 30rpx;
				.num{
					color:#fff;
					font-size:24rpx;
					background-color: rgb( 249, 93, 95 );
					height: 40rpx;
					line-height:40rpx;
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
		.picker-view {
			width: 750rpx;
			height: 600rpx;
			margin-top: 20rpx;
		}
		.item {
			height: 50px;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
</style>

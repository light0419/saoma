<template>
	<view class="storageform">
		<view class="listgroup">
			<view class="listItem flx">
				<text>单据编号</text>
				<input type="text" value="" disabled="true" />
			</view>
			<view class="listItem flx" >
				<text>接收人</text>
				<input type="text" value="" disabled="true" />
			</view>
			<view class="listItem flx">
				<text>来源</text>
				<input type="text" value="回收设备" disabled="true" />
			</view>
			<view>
				<picker mode="multiSelector" :value="dateTime" @change="changeDateTime"  @columnchange="changeDateTimeColumn" :range="dateTimeArray">
					<view class='listItem flx'>
						<text>入库时间</text>
						<view class="otherCheck">{{timeStr}}</view>
					</view> 
				</picker>
			</view>
			<view>
				<picker @change="examinationType" :value="index" :range="list" range-key="name">
					<view class="listItem flx">
						<text>使用单位</text>
						<view>{{typeSelect}}</view>
					</view>
				</picker>
			</view>
		</view>
	</view>
</template>

<script>
	const { dateTimePicker,getMonthDay,generateTimeStr} = require('../../untils/dateTimePicker.js');
	export default {
		data(){
			return{
				list:["风光互补","前置摄像头"],
				index:0,
				typeSelect:"23",
				
				dateTime: null,
				dateTimeArray: null,
				startYear: 2000,
				timeStr:''
			}
		},
		onLoad() {
			this.initTime()
		},
		methods:{
			// 下拉选择
			examinationType:function(e) {
				this.index= e.target.value;
				this.typeSelect = this.list[this.index]
			},
			// 入库时间
			initTime(){
				let date = new Date();
				let endYear = date.getFullYear();
				// 获取完整的年月日 时分秒，以及默认显示的数组
				let obj = dateTimePicker(this.startYear, endYear);
				// 精确到分的处理，将数组的秒去掉
				// let lastArray = obj.dateTimeArray.pop();
				// let lastTime = obj.dateTime.pop();
 
				this.dateTimeArray=obj.dateTimeArray
				this.dateTime=obj.dateTime
			},
			changeDateTime(e) {
				this.dateTime = e.detail.value;
				this.timeStr= generateTimeStr(this.dateTimeArray,this.dateTime);
				//ios时间不能用'-'解析成时间戳
			},
			/*年,月切换时重新更新计算*/
			changeDateTimeColumn(e) {
				//let {id} = e.target;
				let {column,value} = e.detail;
				if(column==0 || column==1){
					//直接修改数组下标视图不更新,用深拷贝之后替换数组
					let dateTime = JSON.parse(JSON.stringify(this.dateTime));
					let dateTimeArray = JSON.parse(JSON.stringify(this.dateTimeArray));
					dateTime[column] = value;
					dateTimeArray[2] = getMonthDay(dateTimeArray[0][dateTime[0]], dateTimeArray[1][dateTime[1]]);
					this.dateTime = dateTime;
					this.dateTimeArray = dateTimeArray;
				}
			},
		}
	}
</script>

<style>
	@import url("../../components/common");
	.storageform{
		width: 100%;
		height: 100vh;
		padding: 0 24rpx;
		background: #fff;
	}
	.listItem{
		width: 100%;
		height: 129rpx;
		color: #666;
		font-size: 28rpx;
		border-bottom: 2rpx solid #F7F7FB;
	}
	
</style>

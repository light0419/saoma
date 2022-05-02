<template>
	<view class="content">
		<view class="top" @click="saoma">
			<image src="../../static/saoma.png" mode="widthFix"></image>
			<view class="word" v-if="pageType=='in'">
				点击扫码入库
			</view>	
			<view class="word" v-else-if="pageType=='out'">
				点击扫码出库
			</view>	
			<view class="word" v-else>
				点击扫码检验
			</view>	
		</view>
		
		<!-- {{codeResult}} -->
		<scroll-view scroll-y="true" class="scrollview"  lower-threshold = 100 @scrolltolower='onScrollToLower' :refresher-enabled='true' refresher-background='#F6F6FC' :refresher-triggered='isRefreshing' @refresherpulling='onRefresherPulling'>
			<view class="main auto" v-if="pageType=='in'">
				<view class="item rel" v-for="(item,index) in dataList" :key="index" @click="selectEquipData(item)">
					<view class="item_abs abs">{{item.facilitystatus}}</view>
					<view class="item_tit fix">
						<view class="tit fl">
							<image src="../../static/icon1.png" mode="widthFix"></image>
							{{item.facilityname}}
						</view>
						<view class="note fr">{{item.warehouse}}</view>
					</view>
					<view class="item_mid fix">
						<view class="item1 fl">
							设备编号：<view class="vmid">{{item.numeration}}</view>
						</view>
						<view class="item2 fl">
							品牌：<view class="vmid">{{item.brand}}</view>
						</view>
						<view class="item3 fl">
							规格型号：<view class="vmid">{{item.specifications}}</view>
						</view>
						
						<view class="item1 fl">
							使用寿命（年）：<view class="vmid">{{item.servicelife}}</view>
						</view>
						<view class="item2 fl">
							设备原值：<view class="vmid">{{item.equipmentoriginalvalue}}</view>
						</view>
						
						<view class="item1 fl">
							登记时间：<view class="vmid">{{item.registrationtime}}</view>
						</view>
						<view class="item2 fl">
							计量单位：<view class="vmid">{{item.measuringunit}}</view>
						</view>
						
					</view>
				</view>
				
			</view>
			<view class="main auto" v-if="pageType=='out'">
				<view class="item rel" v-for="(item,index) in dataList" :key="index" @click="selectEquipData(item)">
					<view class="item_abs abs">{{item.facilitystatus}}</view>
					<view class="item_tit fix">
						<view class="tit fl">
							<image src="../../static/icon1.png" mode="widthFix"></image>
							{{item.facilityname}}
						</view>
						<view class="note fr">{{item.warehouse}}</view>
					</view>
					<view class="item_mid fix">
						<view class="item1 fl">
							设备编号：<view class="vmid">{{item.numeration}}</view>
						</view>
						<view class="item2 fl">
							品牌：<view class="vmid">{{item.brand}}</view>
						</view>
						<view class="item3 fl">
							规格型号：<view class="vmid">{{item.specifications}}</view>
						</view>
						
						<view class="item1 fl">
							使用寿命（年）：<view class="vmid">{{item.servicelife}}</view>
						</view>
						<view class="item2 fl">
							设备原值：<view class="vmid">{{item.equipmentoriginalvalue}}</view>
						</view>
						
						<view class="item1 fl">
							登记时间：<view class="vmid">{{item.registrationtime}}</view>
						</view>
						<view class="item2 fl">
							计量单位：<view class="vmid">{{item.measuringunit}}</view>
						</view>
						
					</view>
				</view>
				
			</view>
			<view class="main auto" v-if="pageType=='incheck'">
				<view class="item rel" v-for="(item,index) in dataList" :key="index" @click="selectEquipData(item)">
					<view class="item_abs abs">{{item.facilitystatus}}</view>
					<view class="item_tit fix">
						<view class="tit fl">
							<image src="../../static/icon1.png" mode="widthFix"></image>
							{{item.facilityname}}
						</view>
						<view class="note fr">{{item.warehouse}}</view>
					</view>
					<view class="item_mid fix">
						<view class="item1 fl">
							设备编号：<view class="vmid">{{item.numeration}}</view>
						</view>
						<view class="item2 fl">
							品牌：<view class="vmid">{{item.brand}}</view>
						</view>
						<view class="item3 fl">
							规格型号：<view class="vmid">{{item.specifications}}</view>
						</view>
						
						<view class="item1 fl">
							使用寿命（年）：<view class="vmid">{{item.servicelife}}</view>
						</view>
						<view class="item2 fl">
							设备原值：<view class="vmid">{{item.equipmentoriginalvalue}}</view>
						</view>
						
						<view class="item1 fl">
							登记时间：<view class="vmid">{{item.registrationtime}}</view>
						</view>
						<view class="item2 fl">
							计量单位：<view class="vmid">{{item.measuringunit}}</view>
						</view>
						
					</view>
				</view>
				
			</view>
			<view class="main auto" v-if="pageType=='outcheck'">
				<view class="item rel" v-for="(item,index) in dataList" :key="index" @click="selectEquipData(item)">
					<view class="item_abs abs">{{item.facilitystatus}}</view>
					<view class="item_tit fix">
						<view class="tit fl">
							<image src="../../static/icon1.png" mode="widthFix"></image>
							{{item.facilityname}}
						</view>
						<view class="note fr">{{item.warehouse}}</view>
					</view>
					<view class="item_mid fix">
						<view class="item1 fl">
							设备编号：<view class="vmid">{{item.numeration}}</view>
						</view>
						<view class="item2 fl">
							品牌：<view class="vmid">{{item.brand}}</view>
						</view>
						<view class="item3 fl">
							规格型号：<view class="vmid">{{item.specifications}}</view>
						</view>
						
						<view class="item1 fl">
							使用寿命（年）：<view class="vmid">{{item.servicelife}}</view>
						</view>
						<view class="item2 fl">
							设备原值：<view class="vmid">{{item.equipmentoriginalvalue}}</view>
						</view>
						
						<view class="item1 fl">
							登记时间：<view class="vmid">{{item.registrationtime}}</view>
						</view>
						<view class="item2 fl">
							计量单位：<view class="vmid">{{item.measuringunit}}</view>
						</view>
						
					</view>
				</view>
				
			</view>
		</scroll-view>
		<!-- <view class="main_bot">
			<view class="main_btn" v-if="pageType=='in'">
				确认入库
			</view>
			<view class="main_btn" v-if="pageType=='out'">
				确认出库
			</view>
			<view class="main_btn" v-if="pageType=='incheck'">
				确认检验
			</view>
			<view class="main_btn" v-if="pageType=='oucheck'">
				确认检验
			</view>
		</view> -->
		<!-- 扫码入库弹窗 -->
		<view class="tk_hsbtm" v-if="tkshow" @click="hideTk"></view>
		<view class="tk_saoma1 tk_public" v-if="tkshow1">
			<view class="tk_close" @click="hideTk"></view>
			<view class="tit">
				<image src="../../static/word_smcg.png" mode="widthFix"></image>
			</view>
			<view class="cont">
				<view class="select" v-for="(item,index) in wareList" :key="index">
					<picker class="picker" @change="e=>bindPickerChange(e,index)" :value="item.arrIndex" :range="item.list" :range-key="'label'">
						<view class="uni-input">{{item.list[item.arrIndex].label}}</view>
					</picker>
				</view>
			</view>
			<view class="bot fix">
				<view class="btn1 fl" @click="submitInWare">完成</view>
				<view class="btn2 fr" @click="saoma">扫下一个</view>
			</view>
		</view>
		<view class="tk_saoma2 tk_public" v-if="tkshow2">
			<view class="tk_close" @click="hideTk"></view>
			<view class="tit">
				<image src="../../static/word_smcg.png" mode="widthFix"></image>
			</view>
			<view class="cont">
				<textarea class="text1" @input="outWareInput" :value="outWareText" placeholder-style="color:#666" placeholder="请输入出库说明："/>
			</view>
			<view class="bot fix">
				<view class="btn1 fl" @click="submitOutWare">完成</view>
				<view class="btn2 fr" @click="saoma">扫下一个</view>
			</view>
		</view>
		<view class="tk_saoma3 tk_public" v-if="tkshow3">
			<view class="tk_close" @click="hideTk"></view>
			<view class="tit">
				<image src="../../static/word_drkjy.png" v-if="pageType=='incheck'" mode="widthFix"></image>
				<image src="../../static/word_dckjy.png" v-if="pageType=='outcheck'" mode="widthFix"></image>
			</view>
			<view class="cont fix">
				<view class="item fl item1">设备名称：{{selectEquip.facilityname}}</view>
				<view class="item fl item1">{{selectEquip.warehouse}}</view>
				<view class="item fl item1">品牌：{{selectEquip.brand}}</view>
				<view class="item fl item1">设备原值：{{selectEquip.equipmentoriginalvalue}}</view>
				<view class="item fl item1">使用寿命（年）：{{selectEquip.servicelife}}</view>
				<view class="item fl item1">计量单位：{{selectEquip.measuringunit}}</view>
				<view class="item fl item2">规格型号：{{selectEquip.specifications}}</view>
				<view class="item fl item2">设备编号：{{selectEquip.numeration}}</view>
				<view class="item fl item2">登记时间：{{selectEquip.registrationtime}}</view>
			</view>
			<view class="f_radio fix tc">
				<view class="item dib" @click="changeRadio(1)">
					<image src="../../static/radio2.png" v-if="curRadio==1" class="vmid" mode="widthFix"></image>
					<image src="../../static/radio1.png" v-else class="vmid" mode="widthFix"></image>
					检验通过
				</view>
				<view class="item dib" @click="changeRadio(0)">
					<image src="../../static/radio2.png" v-if="curRadio==0" class="vmid" mode="widthFix"></image>
					<image src="../../static/radio1.png" v-else class="vmid" mode="widthFix"></image>
					检验不通过
				</view>
			</view>
			<textarea class="text1" @input="outWareInput" v-if="curRadio==0" :value="outWareText" placeholder-style="color:#666" placeholder="说明："/>

			<view class="bot fix">
				<view class="btn1 fl" @click="submitCheckWare">完成</view>
				<view class="btn2 fr" @click="saoma">扫下一个</view>
			</view>
		</view>
		<view class="tk_succees tk_public" v-if="tkSuccessShow" >
			<view v-if="pageType=='in'">
				<view class="tk_close" @click="hideTk"></view>
				<view class="tit">
					<image src="../../static/word_rkwc.png" mode="widthFix"></image>
				</view>
				<view class="cont">
					<img src="../../static/duigou.png" mode="widthFix" class="vmid" alt="">
					确认入库提交完毕!
				</view>
				
			</view>
			<view v-if="pageType=='out'">
				<view class="tk_close" @click="hideTk"></view>
				<view class="tit">
					<image src="../../static/word_ckwc.png" mode="widthFix"></image>
				</view>
				<textarea class="text1" @input="outWareInput" :value="outWareText" placeholder-style="color:#666" placeholder="请输入出库说明："/>
				<view class="cont1">
					<img src="../../static/duigou.png" mode="widthFix" class="vmid" alt="">
					确认出库提交完毕!
				</view>
				
			</view>
			<view v-if="pageType=='incheck'">
				<view class="tk_close" @click="hideTk"></view>
				<view class="tit">
					<image src="../../static/word_rkjywc.png" mode="widthFix"></image>
				</view>
				<view class="cont">
					<img src="../../static/duigou.png" mode="widthFix" class="vmid" alt="">
					确认入库检验提交完毕!
				</view>
				
			</view>
			<view v-if="pageType=='outcheck'">
				<view class="tk_close" @click="hideTk"></view>
				<view class="tit">
					<image src="../../static/word_ckjywc.png" mode="widthFix"></image>
				</view>
				<view class="cont">
					<img src="../../static/duigou.png" mode="widthFix" class="vmid" alt="">
					确认出库检验提交完毕!
				</view>
				
			</view>
			<view class="btn auto" @click="hideTk">
				完成
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// searchTxt:'',
				isRefreshing:false,
				pageType:'',
				dataList:[],
				curId:'',
				codeResult:'12312',
				pageNo:1,
				pageSize:4,
				pages:1,
				arrIndex:0,
				selectEquip:{},
				tkSuccessShow:false,
				outWareText:'',//出库说明
				curRadio:1,//  0 检验不通过   1 检验通过
				//扫码入库的弹窗
				tkshow:false,
				tkshow1:false,
				tkshow2:false,
				tkshow3:false,
				array:[
					{
						label:"aa1",
						value:'111'
					},
					{
						label:"aa2",
						value:'222'
					},
					{
						label:"aa3",
						value:'333'
					},
					{
						label:"aa4",
						value:'444'
					},
					

				],
				wareList:[
					{
						arrIndex:0,
						list:[
							{
								label:"aa1",
								value:'111'
							},
							{
								label:"aa2",
								value:'222'
							},
							{
								label:"aa3",
								value:'333'
							},
							{
								label:"aa4",
								value:'444'
							},
						]
					}
				]
			}
		},
		onLoad(options) {
			this.pageType=options.type
			this.curId=options.id
			this.getData();
			this.getParentWareList()
		},
		methods: {
			// scancodestorage: function() {
			// 	uni.navigateTo({
			// 		url:"../sweepCodeStorage/sweepCodeStorage"
			// 	})
			// },
			// search(){
			// 	console.log(this.searchTxt)
			// }
			//仓库pickerchange
			
			//获取具体数据
			getData(init){
				if(init){
					this.dataList=[];
				}
				if(this.pageType=='in'){
					uni.setNavigationBarTitle({
					  title: '入库设备清单'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						id:this.curId,
						// isstorage:'1'
					}
					this.$api.getInEquBillData(data).then(res => {
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
					  title: '出库设备清单'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						id:this.curId,
						isstockremoval:'1'
					}
					this.$api.getOutEquBillData(data).then(res => {
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
					  title: '待入库检验清单'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						id:this.curId,
						ischeck:'1'
					}
					this.$api.getInCheckEquBillData(data).then(res => {
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
				if(this.pageType=='outcheck'){
					uni.setNavigationBarTitle({
					  title: '待出库检验清单'   //页面标题为路由参数
					})
					let data={
						pageNo:this.pageNo,
						pageSize:this.pageSize,
						id:this.curId,
						ischeck:'1'
					}
					this.$api.getOutCheckEquBillData(data).then(res => {
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
			saoma(){
				let that=this;
				uni.scanCode({
					onlyFromCamera: true,
					autoDecodeCharset:true,
					scanType: ['barCode','qrCode'],
					success: function (res) {
						that.codeResult=res.result;
						let data={
							number:res.result
							// isstorage:'1'
						}
						that.$api.getEquipDataByNum(data).then(res => {
							console.log(res)
							if(res.code==200){
								that.selectEquip=res.result[0];
								that.showTk();
							}
						// 获得数据 
						}).catch(res => {
						　　// 失败进行的操作
							uni.showToast({
								title: '扫码失败，请重试！',
								duration: 2000
							});
						})	
						
					}
				});
				// let data={
				// 	number:'1651126633762418'
				// 	// isstorage:'1'
				// }
				// that.$api.getEquipDataByNum(data).then(res => {
				// 	console.log(res)
				// 	if(res.code==200){
				// 		this.selectEquip=res.result[0];
				// 		this.showTk();

				// 	}
				// // 获得数据 
				// }).catch(res => {
				// 　　// 失败进行的操作
				// })	
				// that.showTk();
			},
			selectEquipData(item){

				this.selectEquip=item;
				this.wareList.length=1;
				this.wareList[0].arrIndex=0;
				this.showTk();
			},
			showTk(){
				if(this.pageType=='in'){
					this.tkshow=true;
					this.tkshow1=true;
				}
				if(this.pageType=='out'){
					this.tkshow=true;
					this.tkshow2=true;
				}
				if(this.pageType=='incheck'||this.pageType=="outcheck"){
					this.tkshow=true;
					this.tkshow3=true;
				}
			},
			hideTk(){
				this.tkshow=false;
				this.tkshow1=false;
				this.tkshow2=false;
				this.tkshow3=false;
				this.tkshow4=false;
				this.tkSuccessShow=false;
				this.outWareText='';
				this.curRadio=1;
			},
			bindPickerChange(e,index){
				this.wareList[index].arrIndex = e.target.value   //取其下标
				let item=this.wareList[index].list[e.target.value];
				if(item.hasChild=='1'){
					this.getChildWareList(item.value,index);
				}
				else{
					this.wareList.length=index+1;
				}
				// this.getChildWareList(e);
			},
			getParentWareList(){
				let data1={
					pageNo:1,
					pageSize:1000,
				}
				this.$api.getParentWareList(data1).then(res => {
					if(res.code==200){
						let list=[{
							value:'0',
							label:'请选择',
							hasChild:'0'
						}];
						if(res.result.records.length){
							res.result.records.forEach(item=>{
								list.push({
									value:item.id,
									label:item.name,
									hasChild:item.hasChild
								})
							})
						}
						this.wareList[0].list=list;
					}
					// 获得数据 
				}).catch(res => {
				　　// 失败进行的操作
				})
			},
			getChildWareList(id,index){
				let that=this;
				let data={
					pid:id
				}
				that.$api.getChildWareList(data).then(res => {
					console.log(res)
					if(res.code==200){
						let list=[{
							value:'0',
							label:'请选择',
							hasChild:'0'
						}];
						if(res.result.records.length){
							res.result.records.forEach(item=>{
								list.push({
									value:item.id,
									label:item.name,
									hasChild:item.hasChild
								})
							})
						}
						if(this.wareList.length>=parseInt(index)+2){
							this.wareList[parseInt(index)+1].arrIndex=0;
							this.wareList[parseInt(index)+1].list=list;
						}
						else{
							this.wareList.push({
								arrIndex:0,
								list:list
							})
						}
						// if(this.wareList[this.wareList.length-1].list[0].hasChild){
						// 	this.getChildWareList(this.wareList[this.wareList.length-1].list[0].value,index+1)
						// }
					}
				// 获得数据 
				}).catch(res => {
				　　// 失败进行的操作
					
				})	
			},
			//出库说明文本框输入
			outWareInput(e){
				this.outWareText=e.detail.value;
			},
			//点击切换检验状态是否通过
			changeRadio(i){
				this.curRadio=i;
			},
			// 待入库弹窗点击完成
			submitInWare(){
				let wareId='';
				let wareList=this.wareList;
				if(wareList[wareList.length-1].arrIndex==0){
					uni.showToast({
						title: '请选择仓库',
						icon:'none',
						duration: 2000
					});
				}
				else{
					wareId=wareList[wareList.length-1].list[wareList[wareList.length-1].arrIndex].value
					let id=this.selectEquip.id;
					let data={
						id:id,
						warehouseid:wareId
					}
					this.$api.submitInWare(data).then(res => {
						if(res.code==200){
							uni.showToast({
								title: '操作成功！',
								duration: 2000
							});
							this.tkshow1=false;
							this.tkSuccessShow=true;
							this.getData(true);
						}
						// 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
			},
			//待出库弹窗点击完成
			submitOutWare(){
			
				if(this.outWareText==''){
					uni.showToast({
						title: '请输入出库说明',
						icon:'none',
						duration: 2000
					});
				}
				else{
					let id=this.selectEquip.id;
					let data={
						id:id,
						stockremovalexplain:this.outWareText
					}
					this.$api.submitOutWare(data).then(res => {
						if(res.code==200){
							uni.showToast({
								title: '操作成功！',
								duration: 2000
							});
							this.tkshow2=false;
							this.tkSuccessShow=true;
							this.getData(true);
						}
						// 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
			},
			//待入库和待出库弹窗点击完成
			submitCheckWare(){
				if(this.outWareText==''&&this.curRadio==0){
					uni.showToast({
						title: '请输入说明',
						icon:'none',
						duration: 2000
					});
				}
				else{
					let type='';
					if(this.pageType=='incheck'){
						type="入库检验"
					}
					else{
						type="出库检验"
					}
					let id=this.selectEquip.id;
					let data={
						id:id,
						type:type,
						inspectionstatus:this.curRadio==0?'检验不通过':'检验通过',
						reason:this.outWareText
					}
					this.$api.submitCheckWare(data).then(res => {
						if(res.code==200){
							uni.showToast({
								title: '操作成功！',
								duration: 2000
							});
							this.tkshow3=false;
							this.tkSuccessShow=true;
							this.getData(true);
						}
						// 获得数据 
					}).catch(res => {
					　　// 失败进行的操作
					})
				}
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
		.main_bot{
			height:130rpx;
			background-color: #fff;
			position:fixed;
			bottom:0;
			left:0;
			width:100%;
			.main_btn{
				border-radius: 10rpx;
				background-color: rgb(1, 107, 169);
				width: 626rpx;
				height: 90rpx;
				text-align: center;
				line-height:90rpx;
				color:#fff;
				font-size:36rpx;
				position:absolute;
				top:50%;
				left:50%;
				margin-top: -45rpx;
				margin-left: -313rpx;
			}
		}
		.main_btn{
			
		}
		.main{
			width: 712rpx;
			padding-bottom: 20rpx;
			// padding-bottom: 150rpx;
			.item{
				border-radius: 10rpx;
				background-color: rgb( 255, 255, 255 );
				box-shadow: 0rpx 5rpx 10rpx 4rpx rgba( 1, 107, 169 ,.13);
				width: 712rpx;
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
							position:relative;
							top:4rpx;
							margin-right: 10rpx;
						}
						
					}
					.note{
						color:#999999;
						font-size:26rpx;
					}
				}
				.item_mid{
					padding:25rpx 30rpx 50rpx;
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
					.item3{
						width:100%;
						color:#666666;
						font-size:26rpx;
					}
				}
			}
		}
	}
	.tk_hsbtm{
		background:rgba(0,0,0,.6);
		width:100%;
		height:100%;
		position: fixed;
		top:0;
		left:0;
		z-index:5;
	}
	.tk_public{
		width:700rpx;
		position: fixed;
		top:50%;
		left:50%;
		-webkit-transform:translate(-50%,-50%);
		transform:translate(-50%,-50%);
		z-index:6;
		background: url(/static/huakuang1.png) no-repeat center top #fff;
		background-size:700rpx;
		border-radius:10rpx;
		padding-bottom: 75rpx;
		
	}
	.tk_close{
		width:80rpx;
		height:80rpx;
		background: url(/static/chacha.png) no-repeat center center;
		background-size:80rpx 80rpx;
		position: absolute;
		bottom:-100rpx;
		left:50%;
		margin-left: -40rpx;
	}
	.tk_saoma1{
		.tit{
			text-align: center;
			padding-top: 77rpx;
			padding-bottom: 150rpx;
			image{
				width:337rpx;
				height:79rpx;
			}
		}
		.cont{
			padding-left: 55rpx;
			padding-right: 55rpx;
			.select{
				border-radius: 10rpx;
				background:url(/static/sanjiao.png) no-repeat 95% center rgb(255, 255, 255);
				box-shadow: 0rpx 5rpx 9.6rpx 0.4rpx rgba(1, 107, 169, 0.33);
				width: 590rpx;
				height: 86rpx;
				margin-bottom: 15rpx;
				
				.picker{
					padding-left: 26px;
					line-height:86rpx;
					font-size:32rpx;
				}
			}
		}
		.bot{
			padding-left: 55rpx;
			padding-right: 55rpx;
			padding-top:70rpx;
			.btn1{
				border-radius: 20rpx;
				background-color: rgb(242, 242, 242);
				width: 280rpx;
				height: 72rpx;
				text-align: center;
				line-height:72rpx;
				color:#666666;
				font-size:30rpx;
			}
			.btn2{
				border-radius: 20rpx;
				background-color: #016ba9;
				width: 280rpx;
				height: 72rpx;
				text-align: center;
				line-height:72rpx;
				color:#fff;
				font-size:30rpx;
			}
		}
	}
	.tk_saoma2{
		.tit{
			text-align: center;
			padding-top: 77rpx;
			padding-bottom: 150rpx;
			image{
				width:337rpx;
				height:79rpx;
			}
		}
		.cont{
			.text1{
				border-radius: 10rpx;
				box-shadow: 0rpx 5rpx 9.6rpx 0.4rpx rgba(1, 107, 169, 0.13);
				width: 590rpx;
				height: 160rpx;
				display: block;
				margin:0 auto;
				padding:15rpx 25rpx;
			}
		}
		.bot{
			padding-left: 55rpx;
			padding-right: 55rpx;
			padding-top:70rpx;
			.btn1{
				border-radius: 20rpx;
				background-color: rgb(242, 242, 242);
				width: 280rpx;
				height: 72rpx;
				text-align: center;
				line-height:72rpx;
				color:#666666;
				font-size:30rpx;
			}
			.btn2{
				border-radius: 20rpx;
				background-color: #016ba9;
				width: 280rpx;
				height: 72rpx;
				text-align: center;
				line-height:72rpx;
				color:#fff;
				font-size:30rpx;
			}
		}
	}
	.tk_saoma3{
		.tit{
			text-align: center;
			padding-top: 77rpx;
			padding-bottom: 100rpx;
			image{
				width:434rpx;
				height:83rpx;
			}
		}
		.cont{
			padding-left: 50rpx;
			padding-right: 50rpx;
			color:#666666;
			font-size:26rpx;
			line-height:56rpx;
			.item1{
				width:50%;
				height:56rpx;
				overflow: hidden;
			}
			.item2{
				width:100%;
				height:56rpx;
				overflow: hidden;
			}
		}
		.f_radio{
			color:#333333;
			font-size:30rpx;
			padding-top: 30rpx;
			.item{
				width:45%;
			}
			.vmid{
				width:39rpx;
				margin-right: 15rpx;
			}
		}
		.text1{
			border-radius: 10rpx;
			box-shadow: 0rpx 5rpx 9.6rpx 0.4rpx rgba(1, 107, 169, 0.13);
			width: 590rpx;
			height: 160rpx;
			display: block;
			margin:0 auto;
			margin-top: 30rpx;
			padding:15rpx 25rpx;
		}
		.bot{
			padding-left: 55rpx;
			padding-right: 55rpx;
			padding-top:70rpx;
			.btn1{
				border-radius: 20rpx;
				background-color: rgb(242, 242, 242);
				width: 280rpx;
				height: 72rpx;
				text-align: center;
				line-height:72rpx;
				color:#666666;
				font-size:30rpx;
			}
			.btn2{
				border-radius: 20rpx;
				background-color: #016ba9;
				width: 280rpx;
				height: 72rpx;
				text-align: center;
				line-height:72rpx;
				color:#fff;
				font-size:30rpx;
			}
		}
	}
	.tk_succees{
		.tit{
			text-align: center;
			padding-top: 77rpx;
			padding-bottom: 150rpx;
			image{
				width:330rpx;
				height:83rpx;
			}
		}
		.text1{
			border-radius: 10rpx;
			box-shadow: 0rpx 5rpx 9.6rpx 0.4rpx rgba(1, 107, 169, 0.13);
			width: 590rpx;
			height: 160rpx;
			display: block;
			margin:0 auto;
			padding:15rpx 25rpx;
		}
		.cont1{
			color:#666666;
			font-size:40rpx;
			text-align: center;
			padding-top: 40rpx;
			padding-bottom: 40rpx;
			.vmid{
				width:50rpx;
				margin-right: 15rpx;
			}
		}
		.cont{
			color:#666666;
			font-size:40rpx;
			text-align: center;
			padding-top: 100rpx;
			padding-bottom: 130rpx;
			.vmid{
				width:50rpx;
				margin-right: 15rpx;
			}
		}
		.btn{
			border-radius: 20rpx;
			background-color: rgb(1, 107, 169);
			width: 280rpx;
			height: 72rpx;
			text-align: center;
			line-height:72rpx;
			color:#fff;
			font-size:30rpx;
		}
	}
</style>

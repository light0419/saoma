import request from '@/common/request.js'
import { formatGetUri } from '@/common/util.js'

const api = {}
const PORT1 = 'baseinfo'
// POST请求方式
console.log(request,'sss')

//必须大写，为了兼容其他应用
// GET请求方式
//api.register = params => request.globalRequest(`${PORT1}/mobile/signUp${formatGetUri(params)}`, 'GET ',{})
//必须大写，为了兼容其他应用


//获取待入库单列表
api.getInBillData = params => request.globalRequest('/jeecg-boot/storageinformation/storageInformation/listbystatus', 'GET', params)

//获取待出库单列表
api.getOutBillData = params => request.globalRequest('/jeecg-boot/stockremovalinformation/stockRemovalInformation/listbystatus', 'GET', params)

//获取待入库检验单列表
api.getInCheeckBillData = params => request.globalRequest('/jeecg-boot/checkoutinformation/checkoutInformation/listbystatus', 'GET', params)


//获取待出库检验单列表
api.getOutCheeckBillData = params => request.globalRequest('/jeecg-boot/checkoutinformation/checkoutInformation/listbystatus', 'GET', params)

//获取入库管理列表
api.getInWareData = params => request.globalRequest('/jeecg-boot/storageinformation/storageInformation/list', 'GET', params)

//获取出库管理列表
api.getOutWareData = params => request.globalRequest('/jeecg-boot/stockremovalinformation/stockRemovalInformation/list', 'GET', params)


//获取设备入库检验列表
api.getInWareCheckData = params => request.globalRequest('/jeecg-boot/checkoutinformation/checkoutInformation/list', 'GET', params)







//获取待入库设备清单列表
api.getInEquBillData = params => request.globalRequest('/jeecg-boot/storageinformation/storageInformation/queryFacilityStorageByMainId', 'GET', params)

//获取待出库设备清单列表
api.getOutEquBillData = params => request.globalRequest('/jeecg-boot/stockremovalinformation/stockRemovalInformation/queryFacilityStockRemovalByMainId', 'GET', params)

//获取待入库检验单设备列表
api.getInCheckEquBillData = params => request.globalRequest('/jeecg-boot/checkoutinformation/checkoutInformation/queryFacilityCheckoutByMainId', 'GET', params)

//获取待出库检验单设备列表
api.getOutCheckEquBillData = params => request.globalRequest('/jeecg-boot/checkoutinformation/checkoutInformation/queryFacilityCheckoutByMainId', 'GET', params)



//app我的接口
api.getMyData = params => request.globalRequest('/jeecg-boot/index/appindex', 'GET', params)



//获取仓库主列表
api.getParentWareList = params => request.globalRequest('/jeecg-boot/warehouse/warehouse/rootList', 'GET', params)

//获取仓库子列表
api.getChildWareList = params => request.globalRequest('/jeecg-boot/warehouse/warehouse/childList', 'GET', params)

//通过编号获取设备详情
api.getEquipDataByNum = params => request.globalRequest('/jeecg-boot/web/facilityInformation/getbynumber', 'GET', params)


//待入库提交入库
api.submitInWare = params => request.globalRequest('/jeecg-boot/storageinformation/storageInformation/appStorage', 'GET', params)

//待出库提交出库
api.submitOutWare = params => request.globalRequest('/jeecg-boot/stockremovalinformation/stockRemovalInformation/appStockRemoval', 'GET', params)

//待入库检验和待出库检验
api.submitCheckWare = params => request.globalRequest('/jeecg-boot/checkoutinformation/checkoutInformation/check', 'GET', params)


//通过type和id获取所有的设备id
api.getAllIdByType = params => request.globalRequest('/jeecg-boot/web/facilityInformation/listallbystatus', 'GET', params)



//获取所有用户
api.getAllUser = params => request.globalRequest('/jeecg-boot/sys/user/appfinduser', 'GET', params)




//生成入库单
api.createInWareBill = params => request.globalRequest('/jeecg-boot/storageinformation/storageInformation/add', 'POST', params)


//生成出库单
api.createOutWareBill = params => request.globalRequest('/jeecg-boot/stockremovalinformation/stockRemovalInformation/add', 'POST', params)


export default api
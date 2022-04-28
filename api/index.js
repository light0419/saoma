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








export default api
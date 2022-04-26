import urlConfig from './config.js'

const request = {}
const headers = {}
const PORT1 = '/baseinfo'

request.globalRequest = (url, method, data, power) => {
    /*     权限判断 因为有的接口请求头可能需要添加的参数不一样，所以这里做了区分
        1 == 不通过access_token校验的接口
        2 == 文件下载接口列表
        3 == 验证码登录 */

    switch (power) {
        case 1:
            headers['Authorization'] = 'Basic a3N1ZGk6a3N1ZGk='
            break;
        case 2:
            headers['Authorization'] = 'Basic a3N1ZGlfcGM6a3N1ZGlfcGM='
            break;
        case 3:
            responseType = 'blob'
            break;
        default:
            headers['X-Access-Token'] = uni.getStorageSync('token')
            break;
    }

    return uni.request({
        url: urlConfig + url,
        method,
        data: data,
        dataType: 'json',
        header: headers
    }).then(res => {
         return res[1].data
    }).catch(parmas => {
        switch (parmas.code) {
            case 401:
                // uni.clearStorageSync()

                break
            default:
               
                return Promise.reject()
                break
        }
    })
}
export default request
let url_config = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'http://shebeiapi.yq123.cn'
}else{
    // 生产环境
    url_config = 'http://shebeiapi.yq123.cn'
}

export default url_config
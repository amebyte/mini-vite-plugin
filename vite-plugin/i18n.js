export default {
    // 将load进来的代码块进一步加工处理
    transform(code, id) {
        // 将i18n信息写入组件配置
        // code是快的内容
        // id请求的url
        if(!/vue&type=i18n/.test(id)) {
            return `export default Comp => {
                Comp.i18n = ${code}
            }`
        }
        return null
    }
}
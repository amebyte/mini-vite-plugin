export default function (options) {
    return {
        name: 'Example',
        resolveId(source) {
            // 是否处理当前请求
            if(source === 'virtual-module') {
                return source
            }
            return null
        },
        load(id) {
            if(id === 'virtual-module') {

                // 返回加载模块代码
                return 'export default "i am coboy"'
            }
            return null
        }
    }
}
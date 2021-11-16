import {defineConfig} from 'vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import  path from 'path'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), Components({
        resolvers: [ElementPlusResolver()],
    }),],
    // 配置 vite use --host to expose
    server: {
        host: '0.0.0.0',
        port: 8080,
        open: true
    },
//  文件别名
    resolve: {
        alias: [
            {
                find: '@',
                replacement: path.resolve(__dirname, 'src')
            }
        ]
    }
})

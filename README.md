# webpack4-vue2.x

初始化的项目配置,使用 webpack4+vue,类似 vue-cli; 供各位大佬参考下

执行命令:
cnpm install

1> npm run build:dll
将引用的固定依赖打一次包(无改动情况下, 无需再次打包)
会生成一个 dll 文件, dll 文件下面放的是固定依赖

2> npm run build/dev

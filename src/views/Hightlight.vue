<template>
  <div>

    <div v-highlight>
      <pre>
        <code class="json" >{{contentJosn}}</code>
        <!-- <code class="javascript" v-html="content"></code> -->
    </pre>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      contentJosn: `
{
  "name": "iview_ccb",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "ZHUWENLONG <1573511441@qq.com>",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js"
  },
  "dependencies": {
    "gojs": "^2.0.16",
    "iview": "^3.4.2",
    "vue": "^2.5.2",
    "vue-router": "^3.0.1"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "d3": "^5.11.0",
    "echarts": "^4.2.1",
    "eslint": "^4.15.0",
    "eslint-config-standard": "^10.2.1",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.2.0",
    "eslint-plugin-promise": "^3.4.0",
    "eslint-plugin-standard": "^3.0.1",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "highlight.js": "^9.15.10",
    "html-webpack-plugin": "^2.30.1",
    "less": "^3.10.3",
    "less-loader": "^5.0.0",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}
      `,
      content: `
        https://www.jianshu.com/p/6082e3699001 // 自行查看

        kk () {
          console.log('代码高亮')
        }
        // The Vue build version to load with the \`import\` command
        // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
        import Vue from 'vue'
        import App from './App'
        import router from './router'
        import echarts from 'echarts'
        import iView from 'iview'
        import 'iview/dist/styles/iview.css'

        import hljs from 'highlight.js'
        import 'highlight.js/styles/googlecode.css' // 样式文件
        Vue.prototype.$echarts = echarts

        Vue.use(iView)

        Vue.config.productionTip = false

        Vue.directive('highlight', function (el) {
          let blocks = el.querySelectorAll('pre code')
          setTimeout(() => {
            blocks.forEach((block) => {
              hljs.highlightBlock(block)
            })
          }, 200)
        })

        /* eslint-disable no-new */
        new Vue({
          el: '#app',
          router,
          components: {
            App
          },
          template: '<App/>'
        })
      `
    }
  },
  methods: {
    kk () {
      // 例如下面这个json串，中间的\n表示换行

      // var str = "{'   retmsg':'success   ',\n'  trans_date':'   20170906'}"
      // console.log('原有值', str)
      // "{'   retmsg':'success   ',
      // '  trans_date':'   20170906'}"

      // 去掉空格
      // str = str.replace(/\ +/g, '')
      // console.log(str)
      // "{'retmsg':'success',
      // 'trans_date':'20170906'}"

      // 去掉回车换行
      // str = str.replace(/[\r\n]/g, '')
      // console.log('去掉回车换行', str)
      // "{'retmsg':'success','trans_date':'20170906'}"

      // console.log(666)
      // let params = {key:'value1',aa:'666'}
      // this.axios.post('url/wenlongzhu.com',params).then(res => {do something...})
    }
  },
  mounted () {
    this.kk()
  }
}
</script>

<style lang="">
/* @import "../lib/styles/github.css"; */
/* @import "../lib/styles/googlecode.css"; */
/* @import "../lib/styles/default.css"; */
pre {
  /*控制代码不换行*/
  white-space: pre;
  word-wrap: normal;
}
/*.cnblogs-markdown .hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: black;
  color: green;
  white-space: pre;
  word-break: normal;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #d34811;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: red;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}*/

/*黑色主题皮肤结束*/
/* 个人网站：https://haoji.me */
</style>

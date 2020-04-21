//https://www.bilibili.com/read/cv1773642/   来源
// https://www.cnblogs.com/luozhihao/p/8635507.html
// 目标：webpack中配置
// productionSourceMap:true

const fs = require('fs')
// const path = require('path')
const readline = require('readline')
const sourceMap = require('source-map')

/**
 * 按行读取文件内容
 * 返回字符串数组
 * 参数：fReadName:文件名路径
 * callback:回调函数
*/

async function readFileToArr (fReadName, callback) {
  var fRead = fs.createReadStream(fReadName)
  var objReadline = readline.createInterface({
    input: fRead
  })

  var arr = [3]
  objReadline.on('line', function (line) {
    arr.push(line)
  })

  await new Promise((resolve, reject) => {
    objReadline.on('close', function () {
      callback(arr)
      resolve('done')
    })
  })
}

const myFunc = () => {
  console.log(666)
}

// 模拟调用
readFileToArr('...', myFunc)

// nodejs调用
/**
 * ctx内容
 * @param ret.name // 报错对应的名称
 * @param ret.source // 报错文件路径
 * @param ret.line // 报错文件行号
 * @param ret.column // 报错文件列号
*/
// let {userAgent,pathname,name,error} = ctx.request.body

/**
 * 解析错误栈的方式，
*/
// 得到js地址的正则表达式
var getJsMap = /(?<=js\/).*?(?=:)/
// 存储了js连接，不一定只有一个
const jsList = []
// 存储了每一个js文件报错对应的行
const lineList = []
// 存储了每一个js文件报错对应的列
const columnList = []
// 存储了得到的真正的资源文件的内容
const sourceRet = []

let error = 'sdfsdf我是错误信息的内容'
// 取得js文件，报错的行和列
error.split('at').forEach(element => {
  if (element.match(getJsMap)) {
    // 取得js文件
    jsList.push(element.match(getJsMap)[0])
  }
  // 取得报错的行和列
  if (element.split(':').length > 2) {
    lineList.push(element.split(':')[1])
    columnList.push(element.split(':')[2].split('\\n')[0])
  }
})

// 遍历显示异常的js文件
for (let i in jsList) {
  // 得到js文件对应的.map文件
  let fileUrl = `${jsList[i].map}`
  // 得到解析了map文件的smc对象  核心内容
  let smc = new sourceMap.SourceMapConsumer(fs.readFileSync(resolve(`../js/${fileUrl}`), 'utf8')) // 返回一个promise对象

  // 通过originalPositionFor获得result文件的内容
  smc.then(function (result) {
    // 核心内容
    let ret = result.originalPositionFor({
      line: parseInt(lineList[i]),// 压缩后的行号
      column: parseInt(columnList[i]) // 压缩后的行号
    })
    console.log('查看结果：', ret)
  })
}

/**
 * 解析原始报错数据
 * @param ret.name // 报错对应的名称
 * @param ret.source // 报错文件路径
 * @param ret.line // 报错文件行号
 * @param ret.column // 报错文件列号
 */
//  sourceret[i] = ret

// 打印错误
const errorTime = `${new Date().toLocaleDateString()}\r\n`
const errorUserAgent = `${UserAgent}\r\n`
const errorPath = `${pathname}\r\n`
const errorName = `${name}\r\n`
let errorStack = ''
for (let i in sourceRet) {
  errorStack += `${sourceRet[i].name}\r\n${sourceRet[i].source.slice(sourceRet[i].source.indexOf('src'))}:${sourceRet[i].line}:${sourceRet[i].column}\r\n`
  await readFileToArr(sourceRet[i].source.slice(sourceRet[i].source.indexOf('src')), (arr) => {
    let leftSpace = ''
    for (let j = 0; j < arr[sourceRet[i].line - 1].trim().indexOf(sourceRet[i].name); j++) {
      leftSpace += '-'
    }

    leftSpace += '🔺\r\n'
    errorStack += arr[sourceRet[i].line - 1].trim() + '\r\n' + leftSpace
  })
}

let data = errorTime + errorUserAgent + errorPath + errorName + errorStack + '\r\n'

// 当前时间
const nowLocalDate = `${new Date().getFullYear()} - ${new Date().getMonth() + 1} - ${new Date().getDate()}`

// 打印错误日志到当前时间
fs.appendFile(`${nowLocalDate}_error.log`, data, function (err) {
  if (err) {
    console.log(err)
  }
})

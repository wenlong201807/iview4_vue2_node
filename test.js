
let OriginArr = [
  {
    id: 1, parentId: -1, name: '第一层名字1', children: [
      {
        id: 21, name: '第二层名字21', children: [
          { id: 131, name: '第三层名字31', children: [] },
          { id: 132, name: '第三层名字32', children: [] },
          { id: 133, name: '第三层名字32', children: [] },
        ]
      },
      {
        id: 212, name: '第二层名字212', children: []
      },
      {
        id: 213, name: '第二层名字213', children: []
      },
    ]
  },
  {
    id: 2, parentId: -1, name: '第一层名字2', children: [
      {
        id: 22, name: '第二层名字22', children: [
          { id: 233, name: '第三层名字33', children: [] },
          { id: 234, name: '第三层名字24', children: [] },
          { id: 235, name: '第三层名字24', children: [] },
        ]
      },
      {
        id: 23, name: '第二层名字22', children: [
          { id: 243, name: '第三层名字33', children: [] },
          { id: 244, name: '第三层名字24', children: [] },
          { id: 245, name: '第三层名字24', children: [] },
        ]
      },
    ]
  },
  {
    id: 3, parentId: -1, name: '第一层名字3', children: [
      {
        id: 232, name: '第二层名字232', children: [
          { id: 333, name: '第三层名字333', children: [] },
          { id: 334, name: '第三层名字324', children: [] },
          { id: 335, name: '第三层名字324', children: [] },
        ]
      },
      {
        id: 233, name: '第二层名字233', children: [
          { id: 243, name: '第三层名字243', children: [] },
        ]
      },
      {
        id: 234, name: '第二层名字234', children: []
      },
      {
        id: 235, name: '第二层名字235', children: []
      },
    ]
  },
  // {
  //   id: 3, parentId: -1, name: '第一层名字3', children: [
  //     {
  //       id: 3333, name: '第二层名字3333', children: [],
  //       // id: 31, name: '第二层名字31', children: [], // 不出来？？？
  //       id: 32, name: '第二层名字32', children: [],
  //       id: 33, name: '第二层名字33', children: [],
  //     },
  //   ]
  // },
  {
    id: 4, parentId: -1, name: '第一层名字4', children: []
  },
  {
    id: 5, parentId: -1, name: '第一层名字5', children: []
  },
]

let middleArr = [
  { pid: -1, pname: '第一层名字100', id: 21, name: '第二层名字21', cid: 31, cname: '第三层名字31' },
]

let targetArr = [
  { id: -1, name: '第一层名字100' },
  { id: 21, name: '第二层名字21' },
  { id: 31, name: '第三层名字31' },
]

function OriginArrTomiddleArr () {
  let testArr = []
  let obj = {}
  // function nei (OriginArr) {
  //   OriginArr.length && OriginArr.forEach((item, ind) => {
  //     if (item.children.length) {
  //       console.log('++++', ind)
  //       nei(item.children)
  //     } else {
  //       console.log('====', ind)
  //       obj = {
  //         ...obj,
  //         ['id' + ind]: item.id,
  //         ['name' + ind]: item.name
  //       }
  //       testArr.push(obj)
  //     }
  //   })
  // }
  // nei (OriginArr)

  OriginArr.forEach((itemOne, indexOne) => {
    if (!itemOne.children.length) {

      let obj = {
        pid: itemOne.id, pname: itemOne.name,
      }
      testArr.push(obj)
    }
    itemOne.children.length && itemOne.children.forEach((itemTwo, indexTwo) => {
      console.log('第二层：', indexTwo, itemTwo)
      if (!itemTwo.children.length) {

        let obj = {
          pid: itemOne.id, pname: itemOne.name, id: itemTwo.id, name: itemTwo.name
        }
        testArr.push(obj)
      }
      itemTwo.children.length && itemTwo.children.forEach((itemThree, indexThree) => {
        if (!itemThree.children.length) {

          let obj = {
            pid: itemOne.id, pname: itemOne.name, id: itemTwo.id, name: itemTwo.name, cid: itemThree.id, cname: itemThree.name
          }
          testArr.push(obj)
        }
      })
    })
  })
  return testArr
}

// console.log(OriginArrTomiddleArr())

function middleArrTotargetArr (middleArr) {
  let testArr2 = []
  let itemObj = middleArr.length && middleArr[3]
  // console.log('+++', Object.entries(itemObj))
  let beforeMiaobaoList = Object.entries(itemObj)

  for (let i = 0; i < beforeMiaobaoList.length; i++) {
    console.log('++++++', i, i % 2)
    if (i % 2) {
      console.log('====', i, beforeMiaobaoList[i][1])
      testArr2.push({ name: beforeMiaobaoList[i][1] })
    } else {
      console.log('----', 33)
    }
  }


  return testArr2
}

// middleArrTotargetArr(OriginArrTomiddleArr())
// console.log('====', middleArrTotargetArr(OriginArrTomiddleArr()))
var ages = [3, 10, 18, 20];

function checkAdult () {
  ages.some(age => age >= 18)

}
console.log('***', checkAdult())


let aa = [
  '朱',
  '文',
  '龙',
  '吗',
]

function kk () {
  let isEqual = aa.some(
    item => {
      console.log(item)
      item == '文'
    }

  )
  console.log(isEqual)
}
kk()
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));

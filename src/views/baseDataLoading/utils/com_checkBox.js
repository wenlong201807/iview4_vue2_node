
/**
 * @author:zhuwenlong
 * @param:isExistChecked 是否存在部分选中的
 * @param:isCheckAll 是否是全部选中
 * @param:checkedArr 当前数组中，被选中的部分的数组
 * @param:currentDataArr 当前参数选择的数组
 * @createTime:2020.08.05 16:08
 * @description:此方法是有三种状态，全选，部分选中，全部不选
*/
const checkBoxAllGlobal = (isExistChecked,isCheckAll,checkedArr,currentDataArr) => {
  if (isExistChecked) {
    isCheckAll = false
  } else {
    isCheckAll = !isCheckAll
  }
  isExistChecked = false

  if (isCheckAll) {
    currentDataArr.forEach(item => {
      item.isChecked = true
      checkedArr.push(item.id)
    })
  } else {
    checkedArr = []
    currentDataArr.forEach(item => {
      item.isChecked = false
    })
  }
  return {
    isExistChecked,
    isCheckAll,
    checkedArr,
    currentDataArr
  }
}

/**
 * @author:zhuwenlong
 * @param:id 当前项的id标志
 * @param:curItemIsChecked 当前项的属性，标志是否被选中
 * @param:parentIsExistChecked 当前数组中，父选则框的半选属性值是否为true
 * @param:parentIsCheckAll 当前数组中，父选择框的全选属性是否为true
 * @param:checkedArr 当前参数数组中被选中的部分，组成的新数组
 * @param:currentDataArr 当前参选的数组
 * @createTime:2020.08.05 16:26
 * @description:此方法是有两种状态，选中，不选中
*/
const changeItemCheckBoxGlobal = (
  id,
  curItemIsChecked,
  parentIsExistChecked,
  parentIsCheckAll,
  checkedArr,
  currentDataArr
) => {
  console.log(id, curItemIsChecked)
  if (curItemIsChecked) {
    checkedArr.push(id)
  } else {
    let index = checkedArr.findIndex(ind => ind === id)
    index > -1 && checkedArr.splice(index, 1)
  }
  let tableLen = currentDataArr.length
  let checkedArrLen = checkedArr.length
  parentIsCheckAll = checkedArrLen === tableLen
  parentIsExistChecked = parentIsCheckAll ? false : checkedArrLen !== 0

  return {
    parentIsExistChecked,
    parentIsCheckAll,
    checkedArr,
    currentDataArr
  }
}


export {checkBoxAllGlobal,changeItemCheckBoxGlobal}




function propEq(prop, value) {
  return (obj) => obj && obj[prop] === value

}

function prop(key) {
  return obj => obj && obj[key]
}

function delInArr(arr) {
  return (prop, val) => {
    for (let i = 0, l = arr.length; i < l; i++) {
      if (arr[i][prop] === val) {
        return arr.splice(i, 1)
      }
    }
  }
}


// 使用方法
// const data = [{id:1,name:'q'},{id:2,name:'w'},{id:3,name:'e'}] //数据
//
// data.find(propEq('id',2)); // {id:2,name:2}
// data.map(prop('name')) // 所有含有 name 的数组 ['q','w','e']
// delInArr(data)('id',2) //   data 已经删除 id 为2的数据 并且返回{id:2,name:2}


export {propEq, prop, delInArr}
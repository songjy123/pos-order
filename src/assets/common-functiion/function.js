export default {
	// data 原来数组；addobj添加对象；key根据属性判断原来数组是否含有新添加对象数据
	// 存在是替换 不存在加进去
	addData (data, addobj, key) {
		let findObj = data.find((value, index, arr) => {
			return value[key] === addobj[key]
		})
		let findIndex = data.findIndex((value, index, arr) => {
			return value[key] === addobj[key]
		})
		// 存在 不存在
		if (findObj) {
			data.splice(findIndex, 1, addobj)
		} else {
			data.push(addobj)
		}
		return data
	},

	// data 原来数组；delData删除对象；key根据属性判断原来数组是否含有删除对象数据
	deleteData (data, delData, key) {
		let findIndex = data.findIndex((value, index, arr) => {
			return value[key] === addobj[key]
		})
		if (findIndex > -1) {
			data.splice(findIndex, 1)
		}
		return data
	},

	// 数组去除重复 data是原数组 Set结构成员的都是唯一的，没有重复的
	delDouble (data) {
		var x = new Set(data)
		return [...x]
	},

	// 子节点
	childrenArr (arrData, childData) {
    arrData = [...arrData, ...childData]
    if (childData && childData.length) {
      childData.forEach((item, index, arr) => {
        if (item.children && item.children.length) {
          arrData = childrenArr(arrData, item.children)
        }
      })
    }
    return arrData
  },
	// 树结构数据转化为一维数组形式 treeData是一个对象数组
	treeToArr (treeData) {
    let newArr = []
    if (treeData && treeData.length) {
      newArr = [...newArr, ...treeData]
      // treeData.children是一个数组形式
      treeData.forEach((item, index, arr) => {
        if (item.children && item.children.length) {
          newArr = childrenArr(newArr, item.children)
        }
      })
      return newArr
    } else {
      return newArr
    }
  },

  // 寻找子节点
  // data 全部数据一维数组，fid父节点id
  queryChildren (data, fid) {
  	let temp = []
  	let childrenResult = []
  	data.forEach((item, index, arr) => {
  		if (item.parentId === fid) {
  			temp = queryChildren(data, item.id)
  			if (temp.length) {
  				item.children = temp
  			}
  			childrenResult.push(item)
  		}
  	})
  	return childrenResult
  },
	// 一位对象数组拼成树形结构数据 根据数组对象中是否含有children属性
	// 根据节点找出最初根节点
	arrToTree (arrData) {
		let result = []
		if (arrData && arrData.length) {
			arrData.forEach((item, index, arr) => {
				// 找出根节点
				if (item.level === '1') {
					result.push(item)
				}
			})
		}
		if (result && result.length) {
			result.forEach((item, index, arr) => {
				let children = queryChildren(arrData, item.id)
				item.children = children
			})
		}
		return result
	},

	// 在子节点进行寻找
	childrenNode (childrenData, nodeId) {
		for (let index in childrenData) {
			if (childrenData[index].id === nodeId) {
				return childrenData[index]
			}
			if (childrenData[index].children && childrenData[index].children.length) {
				chidrenNode(childrenData[index].children, nodeId)
			}
		}
	},
	// 根据节点id在树行数据找出节点信息
	// treeData树形结构数据 nodeId节点id(未测试)
	queryNode (treeData, nodeId) {
		let findObj = null
		if (treeData && treeData.length) {
			for (let index in treeData) {
				if (treeData[index].id === nodeId) {
					findObj = treeData[index]
				}
				if (treeData[index].children && treeData[index].children.length) {
					findObj = chidrenNode(treeData[index].children, nodeId)
				}
			}
		}
		return findObj
	},

	// 深度拷贝对象(不仅改变基础数据类型，也要改变引用地址里面的数据)
	// obj原始数据
	deepClone (obj) {
    let objClone = Array.isArray(obj) ? [] : {}
    if(obj && typeof obj === 'object') {
      for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
          //判断ojb子元素是否为对象，如果是，递归复制
          if(obj[key] && typeof obj[key] === 'object') {
            objClone[key] = deepClone(obj[key])
          } else {
            //如果不是，简单复制
            objClone[key] = obj[key]
          }
        }
      }
    }
    return objClone
  },

  // 当前日期转化为星期几 dateTime为new Date() 获取的当前时间
  dateToWeek (dateTime) {
  	// let dateTime = new Date()
    let dateDay = dateTime.getDay()
    let dayStr = ''
    switch (dateDay) {
      case 1:
        dayStr = '星期一'
        break
      case 2:
        dayStr = '星期二'
        break
      case 3:
        dayStr = '星期三'
        break
      case 4:
        dayStr = '星期四'
        break
      case 5:
        dayStr = '星期五'
        break
      case 6:
        dayStr = '星期六'
        break
      default:
        dayStr = '星期日'
        break
    }
    return dayStr
  },

  // 根据属性值在数组中找出该元素 找到第一个符合条件直接返回
  // arrData数组 id属性值
  // 判断key值是否存在 判断数组元素类型
  findItem (arrData, key, value) {
  	// key值存在，arrData是对象数组
  	let findObj = null
  	if (key) {
  		findObj = arrData.find((item, index, arr) => {
				return item[key] === value
			})
  	} else {
  		// 基础类型数组
  		findObj = arrData.find((item, index, arr) => {
				return item === value
			})
  	}
  	return findObj
  }

  // 向上交换数据 data选中数组 checkedItem选中数据 key是按照某个属性查找元素
  upExchangeData (data, checkedItem, key) {
    let findIndex = data.findIndex((value, index, arr) => {
      return value[key] === checkedItem[key]
    })
    if (findIndex !== data.length - 1) {
    	let findObj = data.splice(findIndex, 1)
	    data.splice(findIndex + 1, 0, findObj[0])
	    return data
    } else {
    	return data
    }
  },

	// 向下交换数据 data选中数组 checkedItem选中数据 key是按照某个属性查找元素
  downExchangeData (data, checkedItem, key) {
  	let findIndex = data.findIndex((value, index, arr) => {
      return value[key] === checkedItem[key]
    })
    if (findIndex !== 0) {
    	let findObj = data.splice(findIndex, 1)
	    data.splice(findIndex - 1, 0, findObj[0])
	    return data
    } else {
    	return data
    }
  },

  // 初始化数据
  defaultData (obj) {
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        //判断ojb子元素是否为对象，如果是，递归赋值
        if(obj[key] && typeof obj[key] === 'object' && obj[key] !== null && obj[key] !== undefined) {
          // 判断是arr还是obj
          if (Object.prototype.toString.call(obj[key]) === '[object Array]') {
            obj[key] = []
          } else if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
            this.defaultData(obj[key])
          }
        } else {
          // 基本数据类型 赋值为null
          obj[key] = null
        }
      }
    }
  },

  // localStorage的操作  localStorage只存储字符串
  // 存入 data存入数据 key存入的key值
  setLocalStorage (data, key) {
  	return window.localStorage.setItem(key, JSON.stringify(data))
  },
  // 取出
  getLocalStorage (key) {
  	return JSON.parse(window.localStorage.getItem(key))
  },
  // 删除某一个key值
  removeLocalStorage (key) {
  	return window.localStorage.removeItem(key)
  },
  // 全部移除
  allRemoveLocalStorage () {
  	return window.localStorage.clear()
  }

  // cookie的存取删除
  setCookie (name, value, day) {
    var Days = day || 30
    var exp = new Date()
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + value + ';expires=' + exp.toGMTString() + ';path=/'
  },
  getCookie (name) {
    let arr
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (arr === document.cookie.match(reg)) {
      return arr[2]
    } else {
      return null
    }
  },
  deleteCookie (name) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = this.getCookie(name)
    if (cval !== null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
    }
  }
}
import Mock from 'mockjs'
import data from '../assets/data/data.json'

Mock.mock('/getdata/usertheme', {
  code: 0,
  message: '成功',
  data: data.usertheme
})
Mock.mock('/getdata/navlist', {
  code: 0,
  message: '成功',
  data: data.navlist
})
Mock.mock('/getdata/skilllist', {
  code: 0,
  message: '成功',
  data: data.skilllist
})
Mock.mock('/getdata/homeheadlist', {
  code: 0,
  message: '成功',
  data: data.homeheadlist
})
Mock.mock('/getdata/caselist', {
  code: 0,
  message: '成功',
  data: data.caselist
})
Mock.mock('/getdata/notelist', {
  code: 0,
  message: '成功',
  data: data.notelist
})
Mock.mock('/getdata/casetype', {
  code: 0,
  message: '成功',
  data: data.casetype
})


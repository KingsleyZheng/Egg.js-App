// Detail/index.jsx
import React from 'react'
import { NavBar, Icon, List } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import { getQueryString } from '../utils'

const Detail = () => {
 const history = useHistory()
 const id = getQueryString('id')
 return (<div className='diary-detail'>
   <NavBar
     mode="light"
     icon={<Icon type="left" />}
     onLeftClick={() => history.goBack()}
   >我和小明捉迷藏{id}</NavBar>
   <List renderHeader={() => '2020-01-09 晴天'} className="my-list">
     <List.Item wrap>
       今天我和小明去西湖捉迷藏，
       小明会潜水，躲进了湖底，我在西湖边找了半天都没找到，
       后来我就回家了，不跟他嘻嘻哈哈的了。
     </List.Item>
   </List>
 </div>)
}

export default Detail

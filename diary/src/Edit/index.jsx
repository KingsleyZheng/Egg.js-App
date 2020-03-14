// Detail/index.jsx
import React, { useState } from 'react'
import { List, InputItem, TextareaItem, DatePicker, ImagePicker } from 'antd-mobile'
import './style.css'

const Edit = () => {
  const [date, setDate] = useState()
  const [files, setFile] = useState([])
  const onChange = (files, type, index) => {
    console.log(files, type, index);
    setFile(files)
  }

  return (<div className='diary-edit'>
    <List renderHeader={() => '编辑日记'}>
      <InputItem
        clear
        placeholder="请输入标题"
      >标题</InputItem>
      <TextareaItem
        rows={6}
        placeholder="请输入日记内容"
      />
      <DatePicker
        mode="date"
        title="请选择日期"
        extra="请选择日期"
        value={date}
        onChange={date => setDate(date)}
      >
        <List.Item arrow="horizontal">日期</List.Item>
      </DatePicker>
      <ImagePicker
        files={files}
        onChange={onChange}
        onImageClick={(index, fs) => console.log(index, fs)}
        selectable={files.length < 1}
        multiple={false}
      />
    </List>
  </div>)
}

export default Edit

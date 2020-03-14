import React from 'react'
import { Card } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './style.css'
const list = [0,1,2,3,4,5,6,7,8,9]

const Home = () => {
  return (
    <div className='diary-list'>
      {
        list.map(item => <Link to={{ pathname: 'detail', search: `?id=${item}` }}><Card className='diary-item'>
          <Card.Header
            title="我和小明去捉迷藏"
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra={<span>晴天</span>}
          />
          <Card.Body>
            <div>{item}</div>
          </Card.Body>
          <Card.Footer content="2020-01-09" />
        </Card></Link>)
      }
    </div>
  )
}

export default Home


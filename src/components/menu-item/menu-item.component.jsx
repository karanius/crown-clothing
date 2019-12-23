import React from 'react';
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title , imageUrl , size , history , linkUrl , match}) => {

  console.log(`${match.url}${linkUrl}`,'?')
  return (
    <div onClick={()=> { history.push(`${match.url}${linkUrl}`) } } style={{
      backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`} >
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
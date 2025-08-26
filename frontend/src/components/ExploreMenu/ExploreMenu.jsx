import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className ='explore-menu' id ='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-test'>Discover the delicious dishes we offer. Our menu Featuring a delectable list of dishes crafted the finest ingredients and culinary expertise.</p>
        <div className='explore-menu-list'>
          {
            menu_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-menu-list-items'>
                        <img src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
          }  
        </div>
    </div>
  )
}

export default ExploreMenu
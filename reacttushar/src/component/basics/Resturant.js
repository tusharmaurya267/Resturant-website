import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((curElem)=>{
        return curElem.category;

    })
    ),
    "All",
];

const Resturant = () => {
    // useStateHooks is used to save elements in the form of key and pair
    const [menudata,setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(uniqueList);



    const filteredItem=(category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updatedList);

    }
  return (
    <>
        <div><h2 className='tophead'>Mummy's Kitchen</h2></div>
        <Navbar filteredItem={filteredItem} menuList={menuList}></Navbar>
        <MenuCard menuData={menudata}></MenuCard>
    </>
    
  )
}

export default Resturant
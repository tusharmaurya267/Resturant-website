import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from '../MenuCard';



const Resturant = () => {
    // useStateHooks is used to save elements in the form of key and pair
    const [menudata,setMenuData] = useState(Menu);
  return (
    <>
        <MenuCard menuData={menudata}></MenuCard>
    </>

// const Resturant = () => {
    // // useStateHooks is used to save elements in the form of key and pair
    // const [menudata,setMenuData] = useState(Menu);
    // console.log(menudata);
//   return (
    // <>
        // <div><h2 className='tophead'>Mummy's Kitchen</h2></div>
        // <div className='card-container'>
        //     <div className='card'>
        //         <div className='card-body'>
        //             <span className='card-number card-circle subtle'>1</span>
        //             <span className='card-author subtle'>Breakfast</span>
        //             <h2 className='card-title'>Maggi</h2>
        //             <div className='card-read'>Read</div>
        //             <span className='card-description subtle'>The Maggi noodles is an instant food that has 
        //             gained popularity in several countries over the years. This comes in different flavors, 
        //             and people use it as a snack or light meal. The short captions for a Maggi post maybe 
        //             be about noodles, food, or even about being healthy. Here is a collection of captions 
        //             that you can use with your Maggi pictures.</span>
                    

        //         </div>
        //         <img src=".\image\maggi.png" alt="images" className='card-media'></img>
        //     </div>

        // </div>
    // </>
    
  )
}

export default Resturant
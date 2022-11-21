import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
        <section className="main-card--cointainer">
        {menuData.map((curElem)=>{
            
            const {id,name,category,image,description} = curElem;
            return(
                <>
                <div className='card-container' key={id}>
                    <div className='card'>
                        <div className='card-body'>
                            <span className='card-number card-circle subtle'>{id}</span>
                            <span className='card-author subtle'>{name}</span>
                            <h2 className='card-title'>{name}</h2>
                            
                            <span className='card-description subtle'>{description}</span>
                            <div className='card-read'>Read</div>

                        </div>
                        <img src={image} alt={name} className='card-media'></img>
                        <span className='card-tag subtle'>Order Now</span>
                    </div>
                </div>
                </>
            );
        })}  
        </section>         
        {/* <div><h2 className='tophead'>Mummy's Kitchen</h2></div>
        <div className='card-container'>
            <div className='card'>
                <div className='card-body'>
                     <span className='card-number card-circle subtle'>1</span>
                     <span className='card-author subtle'>Breakfast</span>
                     <h2 className='card-title'>Maggi</h2>
                     <div className='card-read'>Read</div>
                      <span className='card-description subtle'>The Maggi noodles is an instant food that has 
                     gained popularity in several countries over the years. This comes in different flavors, 
                     and people use it as a snack or light meal. The short captions for a Maggi post maybe 
                     be about noodles, food, or even about being healthy. Here is a collection of captions 
                     that you can use with your Maggi pictures.</span>
                   

                </div>
                 <img src=".\image\maggi.png" alt="images" className='card-media'></img>
            </div>
        </div>
        </div>      */}
    </>
  );           
};

export default MenuCard
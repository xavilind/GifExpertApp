
import React, { useState } from 'react';


import './index.css';


export const GiftExpertApp = () => {

    //const categories = ['Demon Slayer', 'One punch', 'Attack on Titan'];
    const [categories, setCategories] = useState(['Pokemon', 'Spider Man', 'Power Rangers']);

    const handleAdd = () => {
        setCategories( [...categories, 'Simpson'] );
    }



    return (

      <>
        <h2>GiftExpertApp</h2>
        <hr />

        <button onClick = {handleAdd}>Agregar</button>

        <ol>
            {
                categories.map(category => {
                    return <li  key = { category }>{ category }</li>
                })
            }
        </ol>
      </>

    );
} 
 
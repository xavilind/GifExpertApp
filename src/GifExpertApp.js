
import React, { useState } from 'react';


import './index.css';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['Pokemon', 'Spider Man', 'Power Rangers']);

    //const handleAdd = () => {
      //  setCategories( [...categories, 'Simpson'] );
    //}



    return (

      <>
        <h2>GiftExpertApp</h2>
        
        <AddCategory setCategories = { setCategories }/>
        <hr />

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
 
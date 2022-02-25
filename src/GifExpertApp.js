
import React, { useState } from 'react';


import './index.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {


    const [categories, setCategories] = useState(['Pokemon']);

    return (

      <>
        <h2>GiftExpertApp</h2>
        
        <AddCategory setCategories = { setCategories }/>
        <hr />

        <ol>
            {
               categories.map(category =>  (
                <GifGrid 
                     key={ category }
                     category={ category }
                />
               ))
            }
        </ol>
      </>

    );
} 
 
//import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import React  from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {


    //const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs( category );
    //useEffect( () => {
       
     // getGifs( category )
       // .then(setImages);
     //  }, [ category ])
         return (
            <>

            <h3>{ category }</h3>
           
            { loading  && <p>Loading</p>}
            <div className="card-grid">

                {
                    images.map( img => (
                        <GifGridItem 
                            key = { img.id }
                            {...img } 

                        />
                    ))
                }

                 </div>
       </> 
  )
}
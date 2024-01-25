import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {



    const [images,setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifsData = async()=>{
        setImages(await getGifs(category));
        setIsLoading(false);
    }
    useEffect(()=>{
        getGifsData();
    }, [])

    return {
        images,
        isLoading
    }
}



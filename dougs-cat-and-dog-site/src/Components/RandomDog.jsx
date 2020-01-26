import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomDog = () => {

    const [url, setUrl] = useState('');

    
    const getDogPictures = async () => {
        const response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
        setUrl(response.data.message)
        console.log(response.data.message)
    }
    
    useEffect(() => {
        getDogPictures()
    }, [])
    
    console.log(url)

    return (
        <div>
            <h1>One Random Dog!</h1>
            <img src={url} alt="Good Dog"></img>
        </div>
    )

}

export default RandomDog
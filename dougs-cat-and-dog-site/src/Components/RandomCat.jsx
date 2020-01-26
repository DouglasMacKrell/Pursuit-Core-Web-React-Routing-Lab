import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomCat = () => {

    const [url, setUrl] = useState('');

    useEffect(() => {
        getCatPicturesHooks();
    }, [])

    const getCatPicturesHooks = async () => {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search`)
        setUrl(response.data[0].url)
    }

    return (
        <div>
            <h1>Random Cat!</h1>
            <img src={url} alt="Pawesome cat"></img>
        </div>
    )

}

export default RandomCat
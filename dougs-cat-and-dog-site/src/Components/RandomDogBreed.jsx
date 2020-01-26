import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomDogBreed = () => {
    
    const [url, setUrl] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    
    let displayDog
    if (selectedBreed !== '') {
        displayDog = <img src={url} alt="Good Dog"></img>
    }

    const getDogBreedsHooks = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all')
        setBreeds(Object.keys(response.data.message))
    }
    
    const getDogPictureHooks = async (selectedBreed) => {
        const response = await axios.get(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        setUrl(response.data.message)
    }
    
    const handleBreedChangeHooks = (e) => {
        setSelectedBreed(e.target.value)
        console.log("handleChange selected breed", selectedBreed)
        getDogPictureHooks(selectedBreed)
    }

    useEffect(() => {
        getDogBreedsHooks();
    }, [])

    

    return (
        <div>
            <h1>Random Dog By Breed!</h1>
            <select onChange={handleBreedChangeHooks} value={selectedBreed}>
                <option value="">SELECT A BREED</option>
                {
                    breeds.map(breed => {
                        return <option key={breed} value={breed}>{breed}</option>
                    })
                }
            </select>
            {displayDog}
        </div>
    )

}

export default RandomDogBreed
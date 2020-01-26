import React,  { useState } from 'react'
import axios from 'axios';

const MultiRandomDogs = () => {

    const [urls, setUrls] = useState([]);
    const [dogNum, setDogNum] = useState(1);

    const handleNumChangeHooks = (e) => {
        setDogNum(e.target.value)
    }

    const handleNewDogBtnHooks = () => {
        getDogPicturesHooks();
    }

    const getDogPicturesHooks = async () => {
        const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
        setUrls(response.data.message)
    }

    const dogArr = urls;
    let dogList = []
    for (let dogURL of dogArr) {
        dogList.push(<img src={dogURL} alt="Good Dog"></img>)
    }
    return (
        <div>
            <h1>Multiple Random Dogs!</h1>
            <input type="number" value={dogNum} onChange={handleNumChangeHooks} min="1" max="10" />
            <button onClick={handleNewDogBtnHooks}>GET MORE DOGS!</button>
            {dogList}
        </div>
    )

}

export default MultiRandomDogs
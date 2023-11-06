import React, { useState } from 'react'
import axios from "axios"
import GalleryApp2 from './GalleryApp2';

function GalleryApp1() {

    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

    let [search,updatesearch] = useState("")

    let [data,setdata] = useState([])


    function submitted(e){
        e.preventDefault()
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
        .then(response=>setdata(response.data.photos.photo))
        
        
    }

    return (
        <div style={{backgroundColor:"aliceblue"}}>
            <h1>Gallery SnapShot</h1>
            <form onSubmit={submitted}>
                <input onChange={(e) => {
                    updatesearch(e.target.value)
                    }} type='text' value={search} />
                <br/> <br/>
                <input type="submit" />
            </form>

            {data.length>=1 ? <GalleryApp2 data={data}/> : <h2>No data loaded</h2>}
        </div>
    )
}

export default GalleryApp1

import React, { useState } from 'react'
import axios from 'axios'
import FoodRecipe2 from './FoodRecipe2'

function FoodRecipe() {
 


    let YOUR_APP_ID="50d3f5d8"
    let YOUR_APP_KEY ="cfa38295fe549224b316eb7f6b752364"
    let [search,updatesearch] = useState("")
    let [data,setdata] = useState([])


    function submitHandler(e){
        e.preventDefault()
        axios.get(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(
            response=>setdata(response.data.hits),
            console.log(data)
        )

    } 
   return (
    <div className='bg-primary'>
        <h2>Food Recipe</h2>

        <form onSubmit={submitHandler}>
            <input type="text" value={search} onChange={(e)=>{
                updatesearch(e.target.value)
            }}  /><br/><br/>
            <input type="submit" value="search"/>
        </form>

        <br/> <br/>

        {data.length>=1 ? <FoodRecipe2 data={data} /> : <h5>no data loaded</h5>}

    </div>
  )
}

export default FoodRecipe

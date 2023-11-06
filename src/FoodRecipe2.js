import React from 'react'

export default function FoodRecipe2({data}) {
  return (
    <div>
        <div className='row bg-primary'>
      {data.map((data)=>{
        return(
            <div className='col-md-4' style={{marginBottom:"100px"}}> 
            <div className="card" style={{width: "18rem"}}>
            <img src={data.recipe.image} className="card-img-top" alt="products_images"/>
            <div className="card-body " >
                <h5 className="card-title">{data.recipe.labels}</h5>
                <p classname="card-text">Total no of calories : {data.recipe.calories}</p>
                <a href="#" className="btn btn-primary">Buy</a>
            </div>
            </div>
            </div> 
        )
      })}
      </div>
    </div>
  )
}

import React from 'react'

export default function GalleryApp2({data}) {
  return (
           <div className="row">
            {data.map((image)=>{
                return(
                <div className="col-md-4" key={image.id}>
                    <div>
                        <img  style={{margin:"13px",borderRadius:"5px"}} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
                    height="200" width="250" alt={image.title} />   
                    </div>
                </div>
            )})}
        </div>
  )
}


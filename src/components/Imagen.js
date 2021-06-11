import React from 'react'



const Imagen = ({ imagen }) => {

    const { likes, webformatURL, tags, views } = imagen;
    return (
       
        <div className="card bg-dark text-white m-2 border-0 rounded-3">
                <img src={webformatURL} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <p className="card-text position-absolute bottom-0 end-5 ">{views}
                        <span className="material-icons">
                            visibility
                        </span>{likes}
                        <span className="material-icons">
                            favorite
                        </span>

                        
                    </p>
                    <p className="card-text position-absolute top-2 end-2">{tags}</p>
                </div>
        </div>
    )
}

export default Imagen

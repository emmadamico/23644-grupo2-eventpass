import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";


export default function OtherEvents()  {

    let url = `${process.env.REACT_APP_URL}${process.env.REACT_APP_CONSUMER_KEY}&page=1&size=4`;

    let { data, isPending, error } = useFetch(url);
    console.log(data, isPending, error);

      // Función para realizar el desplazamiento al principio de la página
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <>

            <div className='text-black py-5' style={{backgroundColor: "#ffffff60"}}>
                <div className="container mb-5">
                    <h2 className='fw-bold'>Otros eventos de interes</h2>
                </div>
                <div className="d-flex justify-content-around gap-2">

                    {data?._embedded?.events?.map((event) => (
                        <div 
                        key={event.id}
                        className="card rounded-4" 
                        style={{width: "18rem"}}>
                            <Link to={`/description/${event.id}`} onClick={scrollToTop} >
                                <img 
                                className="card-img-top rounded-4" 
                                alt={event.name} 
                                src={
                                    event.images.find(
                                        (image) => image.width === 2048 && image.height === 1152
                                    )?.url || event.images[0].url
                                    }
                                />     
                            </Link>           
                        </div>
                    ))}

                </div>
            </div>

        </>
    );
}
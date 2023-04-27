import { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import clienteAxios from '../config/clienteAxios';

const Detalles = () => {

    const params = useParams();

    const [ pelicula, setPelicula ] = useState({});

    useEffect(() => {
        const buscarPelicula = async () => {
            const { data } = await clienteAxios(`?${import.meta.env.VITE_API_KEY}&i=${params.id}`);
            setPelicula(data);
        }

        buscarPelicula();
    }, []);

    return (
        pelicula.imdbID &&
            <>
                <Link to={'/'} className='bg-indigo-600 p-3 font-bold text-white uppercase cursor-pointer block w-[200px] text-center'>Volver</Link>
                <div className='flex justify-center'>
                    <div className='w-1/2 mx-auto'>
                        <img src={`${pelicula.Poster}`} alt="Poster Pelicula" className='block mx-auto my-10' />
                        <div className='text-center'>
                            <p className='w-[310px] mx-auto'>Titulo: {pelicula.Title}</p>
                            <p className='w-[310px] mx-auto'>Trama: {pelicula.Plot}</p>
                            <p className='w-[310px] mx-auto'>Actors: {pelicula.Actors}</p>
                            <p>Genero: {pelicula.Genre}</p>
                        </div>
                    </div>
                </div>
            </>
    )
}

export default Detalles
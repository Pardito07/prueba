import { useState, useEffect } from 'react'
import clienteAxios from '../config/clienteAxios'
import ListadoPeliculas from '../components/ListadoPeliculas';

const Home = () => {

    const [ titulo, setTitulo ] = useState('');
    const [ alerta, setAlerta ] = useState({});
    const [ peliculas, setPeliculas ] = useState([]);

    const buscarPeliculas = async titulo => {
        const { data } = await clienteAxios.post(`?i=tt3896198&${import.meta.env.VITE_API_KEY}&s=${titulo}`);
        setPeliculas(data.Search);
    }

    useEffect( () => {
        
    }, []);


    const handleSubmit = e => {
        e.preventDefault();

        if(titulo === ''){
            setAlerta({
                msg: 'Debes ingresar el título de una película',
                error: true
            });

            setTimeout(() => {
                setAlerta({});
            }, 3000);
        }

        buscarPeliculas(titulo);
    }

    return (
        <div className='min-h-screen'>
            <h1 className="text-6xl text-center font-bold py-10 bg-indigo-600 text-white">Buscador de películas</h1>

            <p className='text-center my-5 font-bold text-red-600 w-full uppercase'>{alerta.msg}</p>

            <form
                className="flex flex-col w-1/2 md:w-auto mx-auto md:flex-row justify-center mt-5 gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    type="search"
                    className="bg-gray-200 p-3 rounded-md"
                    placeholder='Título Película'
                    value={titulo}
                    onChange={ e => setTitulo(e.target.value) }
                />

                <input
                    type="submit"
                    className='bg-indigo-600 text-white rounded-md font-bold py-3 px-7 uppercase cursor-pointer'
                    value="Buscar Película"
                />
            </form>

            <div className='grid md:grid-cols-3 gap-3 mt-10'>
                {
                    peliculas.map( pelicula =>
                        <ListadoPeliculas key={pelicula.imdbID} pelicula={pelicula}/>
                    )
                }
            </div>
            
        </div>
    )
}

export default Home
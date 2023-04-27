import { Link } from 'react-router-dom'

const ListadoPeliculas = ({pelicula}) => {

    const { Poster, Title, Year, imdbID } = pelicula;

    const handleFavoritos = () => {
        localStorage.setItem('pelicula', pelicula.imdbID);
    }

    return (
        <div className='mt-5'>
            <div className="md:w-1/2 mx-auto text-center">
                <img src={`${Poster}`} className='w-auto mx-auto' alt="Imagen Pelicula" />
                <Link to={`${imdbID}`} className="text-xl mt-3 block">Titulo: <span className="text-indigo-600 font-bold">{Title}</span></Link>
                <p className="text-xl mt-3">Año de lanzamiento: <span className="text-indigo-600 font-bold">{Year}</span></p>
                <p className="cursor-pointer text-blue-700 text-md uppercase font-bold" onClick={handleFavoritos}>Agregar a favoritos</p>
            </div>
        </div>
    )
}

export default ListadoPeliculas
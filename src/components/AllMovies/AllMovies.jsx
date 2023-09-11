import CardComponet from "../Card/Card.jsx";
import { useState, useEffect } from "react";

export default function Movies(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [pelisFilter, setPelisFilter] = useState([]);
    const [searchState, setSearch] = useState("");

    useEffect(() => {
        async function fetchData() {
            const allMovies = [];

            try {
                await Promise.all(
                    props.generos.map(async (genero) => {
                        const response = await fetch(`https://api-pelis-back.onrender.com/${genero}`);
                        const data = await response.json();
                        allMovies.push(...data.peliculas.flatMap(peliculas => peliculas));
                    })
                );

                setData(allMovies);
                setPelisFilter(allMovies);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        }

        fetchData();
    }, [props.generos]);

    const handlerSearch = (e) => {
        let value = e.target.value;
        setSearch(value);

        if (!value) {
            setPelisFilter(data);
        } else {
            const filterMovies = data.filter((movie) => movie.titulo.toLowerCase().includes(searchState.toLowerCase()));
            setPelisFilter(filterMovies);
        }
    }

    if (loading) {
        return (
            <p>Loading ...</p>
        );
    } else {
        return (
            <div className="container-fluidmt-5">
                <div className="row mb-5 text-center">
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    {pelisFilter.map((movie, index) => (
                        <div className="col cardHover" key={index}>
                            <CardComponet movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

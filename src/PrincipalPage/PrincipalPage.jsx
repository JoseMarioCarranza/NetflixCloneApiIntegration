import React from 'react'
import PrincipalMovie from '../components/PrincipalMovie/PrincipalMovie'
import AllMovies from '../components/AllMovies/AllMovies'

export default function PrincipalPage() {
    return (
        <>
            <PrincipalMovie />
            <AllMovies generos={['independientes', 'comedia']} key={"allmovies "} />
        </>
    )
}

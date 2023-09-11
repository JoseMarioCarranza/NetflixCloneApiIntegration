import React, { useState } from 'react'

export default function CardComponet(props) {
    return (
        <button>
            <img src={props.movie.portada} alt="" />
        </button>
    )
}

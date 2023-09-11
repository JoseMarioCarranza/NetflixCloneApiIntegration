import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import './Card.css'

export default function CardComponet(props) {
  const [like, setLike] = useState(false);

  const handlerLike = () => {
    setLike(!like);
  }

  return (
    <Card className='Card' style={{ width: '18rem' }}>
      <Card.Img className='ImgPortada' variant="top" src={props.movie.portada} />
      <Card.Body>
        {like ? <FaHeart onClick={handlerLike} className='likeActive' /> : <FaRegHeart onClick={handlerLike} />}
        <Card.Title>{props.movie.titulo}</Card.Title>
        <Card.Text className='Texto'>
          {props.movie.sinopsis}
        </Card.Text>
        <Link to={`/${props.movie.genero}/${props.movie.titulo}`} state={props.movie} >
          ver detalle
        </Link>

      </Card.Body>
    </Card>
  )
}
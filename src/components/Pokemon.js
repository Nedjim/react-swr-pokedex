import React from 'react';
import {useRequest} from '../hooks';

const Pokemon = (props) => {
    const {name} = props.pokemon;
    const {data, error} = useRequest('/pokemon', name);

    if (error) {
        return <h1>Something went wrong!</h1>
    }
    if (!data) {
        return <h1>Loading ...</h1>
    }

    return (
        <div className='card'>
            <span className='id'>#{data.id}</span>
            <img
                className='image'
                src={data.sprites.front_default}
                alt={name}
            />
            <h1 className='title'>{name}</h1>
            <span className='details'>
                {data.types.map((poke) => poke.type.name).join(', ')}
            </span>
        </div>
    )
}

export default Pokemon;
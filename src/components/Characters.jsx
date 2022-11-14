import React, { useState, useEffect } from 'react'

import './characters.css'

const Characters = () => {
	const [characters, setCharacters] = useState([])
	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/')
			.then((resolve) => resolve.json())
			.then((data) => {
				setCharacters(data.results)
			})
	}, [])

	return (
		<div className="Characters">
			{characters.map(({ id, name, status, species, gender, image }) => {
				return (
					<div key={id} className="card">
						<div className="card-container">
							<div className="cardheader">
								<img src={image} alt={name} />
							</div>
							<div className="cardBody">
								<h2>{name}</h2>
								<p>{status}</p>
								<p>{species}</p>
								<p>{gender}</p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Characters

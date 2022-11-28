import React, {
	useState,
	useEffect,
	useReducer,
	useRef,
	useMemo,
	useCallback
} from 'react'
import Search from './Search'

const URL = 'https://rickandmortyapi.com/api/character/'

const initialStateFav = {
	favorites: []
}

const fnReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_FAVORITES':
			return { ...state, favorites: [...state.favorites, action.payload] }
		case 'DELETE_FAVORITES':
			const favoritesFiltered = state.favorites.filter(
				(charName) => charName !== action.payload
			)
			return { ...state, favorites: favoritesFiltered }
		default:
			return state
	}
}

const Characters = () => {
	const [characters, setCharacters] = useState([])
	const [search, setSearch] = useState('')
	const searchRef = useRef(null)

	useEffect(() => {
		fetch(URL)
			.then((response) => response.json())
			.then((data) => setCharacters(data.results))
	}, [])

	const [state, dispatch] = useReducer(fnReducer, initialStateFav)

	const addHandleClick = (name) => {
		dispatch({
			type: 'ADD_FAVORITES',
			payload: name
		})
	}

	const deleteHandleClick = (name) => {
		dispatch({
			type: 'DELETE_FAVORITES',
			payload: name
		})
	}

	/* 	const onInputChangeSearch = () => {
		setSearch(searchRef.current.value)
	}
 */
	const onInputChangeSearch = useCallback(() => {
		setSearch(searchRef.current.value)
	}, [])

	const listFilter = useMemo(
		() =>
			characters.filter((character) =>
				character.name.toLowerCase().includes(search.toLowerCase())
			),
		[characters, search]
	)

	return (
		<>
			<h1>Characters of Rick & Morty</h1>
			<Search
				type="text"
				search={search}
				onInputChangeSearch={onInputChangeSearch}
				searchRef={searchRef}
			/>
			<hr />
			<ul>
				{state.favorites.map((name, pos) => (
					<li key={pos}>
						{name}{' '}
						<button
							type="button"
							onClick={() => deleteHandleClick(name)}
						>
							DELETE
						</button>
					</li>
				))}
			</ul>
			{state.favorites.length !== 0 && <hr />}
			<ul>
				{listFilter.map((character) => (
					<li key={character.id}>
						{character.name}{' '}
						<button
							type="button"
							onClick={() => addHandleClick(character.name)}
						>
							ADD FAV
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Characters

/* import React, {
	useState,
	useEffect,
	useReducer,
	useRef,
	useMemo,
	useCallback
} from 'react'
import Search from './Search'

const URL = 'https://rickandmortyapi.com/api/character/'

const initialState = {
	favorites: []
}

const fnReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_FAVORITES':
			return { ...state, favorites: [...state.favorites, action.payload] }

		default:
			return state
	}
}

const Characters = () => {
	const [characters, setCharacters] = useState([])
	const [state, dispatch] = useReducer(fnReducer, initialState)
	const [search, setSearch] = useState('')
	const searchRef = useRef(null)

	useEffect(() => {
		fetch(URL)
			.then((response) => response.json())
			.then((data) => setCharacters(data.results))
	}, [])

	const handleBtnFav = (name) =>
		dispatch({ type: 'ADD_FAVORITES', payload: name })

	const onInputChangeSearch = useCallback(
		() => setSearch(searchRef.current.value),
		[]
	)

	const charactersFilter = useMemo(
		() =>
			characters.filter((char) =>
				char.name.toLowerCase().includes(search.toLowerCase())
			),

		[characters, search]
	)

	return (
		<>
			<h1>Rick & Morty Characters</h1>
			<hr />
			<Search
				onInputChangeSearch={onInputChangeSearch}
				search={search}
				searchRef={searchRef}
			/>
			<hr />
			<ul>
				{state.favorites.map((name, pos) => (
					<li key={pos}>{name}</li>
				))}
			</ul>
			<hr />
			<ul>
				{charactersFilter.map(({ id, name }) => (
					<li key={id}>
						{name}{' '}
						<button
							type="button"
							onClick={() => handleBtnFav(name)}
						>
							ADD FAV
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Characters */

/* 
import React, { useState, useEffect, useReducer } from 'react'

import './rickandmorty.css'

const URL = 'https://rickandmortyapi.com/api/character/'

const initialState = {
	favorites: []
}

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			return {
				...state,
				favorites: [...state.favorites, action.payload]
			}
		default:
			return state
	}
}

const Characters = () => {
	const [characters, setCharacters] = useState([])

	const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

	const handleClick = (favorite) => {
		dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
	}

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch(URL)
			.then((response) => response.json())
			.then(({ results }) => {
				setLoading(false)
				setCharacters(results)
			})
	}, [])

	return (
		<div className="characters">
			<h1>Rick and Morty characters</h1>
			<hr />
			<div className="characters-container">
				{loading && <span>Loading ...</span>}
				<ul>
					{favorites.favorites.map((favorite) => (
						<li key={favorite.id}>{favorite.name}</li>
					))}
				</ul>
				{characters.map((character) => {
					return (
						<article key={character.id} className="card-character">
							<header className="card-character__header">
								<img
									src={character.image}
									alt={character.name}
								/>
							</header>
							<section className="card-character__body">
								<h1>{character.name}</h1>
								<p>{character.species}</p>
								<p>{character.status}</p>
								<button
									type="button"
									onClick={() => handleClick(character)}
								>
									Agregar a favoritos
								</button>
							</section>
						</article>
					)
				})}
			</div>
		</div>
	)
}

export default Characters */

//////////////////////////////
/* import React, { useState, useEffect } from 'react'

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
 */

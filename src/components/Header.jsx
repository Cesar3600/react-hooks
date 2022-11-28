import React, { useState, useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

const Header = () => {
	const [darkMode, setDarkMode] = useState(false)

	const color = useContext(ThemeContext)

	const handleClick = () => {
		setDarkMode(!darkMode)
	}

	return (
		<div
			className="Header"
			style={darkMode ? { background: 'black', color: 'white' } : null}
		>
			{/* 			<h1 style={darkMode === true ? { color } : null}>ReactHooks</h1> */}
			<h1>ReactHooks</h1>
			<button type="button" onClick={handleClick}>
				{darkMode ? 'Dark Mode' : 'Light Mode'}
			</button>
		</div>
	)
}

export default Header

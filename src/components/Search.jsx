import React from 'react'

const Search = ({ search, onInputChangeSearch, searchRef }) => {
	return (
		<input
			type="text"
			value={search}
			onChange={onInputChangeSearch}
			ref={searchRef}
		/>
	)
}

export default Search

/* import React from 'react'

const Search = ({ search, onInputChange, searchRef }) => {
	return (
		<div>
			<div className="search">
				<input
					type="text"
					value={search}
					onChange={onInputChange}
					ref={searchRef}
				/>
			</div>
		</div>
	)
}

export default Search
 */

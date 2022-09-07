import React from 'react';
import { Link } from 'react-router-dom';



const Filter = (props) => {
	return (
		<div>
			<form class="d-flex" role="search">
			<Link to='/'><button class="btn btn-outline-success" type="submit">
					Home
				</button></Link>
				
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={(e) => props.handleFilter(e.target.value)}
				/>
				<button class="btn btn-outline-success" type="submit">
					Search
				</button>
			</form>
			<h1 className='Netflix'>NETFLIX</h1>
		</div>
	);
};

export default Filter;

import React from "react";

//create your first component
const Home = ({ first, second, third, fourth, fifth, sixth }) => {
	return (
		<div className="d-flex justify-content-center vh-100 align-items-center">
			<div className=" d-flex justify-content-center gap-3 bg-black p-3 rounded">
				<div className="p-2 bg-dark text-white rounded fs-2"><i className="far fa-clock"></i></div>
				<div className="p-2 bg-dark text-white rounded fs-2">{sixth}</div>
				<div className="p-2 bg-dark text-white rounded fs-2">{fifth}</div>
				<div className="p-2 bg-dark text-white rounded fs-2">{fourth}</div>
				<div className="p-2 bg-dark text-white rounded fs-2">{third}</div>
				<div className="p-2 bg-dark text-white rounded fs-2">{second}</div>
				<div className="p-2 bg-dark text-white rounded fs-2">{first} </div>
			</div>
		</div>
		
	);
};

export default Home;

import React from "react";
import "./App.css";
import wayne_rooney_img from "./images/wayne_rooney.jpg";
import sir_bobby_img from "./images/sir_bobby.jpg";
import denis_law_img from "./images/denis_law.jpeg";
import denis_viollet_img from "./images/denis_viollet.jpg";

function App() {
	return (
		<div className="App">
			<div className="wrapper_ot">
				<div className="container">
					<div className="main_header">
						<h1>WELCOME TO THEATRE OF DREAMS</h1>
						<p>Home of</p>
						<h1 className="manutd_text">Manchester United</h1>
					</div>
				</div>
			</div>
			<div className="wrapper_gs">
				<div className="container">
					<div className="main_header gs_header">
						<h1>ALL TIME TOP GOAL SCORERS</h1>
						<p>
							These are the people who made countless cherishable
							moments on the pitch
						</p>
					</div>
					<div className="card">
						<h3>Wayne Rooney</h3>
						<img src={wayne_rooney_img} alt=""></img>
					</div>
					<div className="card">
						<h3>Sir Bobby Charlton</h3>
						<img src={sir_bobby_img} alt=""></img>
					</div>
					<div className="card">
						<h3>Denis Law</h3>
						<img src={denis_law_img} alt=""></img>
					</div>
					<div className="card mr">
						<h3>Dennis Viollet</h3>
						<img src={denis_viollet_img} alt=""></img>
					</div>
				</div>
			</div>
			{/* <div className="wrapper_cur">
				<div className="container sp">
					<div className="cur_card">
						<h1>Current Position in the table</h1>
						<h1>4th</h1>
					</div>
					<div className="cur_card">
						<h1>Best player this season</h1>
						<h1>Bruno Fernandes</h1>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default App;

import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';

class Application extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged((currentUser) => {
			console.log("Auth state changed", currentUser);
			// logs the google sign in object
			this.setState({ currentUser });
		});
	}

	render() {
		const {currentUser} = this.state;
		return (
			<div className="Application">
				<header className="Application--header">
					<h1>Lunch Rush</h1>
					<div>
					{!currentUser && <SignIn />}
					{currentUser && <CurrentUser user={currentUser} />}
					</div>
				</header>
			</div>
		);
	}
}

export default Application;

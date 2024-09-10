import "./App.css";
import { CardAvatar } from "./components/CardAvatar";
import { useState, useEffect } from "react";

function App() {
	const url = "https://jsonplaceholder.typicode.com/users";

	const [userData, setUserData] = useState([]);

	// Skal vi fetch når vi loader siden?
	// eller skal vi fetch når brugeren gør noget? Eks klikker på en knap?

	//function til at hente alle bgiere

	function getAllUsers() {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setUserData(data))
			.catch((error) => console.error(error));
	}

	//useEffect kører når siden loader og henter alle brugere

	useEffect(() => {
		getAllUsers();
	}, []);

	return (
		<>
			<h1>Eksempel fetch</h1>
			<button onClick={() => getAllUsers()}>Fetch users!!</button>
			{userData.map((user) => {
				return (
					<CardAvatar
						key={user.id}
						name={user.name}
						website={user.website}
						username={user.username}
					/>
				);
			})}
		</>
	);
}

export default App;

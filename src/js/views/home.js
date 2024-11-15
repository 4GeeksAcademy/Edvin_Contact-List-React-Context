import React, { useContext } from "react";
import "../../styles/home.css";
import { ProfileCard } from "../component/ProfileCard.jsx";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext.js"





export const Home = () => {
	const {store, actions} = useContext(Context);

	return (
		<div className="container text-center mt-5">
			{/* <Link  to={'/contacto/new'}>
			Crear
			</Link> */}
			{
				store.contacts?.map(el=>
					<ProfileCard key={el.id} contact={el} />
				)
			}

		</div>

	);
}



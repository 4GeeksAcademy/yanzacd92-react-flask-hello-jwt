import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const HelloProtected = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	async function submitForm(e) {
		e.preventDefault()
		let data = new FormData(e.target)
		let resp = await actions.userLogin(data.get("email"), data.get("password"))
		if(resp >= 400) {
			return
		}
		console.log("Login exitoso!!")
	}

	return (
		<div class="card">
            <div class="card-body">
                <h5 class="card-title">Hello Protected title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" class="btn btn-primary">Home - Login</a>
            </div>
        </div>
	);
};

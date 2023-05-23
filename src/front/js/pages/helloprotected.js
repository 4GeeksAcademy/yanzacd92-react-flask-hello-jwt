import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const HelloProtected = () => {
	const { store, actions } = useContext(Context);
    let resp = actions.userHelloProtected()

	return (
		<div className="card">
            <div className="card-body">
                <h5 className="card-title">Hello Protected</h5>
                <p className="card-text">{resp.msg}</p>
                <a href="/" className="btn btn-primary">Home - Login</a>
            </div>
        </div>
	);
};

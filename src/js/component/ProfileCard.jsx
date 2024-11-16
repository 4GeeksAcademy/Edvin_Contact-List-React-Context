import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ProfileCard = (props) => {

    const { store, actions } = useContext(Context)
    const { id, name, address, email, phone } = props.contact
    return (
        <article className="card">
            <figure className="card-body d-flex justify-content-around">
                <img
                    className="rounded-circle img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5I-LyW9aEufGed1suUqzi6eoGmm0KlsUu1w&s"
                    alt="{name}"
                    width={'120px'}
                    height={'120px'}

                />
                <div className="">
                    <h5 className="card-title mb-1">
                        {name}
                    </h5>
                    <p className="card-text mb-1">
                        <i className="fas fa-map-marker-alt me-2"></i>{address}
                    </p>
                    <p className="card-text mb-1">
                        <i className="fas fa-envelope me-2"></i>{email}
                    </p>
                    <p className="card-text mb-1">
                        <i className="fas fa-phone me-2"></i>{phone}
                    </p>
                        </div>
                    <div>
                        <Link className="btn btn-light btn-sm" onClick={() => actions.selectContact(props.contact)} to={'/contacto/' + id}>
                            <i className="fas fa-pencil-alt"></i>Editar
                        </Link>
                        <button
                            className="btn btn-light btn-sm" onClick={() => actions.deleteContact(id)}>
                            <i className="fas fa-trash"></i>Eliminar
                        </button>
                    </div>
            </figure>
        </article>
    );
};

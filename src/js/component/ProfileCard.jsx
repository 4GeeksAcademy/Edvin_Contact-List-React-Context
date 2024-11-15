import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const ProfileCard = (props) => {

    const { store, actions } = useContext(Context)
    const { id, name, address, email, phone } = props.contact
    return (
        <article className="card">
            <figure className="d-flex">
                <img
                    className="rounded img-fluid"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5I-LyW9aEufGed1suUqzi6eoGmm0KlsUu1w&s"
                    alt="{name}"
                    width={'200px'}
                    height={'200px'}
                />
            </figure>
            <div className="container">
                <p className="fs-4">
                    {name}
                </p>
                <p>
                    {address}
                </p>
                <p>
                    {email}
                </p>
                <p>
                    {phone}
                </p>
                <Link onClick={() => actions.selectContact(props.contact)} to={'/contacto/' + id}>
                    Editar
                </Link>
                <button onClick={()=>actions.deleteContact(id)}>
                    Eliminar
                </button>
            </div>
        </article>
    );
};


// kasutada párast poole=>


// <>
//     <div>
//         {contacts.map((contact, index) => (
//             <div key={index} className="card mb-3 shadow-sm">
//                 <div className="card-body d-flex align-items-center">
//                     <img
//                         src={contact.image}
//                         alt={contact.name}
//                         className="rounded-circle me-3"
//                         style={{ width: '60px', height: '60px' }}
//                         />
//                     <div className="flex-grow-1">
//                         <h5 className="card-title mb-1">{contact.name}</h5>
//                         <p className="card-text mb-1">
//                             <i className="fas fa-map-marker-alt me-2"></i>{contact.address}
//                         </p>
//                         <p className="card-text mb-1">
//                             <i className="fas fa-phone me-2"></i>{contact.phone}
//                         </p>
//                         <p className="card-text mb-1">
//                             <i className="fas fa-envelope me-2"></i>{contact.email}
//                         </p>
//                     </div>
//                     <div>
//                         <button className="btn btn-light me-2">
//                             <i className="fas fa-pencil-alt"></i>
//                         </button>
//                         <button className="btn btn-light">
//                             <i className="fas fa-trash"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>
//         </>


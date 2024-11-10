import React, { useEffect } from "react";


export const ProfileCard = () => {
    const contacts = [
    {
        name: "edvin",
        address: "1234 edvin St, edvinfield, IL",
        phone: "111111111",
        email: "edvin@gmail.com",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7zpG7Q2QGK9YGchMgfbXycRtDimjSCjk8w&s"
    }
];

useEffect(()=> {
    console.log('use effect ran') /// fires on any render
})

    return (
        <>
        <div>
            {contacts.map((contact, index) => (
                <div key={index} className="card mb-3 shadow-sm">
                    <div className="card-body d-flex align-items-center">
                        <img 
                            src={contact.image} 
                            alt={contact.name} 
                            className="rounded-circle me-3" 
                            style={{ width: '60px', height: '60px' }} 
                            />
                        <div className="flex-grow-1">
                            <h5 className="card-title mb-1">{contact.name}</h5>
                            <p className="card-text mb-1">
                                <i className="fas fa-map-marker-alt me-2"></i>{contact.address}
                            </p>
                            <p className="card-text mb-1">
                                <i className="fas fa-phone me-2"></i>{contact.phone}
                            </p>
                            <p className="card-text mb-1">
                                <i className="fas fa-envelope me-2"></i>{contact.email}
                            </p>
                        </div>
                        <div>
                            <button className="btn btn-light me-2">
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button className="btn btn-light">
                                <i className="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
            </>
    );
};


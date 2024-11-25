import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const ContactForm = () => {
	const { store, actions } = useContext(Context);

	const [formData, setFormData] = useState({
		name: store.selected?.name || '',
		email: store.selected?.email || '',
		address: store.selected?.address || '',
		phone: store.selected?.phone || ''
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault();
		if (store.selected) {
			actions.updateContact(store.selected.id, formData)
		} else {
			actions.createContact(formData)
		}

		actions.selectContact(null)
	}

	return (
		<div className="container">
			<h1 className="form-control	text-center my-4">Add a new contact</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label>Full name</label>
					<input name="name" value={formData.name} onChange={handleChange} required type="text" className="form-control" id="fullName" placeholder="Full Name" />
				</div>

				<div className="mb-3">
					<label>Email</label>
					<input name="email" value={formData.email} onChange={handleChange} required type="email" className="form-control" id="email" placeholder="Enter email" />
				</div>

				<div className="mb-3">
					<label>Address</label>
					<input name="address" value={formData.address} onChange={handleChange} required type="text" className="form-control" id="address" placeholder="Enter address" />
				</div>

				<div className="mb-3">
					<label>Phone</label>
					<input name="phone" value={formData.phone} onChange={handleChange} required type="tel" className="form-control" id="phone" placeholder="Enter phone" />
				</div>

				<button type="submit" className="btn btn-primary mb-3 w-100">save</button>

				<br />



			</form>

			<Link to={"/"}>
				<p className="text-primary">Volver a Home</p>
			</Link>
		</div>
	)
} 
import React from "react";

export const ContactForm = () => {

    return(
        <div className="container">
			<h1 className="text-center my-4">Add a new contact</h1>
			<form>
				<div className="mb-3">
					<label>Full name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Full Name" />
				</div>
				
				<div className="mb-3">
					<label>Email</label>
					<input type="email" className="form-control" id="email" placeholder="Enter email" />
				</div>

				<div className="mb-3">
					<label>Phone</label>
					<input type="tel" className="form-control" id="phone" placeholder="Enter phone" />
				</div>

				<div className="mb-3">
					<label>Address</label>
					<input type="text" className="form-control" id="address" placeholder="Enter address" />
				</div>

				<button type="submit" className="btn btn-primary mb-3 w-100">save</button>
			
				<br />
				<Link to="/">
					<p className="text-primary">or get back to contacts</p>
				</Link>
			</form>
		</div>
    )
}
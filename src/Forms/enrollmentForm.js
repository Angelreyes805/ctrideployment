import React, { useState } from "react";
import "../Styles/EnrollmentForm.css";

function EnrollmentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  
  const handleCloseForm = (e) => {
    e.preventDefault();
    setShowForm(false);
  }

  return (
    <div  className="EnrollmentForm">
                <form onSubmit={handleSubmit}>
                    <div className="rowOne">
                        <label>
                            Full Name:
                            <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            />
                        </label>
                        <label>
                            Email Address:
                            <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="rowTwo">
                        <label>
                            Phone Number:
                            <input
                            type="tel"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button type="submit">Submit Your Information</button>
                    <button onClick={handleCloseForm}>Close Form</button>
                </form>
    </div>
  );
}

export default EnrollmentForm;

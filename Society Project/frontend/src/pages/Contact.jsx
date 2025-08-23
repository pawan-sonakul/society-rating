import React, { useState } from 'react';
import './Contact.css';
import { toast } from 'react-toastify';
import { addContactUs } from '../api/apiHandler';

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!data.name || !data.email || !data.subject || !data.message) {
            toast.error('Please fill out all fields!');
            return;
        }

        const requestData = {
            name: (data.name),
            email: (data.email),
            subject: (data.subject),
            message: (data.message)
        };

        try {
            const response = await addContactUs(requestData);
            toast.success("Message Sent Successfully!");
            setData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

        } catch (error) {
            toast.error('Failed to send the message. Please try again later.');
        }
    };

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Contact Us</h2>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={data.name}
                                onChange={onChangeHandler}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={onChangeHandler}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                                type="text"
                                className="form-control"
                                id="subject"
                                name="subject"
                                value={data.subject}
                                onChange={onChangeHandler}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="5"
                                value={data.message}
                                onChange={onChangeHandler}
                                required
                            ></textarea>
                        </div>

                        <div className="d-grid">
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;

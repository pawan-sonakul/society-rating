import React, { useEffect, useState } from 'react';
import { fetchAllContacts } from '../api/apiHandler';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetchAllContacts();
                setData(response.data); // Assuming response.data contains the contact information
            } catch (error) {
                toast.error("Error fetching data!");
            }
        };

        fetchContacts();
    }, []);

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString();
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-3 text-center">All Contact Data</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover table-sm text-nowrap">
                    <thead className="table-dark">
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Submitted At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((contact, index) => (
                            <tr key={contact.id || index}>
                                <td>{index + 1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.subject}</td>
                                <td>{contact.message}</td>
                                <td>{formatDate(contact.createdAt)}</td>
                            </tr>
                        ))}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No Data available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactList;

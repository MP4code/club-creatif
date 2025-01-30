'use client';
import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données du formulaire soumises :', formData);
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="firstName">Prénom :</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="lastName">Nom de famille :</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>S'inscrire</button>
            </form>
        </div>
    );
};

export default Signup;

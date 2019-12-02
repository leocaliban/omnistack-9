import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import socketIO from 'socket.io-client';

import './styles.css';

export default function Dashboard() {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        const user_id = localStorage.getItem('user');
        const socket = socketIO('http://localhost:3333', {
            query: {
                user_id
            }
        });

        socket.on('booking_request', data => {
            console.log(data);
        });
    }, []);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: {
                    user_id
                }
            });
            setSpots(response.data);
        }
        loadSpots();
    }, []);

    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={
                            { backgroundImage: `url(${spot.thumbnail_url})` }
                        }>

                        </header>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$ ${spot.price}/dia` : 'GRÁTIS'}</span>
                    </li>
                ))}
            </ul>

            <Link to='/new'>
                <button className="btn">
                    Cadastrar Novo Spot
                </button>
            </Link>
        </>
    )
}
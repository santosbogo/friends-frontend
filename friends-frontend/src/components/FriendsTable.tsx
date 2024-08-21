import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip } from '@mui/material';

interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface Friend {
    id: string;
    name: string;
    email: string;
    addresses: Address[];  // Asegúrate de que los amigos incluyan direcciones
}

const FriendsTable: React.FC = () => {
    const [friends, setFriends] = useState<Friend[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/friends')
            .then(response => {
                setFriends(response.data);
            })
            .catch(error => console.error('Error fetching friends:', error));
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {friends.map((friend) => (
                        <TableRow key={friend.id}>
                            <TableCell>
                                <Tooltip
                                    title={
                                        <div>
                                            {friend.addresses && friend.addresses.length > 0 ? (
                                                friend.addresses.map((address, index) => (
                                                    <div key={index}>
                                                        {address.street}, {address.city}, {address.state} - {address.zip}
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No addresses available</p>
                                            )}
                                        </div>
                                    }
                                    arrow
                                    placement="right"
                                >
                                    <span>{friend.name}</span>
                                </Tooltip>
                            </TableCell>
                            <TableCell>{friend.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FriendsTable;
import React from 'react';
import FriendsTable from '../components/FriendsTable';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Friends List</h1>
            <FriendsTable />
        </div>
    );
};

export default HomePage;
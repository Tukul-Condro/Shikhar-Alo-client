import React, { useEffect, useState } from 'react';

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = () => {
        setLoading(true);
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    };
    useEffect(()=>{
        fetchUsers();
    },[])
    return {users,loading,refetch:fetchUsers};
};

export default useUsers;
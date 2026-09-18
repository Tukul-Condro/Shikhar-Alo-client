import React, { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const axiosSecure = useAxiosSecure();

    const fetchUsers = () => {
        setLoading(true);
        axiosSecure.get("/users")
            .then(res => {
                console.log("USERS:", res.data);
                setUsers(res.data);
            })
            .catch(error => {
                console.log("USERS ERROR:", error.response?.data);
                setUsers([]);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    useEffect(()=>{
        fetchUsers();
    },[])
    return {users,loading,refetch:fetchUsers};
};

export default useUsers;
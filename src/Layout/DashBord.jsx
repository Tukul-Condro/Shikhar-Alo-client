
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const DashBord = () => {


// TODO get admin value from the database
    const { user, loading: authLoading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [userData, setuserData] = useState(null);

    const [role, setRole] = useState(null);
    const [roleLoading, setRoleLoading] = useState(true);

    useEffect(() => {
    if (authLoading) return;

    if (!user?.email) {
        setRoleLoading(false);
        return;
    }

    axiosSecure
        .get(`/users/role/${user.email}`)
        .then(res => {
            console.log("User Role:", res.data);
            setuserData(res.data);
            setRole(res.data.role);
        })
        .catch(error => {
            console.error("Role fetch error:", error);
            setRole(null);
        })
        .finally(() => {
            setRoleLoading(false);
        });

    }, [user.email, authLoading, axiosSecure]);

    if (authLoading || roleLoading) {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    );}

    const navClass = ({ isActive }) =>
    `block px-2 py-2 rounded-xl ${
        isActive
            ? "bg-pink-200"
            : "hover:bg-pink-400"
    }`;

    return (
        <div className='flex max-w-6xl mx-auto'>
            <div className="max-w-1/4 min-h-screen bg-pink-500 px-10">
                <ul className="menu mt-10 px-5">

    {role === "admin" && (
        <>
        {/* Admin Dashboard */}
        <div className='text-center text-2xl font-bold border-1 rounded-xl bg-pink-300 px-2 py-1 fixed top-0 left-35 right-260 z-10'>
            {userData?.name }
            <span className='ml-2 text-sm font-normal'>{userData?.role}</span>
        </div>
        <li className='hover:bg-pink-300 text-center px-2 py-1'>
            <NavLink  to="/">Home</NavLink>
        </li>
            <div className='divider border-b'></div>
        <li className='text-left'>
            <NavLink className={navClass} to="/dashbord/admin">
                All Employee
            </NavLink>
        </li>

        <li className='text-left'>
            <NavLink className={navClass} to="/dashbord/payRoll">
                PayRoll
            </NavLink>
        </li>
        </>
        )}

    {role === "hr" && (
        <>
        {/* HR Dashboard */}
        <div className='text-center text-2xl font-bold border-1 rounded-xl bg-pink-300 px-2 py-1 fixed top-0 left-35 right-260 z-10'>
            {userData?.name }
            <span className='ml-2 text-sm font-normal'>{userData?.role}</span>
        </div>
        <li className='hover:bg-pink-300 text-center px-2 py-1'>
            <NavLink  to="/">Home</NavLink>
        </li>
            <div className='divider border-b'></div>
        <li className='text-left'>
            <NavLink className={navClass} to="/dashbord/hr">
                Employee List
            </NavLink>
        </li>

        <li className='text-left'>
            <NavLink className={navClass} to="/dashbord/progress">
                Progress Work
            </NavLink>
        </li>
        </>
        )}

    {role !== "admin" && role !== "hr" && (
        <>
        {/* Employee Dashboard */}
        <div className='text-center text-2xl  font-medium border-1 rounded-xl bg-pink-300 mt-0.5 px-2 py-0 fixed top-0 left-35 right-260 z-10'>
            {userData?.name }
            <span className='ml-2 text-sm font-normal'>{userData?.role}</span>
        </div>
        <li className='hover:bg-pink-300 text-center px-2 py-1'>
            <NavLink  to="/">Home</NavLink>
        </li>
            <div className='divider border-b'></div>
        <li className='text-left'>
            <NavLink className={navClass} to="/dashbord/employee">
                Work Sheet
            </NavLink>
        </li>

        <li className='text-left'>
            <NavLink className={navClass} to="/dashbord/paymentHistory">
                Pay History
            </NavLink>
        </li>
        </>
        )}
                    
                </ul>
            </div>
            <div className='flex-1 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBord;
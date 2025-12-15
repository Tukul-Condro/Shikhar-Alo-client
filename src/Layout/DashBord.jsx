
import { NavLink, Outlet } from 'react-router-dom';

const DashBord = () => {
    return (
        <div className='flex max-w-6xl mx-auto'>
            <div className="w-64 min-h-screen bg-pink-500 px-3">
                <ul className="menu p-5">
                    <li className='hover:bg-pink-300 text-center px-1 py-1 rounded-2xl'>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className='hover:bg-pink-300 text-left px-1 py-1 rounded-2xl'>
                        <NavLink to="/dashbord/employee">Work-Sheet</NavLink>
                    </li>
                    <li className='hover:bg-pink-300 text-left px-1 py-1 rounded-2xl'>
                        <NavLink to="/dashbord/payment-history">Pay-history</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBord;
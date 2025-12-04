
import { NavLink, Outlet } from 'react-router-dom';

const DashBord = () => {
    return (
        <div className="flex mx-auto max-w-5xl">
            <div className='w-64 min-h-screen bg-pink-500 px-3'>
                <ul className="menu px-5 pt-5">
                    <li>
                        <NavLink to="/dashbord/employee"> Work-Sheet</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBord;
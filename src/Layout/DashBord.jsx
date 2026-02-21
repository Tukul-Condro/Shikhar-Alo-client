
import { NavLink, Outlet } from 'react-router-dom';

const DashBord = () => {


// TODO get admin value from the database
    const isAdmin = null;
    const isHR = true;

    return (
        <div className='flex max-w-6xl mx-auto'>
            <div className="max-w-1/5 min-h-screen bg-pink-500 px-10">
                <ul className="menu mt-10 px-5">
                    <li className='hover:bg-pink-300 text-left px-2 py-1'>
                        <NavLink  to="/">Home</NavLink>
                    </li>
                    <div className='divider border-b'></div>
                {
                    isAdmin?
                    <>
                        {/* Admin dashbord */}
                        <li className='hover:bg-pink-300 text-left px-2 py-1 rounded-2xl'>
                            Admin Home
                        </li>
                        <li className='hover:bg-pink-300 text-left px-2 py-1 rounded-2xl'>
                            <NavLink  to="/dashbord/admin">All-Employee</NavLink>
                        </li>
                        <li className='hover:bg-pink-300 text-left px-2 py-1 rounded-2xl'>
                            <NavLink  to="/dashbord/payRoll">PayRoll</NavLink>
                        </li>
                    </>
                    :
                    <>
                    {
                        isHR?<>
                        {/* HR dashbord */}
                            <li className='hover:bg-pink-300 text-left px-2 py-1 rounded-2xl'>
                                HR Home
                            </li>
                            <li className='hover:bg-pink-300 text-left px-1 py-1 rounded-2xl'>
                                <NavLink to="/dashbord/hr">Employee-List</NavLink>
                            </li>
                            <li className='hover:bg-pink-300 text-left px-1 py-1 rounded-2xl'>
                                <NavLink to="/dashbord/progrss">Progress-work</NavLink>
                            </li>
                        </>
                        :
                        <>
                            {/* Employee dasbord */}
                            <li className='hover:bg-pink-300 text-left px-2 py-1 rounded-2xl'>
                                Employee
                            </li>
                            <li className='hover:bg-pink-300 text-left px-2 py-1 rounded-2xl'>
                                <NavLink to="/dashbord/employee">Work-Sheet</NavLink>
                            </li>
                            <li className='hover:bg-pink-300 text-left px-2 py-1 rounded-2xl'>
                                <NavLink to="/dashbord/paymentHistory">Pay-history</NavLink>
                            </li>
                        </>
                    }
                     </>
                }
                    
                </ul>
            </div>
            <div className='flex-1 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBord;
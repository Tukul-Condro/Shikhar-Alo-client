
import { NavLink, Outlet } from 'react-router-dom';

const DashBord = () => {
    return (
        <div className="">
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBord;
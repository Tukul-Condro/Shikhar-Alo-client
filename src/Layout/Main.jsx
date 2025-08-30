
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Nav from '../Pages/Shared/Nav';
import NavBar2 from '../Pages/Shared/NavBar2';



const Main = () => {
    return (
        <div>
            {/* <Nav></Nav> */}
            <NavBar2></NavBar2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
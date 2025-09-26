
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
// import Nav from '../Pages/Shared/Nav';
import NavBar2 from '../Pages/Shared/NavBar2';
import AuthProvider from '../ProviderContext/AuthProvider';
import { HeadProvider } from 'react-head';



const Main = () => {
    const location = useLocation();
    // console.log(location);
    const isLoginSignUp = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <HeadProvider>
            <AuthProvider>
            <div>
                {/* <Nav></Nav> */}
                {isLoginSignUp || <NavBar2></NavBar2>}
                <Outlet></Outlet>
                {isLoginSignUp || <Footer></Footer>}
            </div>
        </AuthProvider>
        </HeadProvider>
    );
};

export default Main;
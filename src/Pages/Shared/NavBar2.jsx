import React, { useContext } from 'react';
import {
  Navbar,MobileNav,Typography,Button,IconButton,Avatar,Menu,MenuHandler,MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";
import { ChevronDownIcon, Cog6ToothIcon, InboxArrowDownIcon, LifebuoyIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ProviderContext/AuthContext';

const NavBar2 = () => {
  
  const {user , logOut} = useContext(AuthContext);
  const handlelogOut = () => {
    logOut()
      .then(()=>{})
      .catch(error => console.log(error));
       
  }

  const profileMenuItems =(
    <>
      <MenuItem className="flex items-center gap-2 rounded hover:bg-pink-400/30">
        <UserCircleIcon className="h-4 w-4" />
        <Link to="/profile">My Profile</Link>
      </MenuItem>

      <MenuItem className="flex items-center gap-2 rounded hover:bg-pink-400/30">
        <Cog6ToothIcon className="h-4 w-4" />
        <Link to="/edit-profile">Edit Profile</Link>
      </MenuItem>

      <MenuItem className="flex items-center gap-2 rounded hover:bg-pink-400/30">
        <InboxArrowDownIcon className="h-4 w-4" />
        <Link to="/inbox">Inbox</Link>
      </MenuItem>

      <MenuItem className="flex items-center gap-2 rounded hover:bg-pink-400/30">
        <LifebuoyIcon className="h-4 w-4" />
        <Link to="/help">Help</Link>
      </MenuItem>

      <MenuItem onClick={handlelogOut} className="flex items-center gap-2 rounded hover:bg-pink-400/30">
        <PowerIcon className="h-4 w-4 text-red-500" />
        <span className="text-red-500">Log Out</span>
      </MenuItem>
    </>
  )
 
  function ProfileMenu() {
      const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
      // const closeMenu = () => setIsMenuOpen(false);
    
      return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border border-gray-900 p-0.5"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            <div>
              {profileMenuItems}
            </div>
          </MenuList>
        </Menu>
      );
  }

  const [openNav, setOpenNav] = React.useState(false);
     React.useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
        );
  }, []);


    const navList = <>
      <ul className="mt-2 mb-4 flex flex-col gap-2  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <a href="#" className="flex items-center font-bold text-xl">
            Home
            </a>
        </Typography>
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <a href="#" className="flex items-center font-bold text-xl">
            DasBoard
            </a>
        </Typography>
        <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
        >
            <a href="#" className="flex items-center font-bold text-xl">
            Contact Us
            </a>
        </Typography> 
          {
            user ? <>
              <ProfileMenu></ProfileMenu>
            </>
            :
            <>
            <Link to='/login'>
                  <Button
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block text-white text-xl"
                  >
                    <span>Log In</span>
                  </Button>
              </Link>
              </>
          }
      </ul>
  
    </>

    return (
        <div className=" max-auto w-full">
            <Navbar className="sticky top-0 z-10 h-max max-w-5xl mx-auto bg-pink-700 rounded-none  px-4 py-2 lg:px-8 lg:py-2">
            <div className="flex items-center justify-between text-withe ">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    <div className='flex items-center gap-2'>
                       <img
                            className="h-20 w-20  object-cover object-center"
                            src="/src/assets/SHIKHAR ALO 4.jpg"
                            alt="natre image"
                            />
                            <h2 className='text-3xl'>SHIKHAR ALO</h2>
                    </div>
                    
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    )}
                    </IconButton>
                </div>
            </div>
                <Collapse open={openNav}>
                    <div className='sm:mr-3'>
                        {navList}
                    </div>
                <div className="flex items-center gap-x-1">
                    <Link to='/login'>
                        <Button fullWidth variant="text" size="sm" className="">
                          <span>Log In</span>
                        </Button>
                    </Link>
                    {/* <Button fullWidth variant="gradient" size="sm" className="">
                    <span>Sign in</span>
                    </Button> */}
                </div>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar2;
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useState } from "react";

const Nav = () => {
     const [openNav, setOpenNav] = useState(false);

    return (
        <div>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between  text-stone-950">

                 {/* Logo */}
                <Typography
                
                href="#"
                
                className="mr-4 cursor-pointer py-1.5 font-bold"
                >
                MyApp
                </Typography>

                {/* Desktop Menu */}

                <div className="hidden lg:flex gap-6">
                <Typography as="a" href="#" className="cursor-pointer font-bold">
                    Home
                </Typography>
                <Typography as="a" href="#" className="cursor-pointer font-bold">
                    About
                </Typography>
                <Typography as="a" href="#" className="cursor-pointer font-bold">
                    Services
                </Typography>
                <Typography as="a" href="#" className="cursor-pointer font-bold">
                    Contact
                </Typography>
                </div>

                {/* Mobile Menu Button */}

                <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                >
                {openNav ? (
                    <span className="text-xl ">✖</span>
                ) : (
                    <span className="text-xl">☰</span>
                )}
                </IconButton>
                </div>

                {/* Mobile Menu */}
                <Collapse open={openNav}>
                    <div className="flex flex-col gap-2 p-4 text-stone-950 ">
                    <Typography as="a" href="#" className="cursor-pointer font-bold">
                        Home
                    </Typography>
                    <Typography as="a" href="#" className="cursor-pointer font-bold">
                        About
                    </Typography>
                    <Typography as="a" href="#" className="cursor-pointer font-bold">
                        Services
                    </Typography>
                    <Typography as="a" href="#" className="cursor-pointer font-bold">
                        Contact
                    </Typography>
                    </div>
                </Collapse>
                
            </Navbar>
        </div>
    );
};

export default Nav;
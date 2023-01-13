import React from 'react'; 
import NavLogo from './navlogo';
import NavItems from './navigationItem';

const Navbar = () => {
  return ( 
    <>
    <div className=" ">
      <div className="flex flex-row py-4 items-center justify-between px-5 max-w-[100vw] h-fit">
        {/* nav logo */}
        <div className="bg-white rounded-full ">
          <NavLogo />
        </div>
        {/* nav items */}
        <div className="">
          <NavItems />
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Navbar;

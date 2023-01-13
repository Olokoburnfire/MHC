import React from 'react'; 
import Logo from "../../../Assets/Logos/brand_logo.png";

const NavLogo = () => {
  return ( 
    <>
    <div className=" flex w-[70%]">
      <img src={Logo} alt="MHC logo" />
    </div>
    </>
   );
}
 
export default NavLogo;
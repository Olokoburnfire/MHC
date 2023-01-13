import React from 'react';
// eslint-disable-next-line
import {HiX} from "react-icons/hi" ;
import SignupForm from "./signupform";

const Signup = ({handleChange}) => {
    return ( 
        <>
        <main className="">
            {/* Form heading */}
            <div className=" flex flex-row items-center justify-between ">
                <span className=" text-xl leading-8 font-display font-bold text-[#26be00]" > 
                    CREATE AN ACCOUNT
                </span>
                {/* <HiX 
                className=" cursor-pointer h-[31.6px] w-[39.5px] text-[#D30606]  text-center text-xl px-1 py-0.5 border-4 border-[#D30606] border-solid"
                onClick={Sliding}/> */}
            
            </div>
            {/* Form body */}
            <section className="">
                <SignupForm handleChange= {handleChange} />
            </section>
        </main>
        </>
     );
}
 
export default Signup;

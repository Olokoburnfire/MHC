import React from 'react';

const JoinBlog = () => {
    return ( 
        <>
        <div className="bg-[#F3F3F3] max-w-[100vw] w-[100vw] h-auto py-20 pb-32 flex flex-col item-center justify-center gap-5">
            <h1 className="text-3xl leading-[39px] text-[#000] font-medium text-center">JOIN OUR BLOG!</h1>
            <p className="text-xl leading-[26px] text-center  self-center font-normal text-[#000] w-[560px]">
            Sign up to Mayo’s home cooked blog today and be the first to hear about exclusive deals and special offers
            </p>
            <form autoComplete="on" className="w-[642px] h-16 self-center flex flex-row gap-0">
                <input 
                type="email" 
                name="email" 
                id="email"  
                placeholder="Enter your Email" 
                required 
                className=" w-full h-full justify-items-center pl-5 bg-[#e2e2e2] text-[#fff] text-[20px] leading-[26px] font-normal "/>
                <input 
                type="submit" 
                id="submit" 
                value="JOIN" 
                className=" cursor-pointer w-[124px] h-full text-[#fff] leading-[26px] text-[20px] font-normal bg-gradient-to-b from-[#d30606] to-[#810303] "/>
            </form>
        </div>
        </>
        
     );
}
 
export default JoinBlog;
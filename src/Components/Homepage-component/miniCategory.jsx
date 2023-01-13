import React from 'react';
import food from "../../Assets/miscellaneous/food_one.png"

const MiniCategories = () => {
    return ( 
        <div className="w-screen h-96">
            <div className="flex flex-row flex-wrap w-full items-center justify-center gap-[100px]">
                <div className="col-1 bg-transparent flex flex-col gap-7 w-[320px] h-80">
                    <p className="text-4xl font-medium leading-9 text-black font-display">
                        Do you desire another type of stew?
                    </p>
                    <p className="font-display font-normal text-base">
                    Choose the tasty stew or sauce that complements your side dishes from our extensive variety.
                    </p>
                    <button
                    type="button"
                    class="inline w-full h-[80px]  bg-gradient-to-b from-[#bf0101] to-[#790303] text-white font-bold text-center text-[14px] leading-[26px] uppercase opacity-100">
                        SEE OTHER SOUP
                    </button>
                </div>
                <div className="col-2 w-[320px] flex flex-col items-center justify-center h-80 hover:bg-[#e6e6e6] transition duration-250ms] ease-in-out ">
                    <div className="-mb-8 flex items-center z-0 ">
                        <img src={food} alt="A plate of food" className='h-auto w-[246px]'/>
                    </div>
                    <div className="px-2 pt-12 pb-3 text-start w-full h-full bg-[#e6e6e6]">
                        <h1 className="text-xl leading-snug font-display text-black"> Stew/Sauce</h1>
                        <p className="text-start text-base font-display leading-5 ">
                            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MiniCategories;

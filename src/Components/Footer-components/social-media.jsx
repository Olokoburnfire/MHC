import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";


const SocialMedia = () => {
    return ( 
        <div className="social-container flex flex-row gap-5">
            {/* the social media links needs to be updated */}
                {/* facebook */}
            <a 
            href="https://www.facebook.com/learnbuildteach/"
            rel='noreferrer' 
            target= "_blank">
                <FontAwesomeIcon 
                icon={faFacebook} 
                size="2x" 
                className=' w-7 h-7'/>
            </a>
            {/* twitter */}
            <a 
            href="https://www.twitter.com/jamesqquick"  
            rel='noreferrer' 
            target= "_blank">
                <FontAwesomeIcon 
                icon={faTwitter} 
                size="2x" 
                className=' w-7 h-7'/>
            </a>
            {/* twitter */}
            <a 
            href="https://www.tiktok.com/c/jamesqquick"
            rel='noreferrer' 
            target= "_blank">
                <FontAwesomeIcon 
                icon={faTiktok} 
                ize="2x" 
                className=' w-7 h-7' />
            </a>
            {/* instagram */}
            <a 
            href="https://www.instagram.com/learnbuildteach"
            rel='noreferrer' 
            target= "_blank">
                <FontAwesomeIcon 
                icon={faInstagram} 
                size="2x" 
                className=' w-7 h-7' />
            </a>
        </div>
     );
}
 
export default SocialMedia;
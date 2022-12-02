import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function Header() {
    return(
    <div className="w-full h-100 text-white m-8">
        <div className="">
            <h1 className="text-8xl text-center m-2">Kathy Kang</h1>
        </div>
        <div className="flex justify-center">
            <SocialIcon url="https://github.com/katskang" bgColor="#E2E2E2" />
        </div>
        
    </div>
    )
}
import React from 'react';
import SectuionTitle from '../../../Component/SectuionTitle';

const Card = () => {
    const imgs = [
    "https://www.material-tailwind.com/image/web3-card-1.svg",
    "https://www.material-tailwind.com/image/web3-card-2.svg",
    "https://www.material-tailwind.com/image/web3-card-3.svg",
    "https://www.material-tailwind.com/image/web3-card-1.svg",
    ];
    return (
        <div className='text-center mb-5 pb-5'>
            <SectuionTitle heading={'what we do'}></SectuionTitle>
            <div className='grid grid-cols-4 gap-2 pt-10'>
            {imgs.map((img,key)=>(
                <img
                    key={key}
                    src={img}
                    className="h-full w-full rounded-xl object-cover"
                    alt="imgs"
                />
            ))}
            </div>
        </div>
    );
};

export default Card;
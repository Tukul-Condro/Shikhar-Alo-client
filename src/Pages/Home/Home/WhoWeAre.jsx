import React from 'react';
import SectuionTitle from '../../../Component/SectuionTitle';
import {  Button, IconButton } from '@material-tailwind/react';

const WhoWeAre = () => {
    return (
        <div className='text-center pb-5'>
            <SectuionTitle border={''} heading={'who we are'}></SectuionTitle>
                <p className='text-center py-9 text-2xl text-pink-400'>SHIKHAR ALO is an international development organisation founded in Bangladesh in 2016 that partners with over 100 million people living with inequality and poverty to create opportunities to realise human potential.</p>
                <Button variant='text' className='mb-4 bg-none'>Learn more</Button>
                <div className='grid lg:grid-cols-5 gap-3  pb-9 px-9'>
                    <Button className='bg-pink-700'>RECOGNITION</Button>
                    <Button className='bg-pink-700'>VISHION,MISSION AND VALUES</Button>
                    <Button className='bg-pink-700'>OUR DNA</Button>
                    <Button className='bg-pink-700'>SHIKHAR ALO GLOBAL STRATGY</Button>
                    <Button className='bg-pink-700'>SHIKHAR ALO INTERNATIONAL</Button>
                </div>
        </div>
    );
};

export default WhoWeAre;
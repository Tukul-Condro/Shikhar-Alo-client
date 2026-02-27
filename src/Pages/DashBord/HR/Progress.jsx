import { Typography } from '@material-tailwind/react';
import React from 'react';
import useWorks from '../../../Hooks/useWorks';

const Progress = () => {
    const [works] = useWorks();
    return (
        <div>
            <Typography variant='h2' className='text-center font-medium'>Employee's All Works is {works.length}</Typography>

        </div>
    );
};

export default Progress;

const AllCount = () => {
    return (
        <div className=' pt-10 pb-10 '>
            <div className='pt-1 pb-1 mb-5 border-b-4 border-pink-600'>800 million people live in extreme poverty. BRAC tackles poverty holistically. See your impact.</div>
            <div className='grid lg:grid-cols-4 gap-2 text-center pt-5'>
                <div className=''>
                <h1 className='font-bold text-6xl text-stone-700'>15M</h1>
                <p className='text-2xl text-pink-400'>children graduated from BRAC schools</p>
                </div>
                <div>
                    <h1 className='font-bold text-6xl text-stone-700'>12.5M</h1>
                    <p className='text-2xl text-pink-400'>microfinance borrowers and savers accessing financial services</p>
                </div>
                <div>
                    <h1 className='font-bold text-6xl text-stone-700'>97K</h1>
                    <p className='text-2xl text-pink-400'>community health workers delivering last-mile care</p>
                </div>
                <div>
                    <h1 className='font-bold text-6xl text-stone-700'>2.3M</h1>
                    <p className='text-2xl text-pink-400'>families graduated out of extreme poverty</p>
                </div>
            </div>
        </div>
    );
};

export default AllCount;
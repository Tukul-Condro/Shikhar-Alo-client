

import AllCount from './AllCount';
import Bannar from './Bannar';
import Card from './Card';
import WhoWeAre from './WhoWeAre';

const Home = () => {
    return (
        <div className='mx-auto max-w-5xl'>
            <Bannar></Bannar>
            <WhoWeAre></WhoWeAre>
            <Card></Card>
            <AllCount></AllCount>
        </div>
    );
};

export default Home;
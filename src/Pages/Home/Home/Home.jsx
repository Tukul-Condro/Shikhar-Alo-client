

import { Title } from 'react-head';
import AllCount from './AllCount';
import Bannar from './Bannar';
import Card from './Card';
import Latest from './Latest';
import WhoWeAre from './WhoWeAre';

const Home = () => {
    return (
        <div className='mx-auto max-w-5xl'>
            <Title>Home - Shikhar Alo</Title>
            <Bannar></Bannar>
            <WhoWeAre></WhoWeAre>
            <Card></Card>
            <Latest></Latest>
            <AllCount></AllCount>
        </div>
    );
};

export default Home;
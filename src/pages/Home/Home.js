import React from 'react';
import Banner from './Banner';
import Serivces from './Services';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Stats/>   
            <Serivces/>          
        </div>
    );
};

export default Home;
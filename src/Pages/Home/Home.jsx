import React from 'react';
import Header from '../../Components/Header/Header';
import { ContainerMain } from '../../Components/GlobalStyles/styles';
import HomeNav from './HomeNav';

const Home = () => {
    return (
        <>
            <Header />
            <ContainerMain>
                <HomeNav />
            </ContainerMain>
        </>
    );
};

export default Home;

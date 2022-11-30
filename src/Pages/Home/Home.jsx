import React from 'react';
import Header from '../../Components/Header/Header';
import HomeNav from './HomeNav';
import Head from '../../Components/Helper/Head';
import { HomeContainer } from './HomeStyles';

const Home = () => {
    return (
        <>
            <Head title="Home" description="Página Home" />
            <Header />
            <HomeContainer>
                <HomeNav />
            </HomeContainer>
        </>
    );
};

export default Home;

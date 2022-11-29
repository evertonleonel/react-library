import React from 'react';
import Header from '../../Components/Header/Header';
import { ContainerMain } from '../../Components/GlobalStyles/styles';
import HomeNav from './HomeNav';
import Head from '../../Components/Helper/Head';

const Home = () => {
    return (
        <>
            <Head title="Home" description="Página Home" />
            <Header />
            <ContainerMain>
                <HomeNav />
            </ContainerMain>
        </>
    );
};

export default Home;

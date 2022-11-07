import React from 'react'
import Header from '../../Components/Header/Header'
import { Link } from 'react-router-dom'
import {ContainerMain} from '../../Components/GlobalStyles/styles'

const Home = () => {
  return (
    <>
      <Header />
      <ContainerMain>Home</ContainerMain>
    </>
  )
}

export default Home
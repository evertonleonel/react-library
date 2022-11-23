import React from 'react';
import { LoginLogo } from '../GlobalStyles/styles';
import { HeaderContainer, Cabecalho, CabecalhoLogout } from './styles';
import Logo from '../../Assets/logo.svg';
import IconUsuario from '../../Assets/icone_usuario.svg';
import Seta from '../../Assets/seta.svg';

const Header = () => {
    const [logout, setLogout] = React.useState('');

    return (
        <HeaderContainer>
            <Cabecalho>
                <LoginLogo src={Logo} />
                <CabecalhoLogout>
                    <img src={IconUsuario} />
                    <p>Usuário</p>
                    <img src={Seta} />
                </CabecalhoLogout>
            </Cabecalho>
        </HeaderContainer>
    );
};

export default Header;

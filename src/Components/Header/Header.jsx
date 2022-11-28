import React from 'react';
import { LoginLogo } from '../GlobalStyles/styles';
import {
    HeaderContainer,
    Cabecalho,
    CabecalhoLogout,
    DropSair,
} from './styles';
import Logo from '../../Assets/logo.svg';
import IconUsuario from '../../Assets/icone_usuario.svg';
import Seta from '../../Assets/seta.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [logout, setLogout] = React.useState(false);
    const [usuario, setUsuario] = React.useState('');
    const [menuSair, setMenuSair] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        const usuarioLogado = window.localStorage.getItem('users');
        if (!usuarioLogado) {
            navigate('/');
        } else {
            setUsuario(usuarioLogado);
        }
    });

    function deslogar() {
        setMenuSair(!menuSair);
    }

    function deslogarUsuario() {
        window.localStorage.removeItem('users');
        navigate('/');
    }

    return (
        <HeaderContainer>
            <Cabecalho>
                <LoginLogo src={Logo} />
                <CabecalhoLogout onClick={deslogar}>
                    <img src={IconUsuario} />
                    <p className="usuario">{usuario}</p>
                    <img src={Seta} />
                    {menuSair && (
                        <DropSair onClick={deslogarUsuario}>
                            <p>Sair</p>
                        </DropSair>
                    )}
                </CabecalhoLogout>
            </Cabecalho>
        </HeaderContainer>
    );
};

export default Header;

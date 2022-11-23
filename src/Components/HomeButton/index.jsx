import React from 'react';
import { NavLink } from 'react-router-dom';
import { IDiv, IIcone, ISpan } from '../../Components/HomeButton/styles.js';

const HomeButton = ({ icone, texto, url }) => {
    return (
        <IDiv>
            <IIcone>
                <img src={icone} />
            </IIcone>
            <ISpan>
                <NavLink to={url}>{texto}</NavLink>
            </ISpan>
        </IDiv>
    );
};

export default HomeButton;

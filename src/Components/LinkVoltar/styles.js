import styled from 'styled-components';

export const LinkContainer = styled.nav`
    font-size: 2rem;
    position: absolute;
    top: 24px;
    left: calc(24px + 1.82%);

    a {
        text-decoration: none;
        color: #00000080;
        margin-right: 8px;
        transition: all 250ms ease-in-out;
    }

    a:hover {
        color: #ffc501;
    }

    :nth-child(1) {
        img {
            margin-right: 8px;
            height: 16px;
            width: 9px;
        }
    }
`;

import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 180px;
    padding-top: 8rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const ContactContainer = styled.div`
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Links1 = styled.div`
    display: flex;
    gap: 5rem;
    
    a {
        transition: .2s;
        
        &:hover {
            color: ${props => props.theme["blue-100"]};
        }
    }
`;

export const Links2 = styled.div`
    display: flex;
    align-items: center;
    gap: 12rem;

    svg {
        color: ${props => props.theme["blue-100"]};
    }
`;

export const LinkBudgets = styled.a`
    display: flex;
    align-items: center;
    gap: 1.4rem;

    transition: .2s;
    
    &:hover {
        color: ${props => props.theme["blue-100"]};
    }
`;

export const LinksSocial = styled.div`
    display: flex;
    gap: 2rem;

    a {
        display: flex;

        background: transparent;
        border: none;

        cursor: pointer;
        transition: .3s;

        &:hover {
            transform: scale(1.2)
        }
    }
`;

export const NavContainer = styled.div`
    width: 100%;
    height: 8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    padding-left: 5rem;
    padding-right: 5rem;

    background-color: ${props => props.theme["white"]};
    border-bottom: 1px solid ${props => props.theme["blue-100"]};
`;

export const LogoImage = styled.img`
  width: 8rem;
  height: 80px;
`;

export const LinksPages = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    position: relative;

    background: ${props => props.theme["white"]};
    
    a {
        position: relative;
        color: ${props => props.theme["black"]};

        &:hover {
            transition: .3s;
            color: ${props => props.theme["blue-100"]};
        }

        &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -0.5rem;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background-color: ${props => props.theme["blue-100"]};
            transition: width 0.3s;
        }

        &:hover::after {
            width: 100%;
        }
    }

    button {
        margin-left: 5rem;
    }
`;

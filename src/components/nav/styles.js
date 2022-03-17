import styled, { css } from "styled-components";

export const Container = styled.nav`
    background: rgba(0,0,0, 0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
`;

export const NavLink = styled.a`
    ${
        props => props.active ? 
        css`
            background: var(--color-primary);
            color: var(--color-bg);
        ` : 
        css`
            background: transparent;
            color: var(--color-light);
        `
    }
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    font-size: 1.1rem;


    &:hover {
        background: rgba(0, 0, 0, 0.3);
    }
`;
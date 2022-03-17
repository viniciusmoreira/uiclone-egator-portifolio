import styled, { css } from "styled-components";

export const ContainerLink = styled.a`
    width: max-content;
    display: inline-block;
    ${ props => props.isPrimary ? 
        css`
            background: var(--color-primary);
            color: var(--color-bg);
        ` :
        css`
            color: var(--color-primary);            
        `
    }
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);

    &:hover {
        background: var(--color-white);
        color: var(--color-bg);
        border-color: transparent;
    }
`;

export const ContainerButton = styled.button`
    width: max-content;
    display: inline-block;
    ${ props => props.isPrimary ? 
        css`
            background: var(--color-primary);
            color: var(--color-bg);
        ` :
        css`
            color: var(--color-primary);            
        `
    }
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);

    &:hover {
        background: var(--color-white);
        color: var(--color-bg);
        border-color: transparent;
    }
`;

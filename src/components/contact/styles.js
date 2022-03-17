import styled from 'styled-components';
import { Container as ContainerPattern } from '../../styles'

export const Container = styled.div`
    padding-top: 7rem;
`;

export const ContactContainer = styled(ContainerPattern)`
    width: 58%;
    display: grid;
    grid-template-columns: 30% 58%;
    gap: 12%
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

export const Option = styled.article`
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 1.2rem;
    text-align: center;
    border: 1px solid transparent;
    transition: var(--transition);

    &:hover {
        background: transparent;
        border-color: var(--color-bg-variant)
    }

    svg {
        font-size: 1.5rem;
        margin-bottom: 0%.5rem;
    }

    a {
        margin-top: 0.7rem;
        display: inline-block;
        font-size: 0.8rem; 
    }

`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    input, textarea {
        width: 100%;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background: transparent;
        border: 2px solid var(--color-primary-variant);
        resize: none;
        color: var(--color-white);
    }
`;
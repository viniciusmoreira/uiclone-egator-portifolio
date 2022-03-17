import styled from 'styled-components';
import { Container as ContainerPattern } from '../../styles'

export const Container = styled.div`
    padding-top: 7rem;
`;

export const ServicesContainer = styled(ContainerPattern)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;

    > article {
        background: var(--color-bg-variant);
        border-radius: 0 0 2rem 2rem;
        border: 1px solid var(--color-primary);
        height: fit-content;
        transition: var(--transition);

        &:hover {
            background: transparent;
            border-color: var(--color-primary-variant);
            cursor: default;
        }
    }
`;

export const Head = styled.article`
    background: var(--color-primary);
    padding: 2rem;
    border-radius: 0 0 2rem 2rem;
    box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);

    > h3 {
        color: var(--color-bg);
        font-size: 1rem;
        text-align: center;
    }
`;

export const List = styled.ul`
    padding: 2rem;
    
    > li {
        display: flex;
        gap: 1rem;
        margin-bottom:  0.8rem;

        > svg {
            color: var(--color-primary);
            margin-top: 6px;
        }

        > p {
            font-size: 0.9rem;
        }
    }
`;

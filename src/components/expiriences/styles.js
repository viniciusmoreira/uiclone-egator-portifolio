import styled from 'styled-components';
import { Container as ContainerPattern } from '../../styles'

export const Container = styled.div`
    padding-top: 7rem;
`;

export const ExpiriencesContainer = styled(ContainerPattern)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    > div {
        background: var(--color-bg-variant);
        padding: 2.4rem 5rem;
        border-radius: 2rem;
        border: 1px solid transparent;
        transition: var(--transition);

        &:hover {
            background: transparent;
            border-color: var(--color-primary-variant);
            cursor: default;
        }

        h3 {
            text-align: center;
            margin-bottom: 2rem;
            color: var(--color-primary);
        }
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
`;

export const Details = styled.article`
    display: flex;
    gap: 1rem;

    > svg {
        margin-top: 6px;
        color: var(--color-primary);
    }
`;

export const Description = styled.small`
    color: var(--color-light);
`;
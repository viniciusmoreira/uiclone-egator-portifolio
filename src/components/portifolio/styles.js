import styled from 'styled-components';
import { Container as ContainerPattern } from '../../styles'

export const Container = styled.div`
    padding-top: 7rem;
`;

export const PortifolioContainer = styled(ContainerPattern)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
`;

export const Item = styled.article`
    background: var(--color-bg-variant);
    padding: 1.2rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);

    &:hover {
        border: var(--color-primary-variant);
        background: transparent;
    }

    > h3 {
        margin: 1.2rem 0 2rem;
    }
`;

export const ItemImage = styled.div`
    > img {
        border-radius: 1.5rem;
        overflow: hidden;
    }
`;

export const CTA = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`;
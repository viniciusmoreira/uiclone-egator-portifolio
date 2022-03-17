import styled from 'styled-components';
import { Container as ContainerPattern } from '../../styles'

export const Container = styled.div`
    height: 100vh;
    padding-top: 7rem;
`;

export const AboutContainer = styled(ContainerPattern)`
    display: grid;
    grid-template-columns: 35% 50%;
    gap: 15%;
`;

export const AboutMe = styled.div`
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
    display: grid;
    place-items: center;
`

export const MeImage = styled.div`
    border-radius: 2rem;
    overflow: hidden;
    transform: rotate(10deg);
    transition: var(--transition);
    background: black;
    height: 100%;
    width: 100%;

    &:hover {
        transform: rotate(0deg);
    }

`

export const AboutContent = styled.div`
    > p {
        margin: 2rem;
        color: var(--color-light);
    }
`

export const AboutCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

`

export const AboutCard = styled.article`
    background: var(--color-bg-variant);
    border: 1px solid transparent;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: var(--transition);

    &:hover {
         background: transparent;
         border-color: var(--color-primary-variant);
         cursor: default;
    }

    > h5 {
        font-size: 0.95rem;
    }

    > small {
        font-size: 0.7rem;
        color: var(--color-light);
    }
`

export const AboutIcon = styled.div`
    > svg {
        color: var(--color-primary);
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
`;
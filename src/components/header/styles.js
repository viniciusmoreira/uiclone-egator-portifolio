import styled from 'styled-components';
import { Container as ContainerPattern } from '../../styles'

export const Container = styled.header`
    height: 100vh;
    padding-top: 7rem;
    overflow: hidden;    
`;

export const Content = styled(ContainerPattern)`
    text-align: center;
    height: 100%;
    position: relative;
`;

export const Work = styled.h5`
    color: var(--color-light);
`;

export const CTA = styled.div`
    margin-top: 2.5rem;
    display: flex;
    gap: 1.2rem;
    justify-content: center;
`;

export const Me = styled.div`
    background: linear-gradient(var(--color-primary), transparent);
    width: 22rem;
    height: 30rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 4rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding: 5rem 1.5rem 1.5rem 1.5rem;
`;

export const ScrolldownLink = styled.a`
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 0.9rem;
`;
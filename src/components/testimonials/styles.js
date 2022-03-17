import styled from 'styled-components';
// import { Container as ContainerPattern } from '../../styles'
import { Swiper } from 'swiper/react';

export const Container = styled.div`
    padding-top: 7rem;
`;

export const TestimonialsContainer = styled(Swiper)`
    width: 40%;
    padding-bottom: 4rem;
`;

export const Testimonial = styled.article`
    background: var(--color-bg-variant);
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;

    > small {
        color: var(--color-light);
        font-weight: 300;
        display: block;
        width: 80%;
        margin: 0.8rem auto 0;
    }
`;

export const ClientAvatar = styled.div` 
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid var(--color-primary-variant);
`;
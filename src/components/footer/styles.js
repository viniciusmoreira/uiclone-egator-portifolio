import styled from 'styled-components';

export const Container = styled.footer`
    background: var(--color-primary);
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;

    
`;

export const Logo = styled.a`
    color: var(--color-bg);
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
`;

export const Permalinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;

    > li a {
        color:var(--color-bg)
    }
`;

export const Socials = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;

    > a {
        background: var(--color-bg);
        color: var(--color-white);
        padding: 0.7rem;
        border-radius: 0.7rem;;
        display: flex;
        border: 1px solid transparent;
        transition: var(--transition);

        &:hover {
            background: transparent;
            color: var(--color-bg);
            border-color: var(--color-bg);
        }
    }
`;

export const Copyright = styled.div`
    margin-bottom: 4rem;
    color: var(--color-bg);
`;
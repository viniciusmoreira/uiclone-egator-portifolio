import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    left: 0;
    bottom: 3rem;

    &::after {
        content: '';
        width: 1px;
        height: 2rem;
        background: var(--color-primary);
    }
`;
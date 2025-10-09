import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledButton = styled.button`
    padding: 10px;
    border: none;
    background: ${({ theme }) => theme.colors.mirage};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    transition: 0.5s;

    &:hover {        
        filter: brightness(115%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(130%);        
    }
`;


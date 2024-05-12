import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledButton = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.colors.mirage};
    border: none;
    margin: 20px;
    transition: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {        
        filter: brightness(115%);
    }

    &:active {
        filter: brightness(130%);
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.coldTurkey};
    }    
`;
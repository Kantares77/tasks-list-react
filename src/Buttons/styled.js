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

    &:hover {
        color: ${({ theme }) => theme.colors.pictonBlue};
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.coldTurkey};
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;
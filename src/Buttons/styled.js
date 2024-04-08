import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledButton = styled.button`
    background: transparent;
    color: hsl(193, 94%, 33%);
    border: none;
    margin: 20px;
    transition: 0.5s;

    &:hover {
        color: hsl(193, 94%, 38%);
    }

    &:disabled {
        color: hsl(0, 15%, 75%);
    }

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;
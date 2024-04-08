import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid hsl(0deg 0% 92%);
    border-radius: 5px;
`;

export const StyledButton = styled.button`
    padding: 10px;
    border: none;
    background: hsl(193, 94%, 33%);
    color: white;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
        background: hsl(193, 94%, 38%);
        transform: scale(1.1);
    }

    &:active {
        background: hsl(193, 94%, 42%);
    }
`;


import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: hsl(0, 6%, 100%); 
    border-radius: 5px;
    box-shadow: 1px 1px 2px hsl(0deg 4% 66%);
`;

export const StyledHeader = styled.header`
    border-bottom: 1px solid hsl(0deg 0% 92%);
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledBody = styled.div`
    padding: 20px;
`;

export const StyledTitle = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;
`;
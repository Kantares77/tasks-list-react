import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.colors.white}; 
    border-radius: 5px;
    box-shadow: 1px 1px 2px ${({ theme }) => theme.colors.silverChalice};
`;

export const StyledHeader = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.colors.gallery};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledBody = styled.div`
    padding: 20px;
    margin: 0 10px;
`;

export const StyledTitle = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;
`;
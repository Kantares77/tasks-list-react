import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    margin: 0px;
    padding: 0px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gallery};

        ${({ hidden }) => hidden && css`
            display: none;
        `}  
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.white};
    padding: 0px;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.colors.seaGreen};        
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.colors.thunderbird};        
    `}

    &:hover {        
        filter: brightness(115%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(130%);        
    }
`;
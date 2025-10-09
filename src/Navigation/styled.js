import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

        &.active {
            font-weight: bold;
        }
`;

export const List = styled.ul`
    background: ${({ theme }) => theme.colors.mirage};
    margin: 20px;
    padding: 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
    margin: 20px;
`;
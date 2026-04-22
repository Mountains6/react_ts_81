import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;
  background: rgb(142, 196, 223);
`;

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid rgb(6, 29, 40);
  background: rgb(142, 223, 156);
`;

export const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: rgb(28, 85, 111);
`;

export const Main = styled.div`
  display: flex;
  flex: 1;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background: rgb(142, 196, 223);
`;


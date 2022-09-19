import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.ul`
  width: 100%;
  height: 5rem;
  background-color: #044599;
  margin: 0;
  padding: 0 10%;
  list-style: none;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const NavItem = styled.li`
  margin: 0;
  width: 5rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &:hover,
  &:active,
  &.active {
    color: #95bcf0;
    padding-bottom: 0.25rem;
    border-bottom: 4px solid #95bcf0;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavItem>
        <StyledNavLink to="/">Welcome</StyledNavLink>
      </NavItem>
      <NavItem>
        <StyledNavLink to="/products">Products</StyledNavLink>
      </NavItem>
    </Nav>
  );
};

export default Header;

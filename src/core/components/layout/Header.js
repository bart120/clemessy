import React from 'react';
import { MyNavLink } from '../link/NavLink';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends React.Component {

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Clemessy</NavbarBrand>
                <NavbarToggler />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <MyNavLink to='/variabletypes/list'>Types de variable</MyNavLink>
                        </NavItem>
                        <NavItem>
                            <MyNavLink to="https://github.com/reactstrap/reactstrap">GitHub</MyNavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                  </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                    </DropdownItem>
                                <DropdownItem>
                                    Option 2
                    </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                    </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
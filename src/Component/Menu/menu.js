import React from 'react';
import { Link } from "react-router-dom";
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <Link to="/">&#x1F3E0; Accueil</Link>
            <Link to="/collections2">Mes Collections Test</Link>
            <Link to="/collections">&#x24B8; Mes Collections</Link>
            <Link to="/friends">&#x1F46A; Mes Amis</Link>
            <Link to="/account">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f; Mon Compte</Link>
    </StyledMenu>
    )
}
Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;

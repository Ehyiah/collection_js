import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './menu.styled';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">
                <span role="img" aria-label="Accueil">&#x1F3E0;</span>
                Accueil
            </a>
            <a href="/">
                <span role="img" aria-label="Collections">&#x24B8;</span>
                Collections
            </a>
            <a href="/">
                <span role="img" aria-label="Mes amis">&#x1F46A;</span>
                Mes amis
            </a>
            <a href="/">
                <span role="img" aria-label="Mon compte">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
                Mon compte
            </a>
    </StyledMenu>
    )
}
Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;

import React from 'react';
import { IHeaderProps } from './header';
import { HeaderContainer, Logo, Menu, MenuItem, UserAvatar } from './styles';

export const Header: React.FC<IHeaderProps> = ({ logoSrc, menuItems, userAvatar }) => {

    return (
        <HeaderContainer className="sticky-top bg-light shadow-sm p-5 d-flex justify-content-between align-items-center">
            <Logo src={logoSrc} alt="Logo" className="me-3" />

            <Menu className="d-flex justify-content-start list-unstyled">
                {menuItems.map((item, index) => (
                    <MenuItem key={index} className="me-3 text-nowrap mr-5">
                        <a href={item.link} className={`text-decoration-none text-dark ${item.active && 'active'}`}>{item.label}</a>
                    </MenuItem>
                ))}
            </Menu>

            <UserAvatar className="d-none d-md-flex justify-content-center align-items-center">
                <img src={userAvatar} alt="User Avatar" />
            </UserAvatar>
        </HeaderContainer>
    );
};

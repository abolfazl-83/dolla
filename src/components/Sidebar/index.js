import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';
const Sidebar = ({ isOpen, handleIsOpenChange }) => {
    return (
        <SidebarContainer isOpen = {isOpen}>
            <Icon onClick = {handleIsOpenChange}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to = 'about' onClick = {handleIsOpenChange}>About</SidebarLink>
                    <SidebarLink to = 'discover' onClick = {handleIsOpenChange}>Discover</SidebarLink>
                    <SidebarLink to = 'services' onClick = {handleIsOpenChange}>Services</SidebarLink>
                    <SidebarLink to = 'signup' onClick = {handleIsOpenChange}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;
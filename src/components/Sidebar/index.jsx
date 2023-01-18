import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './elements'

function Sidebar({isOpen, toggle}) {

    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="./">Work</SidebarLink>
                    <SidebarLink to="./about">About</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
        </>

    );
}

export default Sidebar;

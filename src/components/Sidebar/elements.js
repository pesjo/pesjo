import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as Link } from 'react-router-dom'

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #131515;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-ou;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}

`

export const CloseIcon = styled(FaTimes)`
color: #000;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
`
export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 80px);
text-align: center;
padding-inline-start: 0px;
`

export const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center; 
font-size: 1.5rem;
text-decoration: none;
list-style: none;
color: #FF6C00;


&:hover {
    color: black;
    transition: 0.2s ease-in-ou
}
`

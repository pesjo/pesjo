import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
background: #131515;
height: 100px;
display: flex; 
justify-content: space-between;
padding: 0.5rem calc((100vw - 900px) / 2);
z-index: 10;
`

export const NavLink = styled(Link)`
color: #ffffff;
display: flex;
align-items: center;
text-decoration: none; 
padding: 0 1rem;
height 100%;
cursor: pointer; 

// &.active {
//     color: #FF6C00;
//     text-decoration: none; 
// }

&:hover {
    color: #FF6C00;
    text-decoration: none; 
}
`


export const Bars = styled(FaBars)`
display: none; 
color: #FF6C00;

@media screen and (max-width: 768px) {
    display: flex; 
    position: absolute;
    top: 1.9rem;
    right: 1.6rem;
    transform: translate(-100%, 75%)
    font-size: 2rem; 
    cursor: pointer;
    size; 2em;
}
`


export const NavMenu = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none; 
}
`

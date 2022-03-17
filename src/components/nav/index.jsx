import React, { useState } from 'react';
import { Container, NavLink } from './styles';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

function Nav() {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <Container>
            <NavLink
                active={activeNav === '#'}
                onClick={() => setActiveNav("#")}
                href='#'>
                <AiOutlineHome />
            </NavLink>
            <NavLink
                active={activeNav === '#about'}
                onClick={() => setActiveNav("#about")}
                href='#about'>
                <AiOutlineUser />
            </NavLink>
            <NavLink
                active={activeNav === '#expiriences'}
                onClick={() => setActiveNav("#expiriences")}
                href='#expiriences'>
                <BsBook />
            </NavLink>
            <NavLink
                active={activeNav === '#services'}
                onClick={() => setActiveNav("#services")}
                href='#services'>
                <RiServiceLine />
            </NavLink>
            <NavLink
                active={activeNav === '#contact'}
                onClick={() => setActiveNav("#contact")}
                href='#contact'>
                <BiMessageSquareDetail />
            </NavLink>
        </Container>
    )
}

export default Nav;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Logo, Permalinks, Socials, Copyright } from './styles';
import { FaFacebook } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'


function Footer() {
    return (
        <Container>
            <Logo href="#">EGATOR</Logo>

            <Permalinks>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#expiriences">Expiriences</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portifolio">Portifolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </Permalinks>

            <Socials>
                <a href="http://facebook.com"><FaFacebook /></a>
                <a href="http://instagram.com"><FiInstagram /></a>
                <a href="http://twitter.com"><IoLogoTwitter /></a>
            </Socials>

            <Copyright >
                <small>&copy; EGATOR Tutorials. All rights reserved.</small>
            </Copyright>
        </Container>
    );
}

export default Footer;
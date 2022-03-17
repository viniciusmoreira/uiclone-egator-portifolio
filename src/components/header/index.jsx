import React from 'react';
import { Container,Content, CTA, Work, Me, ScrolldownLink } from './styles';
import Button from '../button';
import HeaderSocials from './HeaderSocials';

import CV from '../../assets/cv.pdf';
import Avatar from '../../assets/avatar.png';

function Header() {
    return (
        <Container>
            <Content>
                <h5>Hello I'm</h5>
                <h1>Hajia Bintu</h1>
                <Work>Fullstack Developer</Work>

                <CTA>
                    <Button href={CV} download>Download CV</Button>
                    <Button href="#contact" isPrimary>Let's Talk</Button>
                </CTA>

                <HeaderSocials />

                <Me>
                    <img src={Avatar} alt='Me' />
                </Me>

                <ScrolldownLink href="#contact">Scroll Down</ScrolldownLink>

            </Content>
        </Container>
    )
}

export default Header; 
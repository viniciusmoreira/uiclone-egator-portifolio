import React from 'react';
import { Container, MeImage, AboutContainer, AboutMe, AboutContent, AboutCards, AboutCard, AboutIcon } from './styles';
import Button from '../button';
import Avatar from '../../assets/avatar.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
    return <section id="about">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <Container>
            <AboutContainer>
                <AboutMe>
                    <MeImage>
                        <img src={Avatar} alt="About Me" />
                    </MeImage>
                </AboutMe>

                <AboutContent>
                    <AboutCards>
                        <AboutCard>
                            <AboutIcon>
                                <FaAward />
                            </AboutIcon>
                            <h5>Expirience</h5>
                            <small>3+ Years Working</small>
                        </AboutCard>
                        <AboutCard>
                            <AboutIcon>
                                <FiUsers />
                            </AboutIcon>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </AboutCard>
                        <AboutCard>
                            <AboutIcon>
                                <VscFolderLibrary />
                            </AboutIcon>
                            <h5>Projects</h5>
                            <small>80+ completed projects</small>
                        </AboutCard>
                    </AboutCards>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Porro, molestiae eos fugiat quibusdam, iure soluta et pr
                        ovident omnis voluptatum dolore quis! Repellendus esse v
                        oluptatum, eveniet aliquam velit nemo quis eius?
                    </p>

                    <Button href="#contact" isPrimary>Let's Talk</Button>
                </AboutContent>
            </AboutContainer>
        </Container>

    </section>;
}

export default About;
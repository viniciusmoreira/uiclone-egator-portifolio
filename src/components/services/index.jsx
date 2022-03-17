import React from 'react';
import { Container, ServicesContainer, Head, List } from './styles';
import { BiCheck } from 'react-icons/bi';

function Services() {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <Container>
                <ServicesContainer>
                    <article>
                        <Head>
                            <h3>UI/UX Design</h3>
                        </Head>

                        <List>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </List>
                    </article>

                    <article>
                        <Head>
                            <h3>Web Development</h3>
                        </Head>

                        <List>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </List>
                    </article>

                    <article>
                        <Head>
                            <h3>Content Creation</h3>
                        </Head>

                        <List>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                            <li>
                                <BiCheck />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </li>
                        </List>
                    </article>
                </ServicesContainer>
            </Container>
        </section>
    );
}

export default Services;
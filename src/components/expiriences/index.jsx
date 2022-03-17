import React from 'react';
import { Container, ExpiriencesContainer, Content, Details, Description } from './styles';
import { BsPatchCheckFill } from 'react-icons/bs'

function Expiriences() {
    return (
        <section id='expiriences'>
            <h5>What skills I Have</h5>
            <h2>My Expirience</h2>

            <Container>
                <ExpiriencesContainer>
                    <div>
                        <h3>Frontend Development</h3>
                        <Content>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>HTML</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>CSS</h4>
                                    <Description>Intermediate</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>JavaScript</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Bootstrap</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Tailwind</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>React</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                        </Content>
                    </div>
                    <div>
                        <h3>Backend Development</h3>
                        <Content>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Node JS</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>MongoDB</h4>
                                    <Description>Intermediate</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>PHP</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>MySQL</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                            <Details>
                                <BsPatchCheckFill />
                                <div>
                                    <h4>Python</h4>
                                    <Description>Expirienced</Description>
                                </div>
                            </Details>
                        </Content>
                    </div>
                </ExpiriencesContainer>
            </Container>
        </section>
    );
}

export default Expiriences;
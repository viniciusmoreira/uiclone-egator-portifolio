import React from 'react';
import Button from '../button';
import { Container, PortifolioContainer, Item, ItemImage, CTA } from './styles';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';

function Portifolio() {
    return (
        <section id="portifolio">
            <h5>My Recent Work</h5>
            <h2>Portifolio</h2>

            <Container>
                <PortifolioContainer>
                    <Item>
                        <ItemImage>
                            <img src={img1} alt='' />
                        </ItemImage>
                        <h3>This is a portifolio item title</h3>
                        <CTA>
                            <Button href="http://github.com" target='_blank'>GitHub</Button>
                            <Button href="http://dribble.com/Alien_pixels" isPrimary target='_blank'>Live Demo</Button>
                        </CTA>
                    </Item>
                    <Item>
                        <ItemImage>
                            <img src={img2} alt='' />
                        </ItemImage>
                        <h3>This is a portifolio item title</h3>
                        <CTA>
                            <Button href="http://github.com" target='_blank'>GitHub</Button>
                            <Button href="http://dribble.com/Alien_pixels" isPrimary target='_blank'>Live Demo</Button>
                        </CTA>
                    </Item>
                    <Item>
                        <ItemImage>
                            <img src={img3} alt='' />
                        </ItemImage>
                        <h3>This is a portifolio item title</h3>
                        <CTA>
                            <Button href="http://github.com" target='_blank'>GitHub</Button>
                            <Button href="http://dribble.com/Alien_pixels" isPrimary target='_blank'>Live Demo</Button>
                        </CTA>
                    </Item>
                    <Item>
                        <ItemImage>
                            <img src={img4} alt='' />
                        </ItemImage>
                        <h3>This is a portifolio item title</h3>
                        <CTA>
                            <Button href="http://github.com" target='_blank'>GitHub</Button>
                            <Button href="http://dribble.com/Alien_pixels" isPrimary target='_blank'>Live Demo</Button>
                        </CTA>
                    </Item>
                    <Item>
                        <ItemImage>
                            <img src={img5} alt='' />
                        </ItemImage>
                        <h3>This is a portifolio item title</h3>
                        <CTA>
                            <Button href="http://github.com" target='_blank'>GitHub</Button>
                            <Button href="http://dribble.com/Alien_pixels" isPrimary target='_blank'>Live Demo</Button>
                        </CTA>
                    </Item>
                    <Item>
                        <ItemImage>
                            <img src={img6} alt='' />
                        </ItemImage>
                        <h3>This is a portifolio item title</h3>
                        <CTA>
                            <Button href="http://github.com" target='_blank'>GitHub</Button>
                            <Button href="http://dribble.com/Alien_pixels" isPrimary target='_blank'>Live Demo</Button>
                        </CTA>
                    </Item>
                </PortifolioContainer>
            </Container>
        </section>
    );
}

export default Portifolio;
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Container, TestimonialsContainer, Testimonial, ClientAvatar } from './styles';
import avatar1 from '../../assets/testimonial1.jpg';
import avatar2 from '../../assets/testimonial2.jpg';
import avatar3 from '../../assets/testimonial3.jpg';
import avatar4 from '../../assets/testimonial4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';

function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Container>
                <TestimonialsContainer
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >

                    <SwiperSlide>
                        <Testimonial>
                            <ClientAvatar>
                                <img src={avatar1} alt='' />
                            </ClientAvatar>
                            <h5>Ernest Achiever 1</h5>
                            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quam repellat, eveniet ipsa aspernatur fugiat corrupti accusantium nemo laudantium molestias qui eius id perspiciatis sequi ab placeat ut quae quo.</small>
                        </Testimonial>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial>
                            <ClientAvatar>
                                <img src={avatar2} alt='' />
                            </ClientAvatar>
                            <h5>Ernest Achiever 2</h5>
                            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quam repellat, eveniet ipsa aspernatur fugiat corrupti accusantium nemo laudantium molestias qui eius id perspiciatis sequi ab placeat ut quae quo.</small>
                        </Testimonial>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial>
                            <ClientAvatar>
                                <img src={avatar3} alt='' />
                            </ClientAvatar>
                            <h5>Ernest Achiever 3</h5>
                            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quam repellat, eveniet ipsa aspernatur fugiat corrupti accusantium nemo laudantium molestias qui eius id perspiciatis sequi ab placeat ut quae quo.</small>
                        </Testimonial>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Testimonial>
                            <ClientAvatar>
                                <img src={avatar4} alt='' />
                            </ClientAvatar>
                            <h5>Ernest Achiever 4</h5>
                            <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quam repellat, eveniet ipsa aspernatur fugiat corrupti accusantium nemo laudantium molestias qui eius id perspiciatis sequi ab placeat ut quae quo.</small>
                        </Testimonial>
                    </SwiperSlide>
                </TestimonialsContainer>
            </Container>
        </section>
    );
}

export default Testimonials;
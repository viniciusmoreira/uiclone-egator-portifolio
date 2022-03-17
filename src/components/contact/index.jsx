import React, { useRef, useCallback } from 'react';
import { Container, ContactContainer, Form, Options, Option } from './styles';
import Button from '../button';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = useCallback((e) => {

        console.log('Entrou no sendMail.....');
        e.preventDefault();
    

        emailjs.sendForm('service_n6wnueo', 'template_zgt03fm', form.current, 'o8GURXPPJxIcCvf_u')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
          
          console.log('Saiu no sendMail.....');
      }, []);

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <Container>
                <ContactContainer>
                    <Options>
                        <Option>
                            <MdOutlineEmail />
                            <h4>E-mail</h4>
                            <h5>contato@email.com</h5>
                            <a href='mailto:contato@email.com' target='_blank' rel="noreferrer">Send a message</a>
                        </Option>
                        <Option>
                            <RiMessengerLine />
                            <h4>Messenger</h4>
                            <h5>egatortutorials</h5>
                            <a href='http://m.me/ernest.achiever' target='_blank' rel="noreferrer">Send a message</a>
                        </Option>
                        <Option>
                            <BsWhatsapp />
                            <h4>WhatsApp</h4>
                            <h5>+123456789</h5>
                            <a href='http://api.whatsapp.com/send?phone=+123456789' target='_blank' rel="noreferrer">Send a message</a>
                        </Option>
                    </Options>

                    <Form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your fullname' required />
                        <input type="email" name='email' placeholder='Your e-mail' required />
                        <textarea name='message' rows={7} placeholder='Your message' required></textarea>

                        <Button type='submit' isPrimary >Send Message</Button>
                    </Form>
                </ContactContainer>
            </Container>

        </section>
    );
}

export default Contact;
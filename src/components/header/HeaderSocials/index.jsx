/* eslint-disable jsx-a11y/anchor-has-content */
import { Container } from './styles';
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

export default function HeaderSocials() {
    return (
        <Container>
            <a href='http://linkedin.com' target='_blank' rel="noreferrer">
                <BsLinkedin />
            </a>
            <a href='http://github.com' target='_blank' rel="noreferrer">
                <FaGithub />
            </a>
            <a href='http://dribble.com' target='_blank' rel="noreferrer">
                <FiDribbble />
            </a>
        </Container>
    )
}
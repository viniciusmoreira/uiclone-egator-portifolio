import { ContainerButton, ContainerLink } from './styles';

function Button({ children, isPrimary = false, href, ...rest }) {
    if(href){
        return (
            <ContainerLink {...rest} isPrimary={isPrimary}>
                {children}
            </ContainerLink>
        );
    }

    return (
        <ContainerButton {...rest} isPrimary={isPrimary}>
            {children}
        </ContainerButton>
    );
    
};

export default Button;

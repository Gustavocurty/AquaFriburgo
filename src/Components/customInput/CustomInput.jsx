import {Container, Label, TextInput} from './styled'

const CustomInput = ({label, placeholder}) => {
    return( 
        <Container>

            <Label>{label}</Label>
            <TextInput placeholder={placeholder} placeholderTextColor="#aaa"></TextInput>
        </Container>
    );
}

export default CustomInput;
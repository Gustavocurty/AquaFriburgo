import {Container, Label, TextInput} from './styled'

const CustomInput = ({label, placeholder, secure, type}) => {
    return( 
        <Container>

            <Label>{label}</Label>
            <TextInput placeholder={placeholder} placeholderTextColor="#aaa" secureTextEntry={secure} keyboardType={type}></TextInput>
        </Container>
    );
}

export default CustomInput;
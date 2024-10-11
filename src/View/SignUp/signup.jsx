import { Container, Text, Botao, TextButton, Footer } from './styled';
import CustomInput from '../../Components/customInput/CustomInput';
import waves from '../../../assets/images/waves.png'
import { Alert } from 'react-native';


export default function SignUp({ navigation }) {

  const handleSignUp = () => {
    Alert.alert("Cadastro feito com sucesso!");
    navigation.navigate('Login');
  };

  const preencha = () => {
    Alert.alert("Preencha todos os campos");
  };

    return(
      <Container>
        <Text>Sign Up</Text>
        <CustomInput label={"Nome Completo"} placeholder={"Digite seu nome completo"} secure={false} type={"text"}/>
        <CustomInput label={"E-mail"} placeholder={"Digite seu e-mail"} secure={false} type={"email-addres"}/>
        <CustomInput label={"Senha"} placeholder={"Digite sua senha"} secure={true} type={"text"}/>
        <CustomInput label={"Endereço"} placeholder={"Digite seu endereço"} secure={false} type={"text"}/>
        <CustomInput label={"CPF"} placeholder={"Digite seu CPF"} secure={false} type={"numeric"}/>
        <CustomInput label={"Numero da conta de água"} placeholder={"Digite o numero da sua conta de água"} secure={false} type={"numeric"}/>

        <Botao>
          <TextButton onPress={handleSignUp}>CADASTRAR</TextButton>
        </Botao>
        <Footer source={waves}/>
      </Container>
    );
  }
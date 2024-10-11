import { Container, Text, Titulo, Footer, CheckBoxView, Image, NoticeLink, Botao, TextButton, TextCadastro } from './styled';
import CustomInput from '../../Components/customInput/CustomInput';
import React, {useState} from 'react';
import { CheckBox } from 'react-native-elements';

import { Link } from 'expo-router';

const logo = require('../../../assets/images/logo.png');
const waves = require('../../../assets/images/waves.png');

export default function Login() {
  const [isChecked, setIsChecked] = useState(false);

    return(
      <Container>
        <Image source={logo}/>
        <Text>Login</Text>
        <CustomInput label={"CPF"} placeholder={"Digite seu CPF"}></CustomInput>
        <CustomInput label={"Senha"} placeholder={"Digite sua senha"}></CustomInput>
        <CheckBoxView>
          <CheckBox
            title="Lembrar-me"
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, padding: 0, margin: 0}}
            textStyle = {{color: "white"}}
          />
        </CheckBoxView>
        <Botao>
          <TextButton>ENTRAR</TextButton>
        </Botao>
        <NoticeLink>Esqueci minha senha!</NoticeLink>
        <NoticeLink>Não posssui conta? <TextCadastro>Cadastre-se</TextCadastro></NoticeLink>
        <Footer source={waves}/>
      </Container>
    );
  }
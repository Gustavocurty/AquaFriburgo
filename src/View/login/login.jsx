import { Container, Text, Footer, CheckBoxView, Image, NoticeLink, Botao, TextButton, TextCadastro } from './styled';
import CustomInput from '../../Components/customInput/CustomInput';
import React, { useState } from 'react';
import { CheckBox } from 'react-native-elements';

const logo = require('../../../assets/images/logo.png');
const waves = require('../../../assets/images/waves.png');

export default function Login ({ navigation }) {

  const contasCadastradas = [
    {
      nome: "Gustavo Dias",
      email: "gustavodias@gmail.com",
      senha: "gustavo123",
      endereco: "rua general joao, n123",
      cpf: 14918878776,
      conta: 123456789,
    },
    {
      nome: "Ana Silva",
      email: "anasilva@example.com",
      senha: "ana123",
      endereco: "av. brasil, n456",
      cpf: 12345678901,
      conta: 987654321
    },
    {
      nome: "Carlos Oliveira",
      email: "carlosoliveira@example.com",
      senha: "carlos123",
      endereco: "rua das flores, n789",
      cpf: 23456789012,
      conta: 456123789
    },
    {
      nome: "Maria Santos",
      email: "mariasantos@example.com",
      senha: "maria123",
      endereco: "travessa do sol, n321",
      cpf: 34567890123,
      conta: 321654987
    },
    {
      nome: "Lucas Pereira",
      email: "lucaspereira@example.com",
      senha: "lucas123",
      endereco: "rua do mar, n654",
      cpf: 45678901234,
      conta: 654321987
    },
    {
      nome: "Fernanda Lima",
      email: "fernandalima@example.com",
      senha: "fernanda123",
      endereco: "av. ipanema, n987",
      cpf: 56789012345,
      conta: 789456123
    }
  ];

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {

    navigation.navigate('Main')
    // const conta = contasCadastradas.find(conta => conta.cpf === Number(cpf) && conta.senha === senha);

    // if (conta) {
      
    //   navigation.navigate('Home');
    // } else {
    //   setError('CPF ou senha inválidos.');

    //   setTimeout(() => {
    //     setError('');
    //   }, 5000);
    // }
  };

  return (
    <Container>
      <Image source={logo} />
      <Text>Login</Text>
      <CustomInput 
        label={"CPF"} 
        placeholder={"Digite seu CPF"} 
        secure={false} 
        type={"numeric"} 
        value={cpf}
        onChangeText={setCpf}
      />
      <CustomInput 
        label={"Senha"} 
        placeholder={"Digite sua senha"} 
        secure={true} 
        type={"text"} 
        value={senha}
        onChangeText={setSenha}
      />
      {error ? <Text style={{ color: 'red', fontSize: 12 }}>{error}</Text> : null}
      <CheckBoxView>
        <CheckBox
          title="Lembrar-me"
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, padding: 0, margin: 0 }}
          textStyle={{ color: "white" }}
        />
      </CheckBoxView>
      <Botao onPress={handleLogin}>
        <TextButton>ENTRAR</TextButton>
      </Botao>
      <NoticeLink>Esqueci minha senha!</NoticeLink>
      <NoticeLink>Não possui conta? <TextCadastro onPress={() => navigation.navigate('SignUp')}>Cadastre-se</TextCadastro></NoticeLink>
      <Footer source={waves} />
    </Container>
  );
}

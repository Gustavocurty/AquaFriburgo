import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width:100%;
    align-items: center;
    justify-content: center;
    background-color: #063862;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Image = styled.Image`
    width: 50%;
    height: 130px;
    object-fit: contain;
    margin-top: -150px;
`;

export const FooterContainer = styled.View`
`;

export const Footer = styled.Image`
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
`;

export const NoticeLink = styled.Text`
    color: #fff;
    font-size: 14px;
`;

export const CheckBoxView = styled.View`
    width: 73%;
    margin-bottom: 5px;
    margin-top: -5px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

export const TextCadastro = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-decoration: underline;
`;


export const Botao = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 6px 0 6px;
    border-radius: 6px;
    background-color: #6AD491;
    margin: 8px 0 10px;
    color: #fff;
`;
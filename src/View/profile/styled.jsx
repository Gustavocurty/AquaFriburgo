import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #063862;
    padding: 10px;
`

export const Header = styled.View`
    padding: 10px;
    margin-bottom: 30px;
`

export const BackButton = styled.TouchableOpacity`
    color: white;
`

export const ProfileView = styled.View`
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const NameText = styled.Text`
    font-size: 1.5rem;
    color: #fff;
`

export const ProfileWrapper = styled.View`
    padding: 1px; 
    border-radius: 50%; 
    border: 3px solid #074852;
`;

export const ProfileImg = styled.View`
    background-color: #10a2b8;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 1px solid #074852;
    
`

export const MedalView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 5px;
`

export const EcoView = styled.View`
    background-color: red;
    border-radius: 30px;
    padding: 4px;
    width: 90%;
`

export const EcoText = styled.Text`
    text-align: center;
    color: #fff;
    font-size: 16px;
`

export const Text = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`

export const DetailsView = styled.View`
    width: 100%;
    padding: 50px;
    flex-direction: row;
    gap: 40px;
`

export const PointsView = styled.View`
    width: 25%;
`

export const PointsText = styled.Text`
    font-size: 1.8rem;
    text-align: center;
    color: white;
`

export const SustentableText = styled.Text`
    font-size: 0.7rem;
    text-align: center;
    color: #1d98ff;
`

import {
    Container,
    Text,
    Header,
    BackButton,
    ProfileView,
    ProfileImg,
    NameText,
    MedalView,
    EcoView,
    EcoText,
    DetailsView,
    PointsText,
    SustentableText,
    PointsView,
    ProfileWrapper,
} from './styled'
import { FaArrowLeft, FaMedal } from 'react-icons/fa'
import MedalIcon from '../../../assets/images/medal.svg'

export default function Profile({ navigation }) {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => navigation.navigate('Login')}>
                    <FaArrowLeft />
                </BackButton>
            </Header>

            <ProfileView>
                <ProfileWrapper>
                    <ProfileImg></ProfileImg>
                </ProfileWrapper>
                <NameText>Alexandre Bianchini</NameText>

                <MedalView>
                    <EcoView>
                        <EcoText>Eco-Estrategista</EcoText>
                    </EcoView>
                </MedalView>
            </ProfileView>

            <DetailsView>
                <PointsView>
                    <PointsText>145</PointsText>
                    <SustentableText>Pontos Sustentáveis</SustentableText>
                </PointsView>

                <PointsView>
                    <PointsText>7</PointsText>
                    <SustentableText>meses em economia</SustentableText>
                </PointsView>
            </DetailsView>
        </Container>
    )
}

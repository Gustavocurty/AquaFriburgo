import { Container, Text, Button, Touchable } from "./styled"

const CustomButton = () => {
    return ( 
      <Touchable >
        <Container>
          <Text>{title}</Text>
        </Container>
      </Touchable> 
    );
}

export default CustomButton;
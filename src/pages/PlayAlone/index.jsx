import { ImageBackground } from "react-native";
import {
  Container,
  TextTimer,
  Timer,
  TipoContainer,
  TipText,
  TipTiTle,
  Title,
} from "./styles";
import bombImg from "../../assets/bomba.png";
import PasswordInput from "../../components/PasswordInput";
export default function PlayAlone() {
  return (
    <Container>
      <Title>Bomb Game Solo</Title>
      <ImageBackground
        source={bombImg}
        resizeMode="cover"
        style={{
          minHeight: 130,
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Timer>
          <TextTimer>
            {10}:{15}:{10}
          </TextTimer>
        </Timer>
      </ImageBackground>

      <TipoContainer>
        <TipTiTle>Sua dica:</TipTiTle>
        <TipText>dica vai esta aqui</TipText>
      </TipoContainer>
      <PasswordInput />
    </Container>
  );
}

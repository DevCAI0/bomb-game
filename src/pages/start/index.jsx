import React from "react";
import {
  Container,
  Logo,
  RulesButton,
  RulesText,
  SubTitle,
  Title,
} from "./styles"; // Importe os componentes corretos
import ButtonComponent from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

export default function Start() {
  const navigation = useNavigation();
  const handleNavToPlayAlone = () => {
    navigation.navigate("PlayAlone");
  };
  const handleNavToPlayTogether = () => {
    console.log("Teste");
  };

  const handleNavToRules = () => {
    navigation.navigate("Rules");
  };

  return (
    <Container>
      <Logo
        source={require("../../assets/logoDark.png")}
        resizeMode="contain"
      />
      <Title>Bem-vindo ao{"\n"}BombGame</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent
        buttonText={"jogar Solo"}
        handlePress={handleNavToPlayAlone}
      />
      <ButtonComponent
        buttonText={"jogar em Dupla"}
        handlePress={handleNavToPlayTogether}
      />

      <RulesButton onPress={handleNavToRules}>
        <RulesText>ver as regras do jogo</RulesText>
      </RulesButton>
    </Container>
  );
}

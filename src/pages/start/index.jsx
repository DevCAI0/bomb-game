import React from "react";
import { Container, Logo, Rules, SubTitle, Title } from "./styles";
import ButtonComponent from "../../components/Buttons";

export default function Start() {
  const handleNavToPlayAlone = () => {
    console.log("Teste");
  };
  const handleNavToPlayTogether = () => {
    console.log("Teste");
  };
  const handleNavToPlayRules  = () => {
    console.log("Teste");
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
      <Rules onPress={handleNavToPlayRules}>ver as regras do jogo</Rules>
    </Container>
  );
}

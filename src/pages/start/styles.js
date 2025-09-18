import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(20)}px;
  background-color: #131313;
`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  align-self: center;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(70)}px;
  margin-bottom: ${RFValue(110)}px;
  font-size: ${RFValue(32)}px;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  color: white;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: sans-serif;
  text-align: center;
  color: white;
`;

export const RulesButton = styled.TouchableOpacity`
  margin-top: ${RFValue(80)}px;
  align-items: center;
`;

export const RulesText = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: sans-serif;
  text-align: center;
  color: white;
`;

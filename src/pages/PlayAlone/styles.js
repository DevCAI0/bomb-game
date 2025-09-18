import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Timer = styled.View`
  margin-bottom: ${RFValue(25)}px;
  margin-right: ${RFValue(15)}px;
`;

export const TextTimer = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const TipoContainer = styled.View`
  margin: 0 ${RFValue(45)}px;
`;
export const TipTiTle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const TipText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLight};
`;

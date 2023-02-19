import styled from 'styled-components/native';
import {colors} from 'styles/defaultTheme';
import {setFontSize} from '_utils/setFontSize';

export const ContainerHomeContainer = styled.View`
  padding: 40px 20px;
  height: 100%;
  justify-content: space-between;
`;

export const TitleHome = styled.Text`
  color: ${colors.dark};
  font-family: 'Bangers';
  font-size: ${setFontSize(25)};
`;

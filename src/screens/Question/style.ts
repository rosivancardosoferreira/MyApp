import styled from 'styled-components/native';
import {colors} from 'styles/defaultTheme';
import {setFontSize} from '_utils/setFontSize';

export const ContainerQuestion = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${colors.light};
`;

export const ContainerTitle = styled.View`
  background-color: ${colors.blue};
  padding: 5px 10px;
  border-radius: 15px;
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const TextTitle = styled.Text`
  font-size: ${setFontSize(20)};
  color: ${colors.light};
  font-weight: 600;
`;

export const ContainerScroll = styled.ScrollView`
  margin-bottom: 20px;
`;

export const TextContent = styled.Text`
  font-size: ${setFontSize(17)};
  color: ${colors.dark};
`;

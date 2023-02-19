import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from 'styles/defaultTheme';
import {setFontSize} from '_utils/setFontSize';

export const ContainerTextButton = styled.Text`
  text-align: center;
  color: ${colors.light};
  font-family: 'Bangers';
  font-size: ${setFontSize(35)};
`;

export const Styles = StyleSheet.create({
  button: {
    borderBottomWidth: 5,
    borderColor: colors.darkBlue,
    borderStyle: 'solid',
    borderRadius: 15,
    width: '100%',
    padding: 10,
  },
});

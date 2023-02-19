import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from 'styles/defaultTheme';
import {setFontSize} from '_utils/setFontSize';

export const StyleModalOptions = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  flex: 1,
  paddingHorizontal: 10,
};

export const InsideModal = styled.View`
  background-color: ${colors.blue};
  border-radius: 20px;
  margin: 20px 0;
  margin: auto;
  width: 80%;
`;

export const HeaderModal = styled.View`
  height: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex-direction: row;
  padding-bottom: 25px;
  justify-content: center;
  align-items: flex-end;
`;

export const ContentSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const TextLoading = styled.Text`
  text-align: center;
  color: ${colors.light};
  font-family: 'Bangers';
  font-size: ${setFontSize(30)};
  margin: 15px 0;
`;

export const Styles = StyleSheet.create({
  ItemLine: {
    width: 20,
    backgroundColor: colors.light,
  },
});

import {StyleSheet} from 'react-native';
import styled, {css} from 'styled-components/native';
import {colors} from 'styles/defaultTheme';
import {setFontSize} from '_utils/setFontSize';

export const StyleModalOptions = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  flex: 1,
  paddingHorizontal: 10,
};

export const InsideModal = styled.ScrollView`
  background-color: ${colors.blue};
  border-radius: 20px;
  padding: 20px;
  margin: 20px 0;
`;

export const ContentSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const BoxQuestion = styled.View`
  padding: 30px 15px;
  background-color: ${colors.light};
  border-radius: 20px;
  position: relative;
`;
export const BoxQuestionL = styled.View`
  position: absolute;
  background-color: ${colors.light};
  border-radius: 20px;
  height: 20px;
  width: 90%;
  left: 10px;
  transform: rotate(2deg);
`;

export const BoxQuestionR = styled(BoxQuestionL)`
  right: 5px;
  left: auto;
  transform: rotate(-2deg);
`;

export const TextQuestion = styled.Text`
  text-align: center;
  color: ${colors.dark};
  font-size: ${setFontSize(20)};
`;

export const ContentOptions = styled.View`
  margin-top: 30px;
  row-gap: 15px;
`;

export const TextItem = styled.Text<{isAnswered: boolean}>`
  ${({isAnswered}) => css`
    text-align: center;
    color: ${colors[!isAnswered ? 'dark' : 'light']};
    font-size: ${setFontSize(20)};
    font-weight: 500;
  `}
`;

export const Styles = StyleSheet.create({
  baseButton: {
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  defaultButton: {
    backgroundColor: colors.light,
  },
  successButton: {
    backgroundColor: colors.green,
  },
  errorButton: {
    backgroundColor: colors.red,
  },
});

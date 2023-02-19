import styled from 'styled-components/native';
import {colors} from 'styles/defaultTheme';

export const StyleModalOptions = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  flex: 1,
  paddingHorizontal: 20,
};

export const InsideModal = styled.View`
  margin: auto;
  width: 100%;
  background-color: #d7d1bb;
  border-radius: 20px;
  padding: 20px;
  row-gap: 20px;
  position: relative;
`;

export const ButtonClose = styled.Pressable`
  border: 2px solid red;
  position: absolute;
  top: -30px;
  right: -10px;
  background-color: red;
  width: 40px;
  height: 40px;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
`;

export const CloseItem = styled.Text`
  color: ${colors.light};
  font-family: 'Bangers';
  font-size: 30px;
`;

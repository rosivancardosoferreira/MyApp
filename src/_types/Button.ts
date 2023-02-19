import {StyleProp, ViewStyle} from 'react-native';

export interface ButtonParams {
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

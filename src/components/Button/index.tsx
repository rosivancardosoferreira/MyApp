import React from 'react';
import {Pressable} from 'react-native';
import {ButtonParams} from '_types/Button';
import {ContainerTextButton, Styles} from './style';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {colors} from 'styles/defaultTheme';

export function Button({title, style, onPress}: ButtonParams) {
  const translateY = useSharedValue(0);
  const backgroundColor = useSharedValue(colors.blue);
  const borderBottomWidth = useSharedValue(5);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
      backgroundColor: backgroundColor.value,
    };
  });

  const handlePressIn = () => {
    translateY.value = 5;
    backgroundColor.value = withTiming(colors.darkBlue, {duration: 300});
    borderBottomWidth.value = withTiming(5, {duration: 200});
  };

  const handlePressOut = () => {
    translateY.value = 0;
    backgroundColor.value = withTiming(colors.blue, {duration: 300});
    borderBottomWidth.value = withTiming(0, {duration: 200});
  };

  return (
    <Pressable
      style={style}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}>
      <Animated.View style={[Styles.button, animatedStyle]}>
        <ContainerTextButton>{title}</ContainerTextButton>
      </Animated.View>
    </Pressable>
  );
}

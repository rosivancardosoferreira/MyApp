import React from 'react';
import {Modal} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
} from 'react-native-reanimated';
import {
  ContentSafeAreaView,
  HeaderModal,
  InsideModal,
  Styles,
  StyleModalOptions,
  TextLoading,
} from './style';
import {ItemLoadingParams, ModalLoadingParams} from '_types/Question';

function ItemLoading({delay = 0}: ItemLoadingParams) {
  const height = useSharedValue(0);

  height.value = withDelay(
    delay,
    withRepeat(withTiming(50, {duration: 550}), -1, true),
  );

  const animatedStyleItem = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });
  return <Animated.View style={[Styles.ItemLine, animatedStyleItem]} />;
}

export function ModalLoading({isOpen, textStatusIA}: ModalLoadingParams) {
  return (
    <Modal visible={isOpen} animationType="fade" transparent animated>
      <ContentSafeAreaView>
        <Animated.View style={StyleModalOptions}>
          <InsideModal>
            <HeaderModal>
              <ItemLoading />
              <ItemLoading delay={600} />
            </HeaderModal>
            <TextLoading>{textStatusIA}</TextLoading>
          </InsideModal>
        </Animated.View>
      </ContentSafeAreaView>
    </Modal>
  );
}

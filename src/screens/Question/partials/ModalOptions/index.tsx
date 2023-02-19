import React, {Fragment, useEffect} from 'react';
import {Modal, Pressable} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {
  BoxQuestion,
  BoxQuestionL,
  BoxQuestionR,
  ContentOptions,
  ContentSafeAreaView,
  InsideModal,
  StyleModalOptions,
  Styles,
  TextItem,
  TextQuestion,
} from './style';
import {ModalQuestionParams, RenderOptionParams} from '_types/Question';

function RenderOption({
  value,
  option,
  isAnswered,
  correct,
  onAnswerQuestion,
}: RenderOptionParams) {
  const translateY = useSharedValue(0);
  const borderBottomWidth = useSharedValue(5);
  const animatedButton = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const handlePressIn = () => {
    translateY.value = 5;
    borderBottomWidth.value = withTiming(5, {duration: 200});
  };

  const handlePressOut = () => {
    translateY.value = 0;
    borderBottomWidth.value = withTiming(0, {duration: 200});
  };
  const buttonStyleAnswered =
    option === correct ? Styles.successButton : Styles.errorButton;
  const buttonStyle = isAnswered ? buttonStyleAnswered : Styles.defaultButton;

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => onAnswerQuestion(option)}>
      <Animated.View style={[Styles.baseButton, buttonStyle, animatedButton]}>
        <TextItem isAnswered={isAnswered}>{value}</TextItem>
      </Animated.View>
    </Pressable>
  );
}

export function ModalQuestion({
  isOpen,
  question,
  isAnswered,
  onHandleModal,
  onAnswerQuestion,
}: ModalQuestionParams) {
  const opacity = useSharedValue(0);
  useEffect(() => {
    if (isOpen) {
      opacity.value = withTiming(1, {duration: 500});
    }
  }, [opacity, isOpen]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      transparent
      animated
      onRequestClose={onHandleModal}>
      <ContentSafeAreaView>
        <Animated.View style={[StyleModalOptions, animatedStyle]}>
          <InsideModal>
            <BoxQuestion>
              <TextQuestion>{question.problem}</TextQuestion>
              <BoxQuestionL />
              <BoxQuestionR />
            </BoxQuestion>
            <ContentOptions>
              {question.options.map(({option, value}) => (
                <Fragment key={option}>
                  <RenderOption
                    option={option}
                    onAnswerQuestion={onAnswerQuestion}
                    isAnswered={isAnswered}
                    value={value}
                    correct={question.correct}
                  />
                </Fragment>
              ))}
            </ContentOptions>
          </InsideModal>
        </Animated.View>
      </ContentSafeAreaView>
    </Modal>
  );
}

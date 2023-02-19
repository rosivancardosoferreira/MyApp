import React, {useEffect} from 'react';
import {Modal} from 'react-native';
import {ModalOptionsParams} from '_types/Home';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {ButtonClose, CloseItem, InsideModal, StyleModalOptions} from './style';
import {Button} from 'components';

export function ModalOptions({
  isOpen,
  onHandleModal,
  onGoToQuestion,
}: ModalOptionsParams) {
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    if (isOpen) {
      opacity.value = withTiming(1, {duration: 500});
      console.log('abrir modal');
    }
  }, [opacity, isOpen]);

  const handleCloseModal = () => {
    onHandleModal();
  };

  const matters = [
    {
      id: 1,
      value: 'Ética profissional',
    },
    {
      id: 2,
      value: 'Ética nas redes sociais',
    },
    {
      id: 3,
      value: 'Educação e questões ambientais',
    },
    {
      id: 4,
      value: 'Educação e questões raciais',
    },
    {
      id: 5,
      value: 'Educação e questões de saúde',
    },
    {
      id: 6,
      value: 'Educação e questões de inclusão digital',
    },
    {
      id: 7,
      value: 'Educação e questões ambientais',
    },
  ];

  return (
    <Modal visible={isOpen} animationType="fade" transparent animated>
      <Animated.View style={[StyleModalOptions, animatedStyle]}>
        <InsideModal>
          {matters.map(({id, value}) => {
            return (
              <Button
                key={id}
                title={value}
                onPress={() =>
                  onGoToQuestion({
                    matter: value,
                  })
                }
              />
            );
          })}
          <ButtonClose onPress={handleCloseModal}>
            <CloseItem>X</CloseItem>
          </ButtonClose>
        </InsideModal>
      </Animated.View>
    </Modal>
  );
}

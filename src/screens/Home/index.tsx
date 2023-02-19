import React from 'react';
import {Button} from 'components';
import {ContainerHomeContainer, TitleHome} from './style';
import {ModalOptions} from './partials/ModalOptions';
import {useHome} from './useHome';

export function Home() {
  const {isOpenModal, onHandleModal, onGoToQuestion} = useHome();
  return (
    <ContainerHomeContainer>
      <ModalOptions
        isOpen={isOpenModal}
        onHandleModal={onHandleModal}
        onGoToQuestion={onGoToQuestion}
      />
      <TitleHome>Conheça mais sobre...</TitleHome>
      <Button title="COMEÇAR" onPress={onHandleModal} />
    </ContainerHomeContainer>
  );
}

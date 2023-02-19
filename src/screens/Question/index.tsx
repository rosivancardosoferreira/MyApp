import {
  ContainerQuestion,
  ContainerScroll,
  ContainerTitle,
  TextContent,
  TextTitle,
} from './style';
import {useQuestion} from './useQuestion';
import {useRoute} from '@react-navigation/core';
import {IRootRouteProps} from '_utils/iNavigate';
import {Button} from 'components';
import {ModalQuestion} from './partials/ModalOptions';
import {ModalLoading} from './partials/ModalLoading';

export function Question() {
  const route = useRoute<IRootRouteProps<'Question'>>();
  const titleMatter = route?.params?.matter;
  const {
    matter,
    isOpenModalQuestion,
    isOpenModalLoading,
    textStatusIA,
    question,
    isAnswered,
    onHandleModalQuestion,
    onHandleModalLoading,
    onAnswerQuestion,
  } = useQuestion({
    titleMatter,
  });
  return (
    <ContainerQuestion>
      <ModalQuestion
        isOpen={isOpenModalQuestion}
        question={question}
        isAnswered={isAnswered}
        onHandleModal={onHandleModalQuestion}
        onAnswerQuestion={onAnswerQuestion}
      />

      <ModalLoading
        isOpen={isOpenModalLoading}
        textStatusIA={textStatusIA}
        onHandleModal={onHandleModalLoading}
      />
      <ContainerTitle>
        <TextTitle>{titleMatter}</TextTitle>
      </ContainerTitle>
      <ContainerScroll>
        <TextContent>{matter}</TextContent>
      </ContainerScroll>
      <Button title="Responder" onPress={onHandleModalQuestion} />
    </ContainerQuestion>
  );
}

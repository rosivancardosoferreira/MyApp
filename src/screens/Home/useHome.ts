import {useState} from 'react';
import {onGoToQuestionParams} from '_types/Home';
import {useNavigation} from '@react-navigation/native';
import {IRouterProps} from '_utils/iNavigate';

export function useHome() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigation = useNavigation<IRouterProps>();

  function onGoToQuestion({matter}: onGoToQuestionParams) {
    setIsOpenModal(false);
    navigation.navigate('Question', {matter});
  }

  return {
    isOpenModal,
    onHandleModal: () => setIsOpenModal(!isOpenModal),
    onGoToQuestion,
  };
}

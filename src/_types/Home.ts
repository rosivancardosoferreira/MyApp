export interface onGoToQuestionParams {
  matter: string;
}

export interface ModalOptionsParams {
  isOpen: boolean;
  onHandleModal: () => void;
  onGoToQuestion: (matter: {matter: string}) => void;
}

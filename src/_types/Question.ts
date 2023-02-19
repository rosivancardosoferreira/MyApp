export type questionProps = {
  problem: string;
  options: {
    option: string;
    value: string;
  }[];
  correct: string;
  explanation: string;
};
export interface ModalQuestionParams {
  isOpen: boolean;
  question: questionProps;
  isAnswered: boolean;
  onHandleModal: () => void;
  onAnswerQuestion: (value: string) => void;
}

export interface ModalLoadingParams {
  isOpen: boolean;
  textStatusIA: string;
  onHandleModal: () => void;
}

export interface RenderOptionParams {
  correct: string;
  option: string;
  value: string;
  isAnswered: boolean;
  onAnswerQuestion: (value: string) => void;
}

export interface useQuestionParams {
  titleMatter: string;
}

export interface ItemLoadingParams {
  delay?: number;
}

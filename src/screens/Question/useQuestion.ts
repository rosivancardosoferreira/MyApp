import {useCallback, useEffect, useState} from 'react';
import {chatGPT} from 'services/api/chatGPT';
import {useQuestionParams} from '_types/Question';

export function useQuestion({titleMatter}: useQuestionParams) {
  const [isOpenModalQuestion, setIsOpenModalQuestion] = useState(false);
  const [isOpenModalLoading, setIsOpenModalLoading] = useState(false);
  const [textStatusIA, setTextStatusIA] = useState('Gerando conteúdo . . .');
  const [matter, setMatter] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [question, setQuestion] = useState({
    problem: '',
    options: [
      {
        option: '0',
        value: '',
      },
      {
        option: '1',
        value: '',
      },
      {
        option: '2',
        value: '',
      },
      {
        option: '3',
        value: '',
      },
    ],
    correct: '0',
    explanation: '',
  });

  const getMatter = useCallback(async () => {
    try {
      setIsOpenModalLoading(true);
      setTextStatusIA(`Gerando conteúdo sobre ${titleMatter}`);
      // /*
      const dataMatter = await chatGPT.postMatter({matter: titleMatter});
      const getText: string = dataMatter?.data?.choices[0].text;
      const cleanData: string =
        getText ?? '{"matter": "Conteúdo indisponível"}'.replace(/\n/g, '');
      const getObject = JSON.parse(cleanData);
      // */
      // const getObject = {
      //   matter:
      //     'asknsakj ndksajn daksjn daskjndksajn dkasjn dksjanjkdsandkjasn dksajnd kjasndkjsandas',
      //   problem: 'Qual é a importância da inclusão digital para a educação?',
      //   options: [
      //     {
      //       option: 'a',
      //       value:
      //         'Garantir que todos os indivíduos tenham acesso às informações e às ferramentas necessárias para participar plenamente da sociedade digital.',
      //     },
      //     {
      //       option: 'b',
      //       value:
      //         'Promover a igualdade de oportunidades para todos os indivíduos, independentemente de sua localização geográfica, nível de renda, gênero, etnia ou outras características.',
      //     },
      //     {
      //       option: 'c',
      //       value:
      //         'Aumentar o acesso à tecnologia e à educação digital para todos os indivíduos.',
      //     },
      //     {
      //       option: 'd',
      //       value: 'Todas as anteriores.',
      //     },
      //   ],
      //   correct: 'd',
      //   explanation:
      //     'Todas as opções acima são importantes para a inclusão digital na educação.',
      // };
      setMatter(getObject?.matter);
      setQuestion({
        problem: getObject?.problem,
        options: getObject?.options,
        correct: getObject?.correct,
        explanation: getObject?.explanation,
      });
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      console.log(JSON.stringify(getObject, null, 2));
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>');
      console.log('>>>>>>>>>>>>>>>>>>>>');
      console.log(
        JSON.stringify(
          {
            problem: getObject?.problem,
            options: getObject?.options,
            correct: getObject?.correct,
            explanation: getObject?.explanation,
          },
          null,
          2,
        ),
      );
      console.log('>>>>>>>>>>>>>>>>>>>>');
    } catch (error) {
      console.log('<><><><><><><><><><><><><><><><><><><><><><><><>');
      console.log(error);
      console.log('<><><><><><><><><><><><><><><><><><><><><><><><>');
    } finally {
      setIsOpenModalLoading(false);
    }
  }, [titleMatter]);

  useEffect(() => {
    getMatter();
  }, [getMatter]);

  function onHandleModalQuestion() {
    setIsOpenModalQuestion(!isOpenModalQuestion);
  }

  function onHandleModalLoading() {
    setIsOpenModalLoading(!isOpenModalLoading);
  }

  function onAnswerQuestion(value: string) {
    console.log(value);
    // if(value === question.correct) {
    setIsAnswered(true);
    // }
  }

  return {
    matter,
    isOpenModalQuestion,
    isOpenModalLoading,
    textStatusIA,
    question,
    isAnswered,
    onHandleModalQuestion,
    onHandleModalLoading,
    onAnswerQuestion,
  };
}

import axios from 'axios';

function bodyCall(prompt: string) {
  return {
    model: 'text-davinci-003',
    prompt,
    temperature: 0,
    max_tokens: 3096,
  };
}
const headers = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer XXXXX',
  },
};
export const chatGPT = {
  postMatter: async ({matter}: {matter: string}) => {
    const data = await axios.post(
      'https://api.openai.com/v1/completions',
      bodyCall(
        `
        O assunto é: ${matter}.
        Explique o assunto.
        Dê uma pergunta sobre o assunto.
        Dê opções de respostas a, b, c, d
        Diga a correta.
        Responda preenchendo cada campo do formato do objeto abaixo, fornceça a resposta em formato de objeto mesmo.
       {
          "matter": "o texto sobre o assunto vai aqui, coloque a explicação",
          "problem": "CONTEUDO DO PROBLEMA",
          "options": [
            {
              "option": "a",
              "value": "texto"
            },
            {
              "option": "b",
              "value": "texto"
            },
            {
              "option": "c",
              "value": "texto"
            },
            {
              "option": "d",
              "value": "texto"
            }
          ],
          "correct": "",
          "explanation": ""
        }
        `,
      ),
      headers,
    );
    return data;
  },
};

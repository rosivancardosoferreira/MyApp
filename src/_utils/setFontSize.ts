import {Dimensions} from 'react-native';

export function setFontSize(baseFontSize: number) {
  const {width} = Dimensions.get('window');
  const baseScreenWidth = 375; // largura da tela base para o tamanho de fonte base
  const fontScaleFactor = 0.7; // proporção da fonte em relação à tela

  // Calcula o tamanho da fonte com base na largura da tela e proporção definida
  const fontSize = Math.round(
    (width / baseScreenWidth) * baseFontSize * fontScaleFactor,
  );
  return `${fontSize}px`;
}

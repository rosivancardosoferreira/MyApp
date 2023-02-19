import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from 'styles/defaultTheme';
import AppRoutes from 'settings/routes';

export function App() {
  const styleSafe = StyleSheet.create({
    containerSafeArea: {
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={styleSafe.containerSafeArea}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </SafeAreaView>
  );
}

import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MD3DarkTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { useFonts, VarelaRound_400Regular } from '@expo-google-fonts/varela-round';
import * as SplashScreen from 'expo-splash-screen';
import BotScreen from './screens/BotScreen/BotScreen';

const theme = {
  ...DefaultTheme,
  dark: true,
  rippleEffectEnabled: true,
};

type AppDisplayLayerProps = {
  fontsLoaded: boolean;
};

SplashScreen.preventAutoHideAsync();

export default function App() {
  return <App_DisplayLayer {...useDataLayer()} />;
}

function App_DisplayLayer({ fontsLoaded }: AppDisplayLayerProps) {
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
        <BotScreen onLayoutRootView={onLayoutRootView} />
    </PaperProvider>
  );
}

function useDataLayer() {
  const [fontsLoaded] = useFonts({
    VarelaRound_400Regular,
  });

  return {
    fontsLoaded,
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'VarelaRound_400Regular',
  },
});

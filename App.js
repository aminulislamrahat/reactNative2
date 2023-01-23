import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./pages/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./pages/GameScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber)
  {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber){
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backGroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backGroundImage: {
    opacity: 0.25,
  }
});

import React from 'react';
import {
  StyleSheet,
  View,
  useColorScheme,Text
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Inicio from './screens/Inicio';
import Datos from './screens/Datos';
import RevisionGeneral from './screens/RevisionGeneral';
const App= () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={{backgroundColor:"green",flex:1,flexDirection:'column'}}>
      <RevisionGeneral/>
      <Text>hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

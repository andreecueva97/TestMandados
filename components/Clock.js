import React, { useState, useEffect } from 'react';
// import Realm from 'C:\Users\Andre\nodeProyect\TestMandados\REALMDB.js';
import { Text, View, StyleSheet, Animated } from 'react-native';
const Clock = (props) => {
  //const a = props.minuto;
  const [minutos, setMins] = useState(props.minuto);//Variable para los minutos //10
  const [segundos, setSecs] = useState(props.segundo);//Variable para los segundos   //3
  const [colorText, setColor] = useState('black');
  const [colorBorder, setColorB] = useState('#283747');
  useEffect(() => {
    const timerId = setInterval(() => {
      if (segundos < 59) {
        setSecs(S => S + 1);
        // if (minutos > 0){
        //   setColor(colorTexto => "#D71313")
        //   setColorB(color=>"red")
        //   setMins(minuto => minuto + 1)
        //   setSecs(59)
        // }
        // else {
        //   //setMins(minuto => minuto + 1)
        //   setSecs(59)
        // }
      }
      else {
        setMins(minuto => minuto + 1);
        setSecs(0)
      }
      if (minutos == 2) {
        if (segundos == 0) {
          setColor(colorTexto => "#D71313")
          setColorB(color => "red")

        }
      }
    }, 1000)
    return () => clearInterval(timerId);
  }, [segundos, minutos])

  return (
    <View style={{
      width: 120, zIndex: 1,
      height: 120, textShadowRadius: 30,
      borderRadius: 120 / 2, backgroundColor: "#E5E7E9", justifyContent: 'center', alignItems: 'center', borderColor: colorBorder,
      borderWidth: 5
    }}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <Text style={{ fontSize: 40, color: colorText }}>
          {minutos}:{segundos < 10 && 0}{segundos}
        </Text>
      </View>
    </View>
  )
}


export default Clock;

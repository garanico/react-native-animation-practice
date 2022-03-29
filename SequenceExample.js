import { StyleSheet, View, Animated} from 'react-native';
import { useRef, useEffect } from 'react';


export default function SequenceExample() {

  const translation = useRef (new Animated.ValueXY({ x: 0, y: 0})).current;

  useEffect (() => {
    Animated.sequence ([
      Animated.spring(translation.x, {
        toValue: -100,
        useNativeDriver: true,
      }), 
      Animated.spring(translation.y, {
          toValue: -100,
          useNativeDriver: true,
    })
  ]).start();
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width:100,
          height:100,
          backgroundColor: "yellow",
          transform: [
            { translateX: translation.x,},
          {translateY: translation.y},
        ],
        }}
        />
        </View>
  );
  }

  const styles = StyleSheet.create({
     container: {
       backgroundColor: "black",
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
    },
  });
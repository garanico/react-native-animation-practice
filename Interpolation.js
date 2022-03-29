import React, { useEffect, useRef } from 'react';
import { Animated, View, Stylesheet } from 'react-native';

export default function Interpolation() {

  const translation = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 5000, 
      useNativeDriver: false,
    }).start();
  }, []);
  
  return (


    <View style={styles.container}>
      <Animated.View
        style={{
          width:100,
          height:100,
          backgroundColor: "yellow",
          transform: [
            {translateX: translation},
            //rotation
            {rotate: translation.interpolate({
              inputRange: [0, 100],
              outputRange: ['0deg', '360deg']
            })}
          ],
        //opacity within a range
          opacity: translation.interpolate({
            inputRange: [25, 50, 100],
            outputRange: [0, 1, 0],
            extrapolateLeft: 'clamp',
            extrapolateRight: 'clamp',
          }),

          backgroundColor: translation.interpolate({
            inputRange: [0, 100],
            outputRange: ['yellow', 'blue'],
          })
        }}
        />
        </View>
  )
      }
  


const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
 },
});

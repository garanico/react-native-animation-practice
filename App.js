import { View, Animated, StyleSheet, Text, ScrollView } from 'react-native';
import { useRef, useEffect, useState } from 'react';

export default function App() {

  const animationValue = useRef (new Animated.Value(0)).current;
  const backgroundInterpolate = animationValue.interpolate({
    inputRange: [0, 3000],
    outputRange: ["black", "white"]
  })

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate
    }

  const translation = useRef (new Animated.ValueXY({ x: 0, y: 0})).current;

  const translation2 = useRef (new Animated.ValueXY({ x: 0, y: 0})).current;

  const translation3 = useRef (new Animated.ValueXY({ x: 0, y: 0})).current;
  
  useEffect (() => {
    Animated.sequence ([
      Animated.spring(translation.x, {
        toValue: 300,
        useNativeDriver: true,
      }), 
      Animated.spring(translation2.x, {
          toValue: -300,
          useNativeDriver: true,
    }),
    Animated.spring(translation3.x, {
      toValue: 300,
      useNativeDriver: true,
})
  ]).start();
  });

  return (
    
    <View style={styles.container}>
      <ScrollView 
        scrollEventThrottle={16}
        onScroll={Animated.event([{
           nativeEvent : { contentOffset: { y : animationValue } }
          }],{useNativeDriver: false} 
        )}
      >
        <Animated.View style={[styles.scrollViewStyle, backgroundStyle]}>
       <Animated.View style={{
         backgroundColor: "red",
         height: 300,
         width: 300,
         margin: 10,
         justifyContent: "center",
         alignItems: "center",
         transform: [
          { translateX: translation.x}
        ],
        }}>
        <Text style={styles.eyobText}
        >EYOB</Text>
      </Animated.View>

      <Animated.View style={{
         backgroundColor: "yellow",
         height: 300,
         width: 300,
         margin: 10,
         justifyContent: "center",
         alignItems: "center",
         transform: [
          { translateX: translation2.x}
        ],
        }}>
        <Text style={styles.graceText}>GRACE</Text>
      </Animated.View>

      <Animated.View style={{
         backgroundColor: "blue",
         height: 300,
         width: 300,
         margin: 10,
         justifyContent: "center",
         alignItems: "center",
         transform: [
          { translateX: translation3.x}
        ],
        }}>
        <Text style={styles.eyobText}
        >SAM</Text>
      </Animated.View> 
      </Animated.View> 
      </ScrollView>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
 },
  eyob: {
    backgroundColor: "red",
    height: 300,
    width: 300,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  eyobText: {
    fontWeight: "bold",
  },
  grace: {
    backgroundColor: "yellow",
    height: 300,
    width: 300,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  graceText:{
    fontWeight: "bold",
  },
  sam: {
    backgroundColor: "blue",
    height: 300,
    width: 300,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  samText: {
    color: "white",
    fontWeight: "bold",
  },
  scrollViewStyle:
  {
    flex: 1,
    height: 5000,
  }
});

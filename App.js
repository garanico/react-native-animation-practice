import { StyleSheet, View, Animated} from 'react-native';
import { useRef, useEffect } from 'react';

export default function App() {

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

  // const translation = useRef (new Animated.ValueXY({ x: 0, y: 0})).current;

  // useEffect (() => {
  //   Animated.sequence ([
  //       Animated.spring(translation.x, {
  //         toValue: -100,
  //         useNativeDriver: true,
  //       }), 
  //       Animated.spring(translation.y, {
  //           toValue: -100,
  //           useNativeDriver: true,
  //     }),
    
  //     Animated.spring(translation.x, {
  //       toValue: -100,
  //       useNativeDriver: true,
  //     }), 
  //     Animated.spring(translation.y, {
  //         toValue: -100,
  //         useNativeDriver: true,
  //   })
  // ]).start();
  // });

  // return (
  //   <View style={styles.container}>
  //     <Animated.View
  //       style={{
  //         width:100,
  //         height:100,
  //         backgroundColor: "yellow",
  //         transform: [
  //           {translateX: translation.x},
  //         {translateY: translation.y},
  //       ],
  //       }}
  //       />
  //       </View>
  // );
  // }

  // const styles = StyleSheet.create({
  //    container: {
  //      backgroundColor: "black",
  //      flex: 1,
  //      justifyContent: "center",
  //      alignItems: "center",
  //   },
  // });
   

  // const firstOpacity = useRef(
  //   new Animated.Value(0)
  // ).current;
  // const secondOpacity = useRef(
  //   new Animated.Value(0)
  // ).current;
  // const thirdOpacity = useRef(
  //   new Animated.Value(0)
  // ).current;
  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.timing(firstOpacity, {
  //       toValue: 1,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(secondOpacity, {
  //       toValue: 1,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(thirdOpacity, {
  //       toValue: 1,
  //       // delay: 2000,
  //       useNativeDriver: true,
  //     })
  //   ]).start();
  // }, []);
  // return (
  //   <View style={{
  //       flex: 1,
  //       alignItems: 'center',
  //       justifyContent: 'center',
  //       backgroundColor: 'black'
  //     }}
  //   >
  //     <Animated.View
  //       style={{
  //         width: 100,
  //         height: 100,
  //         backgroundColor: "orange",
  //         // transform: [{ translateX: translation }],
  //         // marginTop: Platform.OS === 'ios' ? 60 : 0,
  //         marginBottom: 10,
  //         opacity: firstOpacity
  //       }}
  //     >
  //     </Animated.View>
  //     <Animated.View
  //       style={{
  //         width: 100,
  //         height: 100,
  //         backgroundColor: "orange",
  //         // transform: [{ translateX: translation }],
  //         // marginTop: Platform.OS === 'ios' ? 60 : 0,
  //         marginBottom: 10,
  //         opacity: secondOpacity
  //       }}
  //     >
  //     </Animated.View>
  //     <Animated.View
  //       style={{
  //         width: 100,
  //         height: 100,
  //         backgroundColor: "orange",
  //         // transform: [{ translateX: translation }],
  //         // marginTop: Platform.OS === 'ios' ? 60 : 0,
  //         marginBottom: 10,
  //         opacity: thirdOpacity
  //       }}
  //     >
  //     </Animated.View>
  //   </View>
  // );

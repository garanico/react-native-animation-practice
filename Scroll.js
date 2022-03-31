import { View, Animated } from 'react-native';
import { useRef } from 'react';

export default function App() {

const scrolling = useRef (new Animated.Value(0)).current;
const translation = scrolling.interpolate({
    inputRange: [100, 130],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });
  
  
  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'tomato',
          transform: [
            { translateY: translation },
          ],
        }}
      />
      
      <Animated.ScrollView
        onScroll={Animated.event(
          [{
            nativeEvent:{
              contentOffset: {
                y: scrolling,
              },
            },
          }],
          {useNativeDriver: true},
        )}
        // onScroll will be fired every 16ms
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, height: 1000 }} />
      </Animated.ScrollView>
    </>
     );
    }
      

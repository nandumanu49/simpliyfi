import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <Svg height="300" width="300" style={styles.svg}>
        {/* Diamond Outline */}
        <Path
          d="M150 0 L300 150 L150 300 L0 150 Z"
          fill="none"
          stroke="#000"
          strokeWidth="20"
          strokeLinejoin="round"
        />

        {/* Colored Sides */}
        <Path d="M150 0 L300 150" stroke="#E74C3C" strokeWidth="20" strokeLinecap="round" />
        <Path d="M300 150 L150 300" stroke="#BDC3C7" strokeWidth="20" strokeLinecap="round" />
        <Path d="M150 300 L0 150" stroke="#3498DB" strokeWidth="20" strokeLinecap="round" />
        <Path d="M0 150 L150 0" stroke="#1ABC9C" strokeWidth="20" strokeLinecap="round" />
      </Svg>

      {/* Text inside the diamond */}
      <View style={styles.textBox}>
        <Text style={styles.titleLine}>
          <Text style={styles.titleWhite}>HTML</Text>
          <Text style={styles.titleOrange}>&</Text>
          <Text style={styles.titleWhite}>CSS</Text>
        </Text>
        <Text style={styles.subtitle}>design and build websites</Text>
      </View>

      {/* Author text */}
      <Text style={styles.author}>JON DUCKETT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    marginBottom: 30,
  },
  textBox: {
    position: 'absolute',
    top: '41%',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  titleLine: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleWhite: {
    color: '#fff',
  },
  titleOrange: {
    color: '#E74C3C',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 8,
  },
  author: {
    position: 'absolute',
    bottom: 80,
    color: '#fff',
    fontSize: 16,
    letterSpacing: 2,
  },
});

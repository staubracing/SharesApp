import { StyleSheet, Dimensions } from 'react-native';

const LoadingStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    zIndex: 1000, // Ensure it's above other elements
  },
});

export default LoadingStyles;

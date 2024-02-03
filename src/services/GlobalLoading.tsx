// React and React Native core imports
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { LoadingStyles } from '../styles';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

interface Props {
  children: ReactNode;
}

// Providing initial values matching the context type
const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider: React.FC<Props> = ({ children }) => {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
      {isLoading && (
        <View style={LoadingStyles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </LoadingContext.Provider>
  );
};

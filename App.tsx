/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// React  adn React Native imports
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

// Custom imports
import { SharesComponent } from './src/components/SpecificComponents';

// AWS Amplify imports
import { Amplify } from 'aws-amplify';
import awsConfig from './src/services/aws-exports';

Amplify.configure(awsConfig);

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <SharesComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

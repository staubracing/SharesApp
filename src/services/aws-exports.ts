import { Amplify } from 'aws-amplify';

const awsConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_zXF2GkN6E',
    userPoolWebClientId: '2tv3p0n9p7o2tu68lo198pma5v',
    identityPoolId: 'us-east-1:0bece005-102f-42b4-b6a3-4496a925345f',
    // mandatorySignIn: true,
  },
};

try {
  Amplify.configure(awsConfig);
} catch (e) {
  console.log('error', e);
}

export default awsConfig;

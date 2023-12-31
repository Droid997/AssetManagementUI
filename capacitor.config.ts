import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.arenmatrix.assetmanagement',
  appName: 'Asset Management',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

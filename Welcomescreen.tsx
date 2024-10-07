import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


interface AppProps {
  navigation: {
    navigate: (screen: string, params?: object) => void; 
  };
}


const menuItems = [
  { id: '1', name: 'Meat Safari', description: 'Lamb, Beef and turkey pieces grilled the Hot-Pot way', price: 40, course: 'Starter' },
  { id: '2', name: 'Rice & Chicken Stew', description: 'Jollof rice prepared alongside delicious peppeered chicken stew served with a side of plantains', price: 100, course: 'Main' },
  { id: '3', name: 'Cheese-cake Fondo', description: 'Delcious cheese-cake topped off with fresh cherries and vanilla ice-cream', price: 50, course: 'Dessert' },
  
];

const App: React.FC<AppProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hot-Pot (Login)</Text>
      
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/efa234ccf71edf969e8915f284ce657b' }} 
          style={styles.logo}
        />
        <Text style={styles.logoText}>Hot-Pot Restaurant</Text>
      </View>

      <Text style={styles.welcomeText}>Welcome</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Homescreen')}>
          <Text style={styles.buttonText}>Chef</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => {
            console.log('Client button pressed');
            
            navigation.navigate('Coursemenu', { menuItems }); 
          }}
        >
          <Text style={styles.buttonText}>Client</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFACD', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  logoText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#FF8C00', 
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#FFD700', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;

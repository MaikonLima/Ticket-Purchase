import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function WelconScreen() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', marginBottom: -350}}>
        <ImageBackground
          source={require('../../assets/bus-default.png')}
          style={styles.imageView}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            margin: 30,
            textAlign: 'center',
          }}>
          Bem-Vindo ao Sistema de Bilhetagem!
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.buttonMain}
          onPress={() => navigation.navigate('FormPeople')}>
          <Text style={styles.textButton}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFF',
  },
  imageView: {
    width: '83%',
    height: '60%',
    margin: 40,
    marginLeft: 90,
  },
  buttonMain: {
    backgroundColor: '#ffc219',
    width: 350,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 14,
    color: '#FFFF',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 10,
  },
  textMain: {
    textAlign: 'center',
  },
});

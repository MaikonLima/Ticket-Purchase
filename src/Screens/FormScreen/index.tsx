import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function FormPeopleScreen() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.Form}>Formulário de Compra</Text>
      </View>
      <View style={{marginBottom: 60}}>
        <Text style={{margin: 10, marginBottom: -10}}>Nome</Text>
        <TextInput style={styles.input} />
        <Text style={{margin: 10, marginBottom: -10}}>RG</Text>
        <TextInput keyboardType="numeric" style={styles.input} />
        <View>
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.textButton}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
  },
  buttonNext: {
    backgroundColor: '#ffc219',
    width: '95%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  textButton: {
    fontSize: 14,
    color: '#FFFF',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 10,
  },
  Form: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 50,
  },
});

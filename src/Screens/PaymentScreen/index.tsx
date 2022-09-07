import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function PaymentScreen() {
  const navigation = useNavigation<any>();
  const showAlert = () => {
    setTimeout(() => {
      Alert.alert(
        '',
        'Insira o cartão.',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Welcome'),
            style: 'cancel',
          },
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              'This alert was dismissed by tapping outside of the alert dialog.',
            ),
        },
      );
    }, 200);
  };

  return (
    <SafeAreaView>
      <Text style={styles.textoMain}>Escolha seu metodo de pagamento.</Text>
      <View style={styles.viewCard}>
        <ImageBackground
          style={styles.CardMain}
          source={require('../../assets/bandeiras-de-cartoes.png')}
        />
      </View>
      <View style={styles.containerCards}>
        <View>
          <TouchableOpacity
            style={styles.creditCard}
            onPress={() => showAlert()}>
            <Text>Cartão de crédito</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.debitCard}
            onPress={() => showAlert()}>
            <Text>Cartão de débito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textoMain: {
    textAlign: 'center',
    marginTop: 200,
  },
  CardMain: {
    width: '100%',
    height: '60%',
  },
  containerCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    zIndex: 1,
    marginTop: -200,
  },
  creditCard: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    display: 'flex',
    width: '70%',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#424e5e',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  debitCard: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    display: 'flex',
    width: '70%',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#424e5e',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewCard: {
    alignItems: 'center',
    marginTop: 20,
  },
});

import {StyleSheet} from 'react-native';

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
    borderColor: '#424e5e',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewCard: {
    alignItems: 'center',
    marginTop: 20,
  },
});

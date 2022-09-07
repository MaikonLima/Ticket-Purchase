import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendario';
import {LocaleConfig} from 'react-native-calendars';
import {SafeAreaView} from 'react-native-safe-area-context';
import DatePicker from 'react-native-modern-datepicker';

export function HomeScreen() {
  const navigation = useNavigation<any>();
  const [selectedDate, setSelectedDate] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 22,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Selecione a data da Viagem
        </Text>
        <Text style={styles.line}></Text>
      </View>
      <View>
        <DatePicker onSelectedChange={(date: any) => setSelectedDate(date)} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonMain}
          onPress={() => navigation.navigate('Seat')}>
          <Text style={styles.textButton}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  line: {
    borderBottomColor: '#969ba2',
    borderBottomWidth: 1,
    width: '100%',
    height: 5,
    opacity: 0.44,
    marginTop: 10,
  },
  buttonMain: {
    backgroundColor: '#ffc219',
    width: '100%',
    height: 60,
    borderRadius: 1,
    alignItems: 'center',
    marginTop: 250,
  },
  textButton: {
    fontSize: 17,
    color: '#FFFF',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 15,
  },
});

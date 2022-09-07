import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function SeatScreen() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 20,
        }}>
        <Text style={{fontWeight: '900'}}>Direito</Text>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 1</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 2</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 5</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 6</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 9</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 10</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 13</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 14</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 17</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 18</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 21</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 22</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      <View
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 20,
          marginRight: 120,
        }}>
        <Text style={{fontWeight: '900'}}>Esquerdo</Text>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 3</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 4</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 7</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 8</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 11</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 12</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 15</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button2}>
            <Text>Assento 16</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 19</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 20</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View>
        {/* <View style={{flexDirection: 'row', width: 25}}>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 23</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button2}
            onPress={() => navigation.navigate('Payment')}>
            <Text>Assento 24</Text>
            <ImageBackground
              style={{width: 60, height: 60}}
              source={require('../../assets/seat.png')}
            />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box1: {
    borderBottomColor: '#454545',
    borderBottomWidth: 1,
    width: '100%',
    height: 5,
    opacity: 0.44,
    marginTop: 10,
    flexDirection: 'column',
  },
  box2: {
    borderBottomColor: '#454545',
    borderBottomWidth: 1,
    width: '100%',
    height: 5,
    opacity: 0.44,
    marginTop: 10,
    flexDirection: 'column',
  },
  Button1: {
    borderBottomColor: '#454545',
    borderBottomWidth: 1,
    width: 100,
    height: 50,
    opacity: 0.44,
    marginTop: 10,
    flexDirection: 'column',
  },
  Button2: {
    borderBottomColor: '#454545',
    borderRightColor: '#1f1106',
    borderBottomWidth: 1,
    width: 80,
    height: 100,
    opacity: 0.44,
    marginTop: 10,
    flexDirection: 'column',
  },
});

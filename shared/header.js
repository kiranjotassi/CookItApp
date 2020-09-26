import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function Header({navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <Button title="≡" size={28} onPress={openMenu} color="#800000" />
      <View>
        <Text style={styles.headerText}>Cook It!</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
  },
});

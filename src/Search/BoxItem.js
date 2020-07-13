import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BoxItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Text style={styles.headerText}> Paraíso do Tocantins</Text>
       
      </View>
    </View>
  );
};

export default BoxItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 25,
    // shadow
    shadowColor: '#222',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },

  headerText: {
    color: '#828595',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import mocks from './mocks.json';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemView = ({item}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemPrice}>
        {item.price}{' '}
      </Text>
      <View style={styles.itemFooter}>
        <Text style={styles.saleoff}>
          <Ionicons name="ios-star" style={styles.icon} /> {'  '}
          {item.rating}
        </Text>
      </View>
      <Text style={styles.itemText} >{item.saleoff}%</Text>
    </View>
  );
};

const ListSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Casos por bairros</Text>
      </View>
      <View style={styles.containerBody}>
        {mocks.map(item => {
          return <ItemView item={item} />;
        })}
      </View>
    </View>
  );
};

export default ListSearch;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    padding: 10,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5F646A',
  },
  itemText: {
    color: '#24333A',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 66,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemContainer: {
    borderWidth: 1.5,
    borderColor: '#EFEFF0',
    marginBottom: 12,
    padding: 20,
    borderRadius: 12,
  },
  itemPrice: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#0D1820',
    marginBottom: 10,
  },
  itemPriceOri: {
    fontSize: 5,
    fontWeight: 'bold',
    color: '#828595',
    textDecorationLine: 'line-through',
  },
  saleoff: {
    fontSize: 23,
    position: 'absolute',
    backgroundColor: '#FFF0E8',
    color: '#FF702A',
    fontWeight: 'bold',
    padding: 6,
    borderRadius: 10,
    paddingHorizontal: 10,
    right: -10,
    top: -38,
  },
});

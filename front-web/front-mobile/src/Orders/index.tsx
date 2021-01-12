import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../Header';
import OrdersCard from '../OrderCard';


export function Orders() {

  const handleOnpress = () => {

  }


  return (
    <>
    <Header />
      <View style={styles.container}>
        <OrdersCard />
        <OrdersCard />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});


export default Orders;
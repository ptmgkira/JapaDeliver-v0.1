import React from 'react';
import { StyleSheet, Text, ScrollView , View, Image } from 'react-native';
import Header from '../Header';
import OrdersCard from '../OrderCard';


export function Orders() {

  const handleOnpress = () => {

  }


  return (
    <>
    <Header />
      <ScrollView style={styles.container}>
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
        <OrdersCard />
      </ScrollView>
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
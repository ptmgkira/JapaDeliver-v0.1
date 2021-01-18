import React, { useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, ScrollView, Alert } from 'react-native';
import Header from '../Header';
import { fetchOrders } from '../api';
import OrdersCard from '../OrderCard';
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchDate = () => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(error => Alert.alert('Houve um erro ao buscar o pedido.'))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if (isFocused) {
      fetchDate()
    }
  }, [isFocused]);




  const handleOnpress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }


  return (
    <>
      <Header />
      <ScrollView style={styles.container}>

        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
            orders.map(order => (
              <TouchableWithoutFeedback
                key={order.id}
                onPress={() => handleOnpress(order)}>
                <OrdersCard order={order} />
              </TouchableWithoutFeedback>
            ))
          )}


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
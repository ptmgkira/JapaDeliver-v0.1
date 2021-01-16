import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView ,Alert} from 'react-native';
import Header from '../Header';
import { fetchOrders } from '../api';
import OrdersCard from '../OrderCard';
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


 function Orders() {
   const [orders, setOrders] = useState<Order[]>([]);
   const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      setIsLoading(true);
      fetchOrders()
      .then(response => setOrders(response.data))
      .catch(error => Alert.alert('Houve um erro ao buscar o pedido.'))
      .finally(() => setIsLoading(false));
    }, []);



  const handleOnpress = () => {

  }


  return (
    <>
    <Header />
      <ScrollView style={styles.container}>

           {isLoading ? (
             <Text>Buscando pedidos...</Text>
           ) : (
               orders.map(order => (
                 <TouchableWithoutFeedback key={order.id}>
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
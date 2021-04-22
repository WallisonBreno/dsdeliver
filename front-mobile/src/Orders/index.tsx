import { useIsFocused, useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text} from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

 function Orders() {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const handleOnPress = (order:Order) => {
    navigation.navigate('OrderDetails', {
      order
    })
}

  const fetchData = ()=>{
    setIsLoading(true);
    fetchOrders().then(response=>{
      setOrders(response.data);
    }).catch(error=>{
        Alert.alert("Houve um erro ao buscar os pedidos"+error);
    }).finally(()=>setIsLoading(false)
    )
  }

  useEffect(()=>{
    if(isFocused){
      fetchData()
    }

  },[isFocused])
 


  return (
      <>
      <Header/>
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text style={styles.title}>Carregando...</Text>
        ):(
          orders.map((order=>(
            <TouchableWithoutFeedback key={order.id} onPress={()=>{
              handleOnPress(order)
            }}>
                <OrderCard order={order}></OrderCard>
            </TouchableWithoutFeedback>
          )))
        )
        
        }

      </ScrollView>
        
      </>
  );
}

const styles = StyleSheet.create({
    container:{
      paddingRight:'5%',
      paddingLeft:'5%'
    },
    title: {
      color: '#263238',
      fontSize: 26,
      lineHeight: 35,
      fontWeight: 'bold',
      marginTop: 31,
      textAlign: 'center'
    }
      
});

export default Orders;
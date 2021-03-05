import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';


const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const FlatListPr = () => {
    const [todoList, setTodoList] = useState({});
    // console.log(todoList);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            setTodoList(data);
        })
    },[])

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={todoList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 6,
      },
      title: {
        fontSize: 20,
      },
    });

export default FlatListPr;
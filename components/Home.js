import React, {useState, useEffect} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Touchable
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
import Header from './Header'
import Chart from './Chart'
import Tabmenu from './TabNav'

const Home = () =>{
    
    return(
        <View>
            <Header/>
            <Tabmenu/>            
            <ScrollView style={styles.container_body}>
                <Chart/> 
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    
    container_body: {
        height: responsiveHeight(100), 
        // backgroundColor: 'skyblue', 
        marginLeft: responsiveWidth(3),
        marginRight: responsiveWidth(3),
    }
})
export default Home
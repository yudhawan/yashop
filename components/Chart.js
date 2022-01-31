import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Basket} from '../constants/icons'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";


const Chart = () => {
    const [data, seData] = useState([
        {product: 'Sweater', price: 300, id: 1},
        {product: 'Hoodie', price: 200, id: 2},
        {product: 'Sweater', price: 600, id: 3}
    ])
    let badges,ttl, buttwidth, opacitybg;
    if(data.length!==0){
        buttwidth = responsiveWidth(34)
        opacitybg = 'rgba(236,219,199, 0.5)'
    }else{
        buttwidth = responsiveWidth(13.5)
        opacitybg = 'rgba(236,219,199, 0.3)'
    }
    const styles = StyleSheet.create({
        container:{
            width: buttwidth,
            height: responsiveHeight(7.2),
            backgroundColor: opacitybg,
            borderRadius: 16,
            marginTop: responsiveHeight(74),
            flexDirection: 'row',
        },
        butt:{
            backgroundColor: '#FFAB2D',
            width: responsiveWidth(10.6),
            height: responsiveWidth(10.6),
            borderRadius: 14,
            marginTop: 6,
            marginLeft: 6,
            flexDirection: 'row',
        },
        basket: {
            backgroundColor: '#FFAB2D',
            width: responsiveWidth(5.8),
            height: responsiveWidth(5.8),
            marginTop: 10.5,
            marginLeft: 10.5,
        },
        badge:{
            backgroundColor: '#CA1F3D',
            width: 14,
            height: 14,
            borderRadius: 50,
            marginTop: 3,
            marginLeft: -6
        },
        badge_total:{
            fontSize: 8,
            textAlign: 'center',
            color: 'white',
        },
        total_text:{
            fontFamily: 'Roboto',
            fontSize: 13,
        },
        number_text:{
            fontFamily: 'Roboto',
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black'
        }
    })
    
    
    if(data.length!==0){
        badges = <View style={styles.badge}>
                    <Text style={styles.badge_total}>{data.length}</Text>
                </View>
        ttl = <View>
                    <Text style={styles.total_text}>Total</Text>
                    <Text style={styles.number_text}>$ {data.reduce((r,datum)=> r+datum.price,0)}</Text>
            </View>
    }else{
        badges=null
        ttl=null
    }
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.butt}>
                <Image source={Basket} style={styles.basket}/>
                {badges}
            </TouchableOpacity>
            <View style={{marginTop: 6, marginLeft:4, marginBottomL:6}}>
                {ttl}
            </View>
        </View>
        
    )
    
}

export default Chart
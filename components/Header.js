import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {brand} from '../constants/images'
import {ArrowDown, Heart, Notification} from '../constants/icons'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const Like = ({like}) =>{
    return(
        <TouchableOpacity style={styles.butt_like}>
            <Image style={styles.like_notif} source={Heart} />
            {like ? (<View style={styles.badges}/>): null}
        </TouchableOpacity>
    )
}

const Notif = ({notif}) =>{
    
    return(
        <TouchableOpacity style={styles.butt_notif}>
            <Image style={styles.like_notif} source={Notification} />
            {notif ? (<View style={styles.badges}/>): null}
            
        </TouchableOpacity>
    )
}

const Arrow = () =>{
    return(
        <TouchableOpacity style={styles.arrowdown_butt}>
            <Image style={{height: 37,width: 37,}} source={ArrowDown} />
        </TouchableOpacity>
    )
}
const Brand = () =>{
    return(
        <View styles={styles.brand}>
            <Image source={brand}/>
        </View>
    )
}
const Header = () =>{
    const [notif, setNotif] = useState(true);
    const [like, setLike] = useState(false);
    return(
        <View style={styles.container}>
            <Brand/>
            <Like like={like}/>
            <Notif notif={notif}/>
            <Arrow />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderBottomColor: '#000000',
        marginLeft: responsiveWidth(3),
        marginRight: responsiveWidth(3),
        flexDirection: 'row', //row
        // backgroundColor: '#c0c0c0',
    },
    badges: {
        backgroundColor: '#CA1F3D',
        height: responsiveWidth(2.3),
        width: responsiveWidth(2.3),
        borderRadius: 50,
        marginTop: responsiveHeight(0.2),
        marginLeft: responsiveWidth(-1),
    },
    butt_like: {
        height: responsiveWidth(9),
        width: responsiveWidth(9),
        backgroundColor: '#FFAB2D',
        marginLeft: responsiveWidth(29),
        marginTop: responsiveHeight(2.6),
        borderRadius: 9,
        flexDirection: 'row'
    },
    butt_notif: {
        height: responsiveWidth(9),
        width: responsiveWidth(9),
        backgroundColor: '#FFAB2D',
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(2.6),
        borderRadius: 9,
        flexDirection: 'row',
        
    },
    like_notif: {
        height: responsiveWidth(6),
        width: responsiveWidth(6),
        marginLeft: responsiveWidth(1.6),
        marginTop: responsiveHeight(0.9),
        backgroundColor: '#FFAB2D',
        flexWrap: 'wrap',
    },
    arrowdown_butt:{
        height: responsiveWidth(9),
        width: responsiveWidth(9),
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(2.6),
    },
    brand:{
        backgroundColor: 'transparent',
    }
})

export default Header
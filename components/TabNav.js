import React, {useState, useEffect} from 'react';
import {
    View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, 
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
import {Search} from '../constants/icons'

const Tabmenu = () => {
        
   
    const [menulist, setMenulist] = useState({
        bar:['All','Sweaters', 'Hoodies'],
        list:{
            All: false,
            Sweaters: false,
            Hoodies: false
        }
        
    })
    const [search, setSearch]=useState(false)
    const tabbar = StyleSheet.create({
        bar:{
            width: responsiveWidth(18),
            height: responsiveWidth(5),
            borderRadius: 8,
            backgroundColor: '#707070',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        bar_active:{
            width: responsiveWidth(18),
            height: responsiveWidth(5),
            borderRadius: 8,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        
        text:{
            color: 'black',
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
        },
        text_active:{
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Montserrat',
        },
        container_search: {
            width: responsiveWidth(7),
            height: responsiveWidth(7),
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 6,
            backgroundColor: '#c0c0c0'
        },
        search: {
            width: responsiveWidth(6),
            height: responsiveWidth(6),
        }
    })
    const def = {
        All: false,
        Sweaters: false,
        Hoodies: false
    }
    const activebar = (param) =>{
        if(param===null){
            param==="All"
        }
        console.log('fuck yeah')
        console.log(param)
        // setMenulist(def)
        // const con = menulist({list:{param}})
        // setMenulist({list:{con: !con}})    

    }
    return(
        <View style={styles.container}>
            <View style={styles.body_bar}>
                {menulist.bar.map((name, index)=>(
                    <TouchableOpacity style={tabbar.bar} key={index} onPress={()=>activebar(index)}>
                         <Text style={tabbar.text}>{name}</Text>
                    </TouchableOpacity>
                ))}

            </View>
            <TouchableOpacity style={tabbar.container_search}>
                <Image style={tabbar.search} source={Search} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: responsiveWidth(3),
        marginRight: responsiveWidth(3),
        flexDirection: 'row'
    },
    body_bar:{
        backgroundColor: '#707070',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: responsiveWidth(84),
        height: responsiveWidth(7),
        flexDirection: 'row'
    },
})

export default Tabmenu
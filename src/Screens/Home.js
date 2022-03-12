import React  from 'react'
import { Button, Dimensions, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { deccrement, increment, incrementByAmount, selectValue } from '../store/counterStore';
import { selectMode, toggleMode } from '../store/themeSlice';
import Colors from '../utils/Colors';
import Quize from './quize';
import Wellcome from '../../assets/images/welcome.svg'; 
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;

//
const Home = ({navigation }) => {
    const dispatch = useDispatch();
    const count = useSelector(selectValue);
    const theme = useSelector(selectMode);
 
    const backgroundColor = theme === 'light' ? Colors.coreBlue : Colors.darkBg;
    const Textcolor = theme === 'light' ? Colors.secondaryText :  Colors.primaryText;

    return (
        <View style={[styles.container,{backgroundColor:backgroundColor} ]}>
            <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} backgroundColor={backgroundColor} />
            <View style={{height:h/3,width:w-20,alignItems:"center"}}>
                    <Wellcome  />
                    
            </View>
            <View style={{alignItems:"center"}}>
            <Text style={[styles.title]}>QuizDuel! Quiz & Trivia Game </Text>
                    <Text style={[styles.subtitle]}>test your skills in fun categories</Text>
                    <Text style={[styles.subtitle]}>progress through chapters</Text>
                    <Text style={[styles.subtitle]}>practice your skills and reach new heights</Text>
                    <Text style={[styles.subtitle]}>Beat The Boss and earn rewards! </Text>
            </View>
     
                <TouchableOpacity 
                style={styles.button} 
                onPress={() =>navigation.navigate("quize")}
                >
                    <Text style={{fontSize:24, color:Colors.primaryText, fontWeight:"bold"}}> START </Text>
                </TouchableOpacity>
       
           
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        paddingVertical:40,
        paddingHorizontal:16,
        backgroundColor:  Colors.coreBlue ,
    },
    button :{ backgroundColor:Colors.orange, height:65, width:w-30, justifyContent:"center",alignItems:"center",borderRadius:16},
    title:{
        fontSize:28,
        color:Colors.primaryText,
        fontWeight:"bold",

    },
    subtitle:{
        fontSize:18,
        color:Colors.darkBg,
        fontWeight:"300",
        paddingVertical:4,

    },
})

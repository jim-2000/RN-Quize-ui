import { StyleSheet, Text, View,Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Wellcome from '../../assets/images/welcome.svg'; 
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
const Result = () => {
  return (
    <View>
      <Text>Result</Text>
      <View>
            <View style={{height:h*0.4,width:w, borderColor:"red",borderWidth:2}}>
                    <Wellcome  />
            </View>
        <TouchableOpacity>
            <Text> Home </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) 
}

export default Result

const styles = StyleSheet.create({})
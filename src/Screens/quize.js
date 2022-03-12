import { ActivityIndicator, Dimensions, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Result from './questions';
import Colors from '../utils/Colors';
const h = Dimensions.get('window').height;
const w = Dimensions.get('window').width;
const Quize = () => {
  //
  const [question, setQuestion] = useState(Result)
  const [qNo, setQno] = useState(0);
  const [score, setScore] = useState(0);



 console.log(Result.length == qNo ? "true" : "false");
//

const NextQstion = () => {
  setQno(qNo + 1);
}
const SkipQuestion = () => {
  setQno(qNo + 2);
  setScore(score );
}
const Answer = (answer) => {
  if (answer == Result.correct_answer) {
    setScore(score + 1);
  }
}
 const Done = () => {
   console.log("done",score);
  if (qNo == Result.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Your Score is {score}/{Result.length}</Text>
      </View>
    )
  }
 setQno(0);
 }

 useEffect(() => {
   console.log(Result[qNo].question);
 },[qNo])

  //
  return (
    <View style={styles.container} >
      <StatusBar barStyle="dark-content" backgroundColor={Colors.secondaryBg} />
 
     
        <View style={{height:h}}>
            <View style={styles.question}>
                <Text style={styles.questionText}>
                  {Result[qNo].question}
                </Text>                         
                     
            </View>
                      <View style={styles.ans}>
                        {
                          Result[qNo].incorrect_answers.map((item,index)=>{
                              return(
                                <TouchableOpacity
                                key={index}
                                onPress={()=>Answer(item)}
                                >
                                <Text style={styles.ansText} key={index} >{item}</Text>        
                              </TouchableOpacity>
                              );
                            }
                          )
                        
                        }
                        
                          <TouchableOpacity
                          onPress={()=>Answer(Result[qNo].correct_answer)}
                          >
                            <Text style={styles.ansText}  >{Result[qNo].correct_answer}</Text>      
                          </TouchableOpacity>
                        
                      </View>


                      {/* buttons side */}

                      <View style={styles.buttons}>
                        <TouchableOpacity 
                        onPress={()=>SkipQuestion()}
                        style={styles.eachButton}
                        >
                          <Text style={styles.buttonText}>SKIP</Text>        
                        </TouchableOpacity> 
                        <TouchableOpacity 
                        onPress={Result.length === qNo ? Done : NextQstion }
                        style={styles.eachButton}>
                          {
                            Result.length == qNo ? (
                              <Text style={styles.buttonText}>Done</Text>
                            ) : (
                              <Text style={styles.buttonText}>Next</Text>
                            )
                          }
                          {/* <Text style={styles.buttonText}>  NEXT</Text>         */}
                        </TouchableOpacity> 
                      </View>

        </View>
      
     
     
    
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  )
}

export default Quize

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%',
    backgroundColor:Colors.secondaryBg,
  },
  question: {
    marginVertical:16,

  },
  questionText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  ans: {
    marginVertical:16,
    flex:1,
  },
  ansText: {
    fontSize: 18,
    color: Colors.secondaryText,
    fontWeight:'400',
    paddingVertical:16,
    backgroundColor:Colors.coreBlue,
    marginVertical:8,
    borderRadius:12,
    paddingHorizontal:10,
  },
  buttons: {
    flexDirection:'row',
    marginBottom:12,
    paddingVertical:16,
    justifyContent:"space-between",
  },
  eachButton:{
    elevation:8,
    width:100,
    height:50,
    backgroundColor:Colors.purple,
    borderRadius:8,
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText:{
    fontSize:22,
    fontWeight:"bold",
    color:Colors.primaryText,
  }
})
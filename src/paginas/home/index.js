import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase/firebaseConnection'
import { Children } from 'react';

export default function Home() {

  const [alunos,setAlunos] = useState([]);


  useEffect(()=>{

    async function buscarAlunos(){


     await firebase.database().ref('Alunos').on('value',(snapshot) =>{

      setAlunos([]);
      snapshot.forEach( (ChildItem) =>{
        let data = {
          key : ChildItem.key,  
          nome : ChildItem.val().Nome,
          nota1 : ChildItem.val().Nota1,
          nota2 : ChildItem.val().Nota2,
          nota3 : ChildItem.val().Nota3,
          imagem : ChildItem.val().Imagem
        }
        setAlunos(alunos => [...alunos,data]);
      })
  
    })
     

    }


    buscarAlunos();

  },[])

  return (

    <View style = {styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold',}}> LISTA DE ALUNOS  </Text>


      <FlatList
      data = {alunos}
      numColumns = {2}
      keyExtractor = { (item) => item.key}
      renderItem = { ( ({item}) => <Text> {item.nome} </Text>)}
      />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#F0F8FF'
  },
  imagems:{
    width:"70%",
    height:90,
    borderRadius:8
  },
  containerAlunos: {
    height:160,
    width:180,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    marginLeft:5,
    borderWidth:2,
    borderRadius:8
  },
});

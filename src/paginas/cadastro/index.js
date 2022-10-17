import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import firebase from '../../firebase/firebaseConnection'

export default function Cadastrar(){

    return(

        <View style ={estilos.container}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Cadastro de Alunos </Text>
        <Text style ={estilos.texto}>Nome :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite o nome do aluno' ></TextInput>
        <Text style ={estilos.texto}>Idade :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a idade do aluno' ></TextInput>
        <Text style ={estilos.texto}>Nota1 :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a Nota 1 do aluno'></TextInput>
        <Text style ={estilos.texto}>Nota2 :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a Nota 2 do aluno'></TextInput>
        <Text style ={estilos.texto}>Nota3 :</Text>
        <TextInput  style ={estilos.entradas} placeholder='Digite a Nota 3 do aluno'></TextInput>
        <Text style ={estilos.texto}>Imagem :</Text>
        <TextInput style ={estilos.entradas} placeholder='Digite o link com a foto do aluno' ></TextInput>


    <TouchableOpacity style ={estilos.botao} >
        <Text style={{fontWeight:'bold  '}}>Cadastrar</Text></TouchableOpacity>
    </View>



    );

}

const estilos = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center'

    },
    entradas :{
        width:'85%',
        height:30,
        borderWidth:2
    },
    botao:{
        width:'85%',
        height:60,
        alignItems:'center',
        backgroundColor:'orange',
        marginTop:20,
        justifyContent:'center',
        fontWeight:'bold'
    },
    texto:{
        marginTop:20,
        marginLeft:-252,
        fontSize:15,
        fontWeight:'bold'


    }


})
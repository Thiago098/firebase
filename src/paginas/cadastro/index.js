import { Text,View } from "react-native";


export default function Cadastrar(){

    return(

        <View>
            <center>
            <form>
            <h1>CADASTRAR ALUNOS</h1>
            <label>
                Nome:
                <input type="text" name="name" value="Digite o nome"/>
                <br></br>
            </label>
            <br></br>
            <label>
                Nota 1:
                <input type="text" name="nota1" value="Digite a nota 1"/>
                <br></br>
            </label>
            <br></br>
            <label>
                Nota 2:
                <input type="text" name="nota2" value="Digite a nota 2"/>
                <br></br>
            </label>
            <br></br>
            <label>
                Nota 3:
                <input type="text" name="nota3" value="Digite a nota 3" />
                <br></br>
            </label>
            <br></br>
            <label>
                Imagem:
                <input type="img" name="imagem" value="Digite o link da imagem do aluno"/>
                <br></br>
            </label>
            <br></br>
            <input type="submit" value="Cadastrar" />
            </form>
            </center>
        </View>



    );

}
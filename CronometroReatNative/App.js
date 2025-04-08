import React , {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
 
class App extends Component {
  constructor(props){
  super (props);
  this.state={
    numero:0,
 
  };
 
this.vai = this.vai.bind(this);
this.limpar = this.limpar.bind(this);
 
this.timer = null;
 
  }
  vai(){
   if(this.timer != null){
 
   }
 
   else {
    this.timer = setInterval(()=>(
      this.setState({numero: this.setState.numero +0.1 })
    ),100);
   
  }
 
  }
  limpar(){
    if (this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      numero: 0,
    })
   
  }
  
    

 
  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./src/cronometro.png')}></Image>
        <Text style= {styles.timer} > {this.state.numero.toFixed(1)}</Text>
        <View style = {styles.btnArea}>
          <TouchableOpacity style={styles.btn} >
            <Text style = {styles.btnTexto} onPress= {this.vai}> Vai</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {styles.btn}>
            <Text style= {styles.btnTexto} onpress = {this.limpar}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    color:'white',
    fontSize: 65,
    fontWeight: 'bold',
    marginTop: -150,
 
  },
  btnArea:{
    marginTop: 70,
    height: 40,
    flexDirection:'row',
  },
  btn:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    height: 40,
    margin: 20,
    borderRadius: 10,
 
  },
 
  btnTexto:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#00aeef'
  },
 
});
 
export default App;
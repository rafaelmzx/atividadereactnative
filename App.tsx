import { Text, View, Image, TextInput } from 'react-native';
import { homeStyles } from './assets/styles/App.style';
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'



const App = () => {
  return (
    <View style={homeStyles.container} >
      <Image style={homeStyles.image} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/mix-color-3/502/Untitled-7-1024.png' }}></Image>

      <View style={homeStyles.inputscontainer}>

        <View >
          <FaUser size={25} style={homeStyles.inputcustom} />
          <TextInput style={homeStyles.input} placeholder='Username'></TextInput>
        </View>
        <View>
          <RiLockPasswordFill size={25} style={homeStyles.inputcustom} />
          <TextInput style={homeStyles.input} placeholder='Password'></TextInput>
        </View>


          <button style={homeStyles.button}>Login Now</button>


      </View>
    </View>
  );
}

export default App;



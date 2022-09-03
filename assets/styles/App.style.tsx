import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image:{
    width: 200,
    height: 200,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  inputscontainer:{
    display: 'flex',
    alignItems: 'center',
  },
  input:{
    backgroundColor: '#3498DB',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 30,
    width: 300,
    height: 50,
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff',
  },
  inputcustom:{
    position: 'absolute',
    left: 20,
    top: 43,
    color: '#fff'
  },
  button:{
    backgroundColor: '#70D4FF',
    color: '#fff',
    width: 300,
    height: 50,
    borderRadius: 30,
    
  }
});
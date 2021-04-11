import EStyleSheet from 'react-native-extended-stylesheet'
import Constants from "expo-constants";

EStyleSheet.build({
});

export const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,                 
    paddingHorizontal: '1.5rem',
    backgroundColor: '#FFF',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  
  title: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    fontFamily: 'Raleway_700Bold'
  },

  label: {
    fontSize: '0.6rem',
    marginBottom: '0.3rem',
    fontFamily: 'Raleway_600SemiBold'
  },

  input: {
    width: '20.4rem',
    height: '2.8rem',
    borderWidth: 1,
    borderColor: '#E3E1E1',
    borderRadius: 6,
    paddingHorizontal: '1rem',
    marginBottom: '0.6rem',
    fontFamily: 'Raleway_400Regular'
  },

  addButton: {
    marginTop: '2.8rem',
    width: '20.4rem',
    height: '4rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00B2FF',
    borderRadius: 10,
  },

  addButtonText: {
    color: '#FFF',
    fontFamily: 'Raleway_700Bold'
  }
})
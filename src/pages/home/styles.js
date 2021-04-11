import EStyleSheet from 'react-native-extended-stylesheet'
import Constants from "expo-constants";

EStyleSheet.build({});

export default EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,                 
    paddingHorizontal: '1.5rem',
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: '2rem'
  },
    
  text: {         
    fontSize: '2.5rem',
    fontFamily: 'Raleway_700Bold',
  },

  addCard: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: '#FFF',
    height: '2.8rem',
    width: '2.8rem',
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },

  radioButton: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  
  actionText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '1.4rem',
    marginTop: '1.5rem',
    fontFamily: 'Raleway_700Bold',
  },
  
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20.4rem',
    height: '4rem',
    borderRadius: 10,
    paddingHorizontal: '1.2rem',
    marginBottom: '1rem',
    borderWidth: 1,
    borderColor: '#E3E1E1',
  },

  actionButtonHide: {
    marginLeft: '1.4rem',
    fontFamily: 'Raleway_700Bold',
  },

  actionButtonDelete: {
    marginLeft: '1.4rem',
    color: '#F21D1D',
    fontFamily: 'Raleway_700Bold',
  }
});

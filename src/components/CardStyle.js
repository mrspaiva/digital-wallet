import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({});

export default EStyleSheet.create({
  viewCard: {
    height: '12.8rem',
    width: '20.5rem',
    borderRadius: 15,
    padding: '1.4rem 1.2rem',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '12.8rem',
    borderRadius: 15,
  },

  infoCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoTextCard: {
    fontSize: '1.2rem',
    color: '#fff',
    fontFamily: 'Raleway_700Bold'
  },

  infoCardFooter: {
    alignContent: 'flex-end'
  },

  cardName: {
    fontSize: '1rem',
    color: '#fff',
    fontFamily: 'Raleway_500Medium'
  },

  cardNumber: {
    fontSize: '1.2rem',
    color: '#fff',
    fontFamily: 'Roboto_700Bold'
  },
})
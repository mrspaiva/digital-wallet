import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({});

export default EStyleSheet.create({
  viewCard: {
    height: '12.8rem',
    width: '20.5rem',
    backgroundColor: 'linear-gradient(249.8deg, rgba(236, 0, 140, 0.8) 80%, rgba(252, 103, 103, 0.8) 80%)',
    borderRadius: 15,
    padding: '1.4rem 1.2rem',
    justifyContent: 'space-between',
    marginBottom: '3.6rem'
  },

  infoCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoTextCard: {
    fontSize: '1.2rem',
    color: '#fff',
    fontWeight: 'bold',
  },

  infoCardFooter: {
    alignContent: 'flex-end'
  },

  cardName: {
    fontSize: '1rem',
    color: '#fff',
  },

  cardNumber: {
    fontSize: '1.2rem',
    color: '#fff',
    fontWeight: 'bold',
  },
})
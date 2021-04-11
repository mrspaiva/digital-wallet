import React from 'react';
import { View } from 'react-native'

export default function RadioButton(props) {
  return (
      <View style={[{
        height: 10,
        width: 10,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 0,
      }]}>
        {
          props.selected ?
            <View style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#383838',
            }}/>
            : null
        }
      </View>
  );
}
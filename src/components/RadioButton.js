import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native'

export default function RadioButton() {
  const [select, setSelect] = useState(false)

  return (
      <TouchableOpacity style={[{
        height: 10,
        width: 10,
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        marginTop: 0,
      }]}
      onPress={() => setSelect(select => !select)}
      >
        {
          select ?
            <TouchableOpacity style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#383838',
            }}/>
            : null
        }
      </TouchableOpacity>
  );
}
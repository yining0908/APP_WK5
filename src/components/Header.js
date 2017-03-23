// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const Header = () => {
  const { textstyle, headerstyle, picback, picheart } = styles;
  return (
    <View style={headerstyle}>
          <Image
        source={require('../Asset/btn_back.png')} 
        style={picback}
          />
      <Text style={textstyle}>HearthStone</Text>
      <Image
        source={require('../Asset/btn_like.png')} 
        style={picheart}
      />
    </View>
  );
};

const styles = {
  picback: {
  width: 33,
  height: 33,
  left: -93,
  top: 25
},
picheart: {
width: 33,
height: 33,
top: 25,
right: -97

},
 headerstyle: {
  backgroundColor: '#6441a5',
  justifyContent: 'center',
  width: 375,
  height: 64,
// flex: 1,
  flexDirection: 'row',
},
  textstyle: {
    fontSize: 18,
    alignItems: 'center',
    top: 30.5,
    color: '#ffffff' 
  }

};

// Make the component available to other parts of the app
export default Header;

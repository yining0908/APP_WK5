import React from 'react';
import { View, Image } from 'react-native';


//CREAT A COMPONENT
const Page = () => {
  const { pic, background } = styles;

      return (
        <View style={background}>
        <Image
        source={require('./src/Asset/logo_twitch.png')} 
        style={pic}
        />
      </View>
    );
};

const styles = {
background:
{
backgroundColor: '#6441a5',
flex: 1,
justifyContent: 'center',
},
pic:
{
width: 185.5,
height: 61.5,
left: 95.5,
}

};
 
export default Page;

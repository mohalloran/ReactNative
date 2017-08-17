import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {

     const { containerStyle } = styles;

     return (

         <View style={containerStyle}>
         
            {props.children}
         </View>
     );


};

const styles = {

    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#add',
        position: 'relative'
    }
}


export { CardSection };
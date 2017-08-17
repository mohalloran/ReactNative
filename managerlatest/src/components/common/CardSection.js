import React from 'react';
import { View } from 'react-native';


const CardSection = (props) => {

     const { containerStyle } = styles;

     {/* Style can take an Array and style on the right can override those on the left */ }
     return (

         
         <View style={[styles.containerStyle, props.style]}>
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

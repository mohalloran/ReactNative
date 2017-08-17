import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = (props) => {

     const { containerStyle, cardSectionStyle, textStyle } = styles;

     return (
         
         <Modal
            visible={props.visible}  
            animationType="slide"
            onRequestClose={() => {}}
         >
            <View style={containerStyle}>
              <CardSection style={cardSectionStyle}>
                 <Text style={textStyle}>{props.children}</Text>
              </CardSection>
              <CardSection >
                {/** Passed reference to the function onAccept and 
                    onDecline.Not Immediately executing*/}
                <Button onPress={props.onAccept}>Yes</Button>
                <Button onPress={props.onDecline}>No</Button>
              </CardSection>
            </View>
         </Modal>
     );
};

const styles = {
    cardSectionStyle: {
       justifyContent: 'center'
    },
    textStyle: {
       flex: 1,
       fontSize: 18,
       textAlign: 'center',
       lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',  /*black with opacity of .75 */
        position: 'relative',
        flex: 1,                                 /* Full width of the screen */
        justifyContent: 'center'
    }
};

export { Confirm };

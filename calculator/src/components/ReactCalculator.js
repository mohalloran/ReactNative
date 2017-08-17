import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputButton from '../components/InputButton';
import Style from '../styles/Style';


const inputButtons = [

    ['back', 'CE', 'C', '+-'],
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '*'],
    [0, '.', '=', '+']
];

export default class ReactCalculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            previousInputValue: 0,
            inputValue: 0,
            selectedSymbol: null,
            posotiveNumber: true,
            ////previousAdInputValue: 0,
            //inputAdValue: 0,
            hasDecimal: false
        };
    }

    handlePress(input) {
        console.log('Button pressed', input);
        switch (typeof input) {
            case 'number':
              return this.handleNumberInput(input);
            case 'string':
              return this.handleStringInput(input);
            default:

        }

        this.setState({ inputValue: input });
    }

    handleNumberInput(num){
        //let inputValue = (this.state.inputValue * 10) + num;
        //if(this.state.inputValue > 0 || this.state.inputValue.toString() === '.' ){
        //    this.setState({inputValue:this.state.inputValue.toString().concat(num) })
        //}else{
        //    let inputValue = (this.state.inputValue * 10) + num;
       //     this.setState({ inputValue: inputValue });
        //}

        //this.setState({ inputValue: inputValue });

       
        if (this.state.hasDecimal) {
            console.log('Appending to AD ', this.state.hasDecimal);
            //const inputAdValue = (this.state.inputValue * 10) + num;
            const inputAdValue = this.state.inputValue.toString().concat(num);
            console.log('inputAdValue is', inputAdValue);
            this.setState({ inputValue: inputAdValue });
        } else {
            const inputValue = (this.state.inputValue * 10) + num;
            this.setState({ inputValue: inputValue }); 
        }
    }
    handleStringInput(str) {
        switch (str) {
            case '/':
            case '*':
            case '+':
            case '-':
                this.setState({
                    selectedSymbol: str,
                    previousInputValue: this.state.inputValue,
                    //previousAdInputValue: this.state.inputAdValue,
                    inputValue: 0,
                    //inputAdValue: 0,
                    hasDecimal: false
                });
                break;
            case 'C':
                console.log('C pressed');
                this.setState({
                    selectedSymbol: null,
                    previousInputValue: 0,
                    inputValue: 0
                });
                break;
             case 'back':
                let val = this.state.inputValue.toString();
                val = val.length === 1 ? 0: val.substring(0, val.length - 1);
                this.setState({ inputValue: val });
                break;
             case 'CE':
                this.setState({ inputValue: 0 });
                break;
             case '+-':
                var negation = this.state.posotiveNumber ? '-' : '+';
                if(this.state.inputValue > 0)
                   this.setState({ inputValue: negation +
                              this.state.inputValue,posotiveNumber: !this.state.posotiveNumber });
                break;
             case '.':
                  console.log('Decimal pressed......', str);
                  if (!( this.state.inputValue.toString().indexOf('.') >= 0)){
                     this.setState({ inputValue: this.state.inputValue.toString().concat(str) });
                     this.setState({ hasDecimal: true });
                  }
                break;
             case '=':
               let symbol = this.state.selectedSymbol,
                   inputValue = this.state.inputValue,
                   previousInputValue = this.state.previousInputValue
                   //previousAdInputValue = this.state.previousAdInputValue;
               this.setState({
                   previousInputValue: 0,
                   inputValue: eval(previousInputValue + symbol + inputValue),
                   selectedSymbol: null
               });
               break;
            default:
        }
    }

    renderInputButtons() {
        let views = [];

        for (var r = 0; r < inputButtons.length; r++) {
            let row = inputButtons[r];

            let inputRow = [];
            for (var i = 0; i < row.length; i++) {
                let input = row[i];

                inputRow.push(
                    <InputButton 
                               value={input} 
                               key={`${r}-${i}`} 
                               highlight={this.state.selectedValue === input}
                               onPress={this.handlePress.bind(this,input)}
                    />
                );
            }

            views.push(<View style={Style.inputRow} key={`${row}-${r}`}>{inputRow}</View>);
        }

        return views;
    }



    render() {
        return (

            <View style={styles.rootContainer}>
              <View style={styles.displayContainer}>
                  <Text style={Style.displayText}>{this.state.inputValue}</Text>
              </View>
              <View style={styles.inputContainer}>
                 {this.renderInputButtons()}
              </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    rootContainer: {
        flex: 1
    },
    displayContainer: {
        flex: 2,
        backgroundColor: '#193441'
    },
    inputContainer: {
        flex: 8,
        backgroundColor: '#3E606F'
    }



});




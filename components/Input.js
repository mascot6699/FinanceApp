import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Input extends Component {
	state = {
		text: ''
	};

  render() {
    return (
      <View>
				<TextInput
					{...this.props}
					placeholderTextColor="#ddd"
					style={styles.input}
                    value={this.state.text}
                    ref={this.props.inputRef}
					onChangeText={text => this.setState({text})}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        color: 'black',
        fontSize: 16,
        width: '100%',
        height: 55,
        paddingHorizontal: 55,
        borderWidth: 1,
        borderColor: '#C3D3D4',
        opacity: 1,
        borderRadius: 5,
      },
});
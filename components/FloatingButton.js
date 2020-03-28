import React, { Component } from 'react'
import {  View } from 'react-native'
import { FloatingAction } from "react-native-floating-action";


export class CustomFloatingAction extends Component {

    render() {
        const actions = [
            {
              text: "Accessibility",
              icon: require('../assets/img/Icon1.png'),
              name: "bt_accessibility",
              position: 2
            },
            {
              text: "Language",
              icon: require("../assets/img/Icon2.png"),
              name: "bt_language",
              position: 1
            },
            {
              text: "Location",
              icon: require("../assets/img/Icon3.png"),
              name: "bt_room",
              position: 3
            },
            {
              text: "Video",
              icon: require("../assets/img/RotateButton.png"),
              name: "bt_videocam",
              position: 4
            }
          ];
        return (
            <View>
            <FloatingAction
            
              actions={actions}
              onPressItem={name => {
                console.log(`selected button: ${name}`);
              }}
            />
          </View>
        )
    }
}

export default CustomFloatingAction;

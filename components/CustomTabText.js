import React from 'react';
import { StyleSheet } from 'react-native';
import { CustomTabButton } from './CustomTabButton';

const CustomTabText = ({
    title,
    useFont,
    active,
    inActive,
    inActiveText,
    style,
    onPress
}) => (
        <CustomTabButton
            onPress={onPress}
            title={title}
            useFont={useFont || false}
            style={[styles.default, active ? styles.active : styles.inActive, style]}
            btnTextStyle={[active ? styles.activeText : styles.inActiveText, style]}
        />
    );
const styles = StyleSheet.create({
    default: {
        height: 20,
        width: '33.5%',
    },
    active: {
        backgroundColor: "#3f72f3",
        borderColor: "#3f72f3",
        color: "white"
    },
    inActive: {
        backgroundColor: "white",
        color: "black"
    },
    activeText: {
        color: "white",
        fontSize: 15,
    },
    inActiveText: {
        color: "black",
        fontSize: 14,
        opacity:0.6,

    }
})

export default CustomTabText;

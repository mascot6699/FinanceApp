import React from 'react';
import { View } from 'react-native';


const CustomLine = ({
    style,
    children
}) => (
        <View style={[{
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
        }, style]}>
            {children}
        </View>
    );

export default CustomLine;

import { pButtonStyles } from '@/styles/button';
import { pColorStyles } from '@/styles/color';
import React from 'react';
import { Button, ButtonProps } from "react-native-elements";

const PSubmitButton = (props: ButtonProps) => {
    return (
        <Button
            {...props}
            disabledStyle={pButtonStyles.disabledSubmit}
            buttonStyle={pButtonStyles.commonButtonStyle}
            disabledTitleStyle={pColorStyles.white}
            titleStyle={pColorStyles.white}
        ></Button>
    )
}

export default PSubmitButton;
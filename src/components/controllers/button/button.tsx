import React from 'react';
import {ButtonProps, Button as KitButton} from '@ui-kitten/components';
import Styles from "./button.style";

const Button = ({...props}: ButtonProps) => {
  return <KitButton status="primary" {...props}  style={[Styles.button, props.style]}/>;
};

export default Button;

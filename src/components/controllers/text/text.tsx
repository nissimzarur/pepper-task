import React from 'react';
import {Text as KitText, TextProps} from '@ui-kitten/components';
import Styles from './text.styles';
import IText from './interfaces';

const Text = ({type = 'normal', ...props}: IText) => {
  return (
    <KitText
      status="primary"
      {...props}
      style={[Styles.text, Styles[type], props.style]}
    />
  );
};

export default Text;

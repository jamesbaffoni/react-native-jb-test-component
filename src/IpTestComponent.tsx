import React from 'react';

import {View} from 'react-native';

const IpTestComponent: React.FC<{
  color?: string;
  size?: number;
}> = ({color = 'dodgerblue', size = 100}) => {
  let style = {
    backgroundColor: color,
    height: size,
    width: size,
  };

  return <View style={style} />;
};

export default IpTestComponent;

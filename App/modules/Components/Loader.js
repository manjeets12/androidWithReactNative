import React, { PropTypes } from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';

const Loader = (props) => {
  const {
    color,
    size,
    containerStyle,
    loaderStyle,
  } = props;

  return (
    <View style={[{justifyContent:'center', alignItems:'center'},containerStyle]}>
         <ActivityIndicator
                animating={true}
                style={[{height: 100}, loaderStyle]}
                size={size}
                color={color}
            />
    </View>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  color:PropTypes.string,
  containerStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  loaderStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

Loader.defaultProps = {
  color:'#2278ff',
  size: "large",
  containerStyle: undefined,
  loaderStyle: undefined,
};

export default Loader;

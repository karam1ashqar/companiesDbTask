import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const headerTxt = 'Companies Database';
const Header = props => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerTxt}>
        {headerTxt && headerTxt.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 19,

    textAlign: 'center',
  },
  headerView: {
    padding: 15,
    marginTop: 10,
  },
});

export default memo(Header);

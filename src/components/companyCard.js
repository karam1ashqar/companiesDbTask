import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {numberWithCommas} from '../services/logic';

const CompanyCard = ({company: {name, url, logo, revenue}}) => {
  return (
    <View style={styles.comWrapper}>
      <Image resizeMode="contain" style={styles.comLogo} source={{uri: logo}} />
      <Text style={styles.comName}>{name}</Text>
      {revenue && (
        <>
          <Text style={styles.comFeat}>Revenue:</Text>
          <Text>{numberWithCommas(revenue)}</Text>
        </>
      )}
      {url && (
        <>
          <Text style={styles.comFeat}>Website:</Text>
          <Text>{url}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  comLogo: {
    height: 50,
  },
  comFeat: {
    fontSize: 13,
    marginTop: 10,
    color: '#666',
  },
  comWrapper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 15,
  },
  comName: {
    textAlign: 'center',
  },
});

export default CompanyCard;

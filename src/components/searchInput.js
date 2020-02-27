import React, {memo} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {setDataMode, setDynCompanies} from '../redux/actions/companiesActions';
import {connect} from 'react-redux';

const SearchInput = props => {
  const textChanged = txt => {
    if (txt.length < 1) props.setDataMode(false);
    else {
      if (!props.companies.dynamicMode) props.setDataMode(true);

      let newDynData = props.companies.companiesList.filter(({name, url}) => {
        let comStr = name + url;
        return comStr.toLowerCase().includes(txt.toLowerCase());
      });
      props.setDynCompanies(newDynData);
    }
  };
  return (
    <TextInput
      onChangeText={txt => textChanged(txt)}
      placeholder="Search.."
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    borderRadius: 3,
    marginLeft: 40,
    width: 120,
  },
});

const mapStateToProps = state => {
  return {
    companies: state.companies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDynCompanies: arr => {
      dispatch(setDynCompanies(arr));
    },
    setDataMode: bool => {
      dispatch(setDataMode(bool));
    },
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(memo(SearchInput));

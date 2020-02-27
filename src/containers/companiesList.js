import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, FlatList, StyleSheet} from 'react-native';
import CompanyCard from '../components/companyCard';
import {isCloseToBottom} from '../services/logic';
import {getDynamicData} from '../services/comData';
import Spinner from 'react-native-loading-spinner-overlay';
import {setCompanies, setIndex} from '../redux/actions/companiesActions';

const CompaniesList = props => {
  const [refreshing, setRefreshing] = useState(false);
  const refresh = () => {
    props.setCompanies(
      props.companies.companiesList.concat(
        getDynamicData(props.companies.index + 1),
      ),
    );
    props.setIndex(props.companies.index + 1);

    setRefreshing(true);
    getDynamicData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  return (
    <View style={styles.comsWrapper}>
      <FlatList
        numColumns={2}
        data={
          props.companies.dynamicMode
            ? props.companies.dynCompaniesList
            : props.companies.companiesList
        }
        onMomentumScrollEnd={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent) && !refreshing) refresh();
        }}
        scrollEventThrottle={400}
        renderItem={({item}) => <CompanyCard company={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <Spinner visible={refreshing} textContent={'Loading...'} />
    </View>
  );
};

const styles = StyleSheet.create({
  comsWrapper: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    companies: state.companies,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCompanies: arr => {
      dispatch(setCompanies(arr));
    },
    setIndex: num => {
      dispatch(setIndex(num));
    },
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList);

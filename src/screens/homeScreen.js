import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import Header from '../components/header';
import {getDynamicData} from '../services/comData';
import CompaniesList from '../containers/companiesList';
import {setCompanies} from '../redux/actions/companiesActions';
import SearchInput from '../components/searchInput';
import Spinner from 'react-native-loading-spinner-overlay';

class Home extends Component {
  state = {
    spinner: false,
  };
  componentDidMount = () => {
    this.props.setCompanies(getDynamicData());
    this.setState({
      spinner: true,
    });

    setTimeout(() => {
      this.setState({
        spinner: false,
      });
    }, 1000);
  };
  render() {
    const {spinner} = this.state;
    return (
      <View style={styles.homeScreenWrapper}>
        <Spinner visible={this.state.spinner} textContent={'Loading...'} />
        <Header />
        <SearchInput />
        <CompaniesList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeScreenWrapper: {
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
  };
};

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Home);

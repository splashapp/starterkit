/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Header from '../Header';
import ContentPage from '../ContentPage';
import RadioOptionGroup from '../RadioOptionGroup';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../NotFoundPage';
import Feedback from '../Feedback';
import Footer from '../Footer';

const pages = { ContentPage, RadioOptionGroup, LoginPage, RegisterPage, NotFoundPage };

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;

    switch (this.props.path) {

      case '/':
      case '/about':
      case '/privacy':
        let page = AppStore.getPage(this.props.path);
        component = React.createElement(pages[page.component], page);
        break;

      case '/RadioOptionGroup':
        component = <RadioOptionGroup />;
        break;

      case '/login':
        component = <LoginPage />;
        break;

      case '/register':
        component = <RegisterPage />;
        break;
    }

    return component ? (
      <div>
        <Header />
        {component}
        <Feedback />
        <Footer />
      </div>
    ) : <NotFoundPage />;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;

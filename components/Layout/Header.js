/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <header className={s.header}>
        <span className={s.logo}></span>
      </header>
    );
  }

}

export default Header;

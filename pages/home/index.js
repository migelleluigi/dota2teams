/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      scale: 1
    }
  }

  handleResize(e) {
    var w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
    height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    this.setState({width: width, height: height});
    var scale = height/950;
    scale = scale > 1 ? 1 : scale;
    this.setState({scale});
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
    document.title = title;

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }



  render() {
    var css = {transform: `scale(${this.state.scale})`};
      css = {transform: `matrix(${this.state.scale}, 0, 0, ${this.state.scale}, 0, 0)`};
    console.log(css);
    return (
      <Layout>
        <div className={s.content}>
            <div className={s.cards}>
              <div className={`clearfix ${s.cards__container}`} style={css}>
                <div className={`${s.card} ${s.card_fade_left}`}></div>
                <div className={s.card}></div>
                <div className={`${s.card} ${s.card_active}`}></div>
                <div className={s.card}></div>
                <div className={`${s.card} ${s.card_fade_right}`}></div>
              </div>
            </div>
        </div>
      </Layout>
    );
  }

}

export default HomePage;

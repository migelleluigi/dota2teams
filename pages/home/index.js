import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import Card from './card';
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

    fetch('http://api.steampowered.com/IDOTA2Match_570/GetTeamInfoByTeamID/v1?key=40A813A042277C3DA67DC3ACFCB40103&format=json',{
      credentials: 'same-origin',
      mode: 'no-cors',
      method: 'get'
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }

  onMouseEnter() {

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }



  render() {
    let css = {transform: `scale(${this.state.scale})`};
    return (
      <Layout>
        <div className={s.content}>
            <div className={s.cards}>
              <div className={`clearfix ${s.cards__container}`} style={css}>
                
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

              </div>
            </div>
        </div>
      </Layout>
    );
  }

}

export default HomePage;

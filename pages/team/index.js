import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class TeamPage extends React.Component {

  componentDidMount() {
    document.title = 'Team';
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.cards}>
          <div className={s.card}>
          
          </div>
          <div className={s.card}>
          
          </div>
          <div className={s.card}>
          
          </div>
          <div className={s.card}>
          
          </div>
          <div className={s.card}>
          
          </div>
        </div>
      </div>
    );
  }

}

export default TeamPage;

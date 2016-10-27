import React, { PropTypes } from 'react';
import s from './styles.css';

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      isHover: false
    }

  }

  onMouseEnter() {
    this.setState({
      isHover: true
    })
  };

  onMouseLeave() {
    this.setState({
      isHover: false
    })
  };



  render() {
    const css = this.state.isHover ? s.hover : '';
    return (     
      <div className={s.card} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <div className={`${s.cardflip} ${css}`}>
          <figure className={s.front}></figure>
          <figure className={s.back}>
            <div className={s.members}></div>
          </figure>
        </div>
      </div>
    );
  }

}

export default Card;

import React, { PureComponent } from 'react';
import '../styles/Card.css'
import FontAwesome from 'react-fontawesome';

export class Card extends PureComponent {
  onClick() {
    this.props.selectCard(this.props.value);
    this.props.addGuess();
  }

  render() {
    const props = this.props;
    let cardStatus = 'Card-unselected';

    if (props.selected === true) { cardStatus = 'Card-selected'; }

    if (props.matched === true) { cardStatus = 'Card-matched'; }

    const cardFaceIcon = props.selected || props.matched ? 'Card-icon-show' : 'Card-icon-hide';
    const cardBackIcon = props.selected || props.matched ? 'Card-icon-hide' : 'Card-icon-show';

    return (
      <div className={`Card ${cardStatus}`} onClick={(e) => this.onClick()}>
        <FontAwesome className={`Card-icon ${cardFaceIcon}`} name={props.icon} size={'3x'} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
        <FontAwesome className={`Card-icon ${cardBackIcon}`} name={'question'} size={'3x'} style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
      </div>
    );
  }
}

export default Card;

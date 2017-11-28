export default(state=null, payload) => {
  switch(payload.type) {
    case 'SELECT_CARD':
      const card = state.cards[payload.card]
      let updatedCard = Object.assign({}, card, {selected: true})

      let cards = state.cards.map((item, index) => {
        if (index !== payload.card) {
          return item;
        }

        return {
          ...item,
          ...updatedCard
        }
      })

      const match = cards.filter((current, index) => {
        return current.icon === updatedCard.icon && index !== payload.card && current.selected === true && updatedCard.selected === true;
      }).length > 0

      if (match) {
        const updatedAttributes = {selected: false, matched: true}
        cards = state.cards.map((item, index) => {
          if (item.icon !== updatedCard.icon) {
            return item;
          }

          return {
            ...item,
            ...updatedAttributes
          }
        })
        return {...state, game: {guesses: state.game.guesses, matches: state.game.matches + 1}, cards: cards}
      }
      return {...state, cards: cards}
    case 'ADD_GUESS':
      return {...state, game: {guesses: state.game.guesses + 1, matches: state.game.matches}}
    default:
      return state;
  }
}

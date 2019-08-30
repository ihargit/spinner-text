export default function showText(state = { text: '', spinner: 'loader' }, action) {
  switch (action.type) {
    case 'SHOW_TEXT':
      return {
        text: action.text.join(' '),
        spinner: 'displayNone'
      }
    default:
      return state
  }
}

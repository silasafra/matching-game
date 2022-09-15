import './style.css'
import CardGame from './src/components/cardgame'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

$root.insertAdjacentHTML('beforeend', $htmlCardGame)

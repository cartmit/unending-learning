import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');

document.getElementById('testid').innerHTML = `I would pay ${courseValue} for this awesome course!`

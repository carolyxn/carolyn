import './style.css'
import photoUrl from './carolyn.jpg'

document.getElementById('photo').src = photoUrl
document.getElementById('year').textContent = new Date().getFullYear()

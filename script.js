// * h1 work *****
const h1 = document.querySelector('h1')
const welcome = "Welcome"
const letters = welcome.split('');

letters.forEach(function(letter){
  const span = document.createElement('span');
  h1.appendChild(span);
  console.log(letter);
  const spanLetter = span.innerText = letter
  span.addEventListener('mouseover', hoverEvent);
  span.addEventListener('mouseleave', hoverEvent);
})

function hoverEvent(e){
  if(e.type==='mouseover'){
    const el = e.target;
    el.style.height = '50px';
    el.style.color = 'purple';
  } else {
    const el = e.target;
    el.style.height = '25px';
    el.style.color = 'grey';
  }
}
// ****

// * background onchange option
const options = document.querySelector('select')

options.addEventListener('change', handleOptionSelection);

function handleOptionSelection(e){
  const mood = e.target.value;

  if(mood === "sad"){
    document.body.style.backgroundImage = "url('images/200.webp')"
  } else if (mood === "happy"){
    document.body.style.backgroundImage = "url('images/200-1.webp')"
  } else if (mood === 'okay'){
    document.body.style.backgroundImage = "url('images/giphy-1.webp')"
  } else {
    document.body.style.backgroundImage = "url('images/200-2.webp')"
  }
}
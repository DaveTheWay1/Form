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

let color;

function hoverEvent(e){
  console.log(e.target.tagName);
  if (e.target.tagName === "SPAN"){
    if(e.type==='mouseover'){
      const element = e.target;
      element.style.color = color;
    } else if (e.type==='mouseleave') {
      const element = e.target;
      element.style.color = 'black';
    }
  } else if (e.target.tagName === "FORM"){
    if(e.type==='mouseover'){
      form.style.borderColor = color;
    } else if (e.type==='mouseleave') {
      form.style.borderColor = 'black';
    }
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
    form.style.backgroundColor = "orange"
    color = "yellow";
  } else if (mood === "happy"){
    document.body.style.backgroundImage = "url('images/200-1.webp')"
    form.style.backgroundColor = "lightblue"
    color = "purple";
  } else if (mood === 'okay'){
    document.body.style.backgroundImage = "url('images/giphy-1.webp')"
    form.style.backgroundColor = "darkyellow"
    color = "orange"
  } else {
    document.body.style.backgroundImage = "url('images/200-2.webp')"
    color = "yellow"
    form.style.backgroundColor = "darkred"
    console.log(form.childElementCount);
  }
}

// * form color
const form = document.querySelector('form');
form.addEventListener('mouseover', hoverEvent);
form.addEventListener('mouseleave', hoverEvent)
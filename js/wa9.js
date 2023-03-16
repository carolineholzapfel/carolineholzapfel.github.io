const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 85 fahrenheit outside, so :insertx: went for a swim. When they arrived at :inserty:, they were very confused for a few moments, contemplated all life decisions, then :insertz:. Caroline saw the whole thing, but was not surprised — when :insertx: :insertz:. The pirate ship weighs 10000 pounds, and it looked fun. Caroline would have done the same thing.';
const insertX = ['Maggie', 'Lilly','Asa'];
const insertY = ['the Pacific Ocean','the buff pool','WaterWorld' ];
const insertZ = ['went swimming', 'ran away with a mermaid','jumped off the cliff'];


randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Caroline',name);
}

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(1000000*0.453592)} kilograms`;
    const temperature =  `${Math.round((85-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('85 fahrenheit', temperature);
    newStory = newStory.replaceAll('10000 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

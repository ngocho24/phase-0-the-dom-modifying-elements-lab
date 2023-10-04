// Write your code here!
// const element =  document.createElement("div");
// document.body.append(element);

// const main = document.querySelector('#main');
// main.remove();

// const newHeader = document.createElement('h1');
// newHeader.id = 'victory';
// newHeader.innerHTML = 'YOUR-NAME is the champion';
// document.body.appendChild(newHeader);


const headerOne = document.querySelector('h1#victory');
 headerOne.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; 
document.body.appendChild(newHeader);

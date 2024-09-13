let container = document.getElementById('container');
let para = document.getElementsByClassName('para');
let imgContainer = document.getElementsByClassName('img-container');

let newElement = document.createElement('img');
newElement.src = 'keghan-crossland-tKyt-GZowHQ-unsplash.jpg';
newElement.style.width = '300px';
newElement.style.height = '250px';
newElement.style.display = 'block';
newElement.style.margin = '0 auto';

let newPara = document.createElement('p');
let newParaText = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae praesentium.Consequuntur reiciendis expedita sapiente doloremque inventore nesciunt reprehenderit suscipit facere essequibusdam nam aspernatur cupiditate asperiores ipsum perspiciatis hic officiis animi, ullam libero fugiatOfficia cupiditate quasi culpa possimus sint laudantium nostrum ad quo est natus non veniam ducimus voluptates facilis asperiores magnam et mollitia quis iusto cumque sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, praesentium. Ipsa, ipsu placeat.');

container.style.width = '500px';
container.style.margin = '0 auto';
container.style.display = 'block';
container.appendChild(newElement);

newPara.style.fontWeight = '600';
newPara.style.width = '300px';
newPara.style.display = 'block';
newPara.style.margin = '0 auto';
newPara.style.padding = '10px'
newPara.style.textAlign = 'center'

newPara.appendChild(newParaText);
container.appendChild(newPara);






const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const sermon = document.getElementById('sermon');
const crucifixion = document.getElementById('crucifixion');
const supper = document.getElementById('supper');
const indexText = document.getElementById('index')

let images = [crucifixion, supper, sermon];
let currentIndex = 0;
images[0].classList.add('shown');
images[1].classList.add('hidden');
images[2].classList.add('hidden');


function prevImg() {
  if (currentIndex === 0) {
    indexText.innerHTML = '3/3';
    currentIndex = 2;
    
    images[2].classList.add('shown');
    images[2].classList.remove('hidden');
    images[0].classList.add('hidden');
    images[0].classList.remove('shown');
  } 
  else if (currentIndex === 1) {
    indexText.innerHTML = '1/3'
    currentIndex = 0;
    
    images[0].classList.add('shown');
    images[0].classList.remove('hidden');
    images[1].classList.add('hidden');
    images[1].classList.remove('shown');
  } 
  else {
    indexText.innerHTML = '2/3'
    currentIndex = 1;

    images[1].classList.add('shown');
    images[1].classList.remove('hidden');
    images[2].classList.add('hidden');
    images[2].classList.remove('shown');
  }


}

function nextImg() {
   if (currentIndex === 0) {
    indexText.innerHTML = '2/3';
    currentIndex = 1;

    images[1].classList.add('shown');
    images[1].classList.remove('hidden');
    images[0].classList.add('hidden');
    images[0].classList.remove('shown');
  } 
  else if (currentIndex === 1) {
    indexText.innerHTML = '3/3'
    currentIndex = 2;

    images[2].classList.add('shown');
    images[2].classList.remove('hidden');
    images[1].classList.add('hidden');
    images[1].classList.remove('shown');
  } 
  else {
    indexText.innerHTML = '1/3'
    currentIndex = 0;

    images[0].classList.add('shown');
    images[0].classList.remove('hidden');
    images[2].classList.add('hidden');
    images[2].classList.remove('shown');
  }
}

nextBtn.addEventListener('click', () => {
  nextImg();
});

prevBtn.addEventListener('click', () => {
  prevImg()
})







while (currentIndex <= images.length) {
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex <= images.length - 1) {     
      images[currentIndex].classList.add('hidden');
      images[currentIndex].classList.remove('shown');
      
      currentIndex++;
      
      images[currentIndex].classList.add('shown');
      images[currentIndex].classList.remove('hidden');

      indexText.innerHTML = `${currentIndex + 1}/3`
    } else if(currentIndex === images.length) {
      images[currentIndex].classList.add('hidden');
      images[currentIndex].classList.remove('shown');

      currentIndex = 0;

      images[currentIndex].classList.add('shown');
      images[currentIndex].classList.remove('hidden');

      indexText.innerHTML = `1/3`
    } else {
      alert('erro');
    }
  })


  prevBtn.addEventListener('click', () => {
    if(currentIndex === images.length) {
      images[currentIndex].classList.add('hidden');
      images[currentIndex].classList.remove('shown');
      
      currentIndex--;
      
      images[currentIndex].classList.add('shown');
      images[currentIndex].classList.remove('hidden');
    } else if (currentIndex === 0) {
      images[currentIndex].classList.add('hidden');
      images[currentIndex].classList.remove('shown');
      
      currentIndex = images.length;
      
      images[currentIndex].classList.add('shown');
      images[currentIndex].classList.remove('hidden');
    } else {
      alert('erro');
    }
  })

}


let cont1_1 = document.querySelector('.cont1_1')
let cont2_1 = document.querySelector('.cont2_1')
let cont1_2 = document.querySelector('.cont1_2')
let cont2_2 = document.querySelector('.cont2_2')
let cont1_3 = document.querySelector('.cont1_3')
let cont2_3 = document.querySelector('.cont2_3')
let cont1_4 = document.querySelector('.cont1_4')
let cont2_4 = document.querySelector('.cont2_4')

//cont1_1.addEventListener('mouseover', colorHover1);
//function colorHover1 () {
   // if (!cont2_1.classList.contains('act')) {
   // cont2_1.style.background = '#DAD8D2'
//}
//}

//cont1_1.addEventListener('mouseout', colorAnHover1);
//function colorAnHover1 () {
  //  if (!cont2_1.classList.contains('act')) {
 //   cont2_1.style.background = 'grey'
  //  }
//}

//cont1_2.addEventListener('mouseover', colorHover2);
//function colorHover2 () {
 //   if (!cont2_2.classList.contains('act')) {
   // cont2_2.style.background = '#DAD8D2'
  //  }
//}

//cont1_2.addEventListener('mouseout', colorAnHover2);
//function colorAnHover2 () {
  //  if (!cont2_2.classList.contains('act')) {
  //  cont2_2.style.background = 'grey'
  //  }
//}

//cont1_3.addEventListener('mouseover', colorHover3);
//function colorHover3 () {
  //  if (!cont2_3.classList.contains('act')) {
   // cont2_3.style.background = '#DAD8D2'
  //  }
//}

//cont1_3.addEventListener('mouseout', colorAnHover3);
//function colorAnHover3 () {
 //   if (!cont2_3.classList.contains('act')) {
  //  cont2_3.style.background = 'grey'
  //  }
//}


//cont1_4.addEventListener('mouseover', colorHover4);
//function colorHover4 () {
   // if (!cont2_4.classList.contains('act')) {
  //  cont2_4.style.background = '#DAD8D2'
   // }
//}

//cont1_4.addEventListener('mouseout', colorAnHover4);
//function colorAnHover4 () {
    //if (!cont2_4.classList.contains('act')) {
   // cont2_4.style.background = 'grey'
   // }
//}

let img = document.querySelector('.img');
let text = document.querySelector('.text')

cont1_1.addEventListener('click', background1);
function background1 () {
    img.setAttribute('src', "assets/img/cat.jpg");
    cont2_1.classList.add("act")
    img.style.transform = "scale(0.5)";
    img.style.transition = "transform 1s ease";
    setTimeout(() => {
        img.style.transform = "scale(1)";
    img.style.transition = "transform 1s ease";
      }, 1000)
    if (cont2_2.classList.contains('act')) {
    cont2_2.classList.remove('act')}
    if (cont2_3.classList.contains('act')) {
        cont2_3.classList.remove('act')}
    if (cont2_4.classList.contains('act')) {
        cont2_4.classList.remove('act')}
        text.textContent = "Eat without me again!?"
}

cont1_2.addEventListener('click', background2);
function background2 () {
    img.setAttribute('src', "assets/img/antract.jpg");
    img.style.transform = "scale(0.5)";
    img.style.transition = "transform 1s ease";
    setTimeout(() => {
        img.style.transform = "scale(1)";
    img.style.transition = "transform 1s ease";
      }, 1000)
    if (cont2_1.classList.contains('act')) {
        cont2_1.classList.remove('act')}
        if (cont2_3.classList.contains('act')) {
            cont2_3.classList.remove('act')}
        if (cont2_4.classList.contains('act')) {
            cont2_4.classList.remove('act')}
        cont2_2.classList.add("act");
        text.textContent = "Intermission!"
}
   

cont1_3.addEventListener('click', background3);
function background3 () {
    img.setAttribute('src', "assets/img/ship.jpg");
    img.style.transform = "scale(0.5)";
    img.style.transition = "transform 1s ease";
    setTimeout(() => {
        img.style.transform = "scale(1)";
    img.style.transition = "transform 1s ease";
      }, 1000)
    cont2_3.classList.add('act')
    if (cont2_2.classList.contains('act')) {
    cont2_2.classList.remove('act')}
    if (cont2_1.classList.contains('act')) {
        cont2_1.classList.remove('act')}
    if (cont2_4.classList.contains('act')) {
        cont2_4.classList.remove('act')}
        text.textContent = "Get in line, ship!"
}

cont1_4.addEventListener('click', background4);
function background4 () {
    img.setAttribute('src', "assets/img/health.jpg");
    img.style.transform = "scale(0.5)";
    img.style.transition = "transform 1s ease";
    setTimeout(() => {
        img.style.transform = "scale(1)";
    img.style.transition = "transform 1s ease";
      }, 1000)
    cont2_4.classList.add('act')
    if (cont2_2.classList.contains('act')) {
    cont2_2.classList.remove('act')}
    if (cont2_1.classList.contains('act')) {
        cont2_1.classList.remove('act')}
    if (cont2_3.classList.contains('act')) {
        cont2_3.classList.remove('act')}
        text.textContent = "And did you protect yourself?"
}
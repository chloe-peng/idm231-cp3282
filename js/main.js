const content_array = [
    {
        name: 'Capricorn',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Aquarius',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Pisces',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Aries',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Taurus',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Gemini',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Cancer',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Leo',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Virgo',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Libra',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Scorpio',
        description: 'you got this flower bc of this',
    },

    {
        name: 'Sagittarius',
        description: 'you got this flower bc of this',
    },
]

// contentArray.forEach(item => {
//     item.src = `path/to/images/${item.name}_flower.jpg`;
// });

function open_popup() {
  const background = document.createElement('div');
  background.style.width = '100vw';
  background.style.height = '100vh';
  background.style.filter = 'blur(5px)';

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.width = '50%';
  container.style.backgroundColor = 'red';
  container.style.justifyContent = 'center';

}

function create_button() {
  const section = document.getElementById('zodiac-grid');

  content_array.forEach((item) => {
      const card = document.createElement('div');
      const btn = document.createElement('button');

      card.style.display = 'flex';
      card.style.flexWrap = 'wrap';
      card.style.justifyContent = 'center';
      card.style.alignItems = 'center';
  
      const text = document.createElement('p');
      text.innerHTML = item.name;
      btn.classList.add(item.name);
      btn.id = item.name;

      const img = document.createElement('img');
      img.src = `./images/${item.name}_flower.jpg`;    
      btn.appendChild(img);

      btn.addEventListener('click', open_popup);

      card.appendChild(btn);
      card.appendChild(text);
      section.appendChild(card);
  });
}

create_button();
console.log('createButton completed');

// const clicked_button = document.addEventListener('click', open_popup);

const form = document.querySelector('form');
const error_list = document.querySelector('.errors');

function log_birthday(birthday) {    

    const date = {
      year: parseInt(birthday[0], 10),
      month: parseInt(birthday[1], 10),
      day: parseInt(birthday[2], 10)
    }

    console.log('log_birthday completed');
    return date;
}

/**
//  * @description
//  * Given a month and day, determine the corresponding Zodiac sign.
//  * @param {number} month - month of the year (1-12)
//  * @param {number} day - day of the month (1-31)
//  * @returns {string} the corresponding Zodiac sign
//  */

function getZodiac(month, day) {

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      console.log('capricorn');
      return 'Capricorn';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      console.log('sag');
      return 'Sagittarius';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      console.log('scorpio');
      return 'Scorpio';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      console.log('libra');
      return 'Libra';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      console.log('virgo');
      return 'Virgo';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      console.log('leo');
      return 'Leo';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      console.log('cancer');
      return 'Cancer';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      console.log('gemini');
      return 'Gemini';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      console.log('taurus');
      return 'Taurus';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      console.log('areis');
      return 'Aries';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      console.log('pisces');
      return 'Pisces';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      console.log('aquarius');
      return 'Aquarius';
    } else console.log('getzodiac didnot run');
    // original: return null;
  }

  function handle_submit(event) {
    // event.preventDefault();
    // console.log(event);
    // console.group('Form submission');
    // console.log(form);
    // console.log(form.elements);
    // console.log(form.elements['birthday'].value);
    // console.groupEnd();

    // CODE FOR ERROR
    // const errors = [];
    // if (form.elements['name'].value.length < 2) {
    //     errors.push('Name must be at least three characters');
    //     form.elements['name'].focus();
    // }

    // if(errors.length) {
    //     errors.forEach((error) => {
    //         const li = document.createElement('li');
    //         const text = document.createTextNode(error);

    //         li.appendChild(text);

    //         if(error_list) {
    //             error_list.appendChild(li);
    //             error_list.hidden = false;
    //         }
    //     })

    //     return false;
    // }
    //     else {
    //         error_list.hidden = true;
    //         error_list.innerHTML = '';
    //     }
        const date_object = log_birthday(form.elements['birthday'].value.split('-'));
        console.log(date_object);

        getZodiac(date_object.month, date_object.day);
}

if (form) {
    form.addEventListener('submit', handle_submit);
    // getZodiac(date_object.month, date_object.date);
}
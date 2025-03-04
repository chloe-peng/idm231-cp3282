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

function open_popup() {
  document.body.style.backgroundColor = 'blue';

  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.width = '50&';
  container.style.backgroundColor = 'red';


}

const clicked_button = document.addEventListener('click', open_popup);

/**
 * @description
 * Given a month and day, determine the corresponding Zodiac sign.
 * @param {number} month - month of the year (1-12)
 * @param {number} day - day of the month (1-31)
 * @returns {string} the corresponding Zodiac sign
 */
function getZodiac(month, day) {
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return 'Capricorn';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return 'Sagittarius';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
      return 'Scorpio';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
      return 'Libra';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return 'Virgo';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return 'Leo';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
      return 'Cancer';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return 'Gemini';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return 'Taurus';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return 'Aries';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return 'Pisces';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return 'Aquarius';
    } else return null;
  }
const contentArray = [
    {
        name: 'Capricorn',
    },

    {
        name: 'Aquarius',
    },

    {
        name: 'Pisces',
    },

    {
        name: 'Aries',
    },

    {
        name: 'Taurus',
    },

    {
        name: 'Gemini',
    },

    {
        name: 'Cancer',
    },

    {
        name: 'Leo',
    },

    {
        name: 'Virgo',
    },

    {
        name: 'Libra',
    },

    {
        name: 'Scorpio',
    },

    {
        name: 'Sagittarius',
    },
]

// contentArray.forEach(item => {
//     item.src = `path/to/images/${item.name}_flower.jpg`;
// });
  

function createButton() {
    const section = document.getElementById('zodiac-grid');

    contentArray.forEach((item) => {
        const card = document.createElement('div');
        const btn = document.createElement('button');
        const text = document.createElement('p');
        const img = document.createElement('img');
    
        text.innerHTML = item.name;
        img.src = `./images/${item.name}_flower.jpg`;
    
        btn.appendChild(img); // Make the image the button
        btn.addEventListener('click', () => {
            alert(`You clicked on ${item.name}`);
        });
    
        card.id = item.name;
        card.appendChild(btn);
        card.appendChild(text);
        section.appendChild(card);
    });
}

function styleButton() {

    contentArray.forEach((item) => {
        const card = document.getElementById(item);

        card.style.display = flex;
        card.style.flexDirection = column;
        card.style.alignItems = clear;
    });
}

createButton();
console.log('createButton completed');

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
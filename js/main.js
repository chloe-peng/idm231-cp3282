const content_array = [
    {
        name: 'Capricorn',
        date: '[December 22 - January 19]',
        description: 'You’re a plum blossom! This enduring and hopeful flower aligns with your disciplined, ambitious, and resilient nature. Like the plum blossom, you thrive through hard work and perseverance, even in the harshest conditions. The flower’s delicate yet hardy petals reflect your ability to balance strength with grace under pressure. Your determination and focus make you a trailblazer who inspires others to achieve their goals.',
    },

    {
        name: 'Aquarius',
        date: '[January 20 - February 18]',
        flower: 'Torenia',
        description: 'You’re a torenia! This unique and creative bloom reflects your innovative, unconventional, and humanitarian spirit. Just like the torenia, you stand out for your individuality and your desire to make the world a better place. The flower’s vibrant colors and delicate structure symbolize your ability to combine creativity with a forward-thinking vision. Your hopeful and idealistic nature inspires others to dream of a brighter future.',
    },

    {
        name: 'Pisces',
        date: '[February 19 - March 20]',
        description: 'You’re a camellia! This romantic and spiritual flower resonates with your compassionate, dreamy, and artistic nature. Like the camellia, you find beauty in emotions and the unseen, weaving dreams and empathy into your creative world. The flower’s association with devotion and purity reflects your selfless and deeply loving heart. Your timeless elegance and connection to the mystical make you a true poet of the soul.',
    },

    {
        name: 'Aries',
        date: '[March 21 - April 19]',
        description: 'You’re a tulip! Just like this bold and vibrant flower, you’re full of energy, passion, and determination. Tulips stand tall and unapologetic, much like your confident and pioneering spirit. They bloom early in spring, symbolizing your role as a natural leader who’s always ready to take on new challenges. With your fiery personality, you inspire those around you to embrace life with the same fearless enthusiasm.',
    },

    {
        name: 'Taurus',
        date: '[April 20 - May 20]',
        flower: 'Cherry Blossom',
        description: 'The cherry blossom’s delicate beauty and its representation of fleeting yet profound moments align with Taurus’ appreciation for harmony, stability, and sensory pleasures. Like the cherry blossom, Taurus finds joy in the simple, grounding beauty of nature and life’s quiet, meaningful moments.',
    },

    {
        name: 'Gemini',
        date: '[May 21 - June 21]',
        flower: 'Morning Glory',
        description: 'The morning glory’s ever-changing blooms and its symbolism of transformation and affection reflect Gemini’s adaptable, curious, and communicative nature. Just as the morning glory opens anew each day, Gemini thrives on variety, intellectual exploration, and the joy of connecting with others.',
    },

    {
        name: 'Cancer',
        date: '[June 22 - July 22]',
        description: 'You’re a begonia! This resilient and nurturing flower perfectly matches your protective and empathetic nature. Like the begonia, you provide comfort and stability to those you love, thriving in your ability to care for others. Begonias bloom in shaded areas, symbolizing your preference for creating safe, intimate spaces for your loved ones. Your quiet strength and emotional depth make you a pillar of support for everyone around you.',
    },

    {
        name: 'Leo',
        date: '[July 23 - August 22]',
        description: 'You’re a cock\'s comb! This striking and flamboyant flower reflects your confident, charismatic, and regal personality. Just like this unique bloom, you love to shine and be admired for your brilliance. The metallic sheen of the cock\'s comb mirrors your radiant and larger-than-life presence. Your unwavering self-assurance and ability to command attention make you a natural-born leader.',
    },

    {
        name: 'Virgo',
        date: '[August 23 - September 22]',
        description: 'You’re a daffodil! This pure and cheerful flower aligns with your practical, detail-oriented, and optimistic nature. Like the daffodil, you bring a sense of order and hope, nurturing growth in yourself and others. Daffodils are often the first flowers to bloom in spring, symbolizing your role as a healer and guide who helps others start anew. Your bright and thoughtful presence brings clarity and light to every situation.',
    },

    {
        name: 'Libra',
        date: '[September 23 - October 23]',
        description: 'You’re a wisteria! This graceful and elegant flower reflects your love for beauty, balance, and harmony. Just like wisteria vines that intertwine in perfect symmetry, you seek to create harmony in all aspects of life. The enchanting fragrance and delicate petals of wisteria symbolize your charm and ability to bring people together. Your commitment to nurturing meaningful connections makes you a beloved friend and partner.',
    },

    {
        name: 'Scorpio',
        date: '[October 24 - November 21]',
        description: 'You’re a Chinese Lantern lily! This mysterious and transformative flower resonates with your intense, enigmatic, and deeply emotional nature. Like the lantern lily, you have a powerful ability to illuminate the darkest corners of life with your insight and intuition. The flower’s bright, lantern-like appearance symbolizes your ability to reveal profound truths beneath the surface. Your protective yet fiercely loyal heart makes you a force to be reckoned with.',
    },

    {
        name: 'Sagittarius',
        date: '[November 22 - December 21]',
        description: 'You’re a wild peanut! This resilient and adventurous flower mirrors your free-spirited, optimistic, and exploratory nature. Just like the wild peanut, you thrive in diverse environments and seek freedom and knowledge with boundless enthusiasm. The flower’s humble yet hardy nature reflects your ability to find joy and meaning in even the simplest of experiences. Your grounded optimism and love for exploration make you a true adventurer at heart.',
    },
]

// contentArray.forEach(item => {
//     item.src = `path/to/images/${item.name}_flower.jpg`;
// });

// function open_popup() {
//   // const background = document.createElement('div');
//   // background.style.width = '100vw';
//   // background.style.height = '100vh';
//   // document.body.style.backgroundColor = 'white';
//   document.body.style.filter = 'blur(2px)';

//   const container = document.createElement('div');;
//   container.style.width = '500px';
//   container.style.backgroundColor = 'red';
//   container.style.display = 'grid'
//   // container.style.justifyContent = 'center';
//   // container.style.zIndex = '2';

//   document.body.appendChild(container);
// }

function card_popup(zodiac) {
    const main_section = document.querySelector('main');
    main_section.style.gridTemplateColumns = '1fr 4fr 4fr 1fr';

    const buttons_section = document.getElementById('zodiac-grid');
    buttons_section.style.gridTemplateColumns = 'repeat(4, 1fr)';
    buttons_section.style.gridTemplateRows = 'repeat(3, 1fr)';

    // const side_panel = document.createElement('div');
    // side_panel.style.gridColumn = '3 / span 2';
    // side_panel.style.gridRow = '1 / span 2';
    // side_panel.style.height = '100%';
    // side_panel.style.alignItems = 'center';
    // side_panel.style.borderRadius = '20px 0px 0px 20px';
    // side_panel.style.margin = '10px 0px 10px 10px';
    // side_panel.style.backgroundColor = 'blue';

    const top_section = document.createElement('div');
    // Top Section SetUp
    top_section.style.gridColumn = '3 / span 2';
    top_section.style.gridRow = '1';
    top_section.style.height = '100%';
  
    // Top Section Styling
    top_section.style.borderStyle = 'none none none solid';
    top_section.style.borderColor = '#434343';
    top_section.style.borderWidth = '1px';
    top_section.style.borderRadius = '20px 0px 0px 0px';
    top_section.style.boxShadow = '0px 0px 15px 0px rgba(67, 67, 67, 0.15)';
    top_section.style.clipPath = 'inset(-10px -10px 0px -10px)';

    // Top Section Grid Layout
    top_section.style.display = 'grid';
    top_section.style.gridTemplateColumns = 'repeat(3, 1fr)';
    top_section.style.justifyContent = 'center';
    top_section.style.alignItems = 'end';


    const bottom_section = document.createElement('div');
    // Bottom Section SetUp
    bottom_section.style.gridColumn = '3 / span 2';
    bottom_section.style.gridRow = '2';
    bottom_section.style.height = '100%';

    // Bototm Section Styling
    bottom_section.style.borderStyle = 'none none none solid';
    bottom_section.style.borderColor = '#434343';
    bottom_section.style.borderWidth = '1px';
    bottom_section.style.borderRadius = '0px 0px 0px 20px';
    bottom_section.style.boxShadow = '0px 0px 15px 0px rgba(67, 67, 67, 0.15)';
    bottom_section.style.clipPath = 'inset(0px -10px -10px -10px)';

    for (let i = 0; i < content_array.length; i++) {
      if (content_array[i].name === zodiac) {
        // top_section.style.backgroundColor = content_array[i].color;
        // bottom_section.style.backgroundColor = content_array[i].color;

        // Place IMG in the Top Section
        const img_div = document.createElement('div');
        const image = document.createElement('img');
        image.src = `./images/${zodiac}_flower.jpg`;
        image.style.width = '100%';  
        img_div.appendChild(image);

        img_div.style.gridColumn = '2';
        top_section.appendChild(img_div);

        // Place all the text in the Bottom Section
        
        
      }
    }

    main_section.appendChild(top_section);
    main_section.appendChild(bottom_section);
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
      card.style.marginBlock = '10px';
      card.style.marginInline = '10px';
      card.style.borderRadius = '10px';
      card.style.boxShadow = '1px 1px 15px 1px rgba(67, 67, 67, 0.15)';
  
      const text = document.createElement('p');
      text.innerHTML = item.name;
      btn.classList.add(item.name);
      btn.id = item.name;

      const img = document.createElement('img');
      img.src = `./images/${item.name}_flower.jpg`;    
      btn.appendChild(img);

      btn.addEventListener('click', () => card_popup(item.name));

      btn.appendChild(text);
      card.appendChild(btn);
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
    } else return null;
  }


  function handle_submit(event) {
    event.preventDefault();
        const date_object = log_birthday(form.elements['birthday'].value.split('-'));


        // FIX ERROR FUNCTION LATER
        const errors = [];
        if ((date_object.year > 9999) && !errors.includes('Year must have 4 digits')) {
          const error_text = 'Year must have 4 digits';
          errors.push(error_text);
          form.elements['birthday'].focus(); 
      }
    
        if(errors.length) {
            errors.forEach((error) => {
                const li = document.createElement('li');
                const text = document.createTextNode(error);
    
                li.appendChild(text);
    
                if(error_list) {
                    error_list.appendChild(li);
                    error_list.hidden = false;
                }
            })
    
            return false;
        }
          else {
                error_list.hidden = true;
                error_list.innerHTML = '';
          }

        const selected_zodiac = getZodiac(date_object.month, date_object.day);
        card_popup(selected_zodiac);
}

if (form) {
    form.addEventListener('submit', handle_submit);
}
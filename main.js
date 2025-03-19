const content_array = [
    {
        name: 'Capricorn',
        date: '[December 22 - January 19]',
        flower: 'Plum Blossom',
        description: 'This enduring and hopeful flower aligns with your disciplined, ambitious, and resilient nature. Like the plum blossom, you thrive through hard work and perseverance, even in the harshest conditions. The flower’s delicate yet hardy petals reflect your ability to balance strength with grace under pressure. Your determination and focus make you a trailblazer who inspires others to achieve their goals.',
    
      },

    {
        name: 'Aquarius',
        date: '[January 20 - February 18]',
        flower: 'Torenia',
        description: 'This unique and creative bloom reflects your innovative, unconventional, and humanitarian spirit. Just like the torenia, you stand out for your individuality and your desire to make the world a better place. The flower’s vibrant colors and delicate structure symbolize your ability to combine creativity with a forward-thinking vision. Your hopeful and idealistic nature inspires others to dream of a brighter future.',
    },

    {
        name: 'Pisces',
        date: '[February 19 - March 20]',
        flower: 'Camellia',
        description: 'This romantic and spiritual flower resonates with your compassionate, dreamy, and artistic nature. Like the camellia, you find beauty in emotions and the unseen, weaving dreams and empathy into your creative world. The flower’s association with devotion and purity reflects your selfless and deeply loving heart. Your timeless elegance and connection to the mystical make you a true poet of the soul.',
    },

    {
        name: 'Aries',
        date: '[March 21 - April 19]',
        flower: 'Tulip',
        description: 'Just like this bold and vibrant flower, you\'re full of energy, passion, and determination. Tulips stand tall and unapologetic, much like your confident and pioneering spirit. They bloom early in spring, symbolizing your role as a natural leader who’s always ready to take on new challenges. With your fiery personality, you inspire those around you to embrace life with the same fearless enthusiasm.',
    },

    {
        name: 'Taurus',
        date: '[April 20 - May 20]',
        flower: 'Cherry Blossom',
        description: 'The cherry blossom\'s delicate beauty and its representation of fleeting yet profound moments align with Taurus’ appreciation for harmony, stability, and sensory pleasures. Like the cherry blossom, Taurus finds joy in the simple, grounding beauty of nature and life’s quiet, meaningful moments.',
    },

    {
        name: 'Gemini',
        date: '[May 21 - June 21]',
        flower: 'Morning Glory',
        description: 'The morning glory\'s ever-changing blooms and its symbolism of transformation and affection reflect Gemini’s adaptable, curious, and communicative nature. Just as the morning glory opens anew each day, Gemini thrives on variety, intellectual exploration, and the joy of connecting with others.',
    },

    {
        name: 'Cancer',
        date: '[June 22 - July 22]',
        flower: 'Begonia',
        description: 'This resilient and nurturing flower perfectly matches your protective and empathetic nature. Like the begonia, you provide comfort and stability to those you love, thriving in your ability to care for others. Begonias bloom in shaded areas, symbolizing your preference for creating safe, intimate spaces for your loved ones. Your quiet strength and emotional depth make you a pillar of support for everyone around you.',
    },

    {
        name: 'Leo',
        date: '[July 23 - August 22]',
        flower: 'Cock\' Comb',
        description: 'This striking and flamboyant flower reflects your confident, charismatic, and regal personality. Just like this unique bloom, you love to shine and be admired for your brilliance. The metallic sheen of the cock\'s comb mirrors your radiant and larger-than-life presence. Your unwavering self-assurance and ability to command attention make you a natural-born leader.',
    },

    {
        name: 'Virgo',
        date: '[August 23 - September 22]',
        flower: 'Daffodil',
        description: 'This pure and cheerful flower aligns with your practical, detail-oriented, and optimistic nature. Like the daffodil, you bring a sense of order and hope, nurturing growth in yourself and others. Daffodils are often the first flowers to bloom in spring, symbolizing your role as a healer and guide who helps others start anew. Your bright and thoughtful presence brings clarity and light to every situation.',
    },

    {
        name: 'Libra',
        date: '[September 23 - October 23]',
        flower: 'Wisteria',
        description: 'This graceful and elegant flower reflects your love for beauty, balance, and harmony. Just like wisteria vines that intertwine in perfect symmetry, you seek to create harmony in all aspects of life. The enchanting fragrance and delicate petals of wisteria symbolize your charm and ability to bring people together. Your commitment to nurturing meaningful connections makes you a beloved friend and partner.',
    },

    {
        name: 'Scorpio',
        date: '[October 24 - November 21]',
        flower: 'Chinese Lantern Lily',
        description: 'This mysterious and transformative flower resonates with your intense, enigmatic, and deeply emotional nature. Like the lantern lily, you have a powerful ability to illuminate the darkest corners of life with your insight and intuition. The flower’s bright, lantern-like appearance symbolizes your ability to reveal profound truths beneath the surface. Your protective yet fiercely loyal heart makes you a force to be reckoned with.',
    },

    {
        name: 'Sagittarius',
        date: '[November 22 - December 21]',
        flower: 'Wild Peanut',
        description: 'This resilient and adventurous flower mirrors your free-spirited, optimistic, and exploratory nature. Just like the wild peanut, you thrive in diverse environments and seek freedom and knowledge with boundless enthusiasm. The flower’s humble yet hardy nature reflects your ability to find joy and meaning in even the simplest of experiences. Your grounded optimism and love for exploration make you a true adventurer at heart.',
    },
]

function open_popup() {
  const main_section = document.querySelector('main');
  main_section.style.gridTemplateColumns = '1fr 4fr 4fr 1fr';

  const buttons_section = document.getElementById('zodiac-grid');
  buttons_section.style.gridTemplateColumns = 'repeat(4, 1fr)';
  buttons_section.style.gridTemplateRows = 'repeat(3, 1fr)';

  const top_section = document.getElementById('top_section');
  const top_currentDisplay = window.getComputedStyle(top_section).display;

  const bottom_section = document.getElementById('bottom_section');
  const bottom_currentDisplay = window.getComputedStyle(bottom_section).display;

  if ((top_currentDisplay === 'none') && (bottom_currentDisplay === 'none')) {
      top_section.style.display = 'grid';
      bottom_section.style.display = 'grid';
  }
}

function card_popup(zodiac) {
    open_popup();

    const top_section = document.getElementById('top_section');
    const bottom_section = document.getElementById('bottom_section');

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
    top_section.style.gridTemplateColumns = 'repeat(3, 1fr)';
    top_section.style.justifyContent = 'center';
    top_section.style.alignItems = 'end';

    
    // Bottom Section SetUp
    bottom_section.style.gridColumn = '3 / span 2';
    bottom_section.style.gridRow = '2';
    bottom_section.style.height = '100%';
    bottom_section.style.justifyContent = 'center';

    // Bototm Section Styling
    bottom_section.style.borderStyle = 'none none none solid';
    bottom_section.style.borderColor = '#434343';
    bottom_section.style.borderWidth = '1px';
    bottom_section.style.borderRadius = '0px 0px 0px 20px';
    bottom_section.style.boxShadow = '0px 0px 15px 0px rgba(67, 67, 67, 0.15)';
    bottom_section.style.clipPath = 'inset(0px -10px -10px -10px)';

    // Bottom Section Grid Layout
    bottom_section.style.gridTemplateColumns = '1fr 4fr 1fr';
    bottom_section.style.gridTemplateRows = '30px 20px 20px auto 30px';
    bottom_section.style.justifyContent = 'center';
    bottom_section.style.alignItems = 'start';

    const bottom_children = bottom_section.querySelectorAll('div');
    bottom_children.forEach(child => {
        child.style.gridColumn = '2';
        child.style.justifySelf = 'center';
    });

      for (let i = 0; i < content_array.length; i++) {
        if (content_array[i].name === zodiac) {
          // top_section.style.backgroundColor = content_array[i].color;
          // bottom_section.style.backgroundColor = content_array[i].color;
          const flower = content_array[i].flower;
          const timeframe = content_array[i].date;
          const description = content_array[i].description;

          // Place IMG in the Top Section
          const flower_img_div = document.getElementById('flower_img');
          const image = flower_img_div.querySelector('img');
          image.src = `./images/${zodiac}_flower.jpg`;
          image.style.width = '100%';  
          flower_img_div.style.gridColumn = '2';

          // Place all the text in the Bottom Section
          const flower_result_div = document.getElementById('flower_result_div');
          const flower_result_text = flower_result_div.querySelector('h2');
          flower_result_text.innerHTML = `You\'re a ${flower}!`;

          const zodiac_name_div = document.getElementById('zodiac_name');
          const zodiac_name_text = zodiac_name_div.querySelector('h4');
          zodiac_name_text.innerHTML = zodiac;
          
          const zodiac_timeframe_div = document.getElementById('zodiac_timeframe');
          const zodiac_timeframe_text = zodiac_timeframe_div.querySelector('p');
          zodiac_timeframe_text.innerHTML = timeframe;
          zodiac_timeframe_div.style.fontStyle = 'italic';

          const description_div = document.getElementById('description');
          const description_text = description_div.querySelector('p');
          description_text.innerHTML = description;
        }
      }
}

let all_sounds = []

function stop_all_sounds() {
    all_sounds.forEach((sound) => {
        sound.pause();
        sound.currentTime = 0;
    })
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

      const sound_file = `./audio/${item.name}_audio.mp3`
      const audio = new Audio(sound_file);
      all_sounds.push(audio);

      btn.addEventListener('click', () => {
        stop_all_sounds();
        audio.play();
        card_popup(item.name)
      });

      btn.appendChild(text);
      card.appendChild(btn);
      section.appendChild(card);
  });
}

create_button();

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


// REMINDER TO REMOVE ALL THE CONSOLE LOGS
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
      console.log('aries');
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
        if ((date_object.year > 9999)) {
          const error_text = 'Year must have 4 digits';
          errors.forEach((error) => {
            if (error != error_text) {

            };
          })
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
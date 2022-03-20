/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import { MemoizedVertical } from './VerticalAccordionItem';
import AccordionButton from './AccordionButton';
import Image from 'next/image'


// import chloe from '../public/assets/Chloe_500x991.webp';
// import lauren from '../public/assets/Lauren_500x991.webp';
// import nora from '../public/assets/Nora_500x991.webp';
// import riley from '../public/assets/Riley_500x991.webp';
// import aubrey from '../public/assets/Aubrey_500x991.webp';
// import lindsey from '../public/assets/Lindsey_500x991.webp';
// import penelope from '../public/assets/Penelope_500x991.webp';



import nora from '../public/assets/Nora_acc.png';
import chloe from '../public/assets/Chloe_acc.webp';
import lauren from '../public/assets/Lauren_acc.png';
import aubrey from '../public/assets/Aubrey_acc.webp';
import penelope from '../public/assets/Penelope_acc.png';
import riley from '../public/assets/Riley_acc.png';
import lindsey from '../public/assets/Lindsey_acc.png';

const names = [
  {
    name: 'Nora',
    text: 'Nora wants to travel the world and experience new things, but currently she’s stuck with her boyfriend, who leads the Wolves fraternity.',
    img: nora,
    id: 0,
    title: 'The Dreamer'
  },
  {
    name: 'Chloe',
    text: 'The most popular girl in San Vallejo is always up for some fun. Leading the biggest sorority with a great passion, she is the number one. ',
    img: chloe,
    id: 1,
    title: "The 'It Girl",
  },
  {
    name: 'Lauren',
    text: 'She’s the most vanilla girl you’ll find and will always love you for who you are. Just don’t try to betray her, as you will definitely regret it. ',
    img: lauren,
    id: 2,
    title: 'The Innocent',
  },
  {
    name: 'Aubrey',
    text: 'She is the most open girl in San Vallejo, making always sure everyone has fun. Living in the moment, Aubrey is the first to undress you and tie you up.',
    img: aubrey,
    id: 3,
    title: ' The Open',
  },
  {
    name: 'Penelope',
    text: 'She has very little friends, but cares even more for them. Even though Penelope is a little introverted and cautious, she is always four steps ahead of everyone else. ',
    img: penelope,
    id: 4,
    title: 'The Lone Wolf ',
  },
  {
    name: 'Riley',
    text: 'Bored in your dorm? Don’t worry. Riley is here to explore the world with you. If you ever feel down, she is the one to cheer you up. ',
    img: riley,
    id: 5,
    title: 'The Passionate',
  },
  {
    name: 'Lindsey',
    text: 'Friends with the hottest girls in college, Lindsey is a nice girl with a naughty side. You need to treat her right if you want to be her College King.',
    img: lindsey,
    id: 6,
    title: 'The Popular',
  },
];

const HorisontalAccordionMobile = () => {
  const [activeGirlIndexNames, setActiveGirlIndexNames] = useState(0);
  const [activeGirl, setActiveGirl] = useState(0);

  const [activeNames, setActiveNames] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const [effectImg, setEffectImg] = useState(false);

  useEffect(() => {
    const firstNamesSlice = names.slice(
      activeGirlIndexNames,
      activeGirlIndexNames + 3
    );
    setActiveNames(firstNamesSlice);
  }, [activeGirlIndexNames]);

  const handleChange = (index) => {
    if (index === names.length - 2) {
      const resetNames = names.slice(0, 3);
      setActiveNames(resetNames);
      setActiveId(0);
      setActiveGirlIndexNames(0);
      return;
    }
    const newNames = names.slice(activeGirlIndexNames + 1, index + 3);

    setActiveId(newNames[0].id);
    setActiveNames(newNames);
    setActiveGirlIndexNames((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="w-full h-full flex justify-end items-end m:hidden z-0">
      <div className="relative w-full h-full z-0">
        <div
          className={`${effectImg && 'animate-fadeIn'
            }  absolute top-3 -left-6  sm:-top-14`}
          style={{ width: '100%' }}
          onAnimationEnd={() => setEffectImg(false)}
        >
          <div style={{ width: '100%' }}>
            <Image
              width={250}
              height={500}
              quality={100}
              layout='responsive'
              src={names[activeId].img}
              alt="active"
            />
          </div>
        </div>
      </div>
      <div className="w-2/3 h-full flex flex-col justify-center items-center py-6 pr-2">
        {activeNames &&
          activeNames.map((girl, index) => (
            <MemoizedVertical
              key={index}
              index={index}
              name={girl.name}
              title={girl.title}
              text={girl.text}
              activeGirlIndexNames={activeGirlIndexNames}
              setActiveGirl={setActiveGirl}
              activeGirl={activeGirl}
              setActiveId={setActiveId}
              imageId={girl.id}
              setEffectImg={setEffectImg}
            />
          ))}
        <AccordionButton
          handleChange={handleChange}
          activeGirlIndexNames={activeGirlIndexNames}
        />
      </div>
    </div>
  );
};

export default HorisontalAccordionMobile;

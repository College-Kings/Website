/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

//assets
const BigCrown = dynamic(() => import('../../public/assets/big-crown.svg'));
const YouTube = dynamic(() => import('react-youtube'));
import bigChloe from '../../public/assets/big-chloe.webp';
import chloeSitSmall from '../../public/assets/chloe-sit-under-small.webp';
import college from '../../public/assets/college-text.png';
import styles from '../index.module.css';

const Section2 = () => {
  return (
    <>
      <div className="relative w-full bg-black-secondary  h-77.51 pl-7.25 md:pl-14.14  mb-9.918  sm:h-auto  overflow-hidden md:flex 2xl:pl-40.5 z-0">
        <div className=" md:flex md:flex-col md:w-1/3 ">
          <p className="hidden m:flex relative pr-7.25 z-10 text-white text-title font-bebas">
            What is College Kings?
          </p>
          <p className="sm:pr-0 m:hidden relative pr-7.25  z-10 text-white text-title font-bebas">
            What is
          </p>
          <p className="sm:pr-0 m:hidden relative pr-7.25  z-10 text-white text-title font-bebas">
            College Kings?
          </p>

          <div className="w-auto  h-auto flex flex-wrap ">
            <p className="relative z-10 text-white text-paragraph pb-5 pr-7.25 font-monserrat inline wrap font-montserrat">
              Just an innocent freshman at San Vallejo College, you are
              oblivious to the path that lays ahead of you. Growing up gets real
              when you learn about the unique cultures of the place you must
              call home.
            </p>
            <p className="relative pr-7.25 z-10 text-white text-paragraph font-montserrat">
              As loyalties form and tensions rise can you lead your fraternity
              to the crown and with it become the king on campus?
            </p>
          </div>
        </div>
        <div className=" md:w-2/3 h-80 -mt-52.5 -mr-30 md:mt-0 opacity-75">
          <BigCrown />
        </div>
      </div>

      <div className=" -mb-12 flex justify-center m:hidden">
        <YouTube
          videoId="4Kf-W0M5FwA/enablejsapi=1&amp"
          className={`${styles.youtube} w-83 h-44.25 frame-background`}
        />
      </div>
      <div className="m:hidden pl-7.25 w-full z-40 ">
        <Image src={chloeSitSmall} width={375} height={281} layout='fixed' quality={100} className="z-40" alt="chloe-sit" />
      </div>



      <div className="hidden w-full bg-black-secondary m:flex my-10 md:justify-center md:align-middle  items-center bg-transparent  m:h-84.987 lg:h-103 5xl:h-154.25  ">
        <div className="relative flex flex-row justify-center align-middle items-center w-full m:h-84.987 lg:h-103 5xl:h-154.25">
          <Image
            layout="fill"
            src={college}
            alt="college"
            placeholder="blur"
          />

          <div className="w-5/12 lg:w-6/12 lg:ml-10  relative flex justify-center align-middle md:h-77.51 2xl:h-95 5xl:h-136 5xl:ml-37.75">
            <YouTube
              videoId="4Kf-W0M5FwA/enablejsapi=1&amp"
              className="absolute top-0 left-0 w-full  h-full frame-background"
            />
          </div>

          <div className="w-5/12 h-[281px] flex justify-start align-middle md:-ml-1 xl:-ml-20 xl:hidden z-0">
            <div style={{ width: "100%" }}>
              <Image src={chloeSitSmall} width={375} height={281} layout='responsive' quality={100} className={styles.zIndex} alt="chloe-sit" />
            </div>
          </div>
          <div className="hidden  w-6/12   xl:flex justify-end align-middle md:-ml-1 xl:-ml-10 5xl:-ml-66 scale-110">
            <div style={{ width: "100%" }}>

              <Image src={bigChloe} width={884} layout='responsive' quality={100} height={745} loading='lazy' alt="chloe" className={styles.zIndex} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;

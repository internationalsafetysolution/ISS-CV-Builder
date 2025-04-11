import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { AnimationGeneratorType, motion, useAnimation } from 'framer-motion';

import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transitionEffects = {
    type: 'spring' as AnimationGeneratorType,
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      <nav className="sticky top-0 z-20 h-20 w-full bg-resume-851 flex py-1 px-4 xl:px-10 items-center shadow-level-8dp">
        <Link href="/">
          <Image src={'/icons/ISS-Icon.png'} alt="logo" height={100} width={100} />
        </Link>
        <div className="flex-auto flex justify-end items-center ml-5">
          <NavBarActions>
            <Link href={'https://internationalsafetysolution.com'} passHref={true}>
              <StyledButton variant="text" className="max-md:hidden text-[#343434]">
                Home
              </StyledButton>
            </Link>
            <Link href={'https://internationalsafetysolution.com/blogs/'} passHref={true}>
              <StyledButton variant="text" className="text-[#343434]">
                Blogs
              </StyledButton>
            </Link>
            <Link href={'https://internationalsafetysolution.com/courses'} passHref={true}>
              <StyledButton variant="text" className="text-[#343434]">
                Courses
              </StyledButton>
            </Link>
            <Link href={'https://internationalsafetysolution.com/safety-notes'} passHref={true}>
              <StyledButton variant="text" className="text-[#343434]">
                Study Material
              </StyledButton>
            </Link>
            <Link
              href={'https://internationalsafetysolution.com/fire-safety-equipments'}
              passHref={true}
            >
              <StyledButton variant="text" className="text-[#343434]">
                Our Services
              </StyledButton>
            </Link>
            <Link href={'https://internationalsafetysolution.com/schedule'} passHref={true}>
              <StyledButton variant="text" className="text-[#343434]">
                Schedule
              </StyledButton>
            </Link>
            <Link href={'https://internationalsafetysolution.com/gallery'} passHref={true}>
              <StyledButton variant="text" className="text-[#343434]">
                Gallery
              </StyledButton>
            </Link>
            <Link
              href={'https://internationalsafetysolution.com/online-registration'}
              passHref={true}
            >
              <StyledButton
                variant="text"
                className="bg-[#F7A313] text-white px-4 py-2 rounded-md shadow-md transition-all duration-300 hover:bg-[#44A24C] hover:scale-105"
              >
                Apply Now
              </StyledButton>
            </Link>
            <a href={'https://g.co/kgs/QD2c5Gg'} target="_blank" rel="noopener noreferrer">
              <Image src={'/icons/social-media-icon.png'} alt="logo" height={50} width={50} />
            </a>
          </NavBarActions>
        </div>
      </nav>
      <div
        style={{
          background: 'linear-gradient(180deg, #F9FAFB 50%, #FFFFFF 100%)',
          fontFamily: "'Roboto Slab', serif",
        }}
      >
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transitionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/icons/cv-icon-green.png"
                alt="resume-3d"
                className="w-6/12 sm:w-9/12"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transitionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transitionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3 className="text-xl md:text-2xl mb-2 text-[#4E9D48]">SIMPLEST WAY TO BUILD A</h3>
              <h1 className="text-5xl mb-12 text-[#343434]">Professional Resume</h1>

              <div className="flex mb-10">
                <div className="bg-[#4E9D48] w-1 rounded-lg"></div>
                <p className="text-lg ml-3 text-[#343434]">
                  “The secret to getting ahead is getting started”
                  <br />
                  —Abdul Rehman
                </p>
              </div>
              <Link href="/builder" passHref={true}>
                <Button
                  variant="contained"
                  className="bg-[#F7A313] hover:bg-[#44A24C] text-white font-semibold text-base px-6 py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                  BUILD YOUR RESUME
                </Button>
              </Link>
              <p
                className="xl:invisible text-[#343434]"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Desktop screen recommended
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="disabled mx-6 md:mx-40 xl:mx-60 my-19 w-75"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transitionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeLayout;

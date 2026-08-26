import React from 'react';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8 text-[#D7E2EA]">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
            className="font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); scrollTo('services'); }}
            className="font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Price
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
            className="font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            className="font-medium uppercase tracking-wider text-sm md:text-base lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden text-center z-0 mt-6 sm:mt-8 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i’m jack
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:translate-y-0 pointer-events-none sm:pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Jack Portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain select-none"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-12 pb-7 sm:pb-8 md:pb-10 flex items-end justify-between z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;

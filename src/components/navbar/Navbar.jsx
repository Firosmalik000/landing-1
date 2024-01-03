import { navLinks } from '../../Data';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import Navlink from './Navlink';
import MobileNavlink from './MobileNavlink';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
  }, [active]);
  return (
    <div className={` fixed w-full top-0 left-0 z-20 ${active ? 'shadow-lg bg-Solitude' : ''} transition duration-300`}>
      <div>
        <div className={`container py-4 mx-auto flex items-center justify-between px-2 ${active ? 'py-2 transition-all duration-300' : 'py-4'}`}>
          <div className="flex items-center gap-4">
            <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" onClick={() => setToogle(true)} />
            <div className="text-Teal text-xl uppercase tracking-wide font-bold">Skillex</div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => (
              <Navlink key={navLink.id} {...navLink} />
            ))}
          </div>
          <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">Sign Up</button>
          {toogle && (
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-96 h-full bg-Teal text-white  flex-col   shadow-lg gap-8 py-8  flex items-center justify-center"
            >
              {navLinks.map((navLink) => {
                return <MobileNavlink key={navLink.id} {...navLink} setToogle={setToogle} />;
              })}
              <HiX className="absolute right-12 top-12 text-3xl cursor-pointer" onClick={() => setToogle(false)} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

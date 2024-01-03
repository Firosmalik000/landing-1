import { Link } from 'react-scroll';
const MobileNavlink = ({ href, link, setToogle }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link to={href} smooth={true} duration={500} offset={-70} spy={true} className="font-bold transition-all duration-3000" onClick={() => setToogle(false)}>
        {link}
      </Link>
    </li>
  );
};

export default MobileNavlink;

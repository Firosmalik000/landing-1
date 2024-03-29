import about from '../../assets/About.jpg';

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold md:text-[1.875rem] text-[1.5rem] mb-4">
            We provide the <br />
            best <span className="text-Teal">Online Course</span>
          </div>{' '}
          <p className="text-sm text-gray leading-7 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptas dolorum fugit similique cumque assumenda veniam unde ipsam sapiente minus ipsum, nobis necessitatibus eligendi veritatis? Ad qui aliquam ipsa libero.
          </p>
          <button className="border border-solid border-gray rounded-lg font-bold py-3 px-6 text-sm">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;

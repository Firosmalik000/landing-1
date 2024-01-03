import { accordions } from '../../Data';
import teacher1 from '../../assets/teacher1.png';
import teacher2 from '../../assets/teacher2.png';
import Accordion from './Accordion';

const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br />
            of Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita praesentium facilis nulla harum laborum dolorem, laboriosam sit debitis, commodi totam animi consectetur velit possimus ut, accusantium consequatur ea
            perspiciatis.
          </p>
          <button className="py-3 px-4 rounded-lg text-sm font-bold bg-Teal text-white">Start Teaching</button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br />
            of Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe expedita praesentium facilis nulla harum laborum dolorem, laboriosam sit debitis, commodi totam animi consectetur velit possimus ut, accusantium consequatur ea
            perspiciatis.
          </p>
          <button className="py-3 px-4 rounded-lg text-sm font-bold bg-Teal text-white">Get Started</button>
        </div>
        <div className="p-4 md:w-3/4 ">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Quetion</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => (
          <Accordion key={accordion.id} {...accordion} />
        ))}
      </div>
    </div>
  );
};

export default Teacher;

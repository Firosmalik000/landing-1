import { categories } from '../../../Data';
import { courses } from '../../../Data';
import Categories from './Categories';
import SubCourse from './subCourse';
import { motion } from 'framer-motion';
const course = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="section" id="course">
      <div className="text-center">
        <div className="sm:text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore illo libero dolores sapiente accusamus beatae natus reiciendis asperiores deleniti in provident sit, quo officiis laboriosam aspernatur voluptatibus tempora eaque
          harum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem libero officia quod dolores praesentium, nobis dicta. Fugit, unde. Iusto inventore eum facilis quam reprehenderit libero eaque maxime placeat ut nam.
        </p>
      </div>
      <motion.div variants={container} initial="hidden" whileInView="visible" className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
        {categories.map((item) => (
          <Categories key={item.id} {...item} />
        ))}
      </motion.div>
      <div className="text-sk font-bold mt-32">Most Popular Course</div>
      <div className="mt-12 overflow-x-hidden w-full  relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((item) => (
            <SubCourse key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default course;

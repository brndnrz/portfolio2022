import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
Link;
const ProjectFeature = () => {
  return (
    <Link href="/page1">
      <div className="md:lg:col-span-1 md:lg:mb-0 md:lg:w-full mb-8 w-5/6 mx-auto h-72 border-2 rounded-3xl relative cursor-pointer feature">
        <h3 className="pl-5 pt-5 text-xl">Project Feature</h3>
        <BsArrowUpRightCircle className="absolute bottom-[10px] right-[10px] text-[2rem]" />
      </div>
    </Link>
  );
};

export default ProjectFeature;

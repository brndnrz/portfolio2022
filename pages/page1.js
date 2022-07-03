import Link from "next/link";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

const Page1 = () => {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <section className="w-4/5 mx-auto flex flex-col">
        <div className=" mb-[142px]">
          <h1 className="mb-7">Project Title</h1>
          <p className=" text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies
            dolor viverra vulputate bibendum morbi faucibus pellentesque hac.
            Mauris ac volutpat arcu aliquam in amet. Id lacus in mattis nisl
            tellus enim tellus adipiscing dolor.
          </p>
        </div>

        <div className=" w-full flex gap-8 md:lg:gap-4 mb-[450px] overflow-hidden flex-wrap md:lg:grid md:lg:grid-cols-2 ">
          <img
            src="/city.jpg"
            alt="img"
            className="w-full mx-auto h-[500px] md:lg:h-[300px] object-cover rounded-3xl"
          />
          <img
            src="/city.jpg"
            alt="img"
            className="w-full mx-auto h-[500px] md:lg:h-[300px] object-cover rounded-3xl"
          />
          <img
            src="/city.jpg"
            alt="img"
            className="w-full mx-auto h-[500px] md:lg:h-[300px] object-cover rounded-3xl"
          />
          <img
            src="/city.jpg"
            alt="img"
            className="w-full mx-auto h-[500px] md:lg:h-[300px] object-cover rounded-3xl"
          />
          <button
            type="button"
            className="font-Questrial border-4 font-medium rounded-xl  px-4 py-2 mx-auto mt-8 col-span-2 text-lg"
          >
            <a href="#">View Site</a>
          </button>
        </div>
      </section>

      <Link href="/">
        <h3 className="absolute bottom-0 right-[50px] logo cursor-pointer text-[100px] font-Questrial md:lg:text-[160px]">
          b.
        </h3>
      </Link>
      <footer className=" absolute z-[-1] bottom-0 w-full border-2 h-[650px] rounded-t-[50px] flex justify-end items-end px-10  "></footer>
    </div>
  );
};

export default Page1;

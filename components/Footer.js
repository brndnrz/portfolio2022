import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-2 h-[500px] md:lg:h-[650px] rounded-t-[50px] relative">
      <div className="pt-10 pl-10 leading-7 md:lg:pt-16 md:lg:pl-16 ">
        <p className="w-full pb-2">
          I&#39;m Brandon — a Software Developer &#38; Digital Designer.
        </p>
        <p className="w-4/5 md:w-3/5 md:lg:w-2/5">
          This is where I show some of my latest client work and personal
          projects. If you&#39;re looking to explore what ideas I have for your
          next venture, or you need a developer to build out your designs, shoot me
          an email. If the icon is green I&#39;m actively taking on new work!
        </p>
      </div>
      <Link href="/">
        <div className="logo cursor-pointer text-end mr-10 text-[100px] font-Questrial absolute bottom-0 right-0 md:lg:text-[160px]">
          b.
        </div>
      </Link>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex items-center my-14 mx-10">
      <Link href="/">
        <div className=" cursor-pointer font-Questrial text-[36px] md:lg:text-[64px]">
          b.
        </div>
      </Link>
      <h3 className="font-Questrial ml-auto flex items-center gap-2 text-lg">
        <span className="w-[11px] h-[11px] animate-ping bg-green-400 rounded-full  border-2 border-green-400 absolute"></span>
        <span className="w-[11px] h-[11px]  bg-green-400 rounded-full border-2 border-green-400 relative inline-flex"></span>
        <a href="mailto:brndnruiz@gmail.com?subject=I'm Interested In Working With You!">
          available for work
        </a>
      </h3>
    </nav>
  );
};

export default Nav;

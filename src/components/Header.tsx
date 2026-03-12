import {
  Search,
  Bell,
  User,
  TextAlignJustify,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router";

function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          headerRef.current?.classList.add("bg-black/30", "backdrop-blur-sm");
          headerRef.current?.classList.remove("bg-transparent");
        } else {
          headerRef.current?.classList.add("bg-transparent");
          headerRef.current?.classList.remove(
            "bg-black/30",
            "backdrop-blur-sm",
          );
        }
      });
    }
  }, []);

  return (
    <header
      className="flex text-red-600 text-2xl font-extrabold tracking-tighter p-5 items-center fixed z-50 top-0 left-0 right-0 transition-all duration-500 ease-in-out"
      ref={headerRef}
    >
      <div className="mr-7 grow md:grow-0">
        <span className="text-white">MOVIE</span>
        <span>WORLD</span>
        
      </div>
      <div className="gap-5 font-semibold text-[15px] text-gray-300 grow hidden md:flex">
        <Link to={"/"}>
          <div className="hover:text-white cursor-pointer">Home</div>
        </Link>
        <div className="hover:text-white cursor-pointer">Movies</div>
        <div className="hover:text-white cursor-pointer">Tv shows</div>
        <div className="hover:text-white cursor-pointer">More</div>
      </div>
      <div className="flex gap-5">
        <Search
          size={21}
          className="text-white cursor-pointer hover:text-white/70"
        />
        <Bell
          size={21}
          className="text-white cursor-pointer hover:text-white/70"
        />
        <div className="flex items-center gap-0.5">
          <User size={21} className="text-white cursor-pointer" />
          <ChevronDown
            size={21}
            className="text-white hidden sm:block cursor-pointer hover:text-white/70"
          />
        </div>
        <TextAlignJustify
          size={21}
          className="text-white cursor-pointer hover:text-white/70 md:hidden"
        />
      </div>
    </header>
  );
}

export default Header;

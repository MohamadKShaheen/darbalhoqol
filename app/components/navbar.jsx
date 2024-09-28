import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex flex-row-reverse justify-between">
      <ul className="flex justify-end w-[70%] bg-green-200 text-black">
        <li className="m-3"><Link href="/">Home</Link></li>
        <li className="m-3"><Link href="/about">About</Link></li>
        <li className="m-3"><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="w-[30%] p-3 bg-amber-300 text-black flex justify-center">
        <h1>Darb Alhoqol</h1>
      </div>
    </nav>
  );
};

export default Navbar;
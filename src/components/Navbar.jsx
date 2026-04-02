export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-6 max-w-lg mx-auto w-full">
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="active:scale-90 transition p-2 rounded-full"
      >
        <i className={`fa-solid text-xl ${darkMode ? 'fa-sun text-yellow-400' : 'fa-moon text-indigo-600'}`}></i>
      </button>
      <div className="flex gap-6 text-[10px] font-bold tracking-widest opacity-70">
        <span className="cursor-pointer">EN</span>
        <a href="/login" className={darkMode ? 'text-white' : 'text-black'}>MASUK</a>
      </div>
    </nav>
  );
}

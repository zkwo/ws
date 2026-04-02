export default function Footer() {
  return (
    <footer className="mt-16 pb-12 text-center px-6 border-t border-white/5 pt-10">
      <div className="flex justify-center gap-5 text-xl mb-6 opacity-60">
        <a href="https://instagram.com/valtus.asia" target="_blank" className="hover:scale-110 transition">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="text-[10px] text-gray-500 space-y-2 font-medium">
        <p className="tracking-widest">@VALTUS.ASIA</p>
        <div className="flex justify-center gap-3 opacity-50">
          <span>Syarat & Ketentuan</span>
          <span>•</span>
          <span>© 2026 Valtus. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

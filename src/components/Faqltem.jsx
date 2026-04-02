import { useState } from 'react';

export default function FaqItem({ title, desc, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-white/5 overflow-hidden">
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center py-5 cursor-pointer active:opacity-60 transition"
      >
        <span className={`text-[12px] font-bold transition-colors ${isOpen ? 'text-white' : 'text-gray-400'}`}>
          {title}
        </span>
        <i className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </div>
      
      <div 
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-[11px] text-gray-500 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

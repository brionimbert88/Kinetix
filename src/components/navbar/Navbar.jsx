import React from 'react';
import Logo from '../../assets/logo.png';

export default function Navbar({ currentPage, setCurrentPage }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <LogoIcon />
          <div>
            <span className="text-xl font-bold tracking-wider text-white block leading-tight">KINETIX</span>
            <span className="text-xs tracking-widest text-slate-400 block font-semibold">DIGITAL GROUP</span>
          </div>
        </div>
        
        <nav className="flex items-center gap-8">
          {['home', 'about', 'contact'].map((page) => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)} 
              className={`text-sm font-medium capitalize transition ${currentPage === page ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
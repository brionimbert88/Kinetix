import React from "react";


export default function Contact() {
    return (
        <section className="max-w-xl mx-auto px-6 py-20">
            <div className="text-center mb-10">
              <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2">Initialize Connection</h2>
              <h1 className="text-4xl font-black text-white">Contact the Group</h1>
              <p className="text-slate-400 mt-2 font-light">Drop us a transmission line to discuss deployments or network configurations.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 bg-slate-900 border border-slate-800 p-8 rounded-xl shadow-2xl">
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-slate-400 mb-2">Identity / Company</label>
                <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-slate-800 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-cyan-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-slate-400 mb-2">Secure Routing Address (Email)</label>
                <input type="email" placeholder="name@domain.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-cyan-500 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-slate-400 mb-2">Transmission Message</label>
                <textarea rows="4" placeholder="Outline your project scope or architectural request..." className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition resize-none"></textarea>
              </div>
              <button className="w-full h-12 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition">
                Send Transmission
              </button>
            </form>
          </section>
    )
}
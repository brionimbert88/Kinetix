import React from "react";


export default function About() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-20">
            <h2 className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-2">Our Architecture</h2>
            <h1 className="text-4xl font-black text-white mb-8">About Kinetix Digital Group</h1>
            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
              <p>
                Kinetix Digital Group is a multi-disciplinary digital enterprise built on the foundation of self-sufficiency, engineering mastery, and data-backed creative publishing. We don't just build for the web; we engineer complete platforms that bridge high-tier digital media with robust tech deployment.
              </p>
              <p>
                By blending software development, media broadcast platforms, and active data architecture, Kinetix functions as an incubator of interconnected digital properties. We believe that modern media requires exceptional code, and modern code deserves impactful distribution.
              </p>
              <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl mt-8">
                <h4 className="text-white font-bold mb-2">Core Philosophy</h4>
                <p className="text-sm text-slate-400">
                  Maintain velocity through innovation. We structurally operate under a kinetic loop: constantly deploying new technology, generating high-signal content, and translating internal infrastructure insights into actionable business applications.
                </p>
              </div>
            </div>
          </section>
    )
}
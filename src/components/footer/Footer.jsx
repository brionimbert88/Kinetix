import React from "react";
import "./Footer.css"; // Import the CSS file for styling


export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm text-slate-500">
        <p>
          &copy; {new Date().getFullYear()} Kinetix Digital Group. Bridging
          Next-Gen Technology and Innovation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

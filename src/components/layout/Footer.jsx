import React from "react";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:bijan.h.mazaheri@dartmouth.edu", label: "Email" },
  { icon: Twitter, href: "https://twitter.com/honey_bijan", label: "Twitter" },
  { icon: Github, href: "https://github.com/honeybijan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bijan-mazaheri-422b36111/", label: "LinkedIn" },
  { icon: ExternalLink, href: "https://scholar.google.com/citations?user=DXEdM48AAAAJ", label: "Google Scholar" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-slate-900">Bijan Mazaheri</p>
            <p className="text-xs text-slate-600 mt-1">
              Assistant Professor, Thayer School of Engineering at Dartmouth
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
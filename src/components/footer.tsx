import React from 'react'
import { profileConfig } from '../config'
const currentYear = new Date().getFullYear();
export default function footer() {
  return (
    <>
        <div className="transition border-t border-black/10 dark:border-white/15 my-10 border-dashed mx-32"></div>
        <div className="transition border-dashed  dark:border-white/15 rounded-2xl mb-12 flex flex-col items-center justify-center px-6">
            <div className="transition text-50 text-sm text-center">
                &copy; <span id="copyright-year">{currentYear}</span> {profileConfig.name}. All Rights Reserved. /
                <a className="transition link text-[var(--primary)] font-medium" target="_blank" href="#">RSS</a> /
                <a className="transition link text-[var(--primary)] font-medium" target="_blank" href="#">Sitemap</a><br/>
                Powered by
                <a className="transition link text-[var(--primary)] font-medium" target="_blank" href="https://astro.build">Astro</a> &
                <a className="transition link text-[var(--primary)] font-medium" target="_blank" href="https://github.com/saicaca/fuwari">Fuwari</a>
            </div>
        </div>
    </>
  );
}

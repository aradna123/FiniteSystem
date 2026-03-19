import React from "react";
import { Link } from "react-router-dom";

const latestPosts = [
  { title: "Street Inspiration", date: "Mar 3, 2016" },
  { title: "Places to get lost", date: "Mar 3, 2016" },
  { title: "Lewis Howes", date: "Mar 3, 2016" },
];

const widgetLinks = [
  { label: "Discover All our Amazing Services", to: "/website-development" },
  { label: "Come on Over & Meet the Team", to: "/about" },
  { label: "Find Out What's New and Interesting", to: "/blogs" },
  { label: "Check Out Our Awesome Projects", to: "/ourprocess" },
  { label: "Have Questions? Drop Us a Note", to: "/contact" },
];

const SocialIcon = ({ name, href, children }) => (
  <a href={href} className="text-gray-400 transition hover:text-white" aria-label={name}>
    {children}
  </a>
);

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-900">
      {/* CTA Banner */}
      <div className="relative flex min-h-[180px] flex-col items-center justify-center overflow-hidden px-4 py-16 sm:min-h-[280px] sm:px-6">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-8">
          <h3 className="max-w-2xl text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
            Ready to start a project? Let's build something great together.
          </h3>
          <Link
            to="/contact"
            className="shrink-0 rounded border-2 border-white bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-white hover:text-gray-900"
          >
            Let's Talk
          </Link>
        </div>
      </div>

      {/* Main Footer — 4 columns */}
      <div className="border-t border-gray-800 bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Column 1: About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-sm font-bold text-white">F</span>
                <span className="text-white font-semibold text-lg">Finit</span>
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">About Finit</h4>
              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                We are developers, designers, and strategists working together to create scalable, robust digital solutions tailored to your unique needs.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                From custom software to digital marketing — we deliver results that drive business growth.
              </p>
            </div>

            {/* Column 2: Latest Posts */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Latest Posts</h4>
              <ul className="mt-4 space-y-0">
                {latestPosts.map((post, index) => (
                  <li key={post.title}>
                    {index > 0 && <hr className="my-3 border-gray-700" />}
                    <Link to="/blogs" className="block text-sm text-gray-300 transition hover:text-white">
                      {post.title}
                    </Link>
                    <span className="mt-1 block text-xs text-gray-500">{post.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                {widgetLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="flex items-center gap-1 text-sm text-gray-300 transition hover:text-white">
                      <span className="text-red-500">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Follow Us</h4>
              <p className="mt-4 text-sm text-gray-400">Connect with us on social media and stay up to date.</p>
              <div className="flex gap-4 mt-5">
                <SocialIcon name="Instagram" href="#">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </SocialIcon>
                <SocialIcon name="Twitter" href="#">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </SocialIcon>
                <SocialIcon name="Facebook" href="#">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </SocialIcon>
                <SocialIcon name="LinkedIn" href="#">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </SocialIcon>
                <SocialIcon name="Vimeo" href="#">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 0 0 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" />
                  </svg>
                </SocialIcon>
              </div>
              <div className="mt-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Contact</p>
                <p className="text-sm text-gray-300">hello@finit.com</p>
                <p className="text-sm text-gray-300 mt-1">+92 300 0000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 bg-black px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-amber-500 sm:text-base">
          © {new Date().getFullYear()} Finit, All Rights Reserved
        </p>
        <div className="flex items-center gap-5">
          <Link to="/about" className="text-xs text-gray-500 hover:text-white transition">About</Link>
          <Link to="/contact" className="text-xs text-gray-500 hover:text-white transition">Contact</Link>
          <Link to="/blogs" className="text-xs text-gray-500 hover:text-white transition">Blog</Link>
          <button
            type="button"
            onClick={scrollToTop}
            className="ml-2 flex h-10 w-10 items-center justify-center rounded bg-gray-800 text-white transition hover:bg-red-600"
            aria-label="Scroll to top"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
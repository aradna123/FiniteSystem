import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (id) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(id);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };
  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const close = () => { setOpenDropdown(null); setMobileOpen(false); };

  const navItems = [
    {
      type: "dropdown", label: "Who We Are",
      items: [
        { label: "About", to: "/about" },
        { label: "Our Process", to: "/ourprocess" },
      ],
    },
    { type: "link", label: "Workforce", to: "/workforce" },
    {
      type: "grouped", label: "Technologies",
      groups: [
        {
          heading: "CMS",
          items: [
            { label: "Acquia", to: "/technology/acquia" },
            { label: "Pantheon", to: "/technology/pantheon" },
            { label: "Drupal", to: "/technology/drupal" },
            { label: "WordPress", to: "/technology/wordpress" },
          ],
        },
        {
          heading: "Ecommerce",
          items: [
            { label: "Adobe Commerce", to: "/technology/adobe-commerce" },
            { label: "Shopify", to: "/technology/shopify" },
          ],
        },
      ],
    },
    {
      type: "dropdown", label: "SaaS Products",
      items: [
        { label: "ezappoint", to: "/ezappoint" },
        { label: "Viva Link", to: "/vivalink" },
      ],
    },
    {
      type: "dropdown", label: "Services",
      items: [
        { label: "Finit Digital", to: "/finitdigital", external: "https://www.finitdigital.com/" },
      ],
    },
    {
      type: "dropdown", label: "IT Services",
      items: [
        { label: "Website Development", to: "/website-development" },
        { label: "Mobile App Development", to: "/mobile-app-development" },
        { label: "Ecommerce Website", to: "/ecommerce-website" },
        { label: "Hosting and Maintenance", to: "/hosting-maintenance" },
        { label: "Custom Software", to: "/custom-software" },
        { label: "Software Solutions", to: "/software-solutions" },
        { label: "Cloud Solutions", to: "/cloud-solutions" },
        { label: "Team Augmentation", to: "/team-augmentation" },
        { label: "Devops & Infrastructure", to: "/devops-infrastructure" },
        { label: "Data & Solutions", to: "/data-solutions" },
        { label: "Artificial Intelligence", to: "/artificial-intelligence" },
      ],
    },
    {
      type: "dropdown", label: "Digital Solutions",
      items: [
        { label: "SEO", to: "/seo" },
        { label: "Social Media Marketing", to: "/social-media-marketing" },
        { label: "Pay Per Click", to: "/pay-per-click" },
        { label: "Meta Ads", to: "/meta-ads" },
      ],
    },
    {
      type: "dropdown", label: "Industries",
      items: [
        { label: "Local Government", to: "/industries/local-government" },
        { label: "Healthcare", to: "/industries/healthcare" },
        { label: "Commercial Enterprises", to: "/industries/commercial-enterprises" },
        { label: "Law Practice", to: "/industries/law-practice" },
        { label: "Retail", to: "/industries/retail" },
        { label: "Construction", to: "/industries/construction" },
        { label: "Small Businesses", to: "/industries/small-businesses" },
        { label: "Education", to: "/industries/education" },
      ],
    },
    { type: "link", label: "Blogs & News", to: "/blogs" },
  ];

  const Chevron = ({ open }) => (
    <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const ExtIcon = () => (
    <svg className="h-3 w-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" onClick={close}
          className="flex shrink-0 items-center gap-2 text-white font-semibold transition-all duration-300 hover:opacity-90">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-lg font-bold text-white">F</span>
          <span className="hidden sm:inline text-lg tracking-wide">Finit</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {navItems.map((item, idx) => {

            if (item.type === "link") {
              return (
                <Link key={idx} to={item.to} onClick={close}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white">
                  {item.label}
                </Link>
              );
            }

            if (item.type === "grouped") {
              return (
                <div key={idx} className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}>
                  <button type="button"
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${openDropdown === idx ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}>
                    {item.label}
                    <Chevron open={openDropdown === idx} />
                  </button>
                  {/* Grouped Dropdown — white bg with column headings like screenshot */}
                  <div className={`absolute left-0 top-full pt-2 transition-all duration-200 ${openDropdown === idx ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
                    <div className="rounded-xl border border-gray-200 bg-white shadow-2xl p-5 min-w-[360px]">
                      <div className="grid grid-cols-2 gap-6">
                        {item.groups.map((group) => (
                          <div key={group.heading}>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-3 pb-2 border-b border-gray-200">
                              {group.heading}
                            </p>
                            <ul className="space-y-1">
                              {group.items.map((sub) => (
                                <li key={sub.label}>
                                  <Link to={sub.to} onClick={close}
                                    className="block rounded px-2 py-1.5 text-sm text-gray-700 transition-all duration-150 hover:bg-gray-100 hover:text-gray-900 hover:pl-3">
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Regular dropdown
            return (
              <div key={idx} className="relative"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}>
                <button type="button"
                  className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${openDropdown === idx ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}>
                  {item.label}
                  <Chevron open={openDropdown === idx} />
                </button>
                <div className={`absolute left-0 top-full pt-2 transition-all duration-200 ${openDropdown === idx ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
                  <div className={`min-w-[200px] rounded-xl border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-md ${item.items.length > 6 ? "grid grid-cols-2 gap-1 min-w-[340px]" : ""}`}>
                    {item.items.map((sub) =>
                      sub.external ? (
                        <a key={sub.label} href={sub.external} target="_blank" rel="noopener noreferrer"
                          onClick={close}
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-white/80 transition-all duration-150 hover:bg-red-600/20 hover:text-white hover:pl-4">
                          {sub.label} <ExtIcon />
                        </a>
                      ) : (
                        <Link key={sub.label} to={sub.to} onClick={close}
                          className="block rounded-lg px-3 py-2.5 text-sm text-white/80 transition-all duration-150 hover:bg-red-600/20 hover:text-white hover:pl-4">
                          {sub.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex shrink-0 items-center gap-3">
          <Link to="/contact" onClick={close}
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-red-700">
            Let's Talk
          </Link>
          <button type="button" onClick={() => setMobileOpen((o) => !o)}
            className="rounded-lg p-2 text-white/90 transition-colors hover:bg-white/10 lg:hidden" aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      <div className={`overflow-y-auto border-t border-white/10 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out lg:hidden ${mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col gap-1 px-4 py-4">
          {navItems.map((item, idx) => {

            if (item.type === "link") {
              return (
                <Link key={idx} to={item.to} onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white">
                  {item.label}
                </Link>
              );
            }

            const allItems = item.type === "grouped"
              ? item.groups.flatMap((g) => g.items)
              : item.items;

            return (
              <div key={idx}>
                <button type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => setMobileAccordion((c) => (c === idx ? null : idx))}>
                  {item.label}
                  <Chevron open={mobileAccordion === idx} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-200 ${mobileAccordion === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col border-l-2 border-red-600/50 pl-3 pb-2 ml-3 mt-1">
                      {item.type === "grouped"
                        ? item.groups.map((group) => (
                          <div key={group.heading}>
                            <p className="text-xs font-bold uppercase tracking-wider text-red-500 px-2 pt-2 pb-1">
                              {group.heading}
                            </p>
                            {group.items.map((sub) => (
                              <Link key={sub.label} to={sub.to}
                                className="block py-2 pl-2 text-sm text-white/70 transition-colors hover:text-white"
                                onClick={() => setMobileOpen(false)}>
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        ))
                        : allItems.map((sub) =>
                          sub.external ? (
                            <a key={sub.label} href={sub.external} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-2 py-2 pl-2 text-sm text-white/70 transition-colors hover:text-white"
                              onClick={() => setMobileOpen(false)}>
                              {sub.label} <ExtIcon />
                            </a>
                          ) : (
                            <Link key={sub.label} to={sub.to}
                              className="block py-2 pl-2 text-sm text-white/70 transition-colors hover:text-white"
                              onClick={() => setMobileOpen(false)}>
                              {sub.label}
                            </Link>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
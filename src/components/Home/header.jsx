import { useState } from "react";
import clsx from "clsx";
import { ListCheck, Menu, X } from "lucide-react";

const tabsData = [
  {
    to: "home",
    label: "Home",
  },
  {
    to: "about",
    label: "About",
  },
  {
    to: "outline",
    label: "Outline",
  },
];

const RenderTabs = ({ to, label, styles, isActive = false, onClick }) => {
  return (
    <a
      class={clsx(
        "text-zinc-600 text-sm font-medium leading-normal hover:text-primary transition-colors",
        isActive && "text-primary",
        styles
      )}
      href={`#${to}`}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header class="fixed w-full top-0 z-50 bg-background-light/80 backdrop-blur-sm border-b border-zinc-200">
        <div class="container mx-auto px-4">
          <div class="flex items-center justify-between h-20">
            <div class="flex items-center gap-4 text-zinc">
              <img src="/logo.png" alt="logo" width={60} />
              <h2 class="text-zinc text-xl font-bold leading-tight tracking-tight">
                The Prolific Church
              </h2>
            </div>

            {/* Desktop Navigation */}
            <nav class="hidden md:flex flex-1 justify-center items-center gap-9">
              {tabsData.map(({ to, label }, index) => (
                <RenderTabs key={index} to={to} label={label} />
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-zinc-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} class="text-zinc-600" />
              ) : (
                <Menu size={24} class="text-zinc-600" />
              )}
            </button>

            {/* Desktop Register Button */}
            <div class="hidden md:flex items-center">
              <button
                class={clsx(
                  "flex gap-2 text-white min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary font-bold leading-normal tracking-wide text-sm transform hover:scale-105 transition-transform"
                )}
              >
                <span>
                  <ListCheck size={25} />
                </span>
                <span class="truncate">Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide Panel */}
      <div
        class={clsx(
          "fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in",
          isMobileMenuOpen ? "block" : "hidden"
        )}
      >
        {/* Backdrop */}
        <div
          class="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={closeMobileMenu}
        />

        {/* Slide Panel */}
        <div
          class={clsx(
            "fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div class="flex flex-col h-full">
            {/* Panel Header */}
            <div class="flex items-center justify-between p-4 border-b border-zinc-200">
              <h3 class="text-lg font-semibold text-zinc-800">Menu</h3>
              <button
                class="p-1 rounded-md hover:bg-zinc-100 transition-colors"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X size={20} class="text-zinc-600" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav class="flex-1 p-4">
              <ul class="space-y-4">
                {tabsData.map(({ to, label }, index) => (
                  <li key={index}>
                    <RenderTabs
                      to={to}
                      label={label}
                      styles="block py-2 text-base"
                      onClick={closeMobileMenu}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Register Button */}
            <div class="p-4 border-t border-zinc-200">
              <button
                class={clsx(
                  "w-full flex gap-2 text-white cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary font-bold leading-normal tracking-wide text-sm transform hover:scale-105 transition-transform"
                )}
                onClick={closeMobileMenu}
              >
                <span>
                  <ListCheck size={20} />
                </span>
                <span class="truncate">Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

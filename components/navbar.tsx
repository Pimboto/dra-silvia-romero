"use client";

import { useEffect, useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import StaggeredMenu from "@/components/react-bits/StaggeredMenu";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t.nav.doctor, ariaLabel: t.nav.doctor, link: "/#doctor" },
    { label: t.nav.services, ariaLabel: t.nav.services, link: "/#services" },
    { label: t.nav.gallery, ariaLabel: t.nav.gallery, link: "/#results" },
    {
      label: t.nav.testimonials,
      ariaLabel: t.nav.testimonials,
      link: "/#testimonials",
    },
    { label: t.nav.patients, ariaLabel: t.nav.patients, link: "/#journey" },
    { label: t.nav.faq, ariaLabel: t.nav.faq, link: "/#faq" },
    { label: t.nav.contact, ariaLabel: t.nav.contact, link: "/#contact" },
  ];

  const socialItems = [
    { label: "Instagram", link: "https://www.instagram.com/dra.silviaromero" },
    { label: "WhatsApp", link: "https://wa.me/573118324191" },
  ];

  return (
    <HeroUINavbar
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-zinc-900/95 backdrop-blur-xl border-white/5 py-2 shadow-lg"
          : "bg-zinc-900/90 backdrop-blur-md border-white/10 py-4",
      )}
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit flex items-center">
          <NextLink className="flex items-center gap-2" href="/">
            {/* Águila */}
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                fill
                priority
                alt="Águila Logo"
                className="object-contain"
                src="/img/logoaguila.png"
              />
            </div>
            {/* Letras */}
            <div className="relative h-6 w-28 flex-shrink-0">
              <Image
                fill
                priority
                alt="Dra. Silvia Romero"
                className="object-contain brightness-0 invert"
                src="/img/image.png"
              />
            </div>
          </NextLink>
        </NavbarBrand>
        {/* Mobile language toggle - next to logo to avoid overlap with menu button */}
        <NavbarItem className="md:hidden ml-2">
          <button
            className="text-white flex items-center gap-1.5 text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
          >
            <span
              className={`fi ${language === "en" ? "fi-us" : "fi-es"} text-sm rounded-sm`}
            />
            {language === "en" ? "EN" : "ES"}
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex basis-full" justify="center">
        <ul className="flex gap-6 justify-center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "transition-colors font-sans text-xs uppercase tracking-wider font-semibold text-white hover:text-gold",
                )}
                color="foreground"
                href={item.href}
              >
                {t.nav[item.label as keyof typeof t.nav]}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className={clsx(
              "text-sm font-semibold transition-all shadow-lg radius-none px-6 uppercase tracking-wider h-10",
              isScrolled
                ? "bg-gold text-luxury-black hover:bg-gold-light shadow-gold/20"
                : "bg-white text-luxury-black hover:bg-white/90 shadow-white/10",
            )}
            href="/#contact"
            radius="full"
            variant="solid"
          >
            {t.nav.book}
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex ml-2">
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="text-white min-w-unit-0 px-3 gap-2"
                variant="light"
              >
                <span
                  className={`fi ${language === "en" ? "fi-us" : "fi-es"} text-base rounded-sm`}
                />
                {language === "en" ? "EN" : "ES"}
                <svg
                  className="text-white"
                  fill="none"
                  height="12"
                  viewBox="0 0 24 24"
                  width="12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  />
                </svg>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              className="bg-luxury-black text-white border border-white/10 rounded-xl"
              itemClasses={{
                base: "data-[hover=true]:bg-white/10 data-[hover=true]:text-gold text-white",
              }}
              onAction={(key) => setLanguage(key as "en" | "es")}
            >
              <DropdownItem
                key="en"
                startContent={
                  <span className="fi fi-us text-base rounded-sm" />
                }
              >
                English
              </DropdownItem>
              <DropdownItem
                key="es"
                startContent={
                  <span className="fi fi-es text-base rounded-sm" />
                }
              >
                Español
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden" justify="end">
        <div className="w-12 h-12 relative">
          <StaggeredMenu
            accentColor="#D4AF37"
            changeMenuColorOnOpen={true}
            className="z-[9999]"
            colors={["#fff", "#f0f0f0"]} // White background for menu
            displayItemNumbering={true}
            displaySocials={true}
            isFixed={true}
            items={menuItems}
            logoUrl="/logo.png"
            menuButtonColor="#D4AF37" // Gold
            openMenuButtonColor="#000" // Black when open
            position="right"
            socialItems={socialItems}
          />
        </div>
      </NavbarContent>
    </HeroUINavbar>
  );
};

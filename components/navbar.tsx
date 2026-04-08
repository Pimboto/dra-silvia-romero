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
  DropdownItem
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
    { label: t.nav.testimonials, ariaLabel: t.nav.testimonials, link: "/#testimonials" },
    { label: t.nav.patients, ariaLabel: t.nav.patients, link: "/#journey" },
    { label: t.nav.faq, ariaLabel: t.nav.faq, link: "/#faq" },
    { label: t.nav.contact, ariaLabel: t.nav.contact, link: "/#contact" },
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://www.instagram.com/dra.silviaromero' },
    { label: 'WhatsApp', link: 'https://wa.me/573118324191' },
  ];

  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-zinc-900/95 backdrop-blur-xl border-white/5 py-2 shadow-lg"
          : "bg-zinc-900/90 backdrop-blur-md border-white/10 py-4"
      )}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-2 max-w-fit flex items-center">
          <NextLink className="flex items-center gap-2" href="/">
            {/* Águila */}
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src="/img/logoaguila.png"
                alt="Águila Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Letras */}
            <div className="relative h-6 w-28 flex-shrink-0">
              <Image
                src="/img/image.png"
                alt="Dra. Silvia Romero"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex basis-full" justify="center">
        <ul className="flex gap-6 justify-center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "transition-colors font-sans text-xs uppercase tracking-wider font-semibold text-white hover:text-gold"
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
                : "bg-white text-luxury-black hover:bg-white/90 shadow-white/10"
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
                variant="light"
                className="text-white min-w-unit-0 px-3 gap-2"
              >
                <span className={`fi ${language === "en" ? "fi-us" : "fi-es"} text-base rounded-sm`}></span>
                {language === "en" ? "EN" : "ES"}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Language selection"
              onAction={(key) => setLanguage(key as "en" | "es")}
              className="bg-luxury-black text-white border border-white/10 rounded-xl"
              itemClasses={{
                base: "data-[hover=true]:bg-white/10 data-[hover=true]:text-gold text-white",
              }}
            >
              <DropdownItem key="en" startContent={<span className="fi fi-us text-base rounded-sm"></span>}>English</DropdownItem>
              <DropdownItem key="es" startContent={<span className="fi fi-es text-base rounded-sm"></span>}>Español</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden flex items-center gap-2" justify="end">
        {/* Mobile language toggle */}
        <button
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="md:hidden text-white flex items-center gap-1.5 text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className={`fi ${language === "en" ? "fi-us" : "fi-es"} text-sm rounded-sm`}></span>
          {language === "en" ? "EN" : "ES"}
        </button>
        <div className="w-12 h-12 relative">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#D4AF37" // Gold
            openMenuButtonColor="#000" // Black when open
            changeMenuColorOnOpen={true}
            colors={['#fff', '#f0f0f0']} // White background for menu
            logoUrl="/logo.png"
            accentColor="#D4AF37"
            isFixed={true}
            className="z-[9999]"
          />
        </div>
      </NavbarContent>
    </HeroUINavbar>
  );
};

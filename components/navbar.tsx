"use client";

import { useEffect, useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import StaggeredMenu from "@/components/react-bits/StaggeredMenu";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = siteConfig.navMenuItems.map(item => ({
    label: item.label,
    ariaLabel: item.label,
    link: item.href
  }));

  const socialItems = [
    { label: 'Instagram', link: '#' },
    { label: 'WhatsApp', link: 'https://wa.me/' },
  ];

  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/20 backdrop-blur-xl border-white/5 py-2 shadow-sm"
          : "bg-transparent border-white/5 py-4"
      )}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="relative h-10 w-40 md:w-48 lg:w-56" href="/">
            <Image
              src="/logo.png"
              alt="Logo Dra. Silvia Romero"
              fill
              className="object-contain transition-all duration-300 brightness-0 invert drop-shadow-md"
              priority
            />
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
                {item.label}
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
            href="/contact"
            radius="none"
            variant="solid"
          >
            Agendar Cita
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden absolute top-0 right-0 h-16 w-16" justify="end">
        <div className="w-full h-full relative">
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

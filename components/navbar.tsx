"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="backdrop-blur-md bg-background/70 border-b border-white/10"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit font-serif text-gold tracking-widest text-lg md:text-xl">
              DRA. SILVIA ROMERO
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex basis-full" justify="center">
        <ul className="flex gap-8 justify-center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-gold data-[active=true]:font-medium hover:text-gold transition-colors font-sans text-sm uppercase tracking-wide",
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
            className="text-sm font-semibold text-luxury-black bg-gold hover:bg-gold-light transition-all shadow-lg shadow-gold/20 radius-none px-8"
            href="/contact"
            radius="none"
            variant="solid"
          >
            AGENDAR CITA
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-luxury-black/95 backdrop-blur-xl pt-10">
        <div className="mx-4 mt-2 flex flex-col gap-6 items-center">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                as={NextLink}
                color="foreground"
                href={item.href}
                size="lg"
                className="font-serif text-2xl text-white hover:text-gold transition-colors block text-center"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="mt-8">
            <Button
              as={Link}
              className="text-lg font-bold text-luxury-black bg-gold w-full px-12 py-6"
              href="/contact"
              radius="none"
            >
              AGENDAR CITA
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

"use client"
import Link from "next/link";

import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../../../public/picture/logo2.png"
import { usePathname } from "next/navigation";



const links = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/Men" },
    { name: "Women", href: "/Women" },
    { name: "Accessories", href: "/Accessories" },
    
  
  ];
  
  export default function Navbar() {
    const pathname = usePathname();
    const { handleCartClick } = useShoppingCart();
    
  
    return (
      <header className="mb-8 border-b sticky top-0 z-50 bg-white bg-opacity-90">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl ">
          <Link href={'/'}>
            <Image
            src={Logo}
            alt="logo"
            width={500}
            height={500}
            className="w-[10rem]"/>
            
          </Link>
  
          <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link
                    className="text-lg font-semibold text-primary"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
  
          <div className="flex divide-x border-r sm:border-l">
            <Button
              variant={"outline"}
              onClick={() => handleCartClick()}
              className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
            >
              <ShoppingBag />
              <span className="hidden text-xs font-semibold text-gray-500  sm:block">
                Cart
              </span>
            </Button>
          </div>
        </div>
      </header>
    );
  }
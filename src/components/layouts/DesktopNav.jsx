import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./ListItem";
import dynamic from "next/dynamic";
import ImageCard from "../cards/ImageCard";

const RevealAnimation = dynamic(() => import("@/components/RevealAnimation"));

const DesktopNav = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/navbar"
        );

        const result = await response.json();

        setData(result?.menu_items);
      } catch (error) {}
    };

    fetchData();
  }, []);

  return (
    
    <div className="hidden lg:flex items-center w-full md:justify-between w-100">
      <RevealAnimation
        hidden={{ opacity: 0, y: -100 }}
        visible={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/" className="flex space-x-2">
          <ImageCard
            src="/Images/LOGO-BLACK.png"
            width={240}
            height={80}
            alt="Secure Logo"
          />
        </Link>
      </RevealAnimation>

      <NavigationMenu>
        <NavigationMenuList>
          {data?.map((item, index) => (
            <RevealAnimation
              hidden={{ opacity: 0, scale: 0.4 }}
              visible={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 * 0.3 }}
            >
              <Link href={`/${item?.slug}`} key={index}>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="font-Axiforma"
                    chever={item?.children?.length > 0}
                  >
                    {item?.title}
                  </NavigationMenuTrigger>

                  {item?.children?.length > 0 && (
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                        {item?.children?.map((child, childindex) => (
                          <React.Fragment key={childindex}>
                            <ListItem href={`/contact-us`} title={child?.title}>
                              Explore {child?.title}
                            </ListItem>
                          </React.Fragment>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              </Link>
            </RevealAnimation>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;

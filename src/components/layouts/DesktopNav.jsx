import Link from "next/link";
import Image from "next/image";
import Secure from "../../../public/svg/secure.svg";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./ListItem";

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
    <div className="hidden lg:flex items-center w-full md:justify-between w-100 ">
      <Link href="/" className="flex space-x-2">
        <Image
          src="/Images/secure_black.png"
          width={240}
          height={80}
          alt="Secure Logo"
        />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {data?.map((item, index) => (
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
                        <React.Fragment key={child?.title}>
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
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;

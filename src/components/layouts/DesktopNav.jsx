import Link from "next/link";
import Image from "next/image";
import Secure from "../../../public/svg/secure.svg";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import  ListItem  from "./ListItem";

const DesktopNav = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sellmac.cybersify.tech/secure365/wp-json/secure-plugin/v1/navbar"
        );

        const result = await response.json();
        console.log(result, 'check result')
        setData(result?.menu_items);
      } catch (error) {
      }
    };

    fetchData();
  }, []);


  return (
    <div className="hidden lg:flex items-center w-full justify-between ">
     
      <Link href="/" className="flex space-x-2">
        <Image src={Secure} width={150} height={30} alt="Secure Logo" />
      </Link>
     
      <NavigationMenu>
        <NavigationMenuList>
          {data?.map((item, index) => (
           
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger>{item?.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                   
                  
                    {item?.children?.length > 0 && 
                      item?.children?.map((child, childindex) => (
                        <>
                       
                        <ListItem key={childindex} href={`/${child?.title}`} title={child?.title}>
                        Explore {child?.title}
                      </ListItem>
                        </>
                      ))
                   
                    }
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;

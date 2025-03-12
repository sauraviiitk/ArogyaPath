import * as React from "react";
import { cn } from "../lib/utils"; // Adjust path as needed
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"; // Adjust path as needed

const components = [
  { title: "Mantras", href: "/Mantras", description: "A modal dialog that interrupts the user with important content." },
  { title: "Bhajans", href: "/Bhajans", description: "A popup that displays information when hovering over an element." },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="p-3 ml-3">
      <NavigationMenuList>
        <NavigationMenuItem>
           <h1>LOGO</h1>
        </NavigationMenuItem>
        <NavigationMenuItem >
          <NavigationMenuTrigger>Spiritual Therapy</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-5 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <NavigationMenuTrigger>Yoga</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-5 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" className={navigationMenuTriggerStyle()}>
            Article
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const Link = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const ListItem = React.forwardRef(({ title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a ref={ref} className={cn("border block p-3 hover:bg-accent rounded-md", props.className)} {...props}>
        <div className="text-sm font-medium">{title}</div>
        <p className=" text-sm text-muted-foreground ">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

import * as React from "react";
import { cn } from "../lib/utils"; // Adjust path as needed
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"; // Adjust path as needed
import HoverButton from "./ui/HoverButton";

const components = [
  { title: "Mantras", href: "/Mantras", description: "Sacred chants that promote mental clarity, inner peace, and spiritual healing." },
  { title: "Bhajans", href: "/Bhajans", description: "Devotional songs that uplift the soul and create a calming spiritual atmosphere." }
];

const component1 = [
  { title: "Yoga", href: "/yogas", description: "A holistic practice that enhances physical strength, flexibility, and mental well-being." },
  { title: "Pranayam", href: "/pranayam", description: "Breathing techniques that improve focus, reduce stress, and promote overall wellness." }
];

export function NavigationMenuDemo() {
  return (
    <div className="w-full bg-white shadow-md"> {/* Removed overflow-hidden */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 relative"> {/* Added relative */}
        
        {/* Logo on the left */}
        <h1 className="text-xl font-bold">LOGO</h1>

        {/* Navigation Menu on the right */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            
            {/* Spiritual Therapy Dropdown */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Spiritual Therapy</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 w-[300px] md:w-[400px] bg-white shadow-lg rounded-md border border-gray-300 min-h-[200px] z-50">
                <ul className="p-4">
                  {components.map((component) => (
                    <ListItem key={component.title} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Yoga Dropdown */}
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Yoga</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute top-full left-0 w-[300px] md:w-[400px] bg-white shadow-lg rounded-md border border-gray-300 min-h-[200px] z-50">
                <ul className="p-4">
                  {component1.map((component1) => (
                    <ListItem key={component1.title} title={component1.title} href={component1.href}>
                      {component1.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Article Link */}
            <NavigationMenuItem>
              <Link href="/diet" className={navigationMenuTriggerStyle()}>
                Diet Plan
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" className={navigationMenuTriggerStyle()}>
                Article
              </Link>
            </NavigationMenuItem>
            <HoverButton/>

          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </div>
  );
}

// Custom Link Component
const Link = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

// Custom List Item Component
const ListItem = React.forwardRef(({ title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a 
        ref={ref} 
        className={cn(
          "border border-gray-300 rounded-md p-3 block hover:bg-gray-100 text-black", 
          props.className
        )} 
        {...props}
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="text-sm text-gray-600">{children}</p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = "ListItem";

import { Link, LinkComponent } from "@tanstack/react-router";
import { FileCog2Icon, HomeIcon, InfoIcon, LucideIcon, Users2Icon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/~vertical-navigation-menu";

const MenuLink: LinkComponent = (props) => {
  return (
    <NavigationMenuLink
      asChild
      className="group/link  flex items-center text-sm leading-6 mb-4 font-medium text-slate-700 hover:text-slate-900"
    >
      <Link {...props} />
    </NavigationMenuLink>
  );
};

const SubMenuLink: LinkComponent = (props) => {
  return (
    <li>
      <NavigationMenuLink
        asChild
        className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400  text-slate-700 hover:text-slate-900 
      data-[status=active]:text-primary 
      data-[status=active]:font-semibold 
      data-[status=active]:border-current"
      >
        <Link to="asdad" {...props} />
      </NavigationMenuLink>
    </li>
  );
};

const MenuGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <li className="mt-8">
    <h5 className="mb-3 font-semibold text-primary">{title}</h5>
    <ul className="space-y-2 border-l border-slate-100">{children}</ul>
  </li>
);

const MenuIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
  <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover/link:shadow group-hover/link:ring-slate-900/10 group-hover/link:shadow-sky-200">
    <Icon className="p-1 stroke-primary" />
  </div>
);

export const Menu = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <MenuLink to="/">
          <MenuIcon icon={HomeIcon} />
          Home
        </MenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <MenuLink>
          <MenuIcon icon={Users2Icon} />
          Visitors
        </MenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <MenuLink>
          <MenuIcon icon={FileCog2Icon} />
          Logging
        </MenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <MenuLink>
          <MenuIcon icon={InfoIcon} />
          About
        </MenuLink>
      </NavigationMenuItem>

      <MenuGroup title="Profiles">
        <SubMenuLink>Outbound</SubMenuLink>
        <SubMenuLink>Inbound</SubMenuLink>
        <SubMenuLink>Internal</SubMenuLink>
        <SubMenuLink>DHL</SubMenuLink>
        <SubMenuLink>Certified Persons</SubMenuLink>
      </MenuGroup>
      <MenuGroup title="Self-service kiosks">
        <SubMenuLink>Left</SubMenuLink>
        <SubMenuLink>Right</SubMenuLink>
        <SubMenuLink>Center</SubMenuLink>
      </MenuGroup>

      <MenuGroup title="Fields">
        <SubMenuLink>View</SubMenuLink>
      </MenuGroup>
      <MenuGroup title="Sites">
        <SubMenuLink>Ghent</SubMenuLink>
        <SubMenuLink>Deinze</SubMenuLink>
      </MenuGroup>
    </NavigationMenuList>
  </NavigationMenu>
);

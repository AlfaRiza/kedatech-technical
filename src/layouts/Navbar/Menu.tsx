import Button from "../../components/Button";

declare interface MenuInterface {
  onClick: () => void;
}

const Menu = ({ onClick }: MenuInterface) => {
  const menu = [
    {
      title: "Home",
      href: "#"
    },
    {
      title: "About",
      href: "#about"
    },
    {
      title: "Pricing",
      href: "#pricing"
    },
    {
      title: "Contact",
      href: "#contact"
    },
  ]
  return (
    <div className="flex flex-col md:flex-row justify-between gap-20 items-center p-2 h-full md:h-full">
      {
        menu.map(menu => {
          return (
            <a href={menu.href} className="text-xl hover:text-tersier ease-in duration-300">
              { menu.title }
            </a>
          )
        })
      }
      <Button onClick={() => {onClick()}} type="secondary">Login</Button>
    </div>
  );
};

export default Menu;

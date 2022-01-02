import React from "react";

export default function RightSidebar({ username = "" }) {
  const menuList = [
    {
      icon: "🏠",
      name: "#Beranda",
      requireLogin: false,
      route: "/langit-ide",
    },
    {
      icon: "🙍",
      name: "#Profil",
      route: `/${username}`,
      linkto: true,
      requireLogin: true,
    },
    {
      icon: "💡",
      requireLogin: false,
      name: "#Buat Ide",
      route: `/mesin-ide`,
    },
    {
      icon: "📕",
      requireLogin: false,
      name: "#Terminologi",
      route: "/",
    },
    {
      icon: "📐",
      requireLogin: false,
      name: "#Kebijakan",
      route: "/",
    },
    {
      icon: "🚪",
      name: "#Keluar",
      requireLogin: true,
      route: "/bergabung",
    },
  ];

  const Menus = () => (
    <>
      {menuList
        .filter((menu) => (!username ? !menu.requireLogin : true))
        .map((menu) => (
          <React.Fragment key={menu.name}>
            <li
              className={
                menu.icon !== "🚪"
                  ? "li-r-sidebar hover:text-fuchsia-500"
                  : "li-r-sidebar text-fuchsia-500"
              }
            >
              <a href={menu.route}>
                <div className="flex space-x-2">
                  <div className="flex-none w-8 bg-gray-100 rounded-full content-center text-center">
                    {menu.icon}
                  </div>
                  <div
                    className={
                      menu.icon !== "🚪"
                        ? "flex-1 w-64"
                        : "flex-1 w-64 text-fuchsia-500"
                    }
                  >
                    {menu.name}
                  </div>
                </div>
              </a>
            </li>
          </React.Fragment>
        ))}
    </>
  );

  return (
    <div className="relative md:block hidden">
      <ul className="sticky top-24 text-lg font-semibold prose prose-a:no-underline">
        <Menus />
      </ul>
    </div>
  );
}

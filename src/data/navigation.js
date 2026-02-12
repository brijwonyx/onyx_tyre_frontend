import  michelin  from "../assets/tyre-brand.png";


export const NAV_LINKS = [
  {
    id: "tyres",
    label: "Tyres",
    menu: "TYRES_MENU",
  },
  {
    id: "brands",
    label: "Tyre Brands",
    menu: "BRANDS_MENU",
  },
  {
    id: "wheels",
    label: "Wheels",
    path: "/wheels",
  },
  {
    id: "deals",
    label: "Deals",
    path: "/deals",
  },
  {
    id: "delivery",
    label: "Delivery & Installation",
    path: "/delivery-installation",
  },
];

export const TYRES_MENU = {
  columns: [
    {
      title: "Tires for All Vehicles",
      links: [
        { label: "Car Tires", path: "/tyres/car" },
        { label: "SUV Tires", path: "/tyres/suv" },
        { label: "Van Tires", path: "/tyres/van" },
        { label: "Truck Tires", path: "/tyres/truck" },
        { label: "4x4 Tires", path: "/tyres/truck" },
        { label: "Industrial Tires", path: "/tyres/truck" },
      ],
    },
    {
      title: "By season",
      links: [
        { label: "Summer Tires", path: "/tyres/summer" },
        { label: "Winter Tires", path: "/tyres/winter" },
        { label: "All-Season Tires", path: "/tyres/all-season" },
        { label: "Snow & Ice Tires", path: "/tyres/all-season" },
        { label: "Off-Road / Mud Tires", path: "/tyres/all-season" },
      ],
    },
    {
      title: "By type",
      links: [
        { label: "Tubeless", path: "/tyres/tubeless" },
        { label: "Run-Flat ", path: "/tyres/run-flat" },
        { label: "Performance Tires", path: "/tyres/run-flat" },
        { label: "Eco / Fuel-Efficient Tires", path: "/tyres/run-flat" },
        { label: "Touring Tires", path: "/tyres/run-flat" },
        { label: "Off-Road Tires", path: "/tyres/run-flat" },
        { label: "Highway Terrain (HT) Tires", path: "/tyres/run-flat" },
      ],
    },
  ],
  footer: {
    label: "View all Products",
    path: "/tyres",
  },
};

export const BRANDS_MENU = {
  columns: [
    {
      title: "Popular tyre brands",

      // 👇 makes brands multi-column WITHOUT breaking tyres menu
      layout: "grid",

      links: [
        { label: "Avon", path: "/brands/avon" },
        { label: "Bridgestone", path: "/brands/bridgestone" },
        { label: "BF Goodrich", path: "/brands/bf-goodrich" },
        { label: "Falken", path: "/brands/falken" },
        { label: "Kumho", path: "/brands/kumho" },
        { label: "Goodyear", path: "/brands/goodyear" },
        { label: "Pirelli", path: "/brands/pirelli" },
        { label: "Dunlop", path: "/brands/dunlop" },
        { label: "Hankook", path: "/brands/hankook" },
        { label: "Michelin", path: "/brands/michelin" },
        { label: "Toyo", path: "/brands/toyo" },
        { label: "Tomket", path: "/brands/toyo" },
        { label: "Churchill", path: "/brands/toyo" },
        { label: "Firestone", path: "/brands/toyo" },
        { label: "Continental", path: "/brands/toyo" },
        { label: "Nankang", path: "/brands/toyo" },
        { label: "Off-Road Tires", path: "/brands/toyo" },
      ],
    },
    {
      title: "ONYX Choices",
      logos: [
        { img: michelin, path: "/brands/cooper" },
        { img: michelin, path: "/brands/toyo" },
        { img: michelin, path: "/brands/michelin" },
      ],
    },
  ],
  footer: {
    label: "View all Brands",
    path: "/brands",
  },
};

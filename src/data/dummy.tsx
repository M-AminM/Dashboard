import {
  AiOutlineCalendar,
  AiOutlineShoppingCart,
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart } from "react-icons/fi";
import { BsKanban, BsBarChart, BsBoxSeam } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";
import { GiLouvrePyramid } from "react-icons/gi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: "employees",
        icon: <IoMdContacts />,
      },
      {
        name: "customers",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        name: "kanban",
        icon: <BsKanban />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        name: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        name: "pie",
        icon: <FiPieChart />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <FiBarChart />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    amount: "39,354",
    percentage: "-9%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

export const data: any = {
  labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#c04b57",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 20,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [15, 39, 30, 41, 23, 18, 20],
    },
  ],
};

export const lineOptions: any = {
  scales: {
    x: {
      gridLines: {
        display: false,
      },
    },
    y: {
      // stacked: true,
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        // Return an empty string to draw the tick line but hide the tick label
        // Return `null` or `undefined` to hide the tick line entirely
        userCallback(value: any) {
          // Convert the number to a string and splite the string every 3 charaters from the end
          value = value.toString();
          value = value.split(/(?=(?:...)*$)/);

          // Convert the array to a string and format the output
          value = value.join(".");
          return `Rp.${value}`;
        },
      },
    },
  },
  legend: {
    display: false,
  },
  tooltips: {
    enabled: false,
  },
};

export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: "/media/product1.jpg",
  },
  {
    OrderID: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product5.jpg",
  },
  {
    OrderID: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product7.jpg",
  },
  {
    OrderID: 893486,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 748975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "/media/product1.jpg",
  },
  {
    OrderID: 94757,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product2.jpg",
  },
  {
    OrderID: 944895,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product3.jpg",
  },
  {
    OrderID: 845954,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 845954,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },

  {
    OrderID: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    OrderID: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: "/media/product6.jpg",
  },
  {
    OrderID: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product5.jpg",
  },
  {
    OrderID: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product7.jpg",
  },
  {
    OrderID: 893486,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 748975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "/media/product1.jpg",
  },
  {
    OrderID: 94757,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product2.jpg",
  },
  {
    OrderID: 944895,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product3.jpg",
  },
  {
    OrderID: 845954,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 845954,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },

  {
    OrderID: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    OrderID: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: "/media/product6.jpg",
  },
  {
    OrderID: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product5.jpg",
  },
  {
    OrderID: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product7.jpg",
  },
  {
    OrderID: 893486,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 748975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "/media/product1.jpg",
  },
  {
    OrderID: 94757,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product2.jpg",
  },
  {
    OrderID: 944895,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product3.jpg",
  },
  {
    OrderID: 845954,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: "/media/product6.jpg",
  },
  {
    OrderID: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product5.jpg",
  },
  {
    OrderID: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product7.jpg",
  },
  {
    OrderID: 893486,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 748975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "/media/product1.jpg",
  },
  {
    OrderID: 94757,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product2.jpg",
  },
  {
    OrderID: 944895,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product3.jpg",
  },
  {
    OrderID: 845954,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage: "/media/product6.jpg",
  },
  {
    OrderID: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product5.jpg",
  },
  {
    OrderID: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product7.jpg",
  },
  {
    OrderID: 893486,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product4.jpg",
  },
  {
    OrderID: 748975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "/media/product1.jpg",
  },
  {
    OrderID: 94757,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage: "/media/product2.jpg",
  },
  {
    OrderID: 944895,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage: "/media/product3.jpg",
  },
  {
    OrderID: 845954,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage: "/media/product4.jpg",
  },

  {
    OrderID: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
];

export const AreaBumpData = [
  {
    id: "JavaScript",
    data: [
      {
        x: 2000,
        y: 28,
      },
      {
        x: 2001,
        y: 13,
      },
      {
        x: 2002,
        y: 27,
      },
      {
        x: 2003,
        y: 29,
      },
      {
        x: 2004,
        y: 14,
      },
      {
        x: 2005,
        y: 11,
      },
    ],
  },
  {
    id: "ReasonML",
    data: [
      {
        x: 2000,
        y: 14,
      },
      {
        x: 2001,
        y: 27,
      },
      {
        x: 2002,
        y: 30,
      },
      {
        x: 2003,
        y: 10,
      },
      {
        x: 2004,
        y: 13,
      },
      {
        x: 2005,
        y: 27,
      },
    ],
  },
  {
    id: "TypeScript",
    data: [
      {
        x: 2000,
        y: 21,
      },
      {
        x: 2001,
        y: 25,
      },
      {
        x: 2002,
        y: 12,
      },
      {
        x: 2003,
        y: 24,
      },
      {
        x: 2004,
        y: 18,
      },
      {
        x: 2005,
        y: 20,
      },
    ],
  },
  {
    id: "Elm",
    data: [
      {
        x: 2000,
        y: 20,
      },
      {
        x: 2001,
        y: 12,
      },
      {
        x: 2002,
        y: 12,
      },
      {
        x: 2003,
        y: 11,
      },
      {
        x: 2004,
        y: 10,
      },
      {
        x: 2005,
        y: 21,
      },
    ],
  },
  {
    id: "CoffeeScript",
    data: [
      {
        x: 2000,
        y: 22,
      },
      {
        x: 2001,
        y: 21,
      },
      {
        x: 2002,
        y: 18,
      },
      {
        x: 2003,
        y: 14,
      },
      {
        x: 2004,
        y: 12,
      },
      {
        x: 2005,
        y: 16,
      },
    ],
  },
];

export const BarChartData = [
  {
    country: "AD",
    "hot dog": 56,
    "hot dogColor": "hsl(131, 70%, 50%)",
    burger: 19,
    burgerColor: "hsl(207, 70%, 50%)",
    sandwich: 37,
    sandwichColor: "hsl(351, 70%, 50%)",
    kebab: 18,
    kebabColor: "hsl(353, 70%, 50%)",
    fries: 109,
    friesColor: "hsl(335, 70%, 50%)",
    donut: 185,
    donutColor: "hsl(136, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 76,
    "hot dogColor": "hsl(201, 70%, 50%)",
    burger: 66,
    burgerColor: "hsl(266, 70%, 50%)",
    sandwich: 48,
    sandwichColor: "hsl(45, 70%, 50%)",
    kebab: 142,
    kebabColor: "hsl(208, 70%, 50%)",
    fries: 181,
    friesColor: "hsl(308, 70%, 50%)",
    donut: 151,
    donutColor: "hsl(221, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 87,
    "hot dogColor": "hsl(182, 70%, 50%)",
    burger: 44,
    burgerColor: "hsl(251, 70%, 50%)",
    sandwich: 163,
    sandwichColor: "hsl(336, 70%, 50%)",
    kebab: 109,
    kebabColor: "hsl(234, 70%, 50%)",
    fries: 44,
    friesColor: "hsl(106, 70%, 50%)",
    donut: 110,
    donutColor: "hsl(71, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 98,
    "hot dogColor": "hsl(151, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(128, 70%, 50%)",
    sandwich: 157,
    sandwichColor: "hsl(277, 70%, 50%)",
    kebab: 157,
    kebabColor: "hsl(88, 70%, 50%)",
    fries: 45,
    friesColor: "hsl(218, 70%, 50%)",
    donut: 186,
    donutColor: "hsl(160, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 77,
    "hot dogColor": "hsl(121, 70%, 50%)",
    burger: 188,
    burgerColor: "hsl(170, 70%, 50%)",
    sandwich: 45,
    sandwichColor: "hsl(209, 70%, 50%)",
    kebab: 71,
    kebabColor: "hsl(246, 70%, 50%)",
    fries: 63,
    friesColor: "hsl(322, 70%, 50%)",
    donut: 24,
    donutColor: "hsl(224, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 129,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 5,
    burgerColor: "hsl(203, 70%, 50%)",
    sandwich: 144,
    sandwichColor: "hsl(74, 70%, 50%)",
    kebab: 78,
    kebabColor: "hsl(320, 70%, 50%)",
    fries: 0,
    friesColor: "hsl(205, 70%, 50%)",
    donut: 157,
    donutColor: "hsl(190, 70%, 50%)",
  },
];

export const LineChartData = [
  {
    id: "Serie 1",
    data: [
      {
        x: 2000,
        y: 3,
      },
      {
        x: 2001,
        y: 3,
      },
      {
        x: 2002,
        y: 6,
      },
      {
        x: 2003,
        y: 6,
      },
      {
        x: 2004,
        y: 2,
      },
    ],
  },
  {
    id: "Serie 2",
    data: [
      {
        x: 2000,
        y: 9,
      },
      {
        x: 2001,
        y: 12,
      },
      {
        x: 2002,
        y: 11,
      },
      {
        x: 2003,
        y: 8,
      },
      {
        x: 2004,
        y: 11,
      },
    ],
  },
  {
    id: "Serie 3",
    data: [
      {
        x: 2000,
        y: 11,
      },
      {
        x: 2001,
        y: 9,
      },
      {
        x: 2002,
        y: 3,
      },
      {
        x: 2003,
        y: 2,
      },
      {
        x: 2004,
        y: 8,
      },
    ],
  },
  {
    id: "Serie 4",
    data: [
      {
        x: 2000,
        y: 8,
      },
      {
        x: 2001,
        y: 10,
      },
      {
        x: 2002,
        y: 4,
      },
      {
        x: 2003,
        y: 4,
      },
      {
        x: 2004,
        y: 10,
      },
    ],
  },
  {
    id: "Serie 5",
    data: [
      {
        x: 2000,
        y: 1,
      },
      {
        x: 2001,
        y: 1,
      },
      {
        x: 2002,
        y: 2,
      },
      {
        x: 2003,
        y: 1,
      },
      {
        x: 2004,
        y: 7,
      },
    ],
  },
  {
    id: "Serie 6",
    data: [
      {
        x: 2000,
        y: 6,
      },
      {
        x: 2001,
        y: 11,
      },
      {
        x: 2002,
        y: 8,
      },
      {
        x: 2003,
        y: 10,
      },
      {
        x: 2004,
        y: 3,
      },
    ],
  },
  {
    id: "Serie 7",
    data: [
      {
        x: 2000,
        y: 2,
      },
      {
        x: 2001,
        y: 2,
      },
      {
        x: 2002,
        y: 10,
      },
      {
        x: 2003,
        y: 12,
      },
      {
        x: 2004,
        y: 4,
      },
    ],
  },
  {
    id: "Serie 8",
    data: [
      {
        x: 2000,
        y: 10,
      },
      {
        x: 2001,
        y: 6,
      },
      {
        x: 2002,
        y: 12,
      },
      {
        x: 2003,
        y: 9,
      },
      {
        x: 2004,
        y: 5,
      },
    ],
  },
  {
    id: "Serie 9",
    data: [
      {
        x: 2000,
        y: 7,
      },
      {
        x: 2001,
        y: 7,
      },
      {
        x: 2002,
        y: 5,
      },
      {
        x: 2003,
        y: 3,
      },
      {
        x: 2004,
        y: 1,
      },
    ],
  },
  {
    id: "Serie 10",
    data: [
      {
        x: 2000,
        y: 12,
      },
      {
        x: 2001,
        y: 8,
      },
      {
        x: 2002,
        y: 7,
      },
      {
        x: 2003,
        y: 5,
      },
      {
        x: 2004,
        y: 9,
      },
    ],
  },
  {
    id: "Serie 11",
    data: [
      {
        x: 2000,
        y: 4,
      },
      {
        x: 2001,
        y: 4,
      },
      {
        x: 2002,
        y: 9,
      },
      {
        x: 2003,
        y: 7,
      },
      {
        x: 2004,
        y: 6,
      },
    ],
  },
  {
    id: "Serie 12",
    data: [
      {
        x: 2000,
        y: 5,
      },
      {
        x: 2001,
        y: 5,
      },
      {
        x: 2002,
        y: 1,
      },
      {
        x: 2003,
        y: 11,
      },
      {
        x: 2004,
        y: 12,
      },
    ],
  },
];

export const PieChartData = [
  {
    id: "elixir",
    label: "elixir",
    value: 418,
    color: "hsl(178, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 540,
    color: "hsl(290, 70%, 50%)",
  },
  {
    id: "javascript",
    label: "javascript",
    value: 108,
    color: "hsl(215, 70%, 50%)",
  },
  {
    id: "erlang",
    label: "erlang",
    value: 501,
    color: "hsl(175, 70%, 50%)",
  },
  {
    id: "php",
    label: "php",
    value: 412,
    color: "hsl(261, 70%, 50%)",
  },
];

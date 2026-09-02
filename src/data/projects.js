const projects = [
  {
    id: "ohm-jewellers",
    type: "live",
    number: "01",
    category: "JEWELLERY / E-COMMERCE",
    title: "OHM JEWELLERS",
    description:
      "A premium jewellery experience designed to bring the elegance of the brand into a modern digital space.",
    url: "https://ohm-jewellers.vercel.app/",
    visualClass: "portfolio-card--ohm",
    screenshots: [],
  },

  {
    id: "bhanu-visuals",
    type: "gallery",
    number: "02",
    category: "BUSINESS / BILLING",
    title: "BHANU VISUALS",
    description:
      "A streamlined billing platform built to make business operations faster, clearer, and easier to manage.",
    url: "https://bhanu-visuals-billing.vercel.app/",
    visualClass: "portfolio-card--bhanu",
    screenshots: [
      {
        title: "Dashboard",
        image: "/bhanu/dashboard.png",
        description: "Business overview and billing activity.",
      },
      {
        title: "Clients",
        image: "/bhanu/clients.png",
        description: "Client management and business records.",
      },
      {
        title: "Invoices",
        image: "/bhanu/invoices.png",
        description: "Invoice management and billing workflow.",
      },
      {
        title: "Payments",
        image: "/bhanu/payments.png",
        description: "Payment tracking and received amounts.",
      },
    ],
  },
];

export default projects;
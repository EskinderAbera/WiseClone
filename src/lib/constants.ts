export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)", // background
    border: "hsl(240 5.9% 90%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(240 5.9% 10%)", // primary
    text: "hsl(240 10% 3.9%)", // foreground
  },
  dark: {
    background: "hsl(240 10% 3.9%)", // background
    border: "hsl(240 3.7% 15.9%)", // border
    card: "hsl(240 10% 3.9%)", // card
    notification: "hsl(0 72% 51%)", // destructive
    primary: "hsl(0 0% 98%)", // primary
    text: "hsl(0 0% 98%)", // foreground
  },
};

export const accounts = [
  { id: "1", flag: "🇸🇬", amount: "15.00", currency: "Singapore Dollar" },
  { id: "2", flag: "🇦🇺", amount: "0.00", currency: "Australian Dollar" },
];

export const transactions = [
  { id: "1", type: "Paid", description: "For your Wise card", amount: "9 SGD" },
  {
    id: "2",
    type: "Added",
    description: "To your SGD balance",
    amount: "24 SGD",
  },
];

import "../styles/globals.css";

export const metadata = {
  other: {
    "view-transition": "same-origin",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

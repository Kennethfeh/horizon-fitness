import "./globals.css";

export const metadata = {
  title: "Horizon Fitness — Transform Your Body",
  description: "Premium fitness training and programs for everyone."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

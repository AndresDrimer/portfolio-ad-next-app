import './globals.css'
import data from "../data";
import Navbar from '../components/Navbar'
export const metadata = {
  title: 'Andres Drimer',
  description: 'Andres Drimer`s Front-end Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar data={data} />
      {children}</body>
    </html>
  )
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Typography from './componets/atom/typography/typography'
import Button from './componets/atom/button/button'
import HeaderNavbar from './componets/Organism/HeaderNavbar'
import Image from './componets/atom/Image/Image'
import Card from './componets/molecule/card'
import policies from '../src/theme-policies.json';

function App() {
  const [count, setCount] = useState(0)
  const evaluatePolicyRule = (userAttributes: any, rule: string): boolean => {
    try {
      const fn = new Function('user', `return ${rule};`);
      return fn(userAttributes);
    } catch (err) {
      console.error('Error evaluating rule:', err);
      return false;
    }
  };
  let user = JSON.parse(localStorage.getItem('userSession') || '{}');
  let theme = 'light';
  if (user) {
    // Determine theme based on policies
     // default]
     const themeVars = user.attributes?.theme;
     for (const [varName, varValue] of Object.entries(themeVars as Record<string, string>)) {
       document.documentElement.style.setProperty(varName, varValue);
     }
  }

  return (
    <>
      <HeaderNavbar logoSrc="https://etimg.etb2bimg.com/photo/80342670.cms" title="UST" menuItems={[{label:'Home',href:'/'},{label:'About',href:'/about'},{label:'Contact',href:'/contact'}]} />
      <Image isBanner={true} src="https://ekb6dgzykgb.exactdn.com/wp-content/uploads/2019/09/GettyImages-539476054.jpg" alt="Brand Logo" className="w-16 h-16 rounded-full object-cover" />
      <div className="flex flex-wrap justify-center gap-6 p-6">
      <div className="flex-1 min-w-[300px] max-w-sm">
        <Card
          imageSrc="https://soloway.tech/wp-content/uploads/2023/08/Digital-transformation.png"
          title="Card 1"
          description="This is the first card."
          buttonText="Learn More"
          onButtonClick={() => alert('Card 1 clicked')}
        />
      </div>
      <div className="flex-1 min-w-[300px] max-w-sm">
        <Card
          imageSrc="https://media.licdn.com/dms/image/v2/C5612AQEkR6IqwJuGQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1627469588761?e=2147483647&v=beta&t=zhkoT45XdbShSU4VwUIiYu_jsS_3DaiSqaQpFRje5nI"
          title="Card 2"
          description="This is the second card."
          buttonText="Learn More"
          onButtonClick={() => alert('Card 2 clicked')}
        />
      </div>
      <div className="flex-1 min-w-[300px] max-w-sm">
        <Card
          imageSrc="https://pollysys.com/srcfxonl/uploads/2023/01/IT-Support-Services-Detailed-IT-Services.jpg"
          title="Card 3"
          description="This is the third card."
          buttonText="Learn More"
          onButtonClick={() => alert('Card 3 clicked')}
        />
      </div>
    </div>
    <footer className="bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">

        {/* Column 1: Logo & Description */}
        <div className="flex-1 min-w-[200px]">
          <Typography tag="h2" text="UST" className="text-xl font-bold mb-2" />
          <Typography
            tag="p"
            text="Empowering digital transformation through innovative technology."
            className="text-sm text-gray-600 dark:text-gray-400"
          />
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex-1 min-w-[200px]">
          <Typography tag="h3" text="Quick Links" className="font-semibold mb-3" />
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex-1 min-w-[200px]">
          <Typography tag="h3" text="Contact" className="font-semibold mb-3" />
          <ul className="text-sm space-y-2">
            <li>Email: support@ust.com</li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>Address: 123 Main St, Tech City</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} UST. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default App

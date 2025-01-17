import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#181515] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="block md:flex md:justify-between">
          {/* Left Column - Brand and Newsletter */}
          <div className='mb-8 md:mb-0 md:mr-28'>
            <h3 className="text-2xl font-bold mb-6">Guldpris</h3>
            <div className="text-[#DED9D6] mb-6">Follow Us</div>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-[#DED9D6] hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#DED9D6] hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#DED9D6] hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#DED9D6] hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <div className='md:pt-28'>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <form className="space-y-3 md:space-y-0 md:flex md:gap-2">
                <input
                  type="email"
                  placeholder="Din e-mail"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-[#EAC463] text-[#181515] rounded-lg hover:bg-[#EAC463]/90 transition-colors font-medium whitespace-nowrap"
                >
                  Sende
                </button>
              </form>
              <p className="text-sm text-[#DED9D6] mt-2">
                By subscribing you agree to with our Privacy Policy
              </p>
            </div>
          </div>

          {/* Right Column - Links Grid */}
          <div className="flex-1 max-w-[50%] overflow-hidden">
            {/* Top Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
              <div>
                <h4 className="font-semibold mb-4">Service</h4>
                <ul className="space-y-2 text-[#DED9D6]">
                  <li><Link href="/gold-calculator" className="hover:text-white">Gold Calculator</Link></li>
                  <li><Link href="/precious-table" className="hover:text-white">Precious Table</Link></li>
                  <li><Link href="/precious-gold-bars" className="hover:text-white">Precious Gold and Bars</Link></li>
                  <li><Link href="/precious-gold-track" className="hover:text-white">Precious Gold Track</Link></li>
                  <li><Link href="/register-gold-buyer" className="hover:text-white">Register as a gold buyer</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Information</h4>
                <ul className="space-y-2 text-[#DED9D6]">
                  <li><Link href="/gold-calculator" className="hover:text-white">Gold Calculator</Link></li>
                  <li><Link href="/precious-table" className="hover:text-white">Precious Table</Link></li>
                  <li><Link href="/precious-gold-bars" className="hover:text-white">Precious Gold and Bars</Link></li>
                  <li><Link href="/precious-gold-track" className="hover:text-white">Precious Gold Track</Link></li>
                  <li><Link href="/register-gold-buyer" className="hover:text-white">Register as a gold buyer</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Information</h4>
                <ul className="space-y-2 text-[#DED9D6]">
                  <li><Link href="/gold-calculator" className="hover:text-white">Gold Calculator</Link></li>
                  <li><Link href="/precious-table" className="hover:text-white">Precious Table</Link></li>
                  <li><Link href="/precious-gold-bars" className="hover:text-white">Precious Gold and Bars</Link></li>
                  <li><Link href="/precious-gold-track" className="hover:text-white">Precious Gold Track</Link></li>
                  <li><Link href="/register-gold-buyer" className="hover:text-white">Register as a gold buyer</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800  ">
              <div>
                <h5 className="font-semibold mb-4">Top Gold Coins</h5>
                <ul className="space-y-2 text-[#DED9D6]">
                  <li><Link href="/gold-calculator" className="hover:text-white">Gold Calculator</Link></li>
                  <li><Link href="/precious-table" className="hover:text-white">Precious Table</Link></li>
                  <li><Link href="/precious-gold-bars" className="hover:text-white">Precious Gold and Bars</Link></li>
                  <li><Link href="/register-gold-buyer" className="hover:text-white">Register as a gold buyer</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-4">Top Silver Coins</h5>
                <ul className="space-y-2 text-[#DED9D6]">
                  <li><Link href="/gold-calculator" className="hover:text-white">Gold Calculator</Link></li>
                  <li><Link href="/precious-table" className="hover:text-white">Precious Table</Link></li>
                  <li><Link href="/precious-gold-bars" className="hover:text-white">Precious Gold and Bars</Link></li>
                  <li><Link href="/register-gold-buyer" className="hover:text-white">Register as a gold buyer</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold mb-4">Sell</h5>
                <ul className="space-y-2 text-[#DED9D6]">
                  <li><Link href="/gold-calculator" className="hover:text-white">Gold Calculator</Link></li>
                  <li><Link href="/precious-table" className="hover:text-white">Precious Table</Link></li>
                  <li><Link href="/precious-gold-bars" className="hover:text-white">Precious Gold and Bars</Link></li>
                  <li><Link href="/register-gold-buyer" className="hover:text-white">Register as a gold buyer</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm text-[#DED9D6]">
          <p>© 2023 Guldpris. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link href="/cookies-settings" className="hover:text-white">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


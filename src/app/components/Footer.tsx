import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
           {/* Enhanced Footer */}
           <footer className="bg-[#181515] text-white pt-16 pb-8">
        <div className="container mx-auto  flex justify-between">

            <div className='p-5 gap-10 mr-28'>
              <h3 className="text-2xl font-bold mb-6">Guldpris</h3>
              <div className="text-[#DED9D6] mb-6">Follow Us</div>
              <div className="flex space-x-4">
                <a href="#" className="text-[#DED9D6] hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#DED9D6] hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#DED9D6] hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className='pt-28'>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <form className="flex gap-2 ">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#EAC463] text-[#181515] rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send
                </button>
              </form>
              <p className="text-[#DED9D6] mb-4 mt-5">Be the first to get our new offers and updates!</p>

            </div>
            </div>
            <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-gray-800">
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
        
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm text-[#DED9D6]">
            <p>© 2023 Guldpris. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
              <Link href="/cookies-settings" className="hover:text-white">Cookies Settings</Link>
            </div>
          </div>
      </footer>   
    </div>
  )
}

export default Footer
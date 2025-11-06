import React, {useState } from 'react'
import {useHandleEmail} from './handleContact'

function Footer() {
  const [formData, setFormData] = useState({
    fullname:"",
    email:"",
    contact:"",
    message:""
})
  const { handleEmail } = useHandleEmail()
  return (
    <div>
       {/* Footer */}
      <footer className="w-full bg-slate-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-lg">Logistics</h4>
            <p className="text-slate-300 mt-2 text-sm">Contact and company info. Demo footer inspired by major carriers.</p>
          </div>
          <div>
            <h5 className="font-semibold">Quick links</h5>
            <ul className="mt-3 text-sm text-slate-300 space-y-2">
              <li>Tracking</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Subscribe</h5>
            <p className="text-slate-300 text-sm mt-2">Get news and route updates.</p>
            <div className="mt-3 flex flex-col gap-2">
               <input placeholder="Fullname" className="rounded-lg px-3 py-2 bg-white text-slate-900"
               value={formData.fullname} 
               onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
               />
              <input placeholder="Email" className="rounded-lg px-3 py-2 bg-white text-slate-900" 
              value={formData.email}
              onChange={(e)=>setFormData({...formData, email:e.target.value})}
              />
              <textarea placeholder='Enter Message' className='rounded-lg px-3 py-2 bg-white text-slate-900'
              onChange={(e)=>setFormData({...formData, message:e.target.value})}
              ></textarea>
              <button className="bg-emerald-600 px-3 py-2 rounded-lg hover:bg-green-300" onClick={(e)=>handleEmail(e, formData)}>Send</button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800/50 py-4">
          <div className="max-w-7xl mx-auto px-6 text-sm text-slate-400 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Logistics — NES</span>
            <span>Privacy · Terms · Cookies</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

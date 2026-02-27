"use client"
import { useState } from 'react'
import { Calendar, Clock, User, Scissors, CheckCircle } from 'lucide-react'

export default function BookingForm() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  if (submitted) {
    return (
      <div className="text-center p-12 bg-white shadow-sm border border-gray-100 max-w-lg mx-auto mt-10">
        <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
        <h2 className="font-serif text-3xl mb-2">Request Received</h2>
        <p className="text-gray-500">We will confirm your appointment via WhatsApp shortly.</p>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-xl border border-gray-50 font-sans">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-1 w-full mx-1 ${step >= i ? 'bg-black' : 'bg-gray-200'}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h2 className="font-serif text-2xl flex items-center gap-2">
            <Scissors size={20} /> Select a Service
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {['Haircut & Style', 'Full Highlights', 'Bridal Makeup', 'Lash Extensions'].map((service) => (
              <button 
                key={service}
                onClick={nextStep}
                className="w-full text-left p-4 border border-gray-200 hover:border-black transition-all flex justify-between items-center group"
              >
                <span>{service}</span>
                <span className="text-gray-400 group-hover:text-black">→</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h2 className="font-serif text-2xl flex items-center gap-2">
            <Calendar size={20} /> Choose Date & Time
          </h2>
          <input type="date" className="w-full p-4 border border-gray-200 outline-none focus:border-black" />
          <div className="grid grid-cols-3 gap-2">
            {['10:00 AM', '12:30 PM', '03:00 PM'].map(time => (
              <button key={time} onClick={nextStep} className="p-2 border border-gray-200 text-sm hover:bg-black hover:text-white transition">
                {time}
              </button>
            ))}
          </div>
          <button onClick={prevStep} className="text-gray-400 text-sm underline">Back</button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h2 className="font-serif text-2xl flex items-center gap-2">
            <User size={20} /> Your Information
          </h2>
          <input type="text" placeholder="Full Name" className="w-full p-4 border border-gray-200 outline-none focus:border-black" />
          <input type="tel" placeholder="WhatsApp Number" className="w-full p-4 border border-gray-200 outline-none focus:border-black" />
          <button 
            onClick={() => setSubmitted(true)}
            className="w-full bg-black text-white py-4 font-bold tracking-widest hover:bg-zinc-800 transition"
          >
            CONFIRM REQUEST
          </button>
          <button onClick={prevStep} className="block mx-auto text-gray-400 text-sm underline">Back</button>
        </div>
      )}
    </div>




 )
}
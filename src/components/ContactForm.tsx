"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import Button from "./ui/Button"

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  appointmentDate: string
  appointmentHour: string
  appointmentMinute: string
  appointmentPeriod: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    appointmentDate: "",
    appointmentHour: "",
    appointmentMinute: "",
    appointmentPeriod: "AM",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16">
        <div className="text-[var(--color-primary)] text-5xl">✓</div>
        <p className="text-white text-lg tracking-wide">Message Sent!</p>
        <p className="text-white/50 text-sm text-center">
          We'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setForm({
              firstName: "", lastName: "", email: "", phone: "",
              service: "", appointmentDate: "", appointmentHour: "",
              appointmentMinute: "", appointmentPeriod: "AM", message: "",
            })
          }}
          className="mt-4 text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors duration-300"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

      {/* Row 1 — First & Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="First Name" name="firstName" type="text"
          value={form.firstName} onChange={handleChange} required />
        <InputField label="Last Name" name="lastName" type="text"
          value={form.lastName} onChange={handleChange} required />
      </div>

      {/* Row 2 — Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="Email Address" name="email" type="email"
          value={form.email} onChange={handleChange} required />
        <InputField label="Phone Number" name="phone" type="tel"
          value={form.phone} onChange={handleChange} required />
      </div>

      {/* Row 3 — Service Dropdown */}
      <div className="flex flex-col gap-1.5">
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300 appearance-none cursor-pointer"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center" }}
        >
          <option value="" disabled className="bg-black">Services You'd Like To Book</option>
          {/* Add your services here */}
          <option value="placeholder" className="bg-black">Normal Makeup</option>
          <option value="placeholder" className="bg-black">Baby Shower</option>
          <option value="placeholder" className="bg-black">Reception</option>
          <option value="placeholder" className="bg-black">Sangeet</option>
          <option value="placeholder" className="bg-black">Haldi</option>
          <option value="placeholder" className="bg-black">Muhurtham Look</option>
          <option value="placeholder" className="bg-black">Party Makeup</option>
          <option value="placeholder" className="bg-black">HD Makeup</option>
          <option value="placeholder" className="bg-black">Bridal Makeup</option>
          <option value="placeholder" className="bg-black">Braidsmaid</option>
          <option value="placeholder" className="bg-black">Pre Wedding Makeup</option>
        </select>
      </div>

      {/* Row 4 — Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Date */}
        <div className="flex flex-col gap-1.5">
          <label className="text-white/40 text-xs uppercase tracking-widest">
            Preferred Appointment Date
          </label>
          <div className="relative">
            <input
              type="date"
              name="appointmentDate"
              value={form.appointmentDate}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300 [color-scheme:dark]"
            />
          </div>
        </div>

        {/* Time */}
        <div className="flex flex-col gap-1.5">
          <label className="text-white/40 text-xs uppercase tracking-widest">
            Preferred Appointment Time
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              name="appointmentHour"
              placeholder="HH"
              maxLength={2}
              value={form.appointmentHour}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-3 text-center focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
            />
            <input
              type="text"
              name="appointmentMinute"
              placeholder="MM"
              maxLength={2}
              value={form.appointmentMinute}
              onChange={handleChange}
              required
              className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-3 text-center focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
            />
            <select
              name="appointmentPeriod"
              value={form.appointmentPeriod}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-3 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
            >
              <option value="AM" className="bg-black">AM</option>
              <option value="PM" className="bg-black">PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Row 5 — Message */}
      <textarea
        name="message"
        placeholder="Other Important Details For Us To Know"
        value={form.message}
        onChange={handleChange}
        rows={5}
        className="bg-white/5 border border-white/10 text-white text-sm rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300 resize-none"
      />

      {/* Submit */}
      <Button
        type="submit"
        disabled={loading}
        className="mt-2 w-32 py-3 rounded-lg bg-[var(--color-primary)] text-black text-sm font-semibold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all duration-300 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Submit"}
      </Button>
    </form>
  )
}

function InputField({
  label,
  name,
  type,
  value,
  onChange,
  required,
}: {
  label: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
      required={required}
      className="bg-white/5 border border-white/30 text-white text-sm rounded-lg px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-[var(--color-primary)] transition-colors duration-300"
    />
  )
}
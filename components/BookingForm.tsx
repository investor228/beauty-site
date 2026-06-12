'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function BookingForm({ t }: { t: any }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', comment: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const { error } = await supabase.from('bookings').insert([form])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', phone: '', email: '', comment: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full bg-white border border-[#F2E8E7] rounded-xl px-4 py-3 text-[#2C2C2C] placeholder:text-[#BCBCBC] focus:outline-none focus:border-[#C4807A] transition-colors"

  return (
    <section id="booking" className="py-24 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Booking form */}
          <div>
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-3">{t.booking.title}</h2>
            <p className="text-[#6B6B6B] mb-8">{t.booking.subtitle}</p>

            {status === 'success' ? (
              <div className="bg-[#F2E8E7] border border-[#C4807A] rounded-2xl p-6 text-[#C4807A] text-center">
                {t.booking.success}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={t.booking.name}
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder={t.booking.phone}
                  required
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  placeholder={t.booking.email}
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                <textarea
                  placeholder={t.booking.comment}
                  rows={4}
                  value={form.comment}
                  onChange={e => setForm({ ...form, comment: e.target.value })}
                  className={inputClass + ' resize-none'}
                />
                {status === 'error' && (
                  <p className="text-red-500 text-sm">{t.booking.error}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-[#C4807A] text-white py-4 rounded-xl font-medium hover:bg-[#A86860] transition-colors disabled:opacity-60"
                >
                  {status === 'loading' ? '...' : t.booking.submit}
                </button>
              </form>
            )}
          </div>

          {/* Contacts */}
          <div id="contacts">
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-8">{t.contacts.title}</h2>
            <div className="flex flex-col gap-6">
              {[
                { icon: '📍', label: t.contacts.addressLabel, value: t.contacts.address },
                { icon: '📞', label: t.contacts.phoneLabel, value: t.contacts.phone },
                { icon: '✉️', label: t.contacts.emailLabel, value: t.contacts.email },
                { icon: '🕐', label: t.contacts.hoursLabel, value: t.contacts.hours },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F2E8E7] flex items-center justify-center flex-shrink-0 text-base">
                    {icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2C2C]">{label}</p>
                    <p className="text-[#6B6B6B]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

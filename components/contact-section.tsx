'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    groupSize: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send this to your backend
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      groupSize: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Info */}
          <div className="space-y-12">
            <div>
              <p className="text-xs font-light tracking-widest uppercase text-muted-foreground/60 mb-4">Contact</p>
              <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Ready to Reserve?</h2>
              <p className="text-base text-muted-foreground/80 leading-relaxed font-light">
                Contact our team today to book your group's unforgettable escape to Los Caracas Shoreline. We'll handle all the details.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-serif text-foreground mb-1">Email</h3>
                  <a href="mailto:info@loscaracasshoreline.com" className="text-sm text-muted-foreground/70 hover:text-accent transition-colors font-light">
                    info@loscaracasshoreline.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-serif text-foreground mb-1">Phone</h3>
                  <a href="tel:+573001234567" className="text-sm text-muted-foreground/70 hover:text-accent transition-colors font-light">
                    +57 (300) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-serif text-foreground mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground/70 font-light">
                    Los Caracas Shoreline<br />
                    Central Coast
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-sm p-6 border border-accent/20">
              <p className="text-muted-foreground/80 text-sm font-light">
                <span className="font-serif">Tip:</span> Groups typically book 2-3 months in advance for optimal date selection.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <Card className="bg-background border-border/40 p-8 rounded-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-light text-muted-foreground/70 mb-2 tracking-wide uppercase">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-border/40 text-foreground placeholder:text-muted-foreground/50 rounded-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-light text-muted-foreground/70 mb-2 tracking-wide uppercase">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-secondary/30 border-border/40 text-foreground placeholder:text-muted-foreground/50 rounded-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-light text-muted-foreground/70 mb-2 tracking-wide uppercase">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/30 border-border/40 text-foreground placeholder:text-muted-foreground/50 rounded-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-light text-muted-foreground/70 mb-2 tracking-wide uppercase">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-secondary/30 border-border/40 text-foreground placeholder:text-muted-foreground/50 rounded-sm"
                      placeholder="+57 ..."
                    />
                  </div>
                  <div>
                    <label htmlFor="groupSize" className="block text-xs font-light text-muted-foreground/70 mb-2 tracking-wide uppercase">
                      Group Size
                    </label>
                    <Input
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="bg-secondary/30 border-border/40 text-foreground placeholder:text-muted-foreground/50 rounded-sm"
                      placeholder="40+"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-light text-muted-foreground/70 mb-2 tracking-wide uppercase">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-secondary/30 border-border/40 text-foreground placeholder:text-muted-foreground/50 min-h-28 rounded-sm"
                    placeholder="Tell us about your group and any special requests..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-accent/80 hover:shadow-md text-white font-light py-2 rounded-sm mt-6 text-xs tracking-wide uppercase"
                >
                  Send Inquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

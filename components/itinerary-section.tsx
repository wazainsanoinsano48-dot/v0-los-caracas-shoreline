'use client'

import { Card } from '@/components/ui/card'
import { Clock, MapPin } from 'lucide-react'

export function ItinerarySection() {
  const day1Activities = [
    { time: '10:00 AM', activity: 'Arrival at Ciudad Vacacional Los Caracas', location: 'Check-in' },
    { time: '10:30 AM', activity: 'Transfer to Beach and River Area', location: 'Beachfront' },
    { time: '11:00 AM', activity: 'Integration Activity: Beach Gymkhana', location: 'Beach' },
    { time: '1:00 PM', activity: 'Group Lunch in Picnic Area', location: 'Dining' },
    { time: '2:00 PM', activity: 'Swimming in River & Mud Therapy', location: 'River' },
    { time: '3:00 PM', activity: 'Free Recreation in River', location: 'River' },
    { time: '5:00 PM', activity: 'Welcome Cocktail & Express Check-in', location: 'Reception' },
    { time: '7:30 PM', activity: 'Dinner at Hotel Restaurant', location: 'Dining' },
    { time: '8:30 PM', activity: '"Under the Stars" Bonfire & Live Music', location: 'Outdoor' }
  ]

  const day2Activities = [
    { time: '8:00 AM', activity: 'Stretching/Yoga Session', location: 'By the Sea' },
    { time: '9:00 AM', activity: 'Breakfast', location: 'Restaurant' },
    { time: '10:00 AM', activity: 'Family Rally Pool Games', location: 'Pool Complex' },
    { time: '11:00 AM', activity: 'Free Swimming & Dance Workout', location: 'Pool' },
    { time: '12:30 PM', activity: 'Fellowship Lunch at Pool Restaurant', location: 'Dining' },
    { time: '1:30 PM', activity: 'Return to Hotel & Luggage Pickup', location: 'Rooms' },
    { time: '2:30 PM', activity: 'Hotel Departure (Check-out)', location: 'Reception' },
    { time: '3:00 PM', activity: 'Return Transportation & Souvenir Distribution', location: 'Transport' }
  ]

  const ActivityCard = ({ activity }: { activity: (typeof day1Activities)[0] }) => (
    <div className="flex gap-6 pb-6 relative">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center flex-shrink-0 bg-white">
          <div className="w-2 h-2 rounded-full bg-slate-900"></div>
        </div>
        <div className="w-px h-16 bg-slate-300 my-2"></div>
      </div>
      <div className="pb-2 flex-1 pt-1">
        <p className="font-semibold text-slate-500 text-xs uppercase tracking-widest">{activity.time}</p>
        <h4 className="text-base font-serif text-slate-900 mt-2">{activity.activity}</h4>
        <div className="flex items-center gap-2 mt-2 text-slate-500">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs font-light">{activity.location}</span>
        </div>
      </div>
    </div>
  )

  return (
    <section id="itinerary" className="py-32 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-slate-500 mb-4">Experience</p>
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900">Your 2-Day Itinerary</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Day 1 */}
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-12 flex items-center gap-4">
              <span className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center font-serif text-sm font-bold">
                1
              </span>
              Day One: Discovery
            </h3>
            <div className="space-y-2">
              {day1Activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-12 flex items-center gap-4">
              <span className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center font-serif text-sm font-bold">
                2
              </span>
              Day Two: Renewal
            </h3>
            <div className="space-y-2">
              {day2Activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

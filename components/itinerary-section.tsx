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
    <div className="flex gap-6 pb-8 relative">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-gray-900 flex-shrink-0 font-black">
          ✓
        </div>
        <div className="w-1 h-20 bg-cyan-100 my-3"></div>
      </div>
      <div className="pb-2 flex-1">
        <p className="font-black text-cyan-600 text-sm uppercase tracking-wider">{activity.time}</p>
        <h4 className="text-xl font-bold text-slate-900 mt-2">{activity.activity}</h4>
        <div className="flex items-center gap-2 mt-2 text-slate-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{activity.location}</span>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-20">Your Schedule</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Day 1 */}
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-cyan-400 text-gray-900 flex items-center justify-center font-black text-lg">
                1
              </span>
              Day 1: Adventure
            </h3>
            <div className="space-y-2">
              {day1Activities.map((activity, index) => (
                <ActivityCard key={index} activity={activity} />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-cyan-400 text-gray-900 flex items-center justify-center font-black text-lg">
                2
              </span>
              Day 2: Wellness
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

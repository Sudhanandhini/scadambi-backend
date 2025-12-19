import React, { useState } from 'react';
import { Clock, Calendar, Sun, Moon, Coffee, Bell, BookOpen, AlertCircle, Target, Users, Award, GraduationCap, ChevronRight } from 'lucide-react';

const PuCollegeSchoolTimings = () => {
  const [activeDay, setActiveDay] = useState('weekday');

  const weekdaySchedule = [
    { time: '08:45 AM', activity: 'College Starts', type: 'start', icon: Bell },
    { time: '08:45 AM - 09:30 AM', activity: 'Period 1', type: 'class', icon: BookOpen },
    { time: '09:30 AM - 10:15 AM', activity: 'Period 2', type: 'class', icon: BookOpen },
    { time: '10:15 AM - 11:00 AM', activity: 'Period 3', type: 'class', icon: BookOpen },
    { time: '11:00 AM - 11:15 AM', activity: 'Short Break', type: 'break', icon: Coffee },
    { time: '11:15 AM - 12:00 PM', activity: 'Period 4', type: 'class', icon: BookOpen },
    { time: '12:00 PM - 12:45 PM', activity: 'Period 5', type: 'class', icon: BookOpen },
    { time: '12:45 PM - 01:30 PM', activity: 'Lunch Break', type: 'break', icon: Coffee },
    { time: '01:30 PM - 02:15 PM', activity: 'Period 6', type: 'class', icon: BookOpen },
    { time: '02:15 PM - 03:00 PM', activity: 'Period 7', type: 'class', icon: BookOpen },
    { time: '03:00 PM - 03:30 PM', activity: 'Period 8 / Activities', type: 'class', icon: BookOpen },
    { time: '03:30 PM', activity: 'College Ends', type: 'end', icon: Bell }
  ];

  const saturdaySchedule = [
    { time: '08:45 AM', activity: 'College Starts', type: 'start', icon: Bell },
    { time: '08:45 AM - 09:30 AM', activity: 'Period 1', type: 'class', icon: BookOpen },
    { time: '09:30 AM - 10:15 AM', activity: 'Period 2', type: 'class', icon: BookOpen },
    { time: '10:15 AM - 11:00 AM', activity: 'Period 3', type: 'class', icon: BookOpen },
    { time: '11:00 AM - 11:15 AM', activity: 'Short Break', type: 'break', icon: Coffee },
    { time: '11:15 AM - 12:00 PM', activity: 'Period 4', type: 'class', icon: BookOpen },
    { time: '12:00 PM - 12:45 PM', activity: 'Period 5', type: 'class', icon: BookOpen },
    { time: '12:45 PM - 01:00 PM', activity: 'Assembly / Activities', type: 'activity', icon: Users },
    { time: '01:00 PM', activity: 'College Ends', type: 'end', icon: Bell }
  ];

  const weeklyOverview = [
    { day: 'Monday', status: 'working', time: '08:45 AM - 03:30 PM', color: 'bg-blue-100 border-blue-300' },
    { day: 'Tuesday', status: 'working', time: '08:45 AM - 03:30 PM', color: 'bg-blue-100 border-blue-300' },
    { day: 'Wednesday', status: 'working', time: '08:45 AM - 03:30 PM', color: 'bg-blue-100 border-blue-300' },
    { day: 'Thursday', status: 'working', time: '08:45 AM - 03:30 PM', color: 'bg-blue-100 border-blue-300' },
    { day: 'Friday', status: 'working', time: '08:45 AM - 03:30 PM', color: 'bg-blue-100 border-blue-300' },
    { day: 'Saturday', status: 'half-day', time: '08:45 AM - 01:00 PM', color: 'bg-[#FDB913]/10 border-[#FDB913]' },
    { day: 'Sunday', status: 'holiday', time: 'Holiday', color: 'bg-gray-100 border-gray-300' }
  ];

  const importantNotes = [
    {
      icon: Bell,
      title: 'Punctuality',
      description: 'Students must arrive before 8:45 AM. Late arrivals may result in attendance issues.',
      color: 'from-[#0F2A4A]/50 to-[#0F2A4A]/100'
    },
    {
      icon: BookOpen,
      title: 'Class Duration',
      description: 'Each period is 45 minutes long with regular short breaks for refreshment.',
      color: 'from-[#FDB913]/50 to-[#FDB913]/100'
    },
    {
      icon: Coffee,
      title: 'Break Times',
      description: 'Short break (15 min) at 11:00 AM and lunch break (45 min) at 12:45 PM.',
      color: 'from-[#0F2A4A]/50 to-[#0F2A4A]/100'
    },
    {
      icon: Calendar,
      title: 'Saturday Schedule',
      description: 'Half-day schedule on Saturdays ending at 1:00 PM. Every 2nd Saturday is a holiday.',
      color: 'from-[#FDB913]/50 to-[#FDB913]/100'
    }
  ];

  const getActivityColor = (type) => {
    switch (type) {
      case 'start':
      case 'end':
        return 'bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] text-white border-[#0F2A4A]';
      case 'break':
        return 'bg-gradient-to-r from-[#FDB913]/30 to-[#FDB913]/10 text-[#FDB913] border-[#FDB913]';
      case 'activity':
        return 'bg-gradient-to-r from-[#FDB913]/30 to-[#FDB913]/10 text-[#FDB913] border-[#FDB913]';
      default:
        return 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border-blue-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FDB913]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div> */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Icon Badge */}
            {/* <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 rounded-3xl mb-8 shadow-2xl animate-bounce-slow">
              <Clock size={48} className="text-[#0F2A4A]" />
            </div> */}
            
            <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6">
              <GraduationCap className="mr-2" size={20} />
              Pre-University College
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideDown">
              College <span className="text-[#FDB913]">Timings</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-white rounded"></div>
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
            </div>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fadeIn delay-200">
              1st & 2nd PUC • Science & Commerce Streams
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Weekday Timing Card */}
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913] transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 rounded-full -mr-20 -mt-20"></div>
              <div className="relative p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                    <Sun size={32} className="text-[#0F2A4A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#0F2A4A]">Monday to Friday</h3>
                    <p className="text-gray-600">Regular Schedule</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-center gap-4">
                    <Clock size={32} />
                    <div className="text-center">
                      <p className="text-4xl font-bold">8:45 AM - 3:30 PM</p>
                      <p className="text-white/80 mt-2">6 hours 45 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

             {/* Weekday Timing Card */}
            <div className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#FDB913] transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#FDB913]/10 rounded-full -mr-20 -mt-20"></div>
              <div className="relative p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                    <Sun size={32} className="text-[#0F2A4A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#0F2A4A]">Saturday</h3>
                    <p className="text-gray-600">Half-Day Schedule</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-center gap-4">
                    <Clock size={32} />
                    <div className="text-center">
                      <p className="text-4xl font-bold">8:45 AM - 1:00 PM</p>
                      <p className="text-white/80 mt-2">4 hours 15 minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* Saturday Timing Card */}
          
          </div>
        </div>
      </section>

      {/* Day Toggle & Detailed Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#FDB913]/20 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Detailed Schedule
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A4A] mb-4">
              Period-wise Timetable
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="h-1 w-20 bg-[#FDB913] rounded"></div>
              <div className="h-1 w-12 bg-[#0F2A4A] rounded"></div>
            </div>

            {/* Toggle Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveDay('weekday')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                  activeDay === 'weekday'
                    ? 'bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80 text-[#0F2A4A] shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
              >
                <Sun className="inline-block mr-2" size={24} />
                Weekdays
              </button>
              <button
                onClick={() => setActiveDay('saturday')}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                  activeDay === 'saturday'
                    ? 'bg-gradient-to-r from-[#FDB913] to-[#FDB913] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
              >
                <Calendar className="inline-block mr-2" size={24} />
                Saturday
              </button>
            </div>
          </div>

          {/* Schedule Display */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className={`${
              activeDay === 'weekday' 
                ? 'bg-gradient-to-r from-[#FDB913] to-[#FDB913]/80' 
                : 'bg-gradient-to-r from-[#FDB913] to-[#FDB913]'
            } p-8 text-white`}>
              <div className="flex items-center gap-4">
                {activeDay === 'weekday' ? (
                  <>
                    <Sun size={40} className="text-[#0F2A4A]" />
                    <div>
                      <h3 className="text-3xl font-bold text-[#0F2A4A]">Monday - Friday Schedule</h3>
                      <p className="text-[#0F2A4A]/80">Full Day Classes</p>
                    </div>
                  </>
                ) : (
                  <>
                    <Calendar size={40} />
                    <div>
                      <h3 className="text-3xl font-bold text-[#0F2A4A]">Saturday Schedule</h3>
                      <p className="text-[#0F2A4A]/80">Half Day Classes</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-3">
                {(activeDay === 'weekday' ? weekdaySchedule : saturdaySchedule).map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 p-5 rounded-xl border-2 ${getActivityColor(item.type)} transform hover:scale-102 transition-all duration-300 animate-slideUp`}
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.type === 'start' || item.type === 'end' 
                          ? 'bg-[#FDB913]' 
                          : item.type === 'break' 
                          ? 'bg-[#FDB913]' 
                          : item.type === 'activity'
                          ? 'bg-[#FDB913]'
                          : 'bg-blue-500'
                      }`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <div className="flex-grow flex items-center justify-between">
                        <span className="font-bold text-lg">{item.time}</span>
                        <ChevronRight size={20} className="opacity-50" />
                        <span className="font-semibold text-lg">{item.activity}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Weekly Overview</h2>
            <p className="text-xl text-gray-600">Your week at a glance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {weeklyOverview.map((day, idx) => (
              <div
                key={idx}
                className={`${day.color} border-2 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 animate-scaleIn`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4">
                  {day.status === 'holiday' ? (
                    <Moon className="mx-auto text-gray-500" size={40} />
                  ) : day.status === 'half-day' ? (
                    <Calendar className="mx-auto text-[#FDB913]" size={40} />
                  ) : (
                    <Sun className="mx-auto text-blue-600" size={40} />
                  )}
                </div>
                <h4 className="text-lg font-bold text-[#0F2A4A] mb-2">{day.day}</h4>
                <p className="text-sm font-semibold text-gray-700">{day.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-2 bg-[#FDB913]/10 text-[#FDB913] rounded-full text-sm font-semibold mb-4">
              Important Information
            </span>
            <h2 className="text-4xl font-bold text-[#0F2A4A] mb-4">Things to Remember</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantNotes.map((note, idx) => {
              const IconComponent = note.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border-t-4 border-transparent hover:border-[#FDB913] transform hover:-translate-y-2 animate-fadeIn"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${note.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F2A4A] mb-3">{note.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{note.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDB913]/20 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#FDB913] rounded-2xl flex items-center justify-center">
                  <AlertCircle size={32} className="text-[#0F2A4A]" />
                </div>
                <h3 className="text-3xl font-bold">General Guidelines</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Students must arrive before 8:45 AM to avoid late attendance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Each period is 45 minutes with regular breaks for refreshment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Lunch break is 45 minutes from 12:45 PM to 1:30 PM</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Saturday classes end at 1:00 PM (earlier than weekdays)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Every 2nd Saturday is a holiday as per Karnataka PU Board</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#FDB913] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">Regular attendance is mandatory for academic success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default PuCollegeSchoolTimings;
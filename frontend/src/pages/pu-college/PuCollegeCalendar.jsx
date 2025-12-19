import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, BookOpen, Award, PartyPopper, AlertCircle, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const PuCollegeCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('MAY');

  const calendarEvents = {
    MAY: [
      { date: '12.05.2025', day: 'MONDAY', event: 'II PUC RE-OPENING DAY', type: 'important' },
      { date: '31.05.2025', day: 'SATURDAY', event: 'I PUC INAUGURATION', type: 'important' }
    ],
    JUNE: [
      { date: '02.06.2025', day: 'MONDAY', event: 'I PUC RE-OPENING DAY', type: 'important' },
      { date: '05.06.2025', day: 'THURSDAY', event: 'WORLD ENVIRONMENT DAY', type: 'activity' },
      { date: '07.06.2025', day: 'SATURDAY', event: 'EID', type: 'holiday' },
      { date: '21.06.2025', day: 'SATURDAY', event: 'INTERNATIONAL YOGA DAY', type: 'activity' }
    ],
    JULY: [
      { date: '05.07.2025', day: 'SATURDAY', event: "I PUC FRESHER'S DAY /COMMERCE CLUB ACTIVITY", type: 'activity' },
      { date: '06.07.2025', day: 'SUNDAY', event: 'LAST DAY OF MOHARRAM', type: 'holiday' },
      { date: '19.07.2025', day: 'SATURDAY', event: 'STUDENTS REPRESENTATIVE ELECTION', type: 'activity' },
      { date: '21.07.2025', day: 'MONDAY', event: 'INVESTITURE CEREMONY', type: 'activity' },
      { date: '26.07.2025', day: 'SATURDAY', event: 'ECO CLUB ACTIVITY - WALKATHON', type: 'activity' }
    ],
    AUGUST: [
      { date: '11.08.25 - 14.08.25', day: '', event: 'I QUARTERLY TEST', type: 'exam' },
      { date: '08.08.2025', day: 'FRIDAY', event: 'VARAMAHALAKSHMI VRATHA', type: 'holiday' },
      { date: '09.08.2025', day: 'SATURDAY', event: 'UPAKARMA', type: 'holiday' },
      { date: '15.08.2025', day: 'FRIDAY', event: 'INDEPENDENCE DAY', type: 'holiday' },
      { date: '16.08.2025', day: 'SATURDAY', event: 'SRI KRISHNA JANMASHTAMI', type: 'holiday' },
      { date: '26.08.2025', day: 'TUESDAY', event: 'SWARNA GOWRI VRATA', type: 'holiday' },
      { date: '27.08.2025', day: 'WEDNESDAY', event: 'VARASIDDI VINAYAKA VRATA', type: 'holiday' },
      { date: '29.08.2025', day: 'FRIDAY', event: 'DHYANCHAND DAY - ANNUAL SPORTS DAY', type: 'activity' }
    ],
    SEPTEMBER: [
      { date: '05.09.2025', day: 'FRIDAY', event: "ID-MILAD /TEACHERS' DAY CELEBRATION/ ENGINEER'S DAY", type: 'holiday' },
      { date: '13.09.2025', day: 'SATURDAY', event: 'SCIENCE AND COMMERCE EXHIBITION', type: 'activity' },
      { date: '15.09.2025', day: 'MONDAY', event: 'HINDI DIVAS', type: 'activity' },
      { date: '16.09.2025 - 19.09.2025', day: 'TUESDAY -', event: 'LITERARY ACTIVITIES AND CULTURAL ACTIVITIES', type: 'activity' },
      { date: '21.09.2025', day: 'SUNDAY', event: 'MAHALAYA AMAVASAYA', type: 'holiday' },
      { date: '22.09.2025 - 02.10.2025', day: '', event: 'MID TERM VACATION', type: 'vacation' }
    ],
    OCTOBER: [
      { date: '01.10.2025', day: 'WEDNESDAY', event: 'AYUDHA POOJA', type: 'holiday' },
      { date: '02.10.2025', day: 'THURSDAY', event: 'GANDHI JAYANTHI / VIJAYADASHAMI', type: 'holiday' },
      { date: '07.10.2025', day: 'TUESDAY', event: 'VALMIKI JAYANTHI', type: 'holiday' },
      { date: '09.10.2025 - 27.10.2025', day: '', event: 'MID TERM EXAMINATION', type: 'exam' },
      { date: '20.10.2025', day: 'MONDAY', event: 'NARAKA CHATHURDASI', type: 'holiday' },
      { date: '21.10.2025', day: 'TUESDAY', event: 'LAKSHMI POOJA', type: 'holiday' },
      { date: '22.10.2025', day: 'WEDNESDAY', event: 'BALIPADYAMI', type: 'holiday' }
    ],
    NOVEMBER: [
      { date: '01.11.2025', day: 'SATURDAY', event: 'KANNADA RAJYOTHSAVA', type: 'holiday' },
      { date: '08.11.2025', day: 'SATURDAY', event: 'KANAKADASA JAYANTHI', type: 'holiday' },
      { date: '15.11.2025', day: 'SATURDAY', event: 'SAMMILANA', type: 'activity' }
    ],
    DECEMBER: [
      { date: '19.12.2025 - 23.12.2025', day: '', event: 'II QUARTERLY TEST', type: 'exam' },
      { date: '23.12.2025', day: 'SATURDAY', event: 'RETREAT FOR CADAMBIANS & PRIZE DISTRIBUTION', type: 'activity' },
      { date: '25.12.2025', day: 'THURSDAY', event: 'CHRISTMAS', type: 'holiday' },
      { date: '27.12.2025', day: 'SATURDAY', event: 'ANNUAL DAY', type: 'activity' }
    ],
    JANUARY: [
      { date: '01.01.2026', day: 'THURSDAY', event: 'NEW YEAR', type: 'holiday' },
      { date: '14.01.2026', day: 'WEDNESDAY', event: 'MAKARA SANKRANTHI', type: 'holiday' },
      { date: '26.01.2026', day: 'MONDAY', event: 'REPUBLIC DAY', type: 'holiday' },
      { date: '05.01.2026 - 20.01.2026', day: '', event: 'II PUC PREPARATORY EXAMINATION', type: 'exam' },
      { date: '02.01.2026 - 13.01.2026', day: '', event: 'I PUC ANNUAL PRACTICAL EXAM', type: 'exam' },
      { date: '21.01.2026 - 14.02.2026', day: '', event: 'II PUC PUBLIC PRACTICAL EXAM', type: 'exam' }
    ],
    FEBRUARY: [
      { date: '15.02.2026', day: 'SUNDAY', event: 'MAHA SHIVARATHRI', type: 'holiday' },
      { date: 'SECOND WEEK', day: '', event: 'FAREWELL FUNCTION', type: 'activity' },
      { date: '10.02.2026 - 25.02.2026', day: '', event: 'I PUC DISTRICT LEVEL ANNUAL EXAM', type: 'exam' }
    ],
    MARCH: [
      { date: '01.03.2026 - 21.03.2026', day: '', event: 'II PUC PUBLIC EXAMINATION', type: 'exam' },
      { date: '01.03.26', day: '', event: "FOUNDER'S DAY", type: 'activity' },
      { date: '08.03.2026', day: '', event: "INTERNATIONAL WOMEN'S DAY", type: 'activity' }
    ]
  };

  const months = ['MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER', 'JANUARY', 'FEBRUARY', 'MARCH'];

  const getEventColor = (type) => {
    switch (type) {
      case 'holiday':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'exam':
        return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'activity':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'important':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'vacation':
        return 'bg-orange-100 text-orange-700 border-orange-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'holiday':
        return <PartyPopper size={20} />;
      case 'exam':
        return <Award size={20} />;
      case 'activity':
        return <BookOpen size={20} />;
      case 'important':
        return <AlertCircle size={20} />;
      case 'vacation':
        return <CalendarIcon size={20} />;
      default:
        return <CalendarIcon size={20} />;
    }
  };

  const navigateMonth = (direction) => {
    const currentIndex = months.indexOf(selectedMonth);
    if (direction === 'prev' && currentIndex > 0) {
      setSelectedMonth(months[currentIndex - 1]);
    } else if (direction === 'next' && currentIndex < months.length - 1) {
      setSelectedMonth(months[currentIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F2A4A] via-[#1a3a5f] to-[#0F2A4A] text-white py-32 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#FDB913]/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center bg-[#FDB913] text-[#0F2A4A] px-6 py-2 rounded-full font-semibold mb-6">
              <CalendarIcon className="mr-2" size={20} />
              Academic Year 2025-2026
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Calendar of <span className="text-[#FDB913]">Events</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with all important dates, events, examinations, and holidays
            </p>
          </div>
        </div>
      </section>

      {/* Legend Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-[#0F2A4A] mb-6 text-center">Event Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200">
              <PartyPopper className="text-red-600" size={20} />
              <span className="font-semibold text-red-700">Holidays</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg border border-purple-200">
              <Award className="text-purple-600" size={20} />
              <span className="font-semibold text-purple-700">Examinations</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
              <BookOpen className="text-blue-600" size={20} />
              <span className="font-semibold text-blue-700">Activities</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-lg border border-green-200">
              <AlertCircle className="text-green-600" size={20} />
              <span className="font-semibold text-green-700">Important</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-lg border border-orange-200">
              <CalendarIcon className="text-orange-600" size={20} />
              <span className="font-semibold text-orange-700">Vacation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Month Navigation */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth('prev')}
              disabled={selectedMonth === 'MAY'}
              className="p-3 rounded-lg bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={24} className="text-[#0F2A4A]" />
            </button>
            
            <h2 className="text-3xl font-bold text-[#0F2A4A]">{selectedMonth} 2025/2026</h2>
            
            <button
              onClick={() => navigateMonth('next')}
              disabled={selectedMonth === 'MARCH'}
              className="p-3 rounded-lg bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={24} className="text-[#0F2A4A]" />
            </button>
          </div>

          {/* Month Selector */}
          <div className="flex flex-wrap justify-center gap-2">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 ${
                  selectedMonth === month
                    ? 'bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Display */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {calendarEvents[selectedMonth].map((event, idx) => (
              <div
                key={idx}
                className={`group relative flex items-center gap-4 p-6 rounded-xl border-2 ${getEventColor(event.type)} transform hover:scale-102 transition-all duration-300 hover:shadow-lg animate-slideUp`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  event.type === 'holiday' ? 'bg-red-200' :
                  event.type === 'exam' ? 'bg-purple-200' :
                  event.type === 'activity' ? 'bg-blue-200' :
                  event.type === 'important' ? 'bg-green-200' :
                  'bg-orange-200'
                }`}>
                  {getEventIcon(event.type)}
                </div>

                {/* Date & Day */}
                <div className="flex-shrink-0 w-32">
                  <div className="font-bold text-lg">{event.date}</div>
                  {event.day && <div className="text-sm opacity-75">{event.day}</div>}
                </div>

                {/* Event Name */}
                <div className="flex-grow">
                  <div className="font-semibold text-lg">{event.event}</div>
                </div>

                {/* Decorative element */}
                <div className="absolute right-0 top-0 w-20 h-20 opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Timings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* College Timings Card */}
            <div className="bg-gradient-to-br from-[#FDB913] to-[#FDB913]/80 p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-[#0F2A4A] text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <Clock size={40} />
                </div>
                <h3 className="text-4xl font-bold text-[#0F2A4A] mb-8">College Timings</h3>
                <div className="space-y-5">
                  <div className="bg-white/30 backdrop-blur-sm p-5 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#0F2A4A] text-lg">Monday to Friday:</span>
                      <span className="font-bold text-[#0F2A4A] text-lg">8:45 AM TO 2:30 PM</span>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[#0F2A4A]/10 rounded-xl">
                    <p className="text-[#0F2A4A] font-semibold">📌 Every 2nd Saturday is a holiday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note Card */}
            <div className="bg-gradient-to-br from-[#0F2A4A] to-[#1a3a5f] p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FDB913]/20 rounded-full"></div>
              <div className="relative z-10">
                <div className="bg-[#FDB913] text-[#0F2A4A] w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <AlertCircle size={40} />
                </div>
                <h3 className="text-4xl font-bold text-white mb-8">Important Note</h3>
                <div className="space-y-5">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <p className="text-white text-lg leading-relaxed">
                      <span className="font-bold text-[#FDB913]">NOTE:</span> EVERY MONDAY MONTHLY TEST WILL BE HELD FOR BOTH I PUC AND II PUC STUDENTS.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <p className="text-white/90 text-sm">
                      All dates and events are subject to Karnataka PU Board calendar and college administration decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      {/* <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="inline-flex items-center bg-gradient-to-r from-[#0F2A4A] to-[#1a3a5f] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            <Download className="mr-3" size={24} />
            Download Full Calendar (PDF)
          </button>
        </div>
      </section> */}

      <style jsx>{`
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

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }

        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default PuCollegeCalendar;
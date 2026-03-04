import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Calendar({ selected, onSelect, className = "" }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(selected || null);

  const month = currentMonth.getMonth();
  const year = currentMonth.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  function prevMonth() {
    setCurrentMonth(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setCurrentMonth(new Date(year, month + 1, 1));
  }

  function selectDay(day) {
    const date = new Date(year, month, day);
    setSelectedDate(date);
    if (onSelect) onSelect(date);
  }

  function isSelected(day) {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  }

  const days = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={"empty-" + i} className="h-9 w-9" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <button
        key={day}
        onClick={() => selectDay(day)}
        className={`h-9 w-9 rounded-md text-sm hover:bg-gray-200 ${
          isSelected(day) ? "bg-black text-white" : ""
        }`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className={`p-3 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth}>
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="font-medium">
          {monthNames[month]} {year}
        </div>

        <button onClick={nextMonth}>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 text-xs text-center mb-2">
        {dayNames.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{days}</div>
    </div>
  );
}
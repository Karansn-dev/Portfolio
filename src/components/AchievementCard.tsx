import React from "react";
import { motion } from "framer-motion";
import { Calendar, Gift, Users } from "lucide-react";

interface AchievementCardProps {
  title: string;
  event: string;
  date: string;
  image: string;
  prize: string;
  participants: string;
  description: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  event,
  date,
  image,
  prize,
  participants,
  description,
}) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-200 rounded-3xl shadow-2xl p-4 flex flex-col gap-3 min-w-[260px] max-w-lg mx-auto"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-cyan-200 mb-1 leading-tight drop-shadow-[0_2px_8px_rgba(92,225,230,0.7)]">
            {title}
          </h3>
          <div className="text-sm text-cyan-100 font-medium mb-1">{event}</div>
        </div>
        <div className="flex items-center gap-1 text-xs text-cyan-100">
          <Calendar className="w-4 h-4 mr-1 inline-block" />
          {date}
        </div>
      </div>
      {/* Image */}
      <div className="w-full aspect-[3/1.5] bg-gradient-to-br from-gray-100 to-white rounded-2xl flex items-center justify-center overflow-hidden border border-gray-200">
        {/* TODO: Replace with real image */}
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-2xl opacity-80"
        />
      </div>
      {/* Prize & Participants */}
      <div className="flex items-center justify-between gap-4 mt-2 mb-1">
        <div className="flex items-center gap-2 bg-gradient-to-r from-gray-200 to-white rounded-lg px-3 py-1 text-gray-700 text-xs font-semibold shadow-md">
          <Gift className="w-4 h-4 mr-1" />
          {prize}
        </div>
        <div className="flex items-center gap-2 bg-gradient-to-r from-gray-200 to-white rounded-lg px-3 py-1 text-gray-700 text-xs font-semibold shadow-md">
          <Users className="w-4 h-4 mr-1" />
          {participants}
        </div>
      </div>
      {/* Description */}
      <div className="mt-2">
        <div className="rounded-xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 border border-gray-300 p-4 text-gray-700 text-sm leading-relaxed shadow-sm">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard; 
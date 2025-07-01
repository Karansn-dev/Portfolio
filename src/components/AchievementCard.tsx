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
  description: string | string[];
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
      className="relative bg-[rgba(0,0,0,0.2)] backdrop-blur-lg border border-white/10 rounded-[20px] shadow-xl p-6 flex flex-col gap-4 min-w-[320px] max-w-xl min-h-[420px] mx-auto transition-all duration-300 ease-in-out hover:scale-[1.045] hover:shadow-[0_0_48px_12px_rgba(56,189,248,0.45),0_0_64px_16px_rgba(168,85,247,0.25),0_0_0_4px_rgba(255,255,255,0.08)] hover:float-animate"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-1 leading-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(56,189,248,0.7)]" style={{textShadow:'0 2px 8px #0e172a88'}}>
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
      <div className="w-full flex items-center justify-center overflow-hidden rounded-[16px] border border-white/10 bg-black/10" style={{maxHeight:'320px', minHeight:'180px'}}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full max-h-[320px] rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            style={{minHeight:'180px'}}
          />
        ) : (
          <div className="w-full h-[180px] flex items-center justify-center text-gray-400 text-sm">No Image</div>
        )}
      </div>
      {/* Prize & Participants */}
      <div className="flex items-center justify-between gap-4 mt-2 mb-1">
        <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-white/10 rounded-full px-4 py-1 text-white font-bold text-xs shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-cyan-400/30" style={{borderRadius:'9999px'}}>
          <Gift className="w-4 h-4 mr-1" />
          {prize}
        </div>
        <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-white/10 rounded-full px-4 py-1 text-white font-bold text-xs shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-cyan-400/30" style={{borderRadius:'9999px'}}>
          <Users className="w-4 h-4 mr-1" />
          {participants}
        </div>
      </div>
      {/* Description */}
      <div className="mt-2">
        <div className="rounded-xl bg-[rgba(255,255,255,0.07)] backdrop-blur-md border border-white/10 p-4 text-[#e0e0e0] text-[15px] leading-relaxed shadow-sm">
          {Array.isArray(description) ? (
            <ul className="list-disc pl-5 space-y-1">
              {description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          ) : (
            description
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard; 
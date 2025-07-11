import React from "react";
import { motion } from "framer-motion";
import { Calendar, Gift, Users } from "lucide-react";
import ShinyText from "./ShinyText";

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
      className="relative bg-[rgba(0,0,0,0.18)] backdrop-blur-md border border-white/10 rounded-[20px] shadow-lg p-6 flex flex-col gap-4 min-w-[320px] max-w-xl min-h-[420px] mx-auto transition-all duration-300 ease-in-out hover:scale-[1.045] hover:shadow-[0_0_32px_8px_rgba(56,189,248,0.18)] sm:p-6 p-2"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold mb-1 leading-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(56,189,248,0.7)]" style={{textShadow:'0 2px 8px #0e172a88'}}>
            {title}
          </h3>
          <div
            className="flex w-full min-w-0 items-center px-0 py-1 mb-2 mt-1 md:px-4 md:bg-white/5 md:backdrop-blur-sm md:border md:border-white/10 md:rounded-lg"
            style={{ fontFamily: 'Inter, Manrope, sans-serif' }}
          >
            <span
              className="flex-1 text-[clamp(0.95rem,2.5vw,1.08rem)] font-semibold text-left text-white/90 tracking-tight leading-snug break-words min-w-0 px-2 md:px-0"
            >
              <ShinyText text={event} className="w-full text-left" />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-cyan-100 whitespace-nowrap ml-4 mt-1 self-start">
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
            loading="lazy"
            className="object-cover w-full h-full max-h-[320px] rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
            style={{minHeight:'180px'}}
          />
        ) : (
          <div className="w-full h-[180px] flex items-center justify-center text-gray-400 text-sm">No Image</div>
        )}
      </div>
      {/* Prize & Participants */}
      <div className="flex items-center justify-between gap-4 mt-2 mb-1">
        {prize && (
          <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-white/10 rounded-full px-4 py-1 text-white font-bold text-xs shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-cyan-400/30" style={{borderRadius:'9999px'}}>
            <Gift className="w-4 h-4 mr-1" />
            {prize}
          </div>
        )}
        {participants && (
          <div className="flex items-center gap-2 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-white/10 rounded-full px-4 py-1 text-white font-bold text-xs shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-cyan-400/30" style={{borderRadius:'9999px'}}>
            <Users className="w-4 h-4 mr-1" />
            {participants}
          </div>
        )}
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
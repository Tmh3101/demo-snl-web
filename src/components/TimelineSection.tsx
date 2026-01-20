import { type FC, useState } from "react";

interface ActionIcon {
  icon: string;
  label: string;
  variant?: "default" | "warning";
}

interface ActivityLog {
  date: string;
  time: string;
  action: string;
  type: "water" | "agriculture" | "bug";
}

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  imageUrl: string;
  actions: ActionIcon[];
  position: "left" | "right";
  activities?: ActivityLog[];
}

interface TimelineItemProps {
  event: TimelineEvent;
}

const TimelineItem: FC<TimelineItemProps> = ({ event }) => {
  const isLeft = event.position === "left";
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start">
      {/* Content - Left or Right based on position */}
      <div
        className={`${
          isLeft
            ? "lg:text-right lg:pr-12 pt-4"
            : "lg:pl-12 pt-4 order-1 lg:order-2"
        }`}
      >
        <span className="text-primary text-4xl lg:text-6xl font-black opacity-30 block mb-2">
          {event.year}
        </span>
        <h4 className="text-2xl lg:text-3xl font-bold text-white mb-4 uppercase">
          {event.title}
        </h4>
        <p
          className={`text-base lg:text-lg text-slate-400 font-light leading-relaxed mb-6 lg:mb-8 max-w-md ${
            isLeft ? "lg:ml-auto" : ""
          }`}
        >
          {event.description}
        </p>

        <button
          className="mt-0 lg:mt-0 inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-all"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Xem chi tiết
          <span className={`material-symbols-outlined text-sm transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        </button>

        {/* Activity Details - Expandable */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-[1000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
          }`}
        >
          {event.activities && event.activities.length > 0 && (
            <div className={`glass-card rounded-lg border border-primary/20 p-6 ${
              isLeft ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'
            } max-w-xs`}>
              <h5 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-xs">history</span>
                Nhật ký hoạt động
              </h5>
              <div className="space-y-1 max-h-[180px] overflow-y-auto overflow-x-hidden px-2 custom-scrollbar">
                {event.activities.map((activity, idx) => {
                  const iconMap = {
                    water: { icon: "water_drop", color: "text-blue-400" },
                    agriculture: { icon: "agriculture", color: "text-green-400" },
                    bug: { icon: "bug_report", color: "text-red-400" }
                  };
                  const activityIcon = iconMap[activity.type];
                  
                  return (
                    <div 
                      key={idx} 
                      className={`relative pb-1 ${
                        isLeft 
                          ? 'pr-3 border-r-2 border-primary/20 last:border-r-0' 
                          : 'pl-3 border-l-2 border-primary/20 last:border-l-0'
                      } last:pb-0`}
                    >
                      {/* Timeline dot with icon */}
                      <div className={`absolute top-0 w-4 h-4 rounded-full bg-forest-dark border-2 border-primary flex items-center justify-center ${
                        isLeft 
                          ? 'right-0 translate-x-[5px]' 
                          : 'left-0 -translate-x-[5px]'
                      }`}>
                        <span className={`material-symbols-outlined text-xs leading-none ${activityIcon.color}`} style={{ fontSize: '8px' }}>
                          {activityIcon.icon}
                        </span>
                      </div>
                      
                      <div className="flex items-start justify-between gap-1 flex-wrap">
                        <div className="flex-1">
                        <div className={`flex items-center gap-0.5 mb-0 ${
                            isLeft ? 'justify-end' : 'justify-start'
                          }`}>
                            <span className="text-primary/60 text-[12px] font-bold">
                              {activity.date}
                            </span>
                            <span className="text-primary/40 text-[12px]">
                              {activity.time}
                            </span>
                          </div>
                          <p className={`text-white font-semibold text-[12px] ${
                            isLeft ? 'text-right' : 'text-left'
                          }`}>
                            {activity.action}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image - Right or Left based on position */}
      <div className={`${isLeft ? "lg:pl-12 flex justify-start" : "lg:pr-12 flex justify-end order-2 lg:order-1"}`}>
        <div className="glass-card p-2 lg:p-3 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl w-[60%]">
          <img
            alt={event.title}
            className="w-full aspect-[4/3] object-cover rounded-xl lg:rounded-2xl"
            src={event.imageUrl}
          />
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="timeline-dot top-8 hidden lg:block"></div>
    </div>
  );
};

interface TimelineSectionProps {
  events: TimelineEvent[];
}

const TimelineSection: FC<TimelineSectionProps> = ({ events }) => {
  return (
    <section className="py-16 lg:py-32 bg-forest-dark relative" id="timeline">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-24">
          <h3 className="text-primary text-xs lg:text-sm font-black uppercase tracking-[0.4em] mb-4">
            The 10-Year Journey
          </h3>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Dòng Thời Gian Di Sản
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-line hidden lg:block"></div>

          <div className="space-y-8 lg:space-y-8">
            {events.map((event, index) => (
              <TimelineItem key={index} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export type { TimelineEvent, ActionIcon };
export default TimelineSection;

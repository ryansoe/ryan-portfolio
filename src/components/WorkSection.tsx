import { work } from "@/presets/work";
import Image from "next/image";

const WorkSection = () => (
  <section className="my-16 px-4">
    <div className="max-w-full sm:max-w-[95%] lg:max-w-[50%] mx-auto">
      <div className="flex items-center justify-center gap-2 mb-5">
        <Image
          src="/icons/work.svg"
          alt="Work icon"
          width={24}
          height={24}
          className="w-10 h-10"
        />
        <h2 className="text-2xl font-bold">Experience</h2>
      </div>
      <div className="bg-white border-2 border-black p-4">
        {work.map((workItem, index) => (
          <div key={workItem.id}>
            <div className="flex items-center py-2">
              {/* Left side - Company logo */}
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 sm:w-10 sm:h-10 flex-shrink-0 overflow-hidden bg-gray-50 rounded-lg">
                  <Image
                    src={workItem.imageUrl}
                    alt={`${workItem.company} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h4 className="text-sm sm:text-lg font-medium text-black">
                  {workItem.company}
                </h4>
                <span className="text-[10px] sm:text-xs text-gray-400 font-roboto-mono whitespace-nowrap">
                  {workItem.date}
                </span>
              </div>

              {/* Spacer that becomes gray line on desktop */}
              <div className="flex-1 mx-2 sm:mx-3">
                <div className="hidden sm:block h-px bg-gray-300"></div>
              </div>

              {/* Right side - Job type */}
              <div className="text-right">
                <span className="text-xs sm:text-sm font-medium text-black font-roboto-mono">
                  {workItem.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;

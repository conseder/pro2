import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Code2 } from "lucide-react";

function Github() {
  return (
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 flex gap-[12px] justify-center items-center">
            Days I <span className="text-blue-900 dark:text-blue-400">Code</span>
            <div className="p-3 bg-blue-900 dark:bg-blue-800 rounded-lg">
              <Code2 className="w-8 h-8 text-white" />
            </div>
          </h2>
          <div className="w-24 h-1 bg-blue-900 dark:bg-blue-800 mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-800/30 p-8 rounded-2xl">
          <div className="flex items-center justify-center mb-8">
            
          </div>
          
          <div className="flex justify-center [&_text]:fill-gray-700 [&_text]:dark:fill-gray-200 [&_.react-activity-calendar__count]:!fill-gray-900 [&_.react-activity-calendar__count]:dark:!fill-white">
            <GitHubCalendar
              username="conseder"
              blockSize={15}
              blockMargin={5}
              fontSize={16}
              hideColorLegend={false}
              hideMonthLabels={false}
              labels={{
                totalCount: '{{count}} contributions in the last year'
              }}
              theme={{
                light: ['#e0f2fe', '#bae6fd', '#7dd3fc', '#0ea5e9', '#0369a1'],
                dark: ['#0c4a6e', '#0369a1', '#0284c7', '#0ea5e9', '#38bdf8']
              }}
            />
          </div>
          
          <p className="text-center text-gray-700 dark:text-gray-200 mt-6">
            A visual representation of my coding journey and contributions
          </p>
        </div>
      </div>
    </section>
  );
}

export default Github;
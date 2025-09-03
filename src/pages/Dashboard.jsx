import React from "react";
import { BookOpen, FileText, GraduationCap, TrendingUp, Calendar } from "lucide-react";

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-blue-600 text-white p-6 rounded-2xl shadow">
        <h1 className="text-2xl font-bold">Welcome back, Student 👋</h1>
        <p className="text-sm mt-1">Here’s your SAT prep progress at a glance.</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-3">
          <TrendingUp className="text-blue-600" size={28} />
          <div>
            <p className="text-gray-500 text-sm">Average Score</p>
            <h2 className="text-xl font-bold">1250</h2>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-3">
          <FileText className="text-green-600" size={28} />
          <div>
            <p className="text-gray-500 text-sm">Tests Completed</p>
            <h2 className="text-xl font-bold">5</h2>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-3">
          <Calendar className="text-purple-600" size={28} />
          <div>
            <p className="text-gray-500 text-sm">Next Test</p>
            <h2 className="text-xl font-bold">Sep 20</h2>
          </div>
        </div>
      </div>

      {/* Course Progress */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-600" /> Your Courses
        </h2>
        <div className="space-y-4">
          {/* Reading */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Reading & Writing</span>
              <span>70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
            </div>
          </div>
          {/* Math */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Math</span>
              <span>50%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full w-[50%]"></div>
            </div>
          </div>
          {/* Practice Tests */}
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Practice Tests</span>
              <span>30%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full w-[30%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <GraduationCap className="text-blue-600" /> Recent Activity
        </h2>
        <ul className="space-y-3 text-sm text-gray-700">
          <li>✅ Completed Practice Test 5 – Score: 1280</li>
          <li>📘 Finished "Algebra Basics" lesson</li>
          <li>📖 Read 3 passages in Reading section</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;

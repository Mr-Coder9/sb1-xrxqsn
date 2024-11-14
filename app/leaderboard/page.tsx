"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trophy, Medal, Award } from "lucide-react";

const MOCK_LEADERBOARD = [
  {
    rank: 1,
    username: "CodeMaster",
    score: 2500,
    solved: 120,
    languages: ["Python", "JavaScript", "Java"],
  },
  {
    rank: 2,
    username: "AlgorithmPro",
    score: 2350,
    solved: 115,
    languages: ["C++", "Python"],
  },
  {
    rank: 3,
    username: "ByteWizard",
    score: 2200,
    solved: 108,
    languages: ["JavaScript", "TypeScript"],
  },
];

export default function LeaderboardPage() {
  const [timeRange, setTimeRange] = useState("all-time");

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-time">All Time</SelectItem>
            <SelectItem value="monthly">This Month</SelectItem>
            <SelectItem value="weekly">This Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {MOCK_LEADERBOARD.slice(0, 3).map((user, index) => (
          <Card
            key={user.username}
            className="p-6 text-center relative overflow-hidden"
          >
            {index === 0 && (
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            )}
            {index === 1 && (
              <Medal className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            )}
            {index === 2 && (
              <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            )}
            <h3 className="text-xl font-bold mb-1">{user.username}</h3>
            <p className="text-3xl font-bold text-primary mb-2">
              {user.score.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">
              {user.solved} problems solved
            </p>
            <div className="flex flex-wrap gap-1 justify-center mt-2">
              {user.languages.map((lang) => (
                <span
                  key={lang}
                  className="text-xs bg-secondary px-2 py-1 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Rank</th>
                <th className="text-left p-4 font-medium">User</th>
                <th className="text-left p-4 font-medium">Score</th>
                <th className="text-left p-4 font-medium">Problems Solved</th>
                <th className="text-left p-4 font-medium">Languages</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_LEADERBOARD.map((user) => (
                <tr key={user.username} className="border-b">
                  <td className="p-4">{user.rank}</td>
                  <td className="p-4 font-medium">{user.username}</td>
                  <td className="p-4">{user.score.toLocaleString()}</td>
                  <td className="p-4">{user.solved}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {user.languages.map((lang) => (
                        <span
                          key={lang}
                          className="text-xs bg-secondary px-2 py-1 rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
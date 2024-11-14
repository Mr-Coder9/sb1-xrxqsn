"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Users, Clock, Code } from "lucide-react";

const MOCK_EXAM_ROOMS = [
  {
    id: "1",
    name: "Python Fundamentals Test",
    language: "Python",
    participants: 12,
    duration: "1 hour",
    startTime: "2024-03-25T10:00:00",
  },
  {
    id: "2",
    name: "JavaScript Advanced Exam",
    language: "JavaScript",
    participants: 8,
    duration: "2 hours",
    startTime: "2024-03-26T14:00:00",
  },
];

export default function ExamRoomsPage() {
  const [roomCode, setRoomCode] = useState("");

  const handleJoinRoom = (code: string) => {
    // TODO: Implement room joining logic
    console.log("Joining room with code:", code);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Exam Rooms</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Join with Code</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enter Room Code</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <Input
                placeholder="Enter room code"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={() => handleJoinRoom(roomCode)}
              >
                Join Room
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {MOCK_EXAM_ROOMS.map((room) => (
          <Card key={room.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{room.name}</h3>
                <p className="text-muted-foreground flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  {room.language}
                </p>
              </div>
              <Button>Join</Button>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {room.participants} participants
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {room.duration}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import CodeEditor from "@/components/code-editor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Play } from "lucide-react";

const SUPPORTED_LANGUAGES = [
  { id: "python", name: "Python", version: "3.9" },
  { id: "javascript", name: "JavaScript", version: "Node.js 16" },
  { id: "java", name: "Java", version: "11" },
  { id: "cpp", name: "C++", version: "17" },
];

export default function PracticePage() {
  const [language, setLanguage] = useState(SUPPORTED_LANGUAGES[0].id);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRunCode = async () => {
    setIsRunning(true);
    try {
      const response = await fetch("/api/compile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code }),
      });
      const data = await response.json();
      setOutput(data.output || data.error);
    } catch (error) {
      setOutput("Error running code. Please try again.");
    }
    setIsRunning(false);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Practice Coding</h1>
        <div className="flex items-center gap-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <SelectItem key={lang.id} value={lang.id}>
                  {lang.name} ({lang.version})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            onClick={handleRunCode}
            disabled={isRunning}
            className="w-[120px]"
          >
            {isRunning ? (
              "Running..."
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" /> Run Code
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-4">
          <CodeEditor
            language={language}
            value={code}
            onChange={setCode}
            height="60vh"
          />
        </Card>
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-2">Output</h2>
          <pre className="bg-secondary p-4 rounded-lg h-[60vh] overflow-auto">
            {output || "Run your code to see the output here..."}
          </pre>
        </Card>
      </div>
    </div>
  );
}
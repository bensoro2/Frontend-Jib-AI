"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FeatureToggle } from "@/components/features/landing/feature-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Paperclip, Send } from "lucide-react";
import { JSX } from "react";

type Message = {
  role: "user" | "bot";
  content: string;
};

const PromptButton = ({ text }: { text: string }) => (
  <Button
    variant="outline"
    className="h-auto rounded-full border-white/20 bg-white/5 px-4 py-2 text-sm font-light text-neutral-300 backdrop-blur-sm hover:bg-white/10"
  >
    {text}
  </Button>
);

export default function Page(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      content: "ช่วยวางแผนการลดหย่อนภาษี",
    },
    {
      role: "bot",
      content:
        "แน่นอนครับ! เพื่อที่จะแนะนำได้ดีที่สุด ขอทราบข้อมูลเบื้องต้นเกี่ยวกับรายได้และค่าลดหย่อนที่คุณมีอยู่แล้วได้ไหมครับ?",
    },
    {
      role: "user",
      content:
        "รายได้ต่อปีประมาณ 1,200,000 บาทครับ ยังไม่มีค่าลดหย่อนอื่นๆ เลย",
    },
    {
      role: "bot",
      content:
        "ขอบคุณสำหรับข้อมูลครับ จากรายได้ของคุณ ผมแนะนำให้พิจารณา SSF/RMF เพื่อลดหย่อนภาษีและเป็นการลงทุนระยะยาวไปในตัวครับ สนใจดูรายละเอียดเพิ่มเติมไหมครับ?",
    },
  ]);

  const rightPrompts = [
    "แนะนำกองทุน SSF / RMF",
    "สรุปเงื่อนไขการลดหย่อนภาษีปีล่าสุด",
  ];
  const leftPrompts = [
    "ช่วยฉันวางแผนการเดินทางไปญี่ปุ่น",
    "แนะนำกิจกรรมที่น่าสนใจในกรุงเทพฯ",
  ];

  return (
    <main className="flex max-h-[calc(100vh-64px)] h-full w-full flex-col items-center p-4 text-white">
      <div className="flex w-full max-w-3xl flex-1 flex-col justify-end gap-4 overflow-hidden">
        <ScrollArea className="h-full w-full pr-4">
          <div className="flex flex-col gap-4">
            {messages.length === 0 && (
              <div className="flex flex-col gap-8">
                <div className="flex w-full flex-col items-end gap-3 self-end">
                  {rightPrompts.map((prompt) => (
                    <PromptButton key={prompt} text={prompt} />
                  ))}
                </div>
                <div className="flex w-full flex-col items-start gap-3 self-start">
                  <PromptButton text="..." />
                  {leftPrompts.map((prompt) => (
                    <PromptButton key={prompt} text={prompt} />
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex w-full flex-col ${
                  message.role === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-[#6877FF]/10 shadow-[0px_0px_15px_rgba(0,0,0,0.5)] border border-white/50 rounded-lg"
                      : "bg-[radial-gradient(87.85%_133.63%_at_50.06%_0%,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] drop-shadow-[0px_0px_15px_rgba(0,0,0,0.5)] border border-white/50 rounded-lg"
                  }`}
                >
                  <p className="text-sm font-light">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="w-full max-w-3xl space-y-4 pb-4">
          <div className="w-full">
            <FeatureToggle />
          </div>
          <div className="w-full max-w-3xl space-y-3">
            <div className="px-6 flex flex-col justify-between h-[140px] w-full border rounded-3xl bg-[radial-gradient(87.85%_133.63%_at_50.06%_0%,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] [filter:drop-shadow(0px_0px_70px_rgba(130,136,190,0.25))] backdrop-blur-[15px] self-stretch text-base">
              <div className="mt-6 flex items-center w-full justify-between">
                <div className="grow">
                  <Input
                    placeholder="พิมพ์คำถามของคุณ..."
                    className="!bg-transparent !p-0 border-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="shrink-0 flex items-center space-x-2">
                  <Button
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    variant="ghost"
                  >
                    <Mic size={18} className="text-white" />
                  </Button>
                  <Button
                    size="icon"
                    className="h-8 w-8 rounded-full"
                    variant="ghost"
                  >
                    <Send size={18} className="text-white" />
                  </Button>
                </div>
              </div>
              <Button className="w-[140px] h-[38px] bg-[#FFFFFF03] border border-[#FFFFFF80] hover:bg-white/5 rounded-full mb-6 cursor-pointer">
                <Paperclip className="text-white mr-2" width={18} height={18} />
                <span className="text-white text-sm">แนบไฟล์</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

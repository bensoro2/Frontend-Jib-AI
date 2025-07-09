"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FeatureToggle } from "@/components/features/landing/feature-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Paperclip, Send } from "lucide-react";
import { JSX } from "react";
import { ProductCard } from "@/components/features/product-card";

export type ProductCardData = {
  type: "product";
  imageUrl: string;
  title: string;
  price: number;
  stock: number;
  features: string[];
};

type Message = {
  role: "user" | "bot";
  content: string | ProductCardData[];
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
      content: "ช่วยแนะนำโน้ตบุ๊กสำหรับเล่นเกมหน่อยครับ",
    },
    {
      role: "bot",
      content:
        "ได้เลยครับ! ผมเจอโน้ตบุ๊กที่น่าสนใจตรงกับความต้องการของคุณ ลองดูรายละเอียดด้านล่างนี้ได้เลยครับ",
    },
    {
      role: "bot",
      content: [
        {
          type: "product",
          imageUrl:
            "https://dlcdnwebimgs.asus.com/gain/39295DE5-3343-4B6B-A428-A7545B497746/w1000/h732",
          title: "ASUS ROG STRIX G17 G713",
          price: 36900,
          stock: 30,
          features: [
            "สาย HDMI 8K รองรับ HDR",
            "eARC และ 120Hz",
            "สำรองจอภาพพร้อมคอมโบโฮสต์",
            "พาเนลหน้าจอ IPS",
          ],
        },
        {
          type: "product",
          imageUrl:
            "https://dlcdnwebimgs.asus.com/gain/39295DE5-3343-4B6B-A428-A7545B497746/w1000/h732",
          title: "ASUS ROG STRIX G17 G713",
          price: 36900,
          stock: 30,
          features: [
            "สาย HDMI 8K รองรับ HDR",
            "eARC และ 120Hz",
            "สำรองจอภาพพร้อมคอมโบโฮสต์",
            "พาเนลหน้าจอ IPS",
          ],
        },
        {
          type: "product",
          imageUrl:
            "https://dlcdnwebimgs.asus.com/gain/39295DE5-3343-4B6B-A428-A7545B497746/w1000/h732",
          title: "ASUS ROG STRIX G17 G713",
          price: 36900,
          stock: 30,
          features: [
            "สาย HDMI 8K รองรับ HDR",
            "eARC และ 120Hz",
            "สำรองจอภาพพร้อมคอมโบโฮสต์",
            "พาเนลหน้าจอ IPS",
          ],
        },
        {
          type: "product",
          imageUrl:
            "https://dlcdnwebimgs.asus.com/gain/39295DE5-3343-4B6B-A428-A7545B497746/w1000/h732",
          title: "ASUS ROG STRIX G17 G713",
          price: 36900,
          stock: 30,
          features: [
            "สาย HDMI 8K รองรับ HDR",
            "eARC และ 120Hz",
            "สำรองจอภาพพร้อมคอมโบโฮสต์",
            "พาเนลหน้าจอ IPS",
          ],
        },
        {
          type: "product",
          imageUrl:
            "https://dlcdnwebimgs.asus.com/gain/39295DE5-3343-4B6B-A428-A7545B497746/w1000/h732",
          title: "ASUS ROG STRIX G17 G713",
          price: 36900,
          stock: 30,
          features: [
            "สาย HDMI 8K รองรับ HDR",
            "eARC และ 120Hz",
            "สำรองจอภาพพร้อมคอมโบโฮสต์",
            "พาเนลหน้าจอ IPS",
          ],
        },
      ],
    },
  ]);

  return (
    <main className="flex h-[calc(100vh-64px)] w-full flex-col items-center p-4 text-white">
      <div className="flex w-full max-w-3xl flex-1 flex-col justify-between gap-4 overflow-hidden">
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full w-full pr-4">
            <div className="flex flex-col gap-4 pb-4">
              {messages.map((message, index) => {
                if (typeof message.content === "string") {
                  return (
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
                  );
                }

                if (Array.isArray(message.content)) {
                  return (
                    <div key={index} className="w-full">
                      <div className="flex gap-4 overflow-x-auto pb-4">
                        {message.content.map((product, productIndex) => (
                          <ProductCard key={productIndex} product={product} />
                        ))}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </ScrollArea>
        </div>

        <div className="w-full space-y-4 pb-4">
          <div className="w-full">
            <FeatureToggle />
          </div>
          <div className="w-full space-y-3">
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

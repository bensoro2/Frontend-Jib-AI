import { Cpu, Search, Columns4, Send, Mic, Paperclip } from "lucide-react";
import { JSX } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FeatureCard from "@/components/features/landing/feature-card";
import { FeatureToggle } from "@/components/features/landing/feature-toggle";

export default function (): JSX.Element {
  return (
    <main className="flex max-h-screen w-full flex-col items-center justify-center space-y-12 p-4 text-white">
      <div className="text-center">
        <div>
          <Image
            src="/images/logo.png"
            alt="JIB AI Logo"
            width={92}
            height={58}
            className="mx-auto mb-4"
          />
        </div>
        <h2 className="mt-2 text-5xl font-bold bg-gradient-to-r from-white via-65% via-[#C1C1E1] to-100% to-[#0C0C8A] bg-clip-text text-transparent">
          ตัวช่วยส่วนตัวด้าน IT<span className="text-[#BDBDBD]">|</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm text-neutral-400">
          สอบถามข้อมูลสินค้า แนะนำสเปคคอมพ์ หรือจะให้ช่วยแก้ปัญหาเบื้องต้น AI
          ก็พร้อมให้คำแนะนำและช่วยเหลือแบบเรียลไทม์
        </p>
      </div>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        <FeatureCard
          icon={<Columns4 size={20} />}
          title="เปรียบเทียบสเปค"
          description="เลือกสินค้าที่คุณสนใจเพื่อดูการเปรียบเทียบ"
        />
        <FeatureCard
          icon={<Cpu size={20} />}
          title="จัดสเปคคอมพิวเตอร์"
          description="เราจะช่วยเลือกสเปคให้เหมาะกับการใช้งานของคุณให้ดีที่สุด"
          isPrimary={true}
        />
        <FeatureCard
          icon={<Search size={20} />}
          title="เช็คสินค้า"
          description="ค้นหาสินค้าที่คุณต้องการได้อย่างรวดเร็ว"
        />
      </div>

      <div className="w-full max-w-3xl space-y-6">
        <div className="w-full max-w-3xl">
          <FeatureToggle />
        </div>

        <div className="w-full max-w-3xl space-y-3">
          <div className="px-6 flex flex-col justify-between h-[140px] w-full border rounded-3xl bg-[radial-gradient(87.85%_133.63%_at_50.06%_0%,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] [filter:drop-shadow(0px_0px_70px_rgba(130,136,190,0.25))] backdrop-blur-[15px] self-stretch text-base">
            <div className="mt-6 flex items-center w-full justify-between">
              <div className="grow">
                <Input
                  placeholder="พิมพ์คำถามของคุณ หรือเลือกหัวข้อที่คุณสนใจ"
                  className="!bg-transparent !p-0 border-0 text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="shrink">
                <Button className="h-5 w-5 rounded-full" variant="ghost">
                  <Mic size={18} className="text-white" />
                </Button>
                <Button className="h-5 w-5 rounded-full" variant="ghost">
                  <Send size={18} className="text-white" />
                </Button>
              </div>
            </div>

            <Button className="w-[140px] h-[38px] bg-[#FFFFFF03] border border-[#FFFFFF80] hover:bg-white/5 rounded-full mb-6 cursor-pointer">
              <Paperclip className="text-white" width={18} height={18} />
              <span className="text-white text-sm">แนบรูปภาพ/ ไฟล์</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

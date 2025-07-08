import {
  Cpu,
  Search,
  Columns4,
  Send,
  Paperclip,
  Camera,
} from "lucide-react";
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
        <h2 className="mt-2 text-5xl font-bold bg-gradient-to-r from-white via-65% via-[#C1C1E1] to-100% to-[#0C0C8A] bg-clip-text text-transparent">ตัวช่วยส่วนตัวด้าน IT</h2>
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

      <div className="w-full max-w-3xl">
        <FeatureToggle />
      </div>

      <div className="w-full max-w-3xl space-y-3">
        <div className="relative h-[140px] border rounded-3xl border-neutral-700 bg-neutral-800/50 pl-6 pr-28 text-base backdrop-blur-sm">
          <Input
            placeholder="พิมพ์คำถามของคุณ หรือเลือกหัวข้อที่คุณสนใจ"
            className="h-14 mt-4 !bg-transparent"
          />
          <div className="absolute inset-y-0 right-4 flex items-center gap-x-2">
            <Button
              size="icon"
              className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700"
            >
              <Send size={20} />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

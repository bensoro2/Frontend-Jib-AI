"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const featureList = [
  "จัดสเปค",
  "เช็คสินค้า",
  "เปรียบเทียบสินค้า",
  "ประกันซ่อม",
  "ค้นหาสาขา",
];

export function FeatureToggle() {
  const [selectedFeature, setSelectedFeature] = useState("จัดสเปค");

  return (
    <ToggleGroup
      type="single"
      value={selectedFeature}
      onValueChange={(value) => {
        if (value) setSelectedFeature(value);
      }}
      className="flex flex-wrap justify-center gap-3"
    >
      {featureList.map((feature) => (
        <ToggleGroupItem
          key={feature}
          value={feature}
          className="border w-[120px] h-fit !py-1 border-neutral-700 bg-white/[1%] !text-sm text-neutral-300 hover:bg-neutral-800/30 !rounded-full data-[state=on]:bg-white/5 data-[state=on]:text-white"
        >
          {feature}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
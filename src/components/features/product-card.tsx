import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";

import { ProductCardData } from "@/app/[chat-id]/page";

export const ProductCard = ({ product }: { product: ProductCardData }) => (
  <div className="flex flex-col w-52 rounded-lg bg-white/5 border border-white/20 overflow-hidden text-sm shrink-0">
    <div className="bg-white/10 p-4">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={200}
        height={150}
        className="object-cover"
      />
    </div>
    <div className="p-3 flex flex-col gap-2">
      <p className="text-white font-semibold">{product.title}</p>
      <span className="text-neutral-400 text-xs">สต็อก: {product.stock}</span>
      <div className="flex justify-between items-center">
        <p className="text-white font-bold text-lg">
          ฿ {product.price.toLocaleString()}
        </p>
        <div className="flex gap-1">
          <button className="p-2 rounded-full hover:bg-white/10">
            <Heart size={16} />
          </button>
          <button className="p-2 rounded-full hover:bg-white/10">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
      <div className="mt-2 text-xs text-neutral-300 border-t border-white/10 pt-2">
        {product.features.map((feature, i) => (
          <p key={i}>• {feature}</p>
        ))}
      </div>
    </div>
  </div>
);

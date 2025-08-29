"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: { src: string; alt: string; description: string }[];
}

export function Modal({ isOpen, onClose, items }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg p-6 max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold mb-6 text-center text-white">주요 화면</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto max-h-[80vh]">
          {items.map((item, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-3">
              <Image
                src={item.src}
                alt={item.alt}
                width={1280}
                height={720}
                className="w-full h-auto rounded-md mb-3"
              />
              <p className="text-center text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
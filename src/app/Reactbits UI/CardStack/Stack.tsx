"use client";

import type React from "react";
/* eslint-disable @next/next/no-img-element */
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}: StackProps) {
  // Add state to track if we're on the client
  const [isClient, setIsClient] = useState(false);
  // Store random rotation values to ensure consistency
  const [rotationValues, setRotationValues] = useState<number[]>([]);

  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: "https://art.pixilart.com/sr2eeeebc64daaws3.gif" },
          {
            id: 2,
            img: "https://drct.pixilart.com/sizes/sr2f5d198785eaws3_400.png",
          },
          {
            id: 3,
            img: "https://drct.pixilart.com/sizes/sr2adbb9a1fe5aws3_400.png",
          },
          {
            id: 4,
            img: "https://drct.pixilart.com/sizes/sr2eda5b805b4aws3_400.png",
          },
          {
            id: 5,
            img: "https://drct.pixilart.com/sizes/sr23054f7dcb0aws3_400.png",
          },
        ]
  );

  // Generate random rotation values once on client-side
  useEffect(() => {
    if (randomRotation) {
      const values = cards.map(() => Math.random() * 10 - 5);
      setRotationValues(values);
    } else {
      setRotationValues(cards.map(() => 0));
    }
    setIsClient(true);
  }, [cards, cards.length, randomRotation]);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        // Use 0 for server-side rendering, and the pre-generated random value for client-side
        const randomRotate =
          isClient && rotationValues.length > index ? rotationValues[index] : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="rounded-2xl overflow-hidden border-4 border-white"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img || "NO IMG"}
                alt={`card-${card.id}`}
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}


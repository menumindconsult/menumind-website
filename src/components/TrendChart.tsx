"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface TrendPoint {
  label: string;
  value: number;
}

interface TrendChartProps {
  points: TrendPoint[];
  suffix?: string;
}

const WIDTH = 300;
const HEIGHT = 160;
const PAD_X = 34;
const PAD_Y_TOP = 16;
const PAD_Y_BOTTOM = 46;

export default function TrendChart({ points, suffix = "%" }: TrendChartProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { dir } = useLanguage();
  const isRtl = dir === "rtl";

  // In RTL, mirror the chart's reading order so the first data point sits on
  // the visual right (where Arabic reading naturally starts) and the most
  // recent point sits on the visual left, matching the page's own reading
  // direction rather than always rendering left-to-right regardless of language.
  const orderedPoints = isRtl ? [...points].reverse() : points;

  const values = orderedPoints.map((p) => p.value);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const plotHeight = HEIGHT - PAD_Y_TOP - PAD_Y_BOTTOM;

  const stepX = (WIDTH - PAD_X * 2) / (orderedPoints.length - 1);
  const coords = orderedPoints.map((p, i) => {
    const x = PAD_X + i * stepX;
    const normalized = (p.value - min) / range;
    const y = PAD_Y_TOP + (1 - normalized) * plotHeight;
    return { x, y, value: p.value, label: p.label };
  });

  const linePath = coords
    .map((c, i) => (i === 0 ? `M ${c.x} ${c.y}` : `L ${c.x} ${c.y}`))
    .join(" ");

  const baseline = HEIGHT - PAD_Y_BOTTOM;
  const areaPath =
    `M ${coords[0].x} ${baseline} ` +
    coords.map((c) => `L ${c.x} ${c.y}`).join(" ") +
    ` L ${coords[coords.length - 1].x} ${baseline} Z`;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className="w-full"
      style={{ aspectRatio: `${WIDTH} / ${HEIGHT}`, display: "block" }}
      preserveAspectRatio="xMidYMid meet"
      aria-label="Food cost trend chart showing improvement over the engagement"
      role="img"
    >
      <defs>
        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#C8A46B" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C8A46B" stopOpacity="0" />
        </linearGradient>
      </defs>

      <motion.path
        d={areaPath}
        fill="url(#trendFill)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />

      <motion.path
        d={linePath}
        fill="none"
        stroke="#DFC397"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {coords.map((c, i) => {
        // Always anchor the two edge labels INWARD toward the center of the
        // chart, regardless of language, so neither one ever has its text
        // extend past the SVG's own boundary. This avoids relying on
        // text-anchor="end" sitting flush against the edge, which is the
        // combination that was clipping the Arabic label.
        const isFirst = i === 0;
        const isLast = i === coords.length - 1;
        const anchor = isFirst ? "start" : isLast ? "end" : "middle";
        const textX = isFirst ? c.x + 2 : isLast ? c.x - 2 : c.x;
        return (
          <g key={i}>
            <motion.circle
              cx={c.x}
              cy={c.y}
              r="4.5"
              fill="#17233A"
              stroke="#DFC397"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.35 }}
            />
            <motion.text
              x={textX}
              y={HEIGHT - 28}
              textAnchor={anchor}
              className="font-stat"
              fontSize="16"
              fontWeight="700"
              fill="#DFC397"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.35 }}
            >
              {isRtl ? `${suffix}${c.value}` : `${c.value}${suffix}`}
            </motion.text>
            <motion.text
              x={textX}
              y={HEIGHT - 12}
              textAnchor={anchor}
              fontSize="10.5"
              fill="rgba(255,255,255,0.55)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.35 }}
            >
              {c.label}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}

"use client";

import { motion } from "framer-motion";

const trustStats = [
  { value: "300+", label: "Employees Trained" },
  { value: "14", label: "Restaurants Supported" },
  { value: "2", label: "Restaurant Openings" },
  { value: "65", label: "Team Members Managed" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy-deep pt-28 pb-0"
    >
      {/* Atmosphere: layered radial gradients standing in for premium hospitality ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_15%_20%,rgba(200,164,107,0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_85%_85%,rgba(23,35,58,0.5),transparent_55%)]" />
        <div className="absolute inset-0 bg-navy-deep/55" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10 lg:px-10">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-gold/40 px-4 py-1.5 text-[11.5px] font-semibold uppercase tracking-[2.5px] text-gold-light">
            Restaurant Operations Excellence
          </span>
          <h1 className="font-display text-[clamp(34px,5vw,58px)] font-semibold leading-[1.15] text-offwhite">
            Transforming Restaurant Operations Into{" "}
            <em className="italic text-gold-light">Profitable Growth</em>
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.85] text-offwhite/65 lg:text-[17px]">
            MenuMind helps restaurant owners improve profitability, strengthen
            teams, optimize operations, and deliver exceptional guest
            experiences through practical restaurant consulting and
            operational excellence programs.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-[12px] bg-gold px-8 py-4 text-[15px] font-semibold text-navy-deep transition-all hover:bg-gold-light hover:shadow-[0_12px_28px_-8px_rgba(200,164,107,0.45)]"
            >
              Book Free Consultation
            </a>
            <a
              href="#services"
              className="rounded-[12px] border border-offwhite/30 px-8 py-4 text-[15px] font-semibold text-offwhite transition-all hover:border-gold hover:text-gold-light"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Right: operational excellence dashboard visual */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-[460px]"
        >
          <div className="rounded-[20px] border border-offwhite/10 bg-navy/70 p-6 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-offwhite/80">
                Operational Snapshot
              </span>
              <span className="rounded-full bg-success-green/20 px-3 py-1 text-[11px] font-semibold text-success-green">
                On Track
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <DashCard label="Food Cost" value="27%" trend="-11pts" positive />
              <DashCard label="Service Speed" value="6.4m" trend="-2.1m" positive />
              <DashCard label="Guest Score" value="4.8" trend="+0.6" positive />
              <DashCard label="Staff Retention" value="84%" trend="+19pts" positive />
            </div>

            <div className="mt-5 rounded-[14px] bg-navy-deep/60 p-4">
              <div className="mb-3 flex items-center justify-between text-[12px] text-offwhite/55">
                <span>Quarterly Performance</span>
                <span>Q1 - Q4</span>
              </div>
              <div className="flex h-20 items-end gap-2">
                {[38, 52, 61, 47, 70, 64, 82, 91].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.06, ease: "easeOut" }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-gold/40 to-gold-light"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trust bar */}
      <div className="relative mt-16 border-t border-offwhite/10 bg-navy-deep/60 lg:mt-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-offwhite/10 px-6 py-9 text-center lg:border-l first:lg:border-l-0"
            >
              <span className="font-stat block text-[32px] font-bold text-gold-light">
                {stat.value}
              </span>
              <span className="mt-1.5 block text-[12.5px] text-offwhite/65">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashCard({
  label,
  value,
  trend,
  positive,
}: {
  label: string;
  value: string;
  trend: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-[12px] bg-navy-deep/50 p-3.5">
      <div className="text-[11px] text-offwhite/55">{label}</div>
      <div className="font-stat mt-1 text-[20px] font-bold text-offwhite">{value}</div>
      <div
        className={`mt-0.5 text-[11px] font-medium ${
          positive ? "text-success-green" : "text-gold-light"
        }`}
      >
        {trend}
      </div>
    </div>
  );
}

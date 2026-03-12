import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/shared/SectionHeading";
import PersonalBest from "../components/running/PersonalBest";

const personalBests = [
  { event: "Marathon", time: "2:15:26" },
  { event: "Half-Marathon", time: "64:07" },
  { event: "10 km", time: "29:15" },
  { event: "5 km", time: "14:11" },
  { event: "3 km", time: "8:14" },
];

const highlights = [
  "20th at the 2023 World 50km Championships",
  "6th at 2022 Firenze Marathon (Silver Label) — 2:17:07",
  "Winner of the 2022 USA 50km National Championship",
  "4th OA / 1st American at 2021 LA Marathon — 2:21:42",
  "73rd at 2020 U.S. Olympic Marathon Trials (Gold Label) — 2:21:54",
  "28th at the 2019 Chicago Marathon (Major) — 2:15:26",
  "9th / 1st American at 2019 Ottawa Marathon (Gold Label) — 2:22:10",
  "7th at 2017 British University Cross Country Championships",
  "8-time DIII All-American in Cross Country and Track",
  "Williams College school records in 10k, 5k, and 3k",
];

const media = [
  {
    title: "Day in the Life",
    description: "What a day in the life of a marathon runner and Ph.D. student looks like.",
    embedId: "Ud1VZJPanyg",
  },
  {
    title: "Ally Bank Olympics Commercial",
    description: "Shown as a guide for my friend, Newton.",
    embedId: "vk6m8vifpG8",
  },
];

export default function Running() {
  return (
    <div>
      <section className="bg-gradient-to-b from-stone-50 to-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading
            title="Running"
            subtitle="I compete in distances ranging from 5km to 50km on track, roads, and trails. I qualified for the 2020 and 2024 USA Olympic Trials Marathons and won the 2022 USA 50km Championships."
          />
        </div>
      </section>

      {/* PBs & Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-16">
          {/* PBs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-6">
              Personal Bests
            </h3>
            <div className="bg-white rounded-xl border border-stone-200 px-6 py-2">
              {personalBests.map((pb, i) => (
                <PersonalBest key={pb.event} event={pb.event} time={pb.time} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-6">
              Career Highlights
            </h3>
            <div className="space-y-3">
              {highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                  <p className="text-sm text-stone-700 leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media */}
      <section className="bg-stone-50 border-t border-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-8">
            Media Features
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {media.map((item, i) => (
              <motion.div
                key={item.embedId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.embedId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-stone-900 text-sm">{item.title}</h4>
                  <p className="mt-1 text-xs text-stone-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Podcast section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <h4 className="font-semibold text-stone-900 text-sm mb-4">D3 Glory Days Podcast</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <p className="text-xs text-stone-500 mb-3">
                  After my 2:15 marathon at Chicago — qualifying for the 2020 Olympic Trials.
                </p>
                <iframe
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  frameBorder="0"
                  height="175"
                  style={{ width: "100%", overflow: "hidden", background: "transparent", borderRadius: "8px" }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.podcasts.apple.com/us/podcast/episode-6-bijan-mazaheri-and-ryan-root/id1471391402?i=1000457234970"
                />
              </div>
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <p className="text-xs text-stone-500 mb-3">
                  Teaming up with D3 Glory Days to use LACCTiC for fair and accurate rankings.
                </p>
                <iframe
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  frameBorder="0"
                  height="175"
                  style={{ width: "100%", overflow: "hidden", background: "transparent", borderRadius: "8px" }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.podcasts.apple.com/us/podcast/episode-59-inter-regional-preview/id1471391402?i=1000538463193"
                />
              </div>
            </div>
          </motion.div>

          {/* Strava */}
          <div className="mt-8 text-center">
            <a
              href="https://www.strava.com/athletes/19477841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-200 text-sm font-medium text-stone-700 hover:bg-white hover:border-stone-300 transition-all"
            >
              Follow on Strava →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
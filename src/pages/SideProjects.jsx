import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";

export default function SideProjects() {
  return (
    <div>
      <section className="bg-[#CDDACA] border-b border-[#8FA49D]/30">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading title="Side Projects" subtitle="Things I build outside of my core research." />
        </div>
      </section>

      <section className="bg-[#CDDACA] max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#f8faf9] rounded-2xl border border-[#d4e4e0] overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-[#d4ebe4] text-[#49636e] text-xs font-medium rounded-full mb-3">
                  Sports Analytics
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3a525c]">LACCTiC</h3>
                <p className="mt-1 text-sm text-[#5a7580] italic">
                  Logarithmically Adjusted Cross Country Time Comparisons
                </p>
              </div>
              <a
                href="https://www.lacctic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-3 rounded-lg border border-[#d4e4e0] text-[#5a7580] hover:text-[#5b9bb5] hover:border-[#5b9bb5] hover:bg-[#e8f3ef] transition-all"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="mt-6 text-[#49636e] leading-relaxed max-w-3xl">
              A website I developed in 2021 to convert cross country performances from varying course difficulties to their track 5k equivalents. The results are used to provide sophisticated rankings and race simulations. Used by coaches and athletes across the NCAA.
            </p>

            <div className="mt-8 bg-[#e8f3ef] rounded-xl p-6 border border-[#d4e4e0]">
              <h4 className="font-semibold text-[#3a525c] mb-4">Algorithm Overview</h4>
              
              <div className="space-y-4 text-sm text-[#49636e] leading-relaxed">
                <p>
                  The main idea behind LACCTiC is to look at how finish times change across different courses. This won't be informative for a single runner, who may have had a good and bad race. However, the <em>average</em> across many runners should give an idea of the course's relative difficulty since the same number of people will have had good races and bad races.
                </p>

                <p>
                  Consider n runners who run m races. Notice that if we had runner fitness estimates, then we could use those estimates to estimate course adjustments. Similarly, if we had course adjustments, we could use those course adjustments to estimate runner fitness. We have neither, but we can start with a guess on some runners' fitnesses using their 5k PRs, then switch back and forth finding course adjustments and estimating fitnesses until we converge. This is sometimes called an "expectation maximization" approach.
                </p>

                <div className="border-l-2 border-[#5b9bb5] pl-4 py-2">
                  <p className="font-medium text-[#3a525c] mb-2">Step 1: Course Adjustment</p>
                  <p>
                    If you knew everyone's average 5k fitnesses f<sub>1</sub>, f<sub>2</sub>, …, f<sub>n</sub>, you could compare everyone's times t<sub>1</sub><sup>(j)</sup>, t<sub>2</sub><sup>(j)</sup>, …, t<sub>n</sub><sup>(j)</sup> in race j. Find α<sub>j</sub> that describes the ratio between times in race j and general fitnesses:
                  </p>
                  <p className="mt-3 font-mono text-xs px-3 py-2 bg-[#f0f7f4] rounded">
                    α<sub>j</sub> = (1/n) Σ<sub>i</sub> f<sub>i</sub>/t<sub>i</sub><sup>(j)</sup>
                  </p>
                  <p className="mt-2 text-xs">
                    Multiplying a runner's time on course j by α<sub>j</sub> gives the approximate 5k equivalent. Slower courses have slower times, meaning α<sub>j</sub> will be smaller.
                  </p>
                </div>

                <div className="border-l-2 border-[#5b9bb5] pl-4 py-2">
                  <p className="font-medium text-[#3a525c] mb-2">Step 2: Fitness Estimation</p>
                  <p>
                    If you knew all course adjustments (α<sub>1</sub>, α<sub>2</sub>, …, α<sub>m</sub>), you could give every runner a list of adjusted times. Average these to estimate each runner's fitness:
                  </p>
                  <p className="mt-3 font-mono text-xs px-3 py-2 bg-[#f0f7f4] rounded">
                    f<sub>i</sub> = Σ<sub>j</sub> α<sub>j</sub> t<sub>i</sub><sup>(j)</sup> / m
                  </p>
                </div>

                <p>
                  We alternate between these two computations until convergence. Finally, we shift everyone's adjustments and scores so that (on average) people's best converted times equate to their track PRs.
                </p>

                <p className="text-xs italic text-[#5a7580]">
                  Note: Not all runners run every course, but none of the equations require full participation. However, to get good results, we need to avoid "islands" — such as conferences that only race themselves with no comparison to the outside world.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Django", "Python", "AWS", "Statistics", "Cross Country"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/60 text-[#49636e] text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
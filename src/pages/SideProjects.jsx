import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function SideProjects() {
  return (
    <div className="bg-[#CDDACA] min-h-screen">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#243336]">LACCTiC</h1>
                <p className="mt-2 text-base text-[#5a7580] italic">
                  Logarithmically Adjusted Cross Country Time Comparisons
                </p>
              </div>
              <a
                href="https://www.lacctic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 rounded-lg bg-[#B26450] text-white hover:bg-[#9d5644] transition-colors flex items-center gap-2 text-sm font-medium"
              >
                Visit Site
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-[#f8faf9] rounded-xl shadow-lg p-8 md:p-12">

            <p className="text-[#49636e] leading-relaxed">
              A website I developed in 2021 to convert cross country performances from varying course difficulties to their track 5k equivalents. The results are used to provide sophisticated rankings and race simulations. Used by coaches and athletes across the NCAA.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-[#243336] mb-6 border-b border-[#8FA49D]/30 pb-2">Algorithm Overview</h2>
              
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
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
          className="bg-white rounded-2xl border border-[#d4e4e0] overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-[#d4ebe4] text-[#49636e] text-xs font-medium rounded-full mb-3">
                  Sports Analytics
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#3a525c]">LACCTiC</h3>
                <p className="mt-1 text-sm text-[#5a7580]">
                  Leveling Across Courses and Conditions by Time Comparison
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

                <div className="bg-white/50 rounded-lg p-4 border border-[#d4e4e0]">
                  <p className="font-medium text-[#3a525c] mb-2">Step 1: Course Adjustment</p>
                  <p>
                    If you knew everyone's average 5k fitnesses f₁, f₂, …, fₙ, you could compare everyone's times t₁⁽ʲ⁾, t₂⁽ʲ⁾, …, tₙ⁽ʲ⁾ in race j. Find αⱼ that describes the ratio between times in race j and general fitnesses:
                  </p>
                  <p className="mt-2 font-mono text-xs bg-white rounded px-3 py-2">
                    αⱼ = (1/n) ∑ᵢ fᵢ/tᵢ⁽ʲ⁾
                  </p>
                  <p className="mt-2 text-xs">
                    Multiplying a runner's time on course j by αⱼ gives the approximate 5k equivalent. Slower courses have slower times, meaning αⱼ will be smaller.
                  </p>
                </div>

                <div className="bg-white/50 rounded-lg p-4 border border-[#d4e4e0]">
                  <p className="font-medium text-[#3a525c] mb-2">Step 2: Fitness Estimation</p>
                  <p>
                    If you knew all course adjustments (α₁, α₂, …, αₘ), you could give every runner a list of adjusted times. Average these to estimate each runner's fitness:
                  </p>
                  <p className="mt-2 font-mono text-xs bg-white rounded px-3 py-2">
                    fᵢ = ∑ⱼ αⱼ tᵢ⁽ʲ⁾ / m
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
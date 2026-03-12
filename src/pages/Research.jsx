import React from "react";
import SectionHeading from "../components/shared/SectionHeading";
import ResearchTopicCard from "../components/research/ResearchTopicCard";
import PublicationItem from "../components/research/PublicationItem";

const researchTopics = [
  {
    title: "Confounder Identification",
    summary:
      "All unsupervised techniques rely on distributional assumptions to recover components or clusters. We propose using causal structures to help separate unconfounded components in data, expanding the notion of causal identifiability. We developed the first algorithm to learn mixtures of non-empty DAGs through a reduction from k-MixIID → k-MixProd → k-MixBND.",
  },
  {
    title: "Decision Fusion",
    summary:
      "Studies and experts often disagree — usually driven by differing contexts. Through decision fusion, I seek to understand when results from different settings conflict and what these disagreements indicate about the underlying system. Fascinatingly, the Condorcet Paradox from voting theory emerges naturally in networks of experts.",
  },
  {
    title: "Distribution Shift & Counterfactual Features",
    summary:
      "Features often contain a mixture of \"good\" and \"bad\" information. My work uses insights from causal inference to determine data-representations that sort between different components of information hidden in ambiguous features, improving model robustness to distribution shift.",
  },
  {
    title: "Genomic Cancer Classification",
    summary:
      "We process non-coding regions of the genome containing duplication and mutation signatures. These mutation profiles have been shown to be predictive of various forms of cancer, offering insight into cancer propensity from non-tumorous DNA.",
  },
];

const publications = [
  {
    title: "Synthetic Potential Outcomes and Causal Mixture Identifiability",
    authors: "B. Mazaheri, C. Uhler",
    venue: "2024",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Causal Discovery from Heterogeneous/Nonstationary Data with Mixture Models",
    authors: "B. Mazaheri, S. Bruck, L. Schulman",
    venue: "2024",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Optimal Sample Complexity for k-MixProd",
    authors: "B. Mazaheri, S. Bruck",
    venue: "2024",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Reweighting Paradoxes Under Covariate Shift",
    authors: "B. Mazaheri, M. Hardt, A. Mastakouri, D. Janzing",
    venue: "UAI 2023",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Causal Information Splitting: Engineering Proxy Features for Transfer Learning",
    authors: "B. Mazaheri, S. Bruck",
    venue: "2023",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Cumulative Distribution Reweighting",
    authors: "B. Mazaheri, S. Bruck",
    venue: "2022",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "The k-MixBND Problem",
    authors: "B. Mazaheri, S. Bruck, L. Schulman",
    venue: "2022",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Learning Mixtures of Product Distributions (k-MixProd)",
    authors: "B. Mazaheri, S. Bruck",
    venue: "2021",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "The k-MixIID Problem",
    authors: "B. Mazaheri, S. Bruck",
    venue: "2020",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Expert Graphs: Synthesizing New Expertise via Collaboration",
    authors: "B. Mazaheri, S. Bruck",
    venue: "ISIT 2020",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Biases in TCGA Pan-Cancer Germline Data",
    authors: "B. Mazaheri et al.",
    venue: "2019",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
  {
    title: "Cancer Classification from Mutation Profiles",
    authors: "B. Mazaheri, S. Shams, S. Bruck",
    venue: "2018",
    url: "https://scholar.google.com/citations?user=DXEdM48AAAAJ",
  },
];

export default function Research() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-50/30 to-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading
            title="Research"
            subtitle="I use tools from theoretical computer science and statistics — including sample complexity, mixture models, and causal inference — to answer questions about integrating causal knowledge, navigating data diversity tradeoffs, detecting manipulated data, and quantifying human performance in variable environments."
          />
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-wider text-xs mb-8">
          Research Areas
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          {researchTopics.map((topic, i) => (
            <ResearchTopicCard key={topic.title} topic={topic} index={i} />
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-wider text-xs">
              Publications
            </h3>
            <a
              href="https://scholar.google.com/citations?user=DXEdM48AAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-cyan-700 hover:text-cyan-800 transition-colors"
            >
              View all on Google Scholar →
            </a>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 px-6">
            {publications.map((pub, i) => (
              <PublicationItem key={pub.title} pub={pub} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
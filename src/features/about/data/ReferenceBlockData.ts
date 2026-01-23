import { ReferenceBlock } from "../types/ReferenceBlock";

export const accuracyDisclaimerTitle = "Accuracy Disclaimer";
export const accuracyDisclaimerText =
  "Every effort has been made to incorporate the most authentic and reliable versions of the Mahabharata and Ramayana into the Lipi Epics games. However, occasional errors or interpretational differences may occur. We encourage users to bring any discrepancies to our attention so they can be reviewed, verified, and corrected where necessary.";

export const originalContentCreationTitle = "Original Content Creation";
export const originalContentCreationText =
  "All images, videos, quizzes, tests, and visual guides depicting characters, places, and events are originally created by the Lipi Team.";

export const referenceBlocks: ReferenceBlock[] = [
  {
    id: "authenticity",
    title: "References & Content Authenticity",
    variant: "brown",
    content: [
      {
        type: "text",
        value:
          "The Mahabharata, Ramayana, Bhagavad Gita, Bhagavatam, and other Puranas are ancient texts that belong to India’s timeless heritage. For modern storytelling in an app-based format—using visuals, stories, videos, quizzes, and interactive learning—the content has been carefully curated from multiple authoritative sources and reviewed by subject-matter experts to ensure authenticity and accuracy.",
      },
      {
        type: "text",
        value:
          "The key individuals and reference materials consulted during content development are listed below.",
      },
    ],
  },
  {
    id: "finalization",
    title: "Content Finalization",
    variant: "blue",
    content: [
      { type: "text", value: "Overall Content Lead for the App" },
      { type: "list", items: ["Mr. Chaganti Prasad, Writer"] },
    ],
  },
  {
    id: "expert-review",
    title: "Expert Review & Consultation",
    variant: "brown",
    content: [
      {
        type: "text",
        value:
          "The Lipi Team consulted the following scholars and speakers for guidance on content authenticity and interpretation.",
      },
      {
        type: "text",
        value:
          "While their insights were invaluable, Lipi Inc. assumes full responsibility for all content published in the Lipi Epics App.",
      },
      {
        type: "text",
        value:
          "Consultation with these individuals does not imply direct or indirect endorsement of the app or its content.",
      },
      {
        type: "list",
        items: [
          "Sri Mallapragada Srimannarayana garu",
          "Sri Garikapati Narasimha Rao garu",
          "Sri Krishna Chaitanya (KC Talks) garu",
          "Sri Chaganti Koteswara Rao garu",
          "Sri Sama Vedaṁ Shanmukha Sharma garu",
        ],
      },
    ],
  },
  {
    id: "mahabharata",
    title: "Mahabharata Reference Publications",
    variant: "blue",
    content: [
      {
        type: "list",
        items: [
          "Kavitraya Virachita Srimandhra Mahabharatam — T.T.D. Publications, Tirupati",
          "Sri Mahabharatam — Gita Press, Gorakhpur",
          "Mahabharata Vijnana Sarvasvam — Dr. Gunji Venkata Ratnam",
        ],
      },
    ],
  },
  {
    id: "ramayana",
    title: "Ramayana References",
    variant: "brown",
    content: [
      {
        type: "text",
        value:
          "To honor and continue the legacy of accessible storytelling, the simple and engaging narrative style of Chandamama publications has been consciously adopted where appropriate.",
      },
      {
        type: "list",
        items: [
          "Chandamama Publications",
          "BORI (Bhandarkar Oriental Research Institute) Online Editions",
          "Gita Press Ramayana Editions",
          "Books by Pullela Ramachandra Rao",
        ],
      },
    ],
  },
];
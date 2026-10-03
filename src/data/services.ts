type Treatment = {
    title: string;
    slug: string;
    description: string;
    detailedDescription: string;
    bestFor: string[];
    focus: string[];
    image?: string;
    duration: string;
    price: string;
  };
  
export const services: Treatment[] = [
  
  {
    title: "Deep Cleansing Facial",
    slug: "deep-cleansing-facial",
    description:
      "A thorough cleansing treatment designed to remove impurities and refresh the skin.",
    detailedDescription:
      "A refreshing facial designed to cleanse the skin and remove everyday surface buildup. Ideal for skin that feels congested, oily or dull, this treatment focuses on leaving the complexion feeling clean, fresh and balanced.",
    bestFor: [
      "Congested or oily skin",
      "Visible pores",
      "Dull-looking skin",
      "Skin that feels heavy or unbalanced",
    ],
    focus: [
      "Deep cleansing",
      "Surface impurities",
      "Pore care",
      "Refreshing skin",
    ],
    image: "/images/treatment/details/deep_cleansing_facial.png",
    duration: "XX mins",
    price: "$XX",
  },

  {
    title: "Facial Massage",
    slug: "facial-massage",
    description:
      "A relaxing facial massage that promotes circulation and supports healthy-looking skin.",
    detailedDescription:
      "A relaxing facial massage created around comfort and self-care. Gentle massage techniques help create a calm treatment experience while leaving the skin feeling refreshed and the complexion looking revitalised.",
    bestFor: [
      "Tired-looking skin",
      "Dull-looking complexion",
      "Relaxation and self-care",
      "A calming facial experience",
    ],
    focus: [
      "Relaxation",
      "Gentle facial massage",
      "Refreshing care",
      "Self-care experience",
    ],
    image: "/images/treatment/details/facial_massage.png",
    duration: "XX mins",
    price: "$XX",
  },

  {
    title: "Aqua Drop Facial",
    slug: "aqua-drop-facial",
    description:
      "A hydration-focused treatment designed to restore moisture and improve skin balance.",
    detailedDescription:
      "A hydration-focused facial created to restore moisture and comfort to the skin. Ideal for skin that feels dry, tight or dull, this treatment leaves the complexion feeling soft, refreshed and replenished.",
    bestFor: [
      "Dry or dehydrated-feeling skin",
      "Dull-looking skin",
      "Skin needing extra hydration",
      "Tight or uncomfortable-feeling skin",
    ],
    focus: [
      "Hydration",
      "Moisture care",
      "Skin comfort",
      "Refreshing treatment",
    ],
    image: "/images/treatment/details/aqua_drop_facial.png",
    duration: "XX mins",
    price: "$XX",
  },

  {
    title: "Aqua Drop EGF",
    slug: "aqua-drop-egf",
    description:
      "Advanced hydration care with EGF skincare to support a refreshed-looking complexion.",
    detailedDescription:
      "An advanced hydration-focused facial combining moisture care with EGF skincare. Designed for skin that looks tired, dull or dehydrated, this treatment focuses on replenishing moisture and supporting a smoother, refreshed-looking complexion.",
    bestFor: [
      "Dehydrated or tired-looking skin",
      "Dull-looking complexion",
      "Skin needing hydration and conditioning",
      "Those seeking advanced skincare care",
    ],
    focus: [
      "Advanced hydration",
      "Moisture care",
      "Skin conditioning",
      "Refreshed appearance",
    ],
    image: "/images/treatment/details/aqua_drop_egf.png",
    duration: "XX mins",
    price: "$XX",
  },

  {
    title: "Microneedling",
    slug: "microneedling",
    description:
      "A collagen-supporting treatment designed to improve overall skin texture.",
    detailedDescription:
      "A professional treatment designed to improve the appearance of uneven skin texture, acne scarring and fine lines. Microneedling uses controlled micro-injuries to stimulate the skin's natural healing response and support collagen production.",
    bestFor: [
      "Uneven skin texture",
      "The appearance of acne scars",
      "Fine lines",
      "Uneven-looking skin",
    ],
    focus: [
      "Skin texture",
      "Collagen support",
      "Acne scar appearance",
      "Skin refinement",
    ],
    image: "/images/treatment/details/microneedling.png",
    duration: "XX mins",
    price: "$XX",
  },

  {
    title: "Dermaplaning",
    slug: "dermaplaning",
    description:
      "A gentle exfoliation treatment that removes dead skin cells and leaves skin smoother.",
    detailedDescription:
      "A gentle exfoliating treatment that removes surface dead skin cells and fine facial hair, helping reveal a smoother and more polished-looking complexion. Ideal for those looking to improve the feel and appearance of their skin texture.",
    bestFor: [
      "Dull-looking skin",
      "Uneven texture",
      "Fine facial hair",
      "Rough-feeling skin",
    ],
    focus: [
      "Gentle exfoliation",
      "Skin smoothness",
      "Texture refinement",
      "Polished finish",
    ],
    image: "/images/treatment/details/dermaplaning.png",
    duration: "XX mins",
    price: "$XX",
  },

  {
    title: "LED Therapy",
    slug: "led-therapy",
    description:
      "Light-based therapy designed to support skin recovery and overall skin appearance.",
    detailedDescription:
      "A gentle, non-invasive light-based treatment designed to complement your skincare routine. LED therapy can be incorporated into a personalised treatment plan to support a refreshed and healthy-looking complexion.",
    bestFor: [
      "Dull-looking skin",
      "Signs of skin ageing",
      "Redness-prone skin",
      "Skin needing complementary care",
    ],
    focus: [
      "Light-based skincare",
      "Non-invasive care",
      "Skin appearance",
      "Complementary treatment",
    ],
    image: "/images/treatment/details/led_therapy.png",
    duration: "XX mins",
    price: "$XX",
  },
];

export const addOns: Treatment[] = [
  {
    title: "Acne Care Mask",
    slug: "acne-care-mask",
    description:
      "A targeted mask treatment designed to provide gentle care for acne-prone and congested skin.",
    detailedDescription:
      "A targeted finishing mask selected according to your skin's needs. It is designed to provide gentle care for oily, congested or acne-prone skin and can be added to your facial for a more personalised treatment experience.",
    bestFor: [
      "Oily or congested skin",
      "Acne-prone skin",
      "Skin needing targeted care",
    ],
    focus: [
      "Targeted skincare",
      "Congestion care",
      "Personalised treatment",
    ],
    duration: "XX mins",
    price: "$XX",
  },

  {
    title: "Modeling Mask",
    slug: "modeling-mask",
    description:
      "A soothing mask treatment that helps refresh, hydrate, and leave the skin feeling soft and comfortable.",
    detailedDescription:
      "A soothing finishing mask designed to comfort and refresh the skin. Ideal as the final step of a facial, it creates a relaxing treatment experience while leaving the skin feeling soft and refreshed.",
    bestFor: [
      "Dry or dehydrated skin",
      "Tired-looking skin",
      "Skin needing soothing care",
    ],
    focus: [
      "Soothing care",
      "Hydration",
      "Skin comfort",
    ],
    duration: "XX mins",
    price: "$XX",
  },

  {
    title: "Plaster Mask",
    slug: "plaster-mask",
    description:
      "A professional finishing mask designed to provide a relaxing and refreshing final step to your treatment.",
    detailedDescription:
      "A professional finishing mask designed to complete your facial experience with a soothing and refreshing final step. The treatment can be selected according to your skin's needs and the overall facial plan.",
    bestFor: [
      "A relaxing finishing treatment",
      "Skin needing refreshing care",
      "Personalised facial routines",
    ],
    focus: [
      "Finishing care",
      "Relaxation",
      "Refreshing treatment",
    ],
    duration: "XX mins",
    price: "$XX",
  },
];
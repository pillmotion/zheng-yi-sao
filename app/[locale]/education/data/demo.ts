import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      avatar: {
        src: "/imgs/png2.png",
        title: "FizzDragon",
      },
      url: "/",
    },
    nav: {
      items: [
        {
          title: "官方网站",
          url: "https://fizzdragon.com",
          target: "_blank",
        },
        {
          title: "AIGC全球电影启动平台",
          url: "https://launchpad.fizzdragon.com",
          target: "_blank",
        },
        {
          title: "沸腾宇宙项目库",
          url: "/",
          target: "_self",
        },
        {
          title: "合作关系",
          url: "/partnerships",
          target: "_self",
        },
        {
          title: "AIGC教育与培训",
          url: "/education",
          target: "_self",
        },
      ],
    },
  },
  hero: {
    title: "致力全球一流AIGC教育与培训服务",
    image: {
      src: "/imgs/hero.png",
    },
    image_position: "right",
    text_align: "left",
  },
  section: {
    items: [
      {
        name: "who",
        title: "Who is she",
        description:
          "One of the top nine pirates in the world, and the only female pirate",
        image: {
          src: "/imgs/section5.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "The Only Female Top Pirate",
            description:
              "Ching Shih is the sole woman among the top nine pirates, highlighting her exceptional achievements and pioneering role",
          },
          {
            title: "Pioneering in Piracy",
            description:
              "Ching Shih broke gender norms in piracy, proving her extraordinary skills and leadership as one of the top nine pirates",
          },
          {
            title: "A Lasting Legacy",
            description:
              "Ching Shih’s leadership and success have established her as a powerful and influential figure in maritime history",
          },
        ],
      },
      {
        name: "how",
        title: "How did she rise",
        description: "From fishergirl to prostitute to pirate leader",
        image: {
          src: "/imgs/section4.png",
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "From Fishergirl to Pirate Leader",
            description:
              "Ching Shih’s rise from a fishergirl to a powerful pirate leader illustrates her extraordinary transformation and leadership",
          },
          {
            title: "Prostitute to Pirate Queen",
            description:
              "Ching Shih's shift from a life as a prostitute to leading a massive pirate fleet showcases her resilience and strategic brilliance",
          },
          {
            title: "Breaking Boundaries",
            description:
              "Ching Shih’s journey from marginalized beginnings to a renowned pirate leader highlights her impact on maritime history and gender roles",
          },
        ],
      },
      {
        name: "what",
        title: "What was her fleet like",
        description:
          "With a fleet of thousands of warships, commanding a pirate crew of over 100,000",
        image: {
          src: "/imgs/section6.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "A Fleet of Thousands",
            description:
              "Ching Shih commanded a massive fleet consisting of thousands of warships, demonstrating her strategic and logistical prowess in piracy",
          },
          {
            title: "Leading Over 100,000 Pirates",
            description:
              "With a crew exceeding 100,000, Ching Shih's leadership exemplified her ability to manage and coordinate a vast and formidable pirate organization",
          },
          {
            title: "The Power of a Vast Armada",
            description:
              "Ching Shih’s control over a huge fleet and a large crew solidified her status as one of the most powerful and influential pirates in history",
          },
        ],
      },
      {
        name: "What",
        title: "What does she symbolize",
        description:
          "The awakening of women's independence and choices of destiny",
        image: {
          src: "/imgs/section7.png",
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "The Rise of Women’s Independence",
            description:
              "Ching Shih’s rise to power signifies a major shift in women's roles and independence, showcasing her impact on breaking traditional gender barriers",
          },
          {
            title: "Empowering Women’s Choices",
            description:
              "Ching Shih’s journey from humble beginnings to pirate leader highlights the empowerment of women to make bold choices and shape their own destinies",
          },
          {
            title: "Redefining Female Leadership",
            description:
              "By leading a powerful pirate fleet, Ching Shih redefined female leadership and independence, setting a precedent for women's roles in history",
          },
        ],
        buttons: [
          {
            title: "Click to watch 👉",
            url: "https://fizzdragon.com",
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    title: "The world's first Chinese-language AIGC film",
    description: "",
    items: [
      {
        title: "Plot twists and breakthroughs",
        description:
          "A formidable female pirate, engages in a dramatic peace mission against the Qing dynasty. With boldness and cunning, she navigates tense negotiations, captivating audiences with her strategic prowess and plot twists. Her internal battles enrich her heroic portrayal, offering a gripping narrative.",
        avatar: {
          src: "/imgs/feature1.png",
        },
      },
      {
        title: "Comedic elements add creativity",
        description:
          "Blending historical grandeur with comedic irony, the story enlivens characters and highlights biases through humorous negotiations. The contrast between the heroic Zheng Yi Sao and the comic side characters adds a layer of fun to the narrative.",
        avatar: {
          src: "/imgs/feature2.png",
        },
      },
      {
        title: "Oriental Aesthetics, Chinese Philosophy",
        description:
          "Zheng Yi Sao, a pirate leader, epitomizes Eastern wisdom and the resilience of Chinese tradition. Her life, marked by victories over the British and adoption of Western naval techniques, symbolizes the blend of Eastern and Western cultures.",
        avatar: {
          src: "/imgs/feature3.png",
        },
      },
      {
        title: "Unique East-meets-West cultural clash",
        description:
          "In the 18th century, Western expansion led to cultural clashes with the East. Zheng Yi Sao's pirate group emerged from this conflict, symbolizing the complex integration of East and West. The story offers a taste of Eastern heroism and a deeper understanding of enduring philosophical insights.",
        avatar: {
          src: "/imgs/feature4.png",
        },
      },
      {
        title: "A distinctive female perspective",
        description:
          "Zheng Yi Sao is a heroic woman with both tenderness and bravery. She fought for her rights in a male-dominated era, showcasing the struggles and resilience of women of her time. Her story provides a unique and captivating view for viewers.",
        avatar: {
          src: "/imgs/feature5.png",
        },
      },
      {
        title: "Cultural resonance through shared roots",
        description:
          "The film explores Zheng Yi Sao's ties with Southeast Asia, reflecting the homeland nostalgia and immigrant struggles of overseas Chinese. It's a story that resonates with and inspires audiences across the region.",
        avatar: {
          src: "/imgs/feature6.png",
        },
      },
    ],
  },
  cta: {
    title: "Join the AIGC fan group",
    description: "",
    buttons: [
      {
        title: "Send an email",
        url: "mailto:business@fizzdragon.com",
        target: "_self",
      },
      {
        title: "Join the community",
        url: "https://launchpad.fizzdragon.com/forums",
        target: "_blank",
      },
    ],
  },
  testimonial: {
    title: "Our Journey",
    description: "",
    items: [
      {
        title: "The Pursuit of a Good Story",
        description: "Since graduating six years ago, I’ve often reflected on what it means to tell a good story. For writers, crafting a compelling narrative is a lifelong journey, one that we dedicate ourselves to fully. While there’s a shared understanding of what makes a story successful—like resonating with the market or captivating audiences—the question of what makes a bad story is much harder to define. This is where my exploration begins.",
        video: {
          src: "/videos/pax.mp4",
          poster: "/imgs/poster.png",
          title: "The Birth of FizzDragon",
        },
      },
    ],
  },
  faq: {
    title: "Information",
    description: "",
    items: [
      {
        title:
          'FizzDragon × Yiman | AIGC Creates the "Oriental Disney" Myth',
        description: "",
        url: "https://mp.weixin.qq.com/s/dWPigiTPtqpnW4HTSVy89w",
      },
      {
        title: "Boiling Universe AIGC Film Lab | Making Movies Like Assembling a Puzzle? A Nationwide Call for 10,000 Photos, Challenging the Limits of Imaginative Storytelling",
        description: "",
        url: "https://mp.weixin.qq.com/s/y59e7Y5r6HGvRfRewsf5Ew",
      },
      {
        title:
          'Exclusive Column | First Prize Winner of the Science Fiction Contest, Shao Ziqi, Signs Exclusive Deal with FizzDragon to Launch the "AIGC Version of Heaven’s Calculation," Paving the Way for Sci-Fi Novels to Enter AIGC Film Adaptation',
        description: "",
        url: "https://mp.weixin.qq.com/s/hwNOPVJ0pmdsTwmiGTzvLA",
      },
      {
        title:
          'Latest 3 Minutes | "Who is she?" "She is the new leader, the new queen of the Red Flag Gang!"',
        description: "",
        url: "https://mp.weixin.qq.com/s/w0FzqcTTge-e9XOI46TJuw",
      },
      {
        title:
          'Exclusive Column | Journey of Light! Chinese Nebula Award Rising Star and Author of the Sci-Fi Novel Aurora\'s Song, "Wang Xiaohai," Signs with FizzDragon',
        description: "",
        url: "https://mp.weixin.qq.com/s/QdDvS0T8SHDKcrBdbmo5vw",
      },
      {
        title:
          "Pax Speaks - Let Great Stories Happen and Be Heard",
        description: "",
        url: "https://mp.weixin.qq.com/s/R3z-z7Ih2hrABjbSykJaZA",
      },
      {
        title: 'Exclusive Column | When the Earth Boils! "Niangziguan Cup" First Prize Winner and Author of the Sci-Fi Novel Wish of Rebirth, Wang Yunxuan, Signs with FizzDragon',
        description: "",
        url: "https://mp.weixin.qq.com/s/2Ir88ASgY3diKcjFdLYqnQ",
      },
    ],
  },
  footer: {
    brand: {
      title: "FizzDragon",
      description: "",
      avatar: {
        src: "/imgs/png2.png",
        title: "FizzDragon",
      },
      url: "https://fizzdragon.com",
    },
    badge_disabled: false,
    copyright: "© 2024 • FizzDragon All rights reserved.",
    social: {
      items: [
        {
          title: "Youtube",
          url: "https://www.youtube.com/@FizzDragon-AIGC",
          target: "_blank",
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/chenzhuobieting",
          target: "_blank",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "产品",
          children: [
            {
              title: "官方网站",
              url: "https://fizzdragon.com",
              target: "_blank",
            },
            {
              title: "AIGC全球电影启动平台",
              url: "https://launchpad.fizzdragon.com",
              target: "_blank",
            },
          ],
        },
        {
          title: "联系我们",
          children: [
            {
              title: "+65 8132 3869",
              url: "tel:+6581323869",
              target: "_self",
            },
            {
              title: "business@fizzdragon.com",
              url: "mailto:business@fizzdragon.com",
              target: "_self",
            },
          ],
        },
      ],
    },
  },
};

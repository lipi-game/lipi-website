import React from 'react';

export const faqData = {
    General: [
      {
        q: "How do I play Lipi games?",
        a: (
          <p>
            All Lipi games can be played on mobile phones by downloading Lipi Apps from the Google Play Store (Android) or the Apple App Store (iOS). You can find the app links in the “Games” section. Our games are designed for a smooth, engaging mobile experience, allowing players to enjoy epic-inspired learning and word games anytime, anywhere.
          </p>
        )
      },
      {
        q: "What games are currently available on Lipi?",
        a: (
          <>
            <p>The following games and learning apps are currently available on Lipi:</p>
            <ul>
              <li><strong>Lipi Epics: Mahabharat & Ramayan</strong> – Learn India’s great epics through interactive gameplay, stories, and level-based progression.</li>
              <li><strong>Lipi Kids</strong> – A structured, fun learning app designed for children to build language, thinking, and foundational skills.</li>
              <li><strong>Brain Booster</strong> – Engaging word and brain games that strengthen vocabulary, memory, and cognitive skills across Indian languages and English.</li>
            </ul>
          </>
        )
      },
      {
        q: "What languages are currently supported on Lipi?",
        a: (
          <p>
            All Lipi apps are currently available in Telugu, Hindi, and English. We are actively working to add support for more Indian languages in the near future, making Lipi accessible to an even wider audience.
          </p>
        )
      },
      {
        q: "What is ‘phonetic keyboard’ in Lipi wordgames?",
        a: (
          <>
            <p>
              Lipi word games use a unique approach called ‘phonetic keyboard’ to enter simple to complex words without needing to remember the shapes and patterns of character formations for Matras (Gunimthams) and Conjugates (Vatthulu). Users must remember only the basic alphabet and type them the way a syllable sounds.
            </p>
            
            <div className="lipi-highlight">
              <p>For example, to get सा (సా) user to has to just type the phonetics of the syllable: स (స) and आ (ఆ).</p>
              <p>Similarly, to get क्र (క్ర), user must type the keys phonetically, it is first क (క) and then र (ర) with a Halant (Pollu) in between indicating the half-form of the second letter to combine.</p>
            </div>
            <p>
              In both the above examples, users do not have to remember the Matra (Gunimtham) shapes nor Conjugate (Vatthu) shapes. Remembering the base alphabets and typing the way we pronounce them will give the desired outcomes. With Lipi’s Phonetic Keyboard, users can learn how to enter very simple to highly complex text with less than 5 minutes of practice. Moreover, this approach will force the user to enter grammatically correct text in Indian languages preserving their structural simplicity, grammar, and beauty.
            </p>
          </>
        )
      }
    ],
    "Lipi Epics : Mahabharat & Ramayan": {
      "Mahabharat": [
        {
          q: "What is the objective of Lipi Epics: Mahabharat & Ramayan?",
          a: (
            <>
              <p>Lipi Epics: Mahabharat & Ramayan is a structured learning app designed to help users deeply understand India’s great epics through guided, level-based gameplay. The app presents the epics in Beginner, Intermediate, and Advanced modes, making learning accessible for all age groups and levels of familiarity.</p>
              <p>Each epic is divided into its traditional chapters—Parvas in the Mahabharat and Kandas in the Ramayan—and delivered through daily, bite-sized, visually engaging lessons.</p>
              
              <strong>Beginner & Intermediate Modes</strong>
              <ul>
                <li>Users can read or listen to 2–4 stories per day.</li>
                <li>Each session includes a comprehension test to reinforce learning.</li>
                <li>Visual Guides and test scores help users track progress.</li>
                <li>Users earn Lipi Coins upon successful completion.</li>
                <li>Two stories per day are unlocked by default; additional stories can be unlocked using Lipi Coins.</li>
              </ul>

              <strong>Advanced Mode</strong>
              <ul>
                <li>Users answer four questions per day, starting from the first Parva or Kanda.</li>
                <li>Responses can be submitted through keyboard input or multiple-choice options.</li>
                <li>The system provides scores, hints, and rewards such as Astras.</li>
                <li>Each question includes detailed explanations and contextual references for deeper understanding.</li>
                <li>After completing daily questions, users gain access to stories for reading and listening.</li>
              </ul>
              <p>The objective of Lipi Epics is to make the Mahabharat and Ramayan engaging, structured, and meaningful, helping learners build knowledge, values, and cultural understanding through consistent daily practice.</p>
            </>
          )
        },
        {
          q: "What is the recommended learning path for Mahabharat in Lipi App?",
          a: (
            <>
              <p>The Mahabharat is a vast epic filled with characters, places, relationships, and stories. To learn effectively:</p>
              <ul>
                <li>Begin with the Beginner or Intermediate modes to familiarize yourself with stories and relationships using the Visual Guide.</li>
                <li>Use Advanced mode in parallel for deeper engagement.</li>
                <li>Explore additional learning materials on Lipi Mahabharat’s social media pages (YouTube, Facebook, Instagram).</li>
              </ul>
            </>
          )
        },
        {
          q: "What are the References used to create Mahabharat content?",
          a: (
            <>
              <p>The content is curated from authentic publications and reviewed by experts to ensure accuracy:</p>
              <ul>
                <li>Kavitrya Virachita Srimandandhra Mahabharatam (T.T.D. Publications, Tirupati, India)</li>
                <li>Sri Mahabharatam (Gita Press, Gorakhpur India)</li>
                <li>Mahabharata Vijnana Sarvasvam by Dr. Gunji Venkatratnam (Emesco Books, Hyderabad, India)</li>
              </ul>
              <p>If you notice any discrepancies in the content given in the App, please report them for correction.</p>
            </>
          )
        },
        {
          q: "Can I play in multiple languages every day?",
          a: (
            <p>Yes, you can switch between available languages daily by selecting your preferred language in the ‘Settings’.</p>
          )
        },
        {
          q: "When will new questions come each day?",
          a: (
            <p>New questions and stories are released daily at 5:30 AM IST. Premium users can access all of the content any time without restrictions.</p>
          )
        },
        {
          q: "How do I get hints to respond to the questions?",
          a: (
            <>
              <strong>In Advanced mode:</strong>
              <p>For keyboard input, clicking the "Hint" button reveals:</p>
              <ul>
                <li>First click: the first letter of the response.</li>
                <li>Second click: the last letter.</li>
              </ul>
              <p>For multiple-choice questions, six options are provided, and hints help eliminate incorrect answers.</p>
              <p>Hints are not available in Beginner or Intermediate modes.</p>
            </>
          )
        },
        {
          q: "How are my responses used to compute my daily scores?",
          a: (
            <>
              <p>Here is how your ‘daily scores’ are computed in Advanced mode:</p>
              <ul>
                <li>Both questions answered correctly without hints: (100+100)/2 = 100%</li>
                <li>One question with one Hint and one without hints: (90 + 100)/2 = 95%</li>
                <li>One question with two Hints and second without hints: (80+100)/2 = 90%</li>
                <li>One question with one Hint and second with one hint: (90 +90)/2 = 90%</li>
                <li>One question with two Hints and second with one hint: (80+90)/2 = 85%</li>
                <li>Both questions are wrong: 0%</li>
              </ul>
              <p>
                Your daily scores will be tracked to compute ‘cumulative scores’ across days and questions. If you miss responding to play for certain days, you will still have to follow the sequence of the Parva so that learning is structured and in an order. Each Parva may have about 100 questions. Once you complete a certain number of questions across days and reach certain threshold cumulative scores, you will be achieving various levels starting from Vihari (Level-1) and all the way up to Brahma (Level-5). See ‘How to progress across levels’ for details.
              </p>
              <p>In Beginner and Intermediate modes, your scores and cumulative scores are computed based on the number of correct answers you give for the Tests.</p>
            </>
          )
        },
        {
          q: "What are Astras? When will they be rewarded?",
          a: (
            <>
              <p>Astras are rewards for competency and completion. They assist in answering questions.</p>
              
              <strong>Beginner & Intermediate modes: Earned based on test completion rates:</strong>
              <ul>
                <li>80%: Varun Astra</li>
                <li>85%: Naag Astra</li>
                <li>95%: Vajra Astra</li>
                <li>100%: Sammohan Astra</li>
              </ul>
              <strong>Advanced mode: Earned based on daily scores:</strong>
              <ul>
                <li>85%: Varun Astra</li>
                <li>90%: Naag Astra</li>
                <li>95%: Vajra Astra</li>
                <li>100%: Sammohan Astra</li>
              </ul>
            </>
          )
        },
        {
          q: "What are the powers of Astras?",
          a: (
            <>
              <strong>Beginner & Intermediate modes:</strong>
              <ul>
                <li>Varun Astra: Eliminates one wrong answer.</li>
                <li>Naag Astra: Eliminates two wrong answers.</li>
                <li>Vajra Astra: Eliminates one wrong answer for all test questions.</li>
                <li>Sammohan Astra: Eliminates two wrong answers for all test questions.</li>
              </ul>
              <strong>Advanced mode (Keyboard and Multiple-Choice options):</strong>
              <ul>
                <li>Varun Astra: Reveals one letter or removes one wrong option.</li>
                <li>Naag Astra: Reveals two letters or removes two wrong options.</li>
                <li>Vajra Astra: Reveals two letters for both questions or removes one wrong answer from two questions.</li>
                <li>Sammohan Astra: Reveals the full answer for one question or provides one correct option.</li>
              </ul>
            </>
          )
        },
        {
          q: "How and when do you use Astras?",
          a: (
            <p>Access the Astra inventory via the "Astras" icon in the app. Choose the appropriate Astra based on your needs. In Advanced mode, used Astras are replaced when questions are answered successfully.</p>
          )
        },
        {
          q: "Can I keep my Astras to future Parvas?",
          a: (
            <>
              <ul>
                <li><strong>Advanced mode:</strong> Unused Astras are converted into Lipi Coins.</li>
                <li><strong>Beginner & Intermediate modes:</strong> Astras carry over to future Parvas.</li>
              </ul>
            </>
          )
        },
        {
          q: "How do I see my earlier questions and their responses?",
          a: (
            <p>Click on the "Previous" button in the app to view completed Parvas and questions. Select to see past answers and explanations.</p>
          )
        },
        {
          q: "What is Visual Guide?",
          a: (
            <>
              <p>The Visual Guide is an interactive representation of characters, places, objects, and relationships. It is a treasure trove of vast information represented visually as a knowledge graph. Access it for:</p>
              
              <ul>
                <li><strong>Exploratory Learning:</strong> From the home page by clicking on ‘Visual Guide’ icon.</li>
                <li><strong>Contextual Learning:</strong> After completing daily tests or questions, click on the contextual images.</li>
              </ul>
            </>
          )
        },
        {
          q: "How to use Visual Guide?",
          a: (
            <>
              <p>If you reach the Visual Guide from Home Page of the App, you will find about one hundred selected images of important people and events. You can click on any of the images shown to learn more about that character.</p>
              <ul>
                <li><strong>Sort:</strong> Sort the provided images in alphabetical order or in the original time sequence.</li>
                <li><strong>Search:</strong> Go to your desired character directly by typing initial letters.</li>
              </ul>
              <p>You will also see a couple of drop-down boxes. From that list, you can go to any of the other characters curated by Lipi.Game App.</p>
              <p>In the ‘People’ drop-down box, select the character name that you want to visually explore. You can select either a ‘Names’ or ‘Episodes & Groups’ from the ‘Type’ drop-down menu. ‘Episodes & Groups’ will explain related events and groups of people such as ‘Pancha Pandavas’ etc.</p>
              <p>Clicking ‘Explore’ will give you an interactive picture connecting selected names with other related names. See the Legend below to understand the navigation.</p>
            </>
          )
        },
        {
          q: "How to use the interactive features of the Visual Guide?",
          a: (
            <p>Each item presented in the Visual Guide is interactive. You can click on the named bubbles to read about the character. You can click on the lines to understand the relationships between characters. You can double-click on the names to further explore that character’s relationships. See the legend picture above to understand various colors and usage.</p>
          )
        },
        {
          q: "How will I progress to various levels?",
          a: (
            <>
              <p>The progression levels are available only in Advanced mode. You will start at Level 0 (Arambh). You can achieve up to five levels in each Parva based on your competency. When you play the game regularly, both your daily scores and cumulative scores will be computed. When you complete a certain threshold number of questions and cross certain cumulative scores, you will progress to the next level.</p>
              
              <p>The available levels and scores needed to achieve them are explained below.</p>
              
              <strong>Levels:</strong>
              <ul>
                <li>Level-1: Vihari (Cruiser)</li>
                <li>Level-2: Chaturi (Smart)</li>
                <li>Level-3: Vijeta (Victor)</li>
                <li>Level-4: Saraswathi (Educated)</li>
                <li>Level-5: Brahma (The Learned)</li>
              </ul>

              <strong>Thresholds & Cumulative Scores for progression:</strong>
              <p>Each Parva may have 50 or more questions. To progress to a higher level, you should complete a minimum number of questions in that Parva and achieve a minimum cumulative score. The minimum requirement for each Level is shown below:</p>
              <ul>
                <li>Level-1: Complete at least 10% of questions and achieve cumulative score of at least 50%.</li>
                <li>Level-2: Complete at least 20% of questions and achieve cumulative score of at least 60%.</li>
                <li>Level-3: Complete at least 40% of questions and achieve cumulative score of at least 70%.</li>
                <li>Level-4: Complete at least 60% of questions and achieve cumulative score of at least 80%.</li>
                <li>Level-5: Complete at least 80% of questions and achieve cumulative score of at least 90%.</li>
              </ul>
              <p>For example, Aadiparva has 100 questions. Once you answer at least 10% (Ten questions), you get the eligibility to be considered for Level-1 (Vihari). Once your cumulative score exceeds 50%, you will be awarded that level. If you continue your learning by playing regularly and cross 20% of questions, you will get eligibility for the next level, but you need to keep a cumulative average of 60%. Similarly, to achieve the highest level (Level-5, Brahma), you need to complete at least 80% of the questions and exceed a cumulative score of more than 90%.</p>
              <p>Note that as you progress from each Level, if your subsequent cumulative scores drop, your levels also may drop. For example, you might achieve Level-4 (Saraswati) based on your initial scores but may drop down to Level-3 (Vijeta) if you do not maintain your scores.</p>
            </>
          )
        },
        {
          q: "How to share your success with friends and family?",
          a: (
            <p>Use the " Share" button on the scorecard to share results with friends and family. Your friends and family will receive your success along with engaging Mahabharat imagery of various key events.</p>
          )
        },
        {
          q: "How will I get Certified and by whom?",
          a: (
            <>
              <p>In Beginner and Intermediate modes, a digital certificate of completeness will be given by the Lipi Inc.</p>
              <p>In Advance mode, once you complete a Parva, based on the cumulative score and level you achieved, you will be provided with a Digital Certificate in the App. After you complete all the eighteen Parvas of Mahabharat game in the App, your cumulative score across all Parvas will be computed and verified for authenticity. Upon verification, a final certification will be awarded by Aria University, California, USA to qualified participants. This final certification will be awarded at the University’s annual convocation either in person or digitally.</p>
            </>
          )
        },
        {
          q: "What are Lipi Coins? What do I do with them?",
          a: (
            <>
              <p>Lipi Coins or Coins are a reward you get for completing various tasks such as taking tests, listening to stories, checking Visual Guide etc. You will also get Coins when you play other Word games in Lipi such as Daily Word, Word Cruise and Daily Jumble.</p>
              <p>In Mahabharat App, you can use Coins to buy Powers such as Boons & Timers. In future you can also use these Coins to buy other available items from the Store.</p>
              <p>In the Word games, you can use these Coins to buy letters, buy words etc. You can also gift Coins to your friends and family.</p>
            </>
          )
        },
        {
          q: "What are Powers? How do I acquire them?",
          a: (
            <>
              <p>In Beginner and Intermediate modes Powers can be acquired with Lipi Coins from the Store in the app. Currently two Powers are available:</p>
              <ul>
                <li><strong>Boons:</strong> You can skip a test using one Boon.</li>
                <li><strong>Timer:</strong> You can extend the default 30 seconds test time to 60 seconds with one Timer.</li>
              </ul>
            </>
          )
        },
        {
          q: "What is Streak? Why do I need to maintain it?",
          a: (
            <p>The Streak number shown on the Home page indicates your continuity of learning and commitment to your learning objectives. Your streak number will increase with each day when you complete at least one test in any mode. Maintaining streak is important. When you complete 7-day, 15-day and 30-day streaks, you will be given boons by the App. You will also get special content when you maintain higher streak, so make sure that you maintain continuity by learning daily.</p>
          )
        }
      ],
      "Ramayana": [
        {
          q: "What is the recommended learning path for Ramayan in Lipi Epics App?",
          a: (
            <>
              <p>The Ramayan is a vast epic filled with characters, places, relationships, and stories. To learn effectively:</p>
              <ul>
                <li>Begin with the Beginner mode to familiarize yourself with the basic story line.</li>
                <li>Use Visual Guide to understand relationships.</li>
                <li>Play ‘Match’ game for fun and retention.</li>
                <li>Explore additional learning materials on Lipi’s social media pages (YouTube, Facebook, Instagram).</li>
              </ul>
            </>
          )
        },
        {
          q: "What are the References used to create Ramayan content?",
          a: (
            <>
              <p>Ramayan is an ancient content. For modern story telling in the App format with visual imagery, stories, videos and tests, the content is curated from several publications given below and reviewed by experts to ensure accuracy. Simplistic story telling style and language of Chandamama publications was used to continue and respect that legacy. All the images, videos, questions, tests, visual guide depicting various characters and events were originally created by Lipi team.</p>
              <ul>
                <li>BORI Online Editions</li>
                <li>GITA Press Ramayana Editions</li>
                <li>Pullela Ramachandra Books</li>
                <li>Chandamama Publications</li>
              </ul>
              <p>If you notice any discrepancies in the content given in the App, please report them for correction.</p>
            </>
          )
        },
        {
          q: "Can I learn & play in multiple languages every day?",
          a: (
            <p>Yes, you can switch between available languages daily by selecting your preferred language.</p>
          )
        },
        {
          q: "When will new content come each day?",
          a: (
            <p>New questions and stories are released daily at 5:30 AM IST free of cost to users. Premium users can access all of the content any time without restrictions.</p>
          )
        },
        {
          q: "How do I see my earlier questions and their responses?",
          a: (
            <p>You can go back to previous Kanda from the Home page and check your past stories and questions.</p>
          )
        },
        {
          q: "What is Visual Guide?",
          a: (
            <>
              <p>The Visual Guide is an interactive representation of characters, places, objects, and relationships. It is a treasure trove of vast information represented visually as a knowledge graph. Access it for:</p>
              
              <ul>
                <li><strong>Exploratory Learning:</strong> From the home page by clicking on ‘Visual Guide’ icon.</li>
                <li><strong>Contextual Learning:</strong> After completing daily tests or questions, click on the contextual images.</li>
              </ul>
            </>
          )
        },
        {
          q: "How to use Visual Guide?",
          a: (
            <>
              <p>If you reach the Visual Guide from Home Page of the App, you will find about one hundred selected images of important people and events. You can click on any of the images shown to learn more about that character.</p>
              <ul>
                <li><strong>Sort:</strong> Sort the provided images in alphabetical order or in the original time sequence.</li>
                <li><strong>Search:</strong> Go to your desired character directly by typing initial letters.</li>
              </ul>
              <p>You will also see a couple of drop-down boxes. From that list, you can go to any of the other characters curated by Lipi Epics App.</p>
              <p>In the ‘People’ drop-down box, select the character name that you want to visually explore. You can select either a ‘Names’ or ‘Episodes & Groups’ from the ‘Type’ drop-down menu. ‘Episodes & Groups’ will explain related events and groups of people such as ‘Pancha Pandavas’ etc.</p>
              <p>Clicking ‘Explore’ will give you an interactive picture connecting selected names with other related names. See the Legend below to understand the navigation.</p>
            </>
          )
        },
        {
          q: "How to use the interactive features of the Visual Guide?",
          a: (
            <p>Each item presented in the Visual Guide is interactive. You can click on the named bubbles to read about the character. You can click on the lines to understand the relationships between characters. You can double-click on the names to further explore that character’s relationships. See the legend picture above to understand various colors and usage.</p>
          )
        },
        {
          q: "How to share your success with friends and family?",
          a: (
            <p>Use the "Share" button on the scorecard to share results with friends and family. Your friends and family will receive your success along with engaging Ramayan imagery of various key events.</p>
          )
        },
        {
          q: "How will I get Certified and by whom?",
          a: (
            <>
              <p>A digital certificate of completeness will be given in the App once you complete all the tests within a Kanda.</p>
              <p>After you complete all the seven Kandas of Ramayan in the App, your cumulative score across all Kandas will be computed and verified for authenticity. Upon verification, a final certification will be awarded by Aria University (California, USA) to qualified participants. This final certification will be awarded at the University’s annual convocation either in person or digitally.</p>
            </>
          )
        },
        {
          q: "What are Lipi Coins? What do I do with them?",
          a: (
            <>
              <p>Lipi Coins or Coins are a reward you get for completing various tasks such as taking tests, listening to stories, checking Visual Guide etc. You will also get Coins when you play other Word games in Lipi such as Daily Word, Word Cruise and Daily Jumble.</p>
              <p>In Ramayan App, you can use Coins to buy Powers such as Boons & Timers. In future you can also use these Coins to buy other available items from the Store.</p>
              <p>In the Word games, you can use these Coins to buy letters, buy words etc. You can also gift Coins to your friends and family.</p>
            </>
          )
        },
        {
          q: "What are Powers? How do I acquire them?",
          a: (
            <>
              <p>In Beginner and Intermediate modes Powers can be acquired with Lipi Coins from the Store in the App. Currently two Powers are available:</p>
              <ul>
                <li><strong>Boons:</strong> You can skip a test using one Boon.</li>
                <li><strong>Timer:</strong> You can extend the default 30 seconds test time to 60 seconds with one Timer.</li>
              </ul>
            </>
          )
        },
        {
          q: "What is Streak? Why do I need to maintain it?",
          a: (
            <p>The Streak number shown on the Home page indicates your continuity of learning and commitment to your learning objectives. Your streak number will increase with each day when you complete at least one test in any mode. Maintaining streak is important. When you complete 7-day, 15-day and 30-day streaks, you will be given boons by the App. You will also get special content when you maintain higher streak, so make sure that you maintain continuity by learning daily.</p>
          )
        }
      ]
    },
    "Lipi Kids": [
      {
        q: "What is Lipi Kids?",
        a: (
          <p>Lipi Kids is a structured learning app designed for children to build strong foundations in language, thinking skills, and early learning concepts through fun, interactive activities and games.</p>
        )
      },
      {
        q: "Who is Lipi Kids for?",
        a: (
          <p>Lipi Kids is ideal for young learners and early-grade children, helping them learn at their own pace while developing confidence in language and comprehension.</p>
        )
      },
      {
        q: "What does Lipi Kids help children learn?",
        a: (
          <>
            <p>Lipi Kids focuses on:</p>
            <ul>
              <li>Language development and vocabulary</li>
              <li>Early reading and comprehension</li>
              <li>Thinking and reasoning skills</li>
              <li>Learning through play and structured progression</li>
            </ul>
            <p>All content is designed to be age-appropriate, engaging, and easy to follow.</p>
          </>
        )
      },
      {
        q: "Which languages are supported in Lipi Kids?",
        a: (
          <p>Lipi Kids is currently available in Telugu, Hindi, and English. More Indian languages are being added soon.</p>
        )
      },
      {
        q: "How is Lipi Kids different from other kids learning apps?",
        a: (
          <>
            <p>Unlike generic learning apps, Lipi Kids combines:</p>
            <ul>
              <li>Structured learning paths instead of random games</li>
              <li>Indian language focus alongside English</li>
              <li>Play-based learning that builds thinking skills, not just screen time</li>
            </ul>
          </>
        )
      },
      {
        q: "Is Lipi Kids safe for children?",
        a: (
          <p>Yes. Lipi Kids is child-safe and parent-friendly, with age-appropriate content and no harmful or unsuitable material.</p>
        )
      },
      {
        q: "How can my child access Lipi Kids?",
        a: (
          <p>Lipi Kids can be downloaded from the Google Play Store and Apple App Store on mobile devices.</p>
        )
      },
      {
        q: "Does Lipi Kids require daily usage?",
        a: (
          <p>Daily usage is encouraged, but not mandatory. Even 10–15 minutes a day helps children make consistent learning progress.</p>
        )
      },
      {
        q: "Is Lipi Kids free or paid?",
        a: (
          <p>Lipi Kids is a paid app and offer premium features available through subscriptions or in-app purchases.</p>
        )
      },
      {
        q: "Can parents track their child’s progress?",
        a: (
          <p>Yes. Lipi Kids provides progress indicators and learning milestones to help parents understand their child’s learning journey.</p>
        )
      }
    ],
    "Brain Booster": [
      {
        q: "What is Brain Booster?",
        a: (
          <p>Brain Booster is a word and brain-training game designed to improve memory, focus, and thinking skills through fun, timed challenges.</p>
        )
      },
      {
        q: "Who is Brain Booster for?",
        a: (
          <p>Brain Booster is suitable for children, students, and adults. Anyone who enjoys word games, quizzes, and mental challenges can play and benefit from it.</p>
        )
      },
      {
        q: "What types of categories are available in Brain Booster?",
        a: (
          <>
            <p>Brain Booster offers category-based gameplay, allowing players to choose what they enjoy most. Categories include:</p>
            <ul>
              <li>Movies & Entertainment</li>
              <li>General Knowledge</li>
              <li>History</li>
              <li>Language & Vocabulary</li>
              <li>Mixed Brain Challenges</li>
            </ul>
          </>
        )
      },
      {
        q: "How does a Brain Booster game work?",
        a: (
          <>
            <p>Each Brain Booster game includes:</p>
            <ul>
              <li>7 hidden words</li>
              <li>A sentence-based hint for each word</li>
              <li>A 3-minute time limit to find all words</li>
            </ul>
            <p>Players must correctly identify all 7 words before the timer ends.</p>
          </>
        )
      },
      {
        q: "How do I find the words?",
        a: (
          <>
            <ul>
              <li>Read the sentence hint carefully.</li>
              <li>Type the correct word related to the chosen category.</li>
              <li>Each correct answer increases your score.</li>
            </ul>
          </>
        )
      },
      {
        q: "What if I can’t figure out a word?",
        a: (
          <>
            <p>If you’re stuck, you can use Coins to:</p>
            <ul>
              <li>Buy a letter of the word</li>
              <li>Unlock the complete word</li>
            </ul>
            <p>This helps you continue playing without frustration.</p>
          </>
        )
      },
      {
        q: "How can I earn coins?",
        a: (
          <>
            <p>Coins are earned by:</p>
            <ul>
              <li>Playing games successfully</li>
              <li>Completing rounds within the time limit</li>
              <li>Performing well in multiple games</li>
            </ul>
            <p>Better performance results in more coins.</p>
          </>
        )
      },
      {
        q: "How much time should I play daily?",
        a: (
          <p>Just 3-5 games a day is enough to sharpen thinking skills and vocabulary while keeping playtime balanced.</p>
        )
      },
      {
        q: "Which languages are supported in Brain Booster?",
        a: (
          <p>Brain Booster is currently available in Telugu, Hindi, and English. More Indian languages are coming soon.</p>
        )
      },
      {
        q: "Is Brain Booster safe for children?",
        a: (
          <p>Yes. Brain Booster offers age-appropriate, safe content and is designed to be enjoyable and educational for younger players.</p>
        )
      },
      {
        q: "Is Brain Booster free to play?",
        a: (
          <p>Brain Booster includes free gameplay, with optional in-app purchases for additional features or coins.</p>
        )
      },
      {
        q: "How can I download Brain Booster?",
        a: (
          <p>Brain Booster is available on the Google Play Store and Apple App Store for mobile devices.</p>
        )
      }
    ]
  };
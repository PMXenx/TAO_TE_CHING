// Complete Tao Te Ching passages data
const passages = [
    {
        number: 1,
        title: "The Way that can be spoken",
        text: "The Way that can be spoken is not the eternal Way. The name that can be named is not the eternal name. The nameless is the beginning of heaven and earth. The named is the mother of ten thousand things.",
        application: "Today, embrace the mystery of life without needing to label everything. Practice sitting quietly for five minutes, observing thoughts without naming them.",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&q=70"
    },
    {
        number: 2,
        title: "When people see things as beautiful",
        text: "When people see some things as beautiful, other things become ugly. Being and non-being create each other. Difficult and easy support each other.",
        application: "Notice how you create opposites in your mind today. When you judge something as 'bad,' pause and consider how this judgment creates suffering.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&q=70"
    },
    {
        number: 3,
        title: "Not exalting the gifted",
        text: "Not exalting the gifted prevents quarreling. Not collecting treasures prevents stealing. The wise therefore rule by emptying hearts and filling bellies.",
        application: "Simplify one area of your life today. Clean out a drawer, delete unnecessary apps, or unsubscribe from emails that create desire.",
        image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=300&q=70"
    },
    {
        number: 4,
        title: "The Way is empty",
        text: "The Way is empty but inexhaustible, bottomless, the ancestor of all things. It blunts sharpness, unties knots, softens glare.",
        application: "Create space in your day for emptiness. Between tasks, pause for thirty seconds of nothing. Notice how emptiness refreshes.",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300&q=70"
    },
    {
        number: 5,
        title: "Heaven and earth are impartial",
        text: "Heaven and earth are impartial; they see all things as straw dogs. The space between heaven and earth is like a bellows.",
        application: "Practice impartiality today by treating everyone with equal kindness. Notice your tendency to favor some and dismiss others.",
        image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=300&q=70"
    },
    {
        number: 6,
        title: "The valley spirit never dies",
        text: "The valley spirit never dies; it is the woman, primal mother. Her gateway is the root of heaven and earth.",
        application: "Connect with receptivity today. Listen more than you speak. Accept help when offered. Notice how receiving can be powerful.",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=300&q=70"
    },
    {
        number: 7,
        title: "Heaven and earth endure",
        text: "Heaven and earth endure forever. They are unborn, so ever living. The sage stays behind, thus he is ahead.",
        application: "Practice putting others first in small ways today. Hold the door, let someone go ahead in line. Notice how this fulfills you.",
        image: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=300&q=70"
    },
    {
        number: 8,
        title: "The highest good is like water",
        text: "The highest good is like water. Water gives life to all things and does not compete. It flows in places people reject.",
        application: "Be like water today. When you encounter resistance, flow around it rather than pushing through. Adapt to circumstances.",
        image: "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?w=300&q=70"
    },
    {
        number: 9,
        title: "Better to stop short",
        text: "Better to stop short than fill to the brim. Oversharpen the blade, and the edge will soon blunt. Retire when the work is done.",
        application: "Practice moderation today. Stop eating before completely full. End conversations while still enjoyable.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&q=70"
    },
    {
        number: 10,
        title: "Can you coax your mind",
        text: "Can you coax your mind from wandering and keep to the original oneness? Can you let your body become supple as a newborn child's?",
        application: "Return to simplicity today. Approach one task with beginner's curiosity. Let go of control and see what unfolds.",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&q=70"
    },
    {
        number: 11,
        title: "Thirty spokes share the wheel's hub",
        text: "Thirty spokes share the wheel's hub; it is the center hole that makes it useful. Shape clay into a vessel; it is the space within that makes it useful.",
        application: "Appreciate the value of space and emptiness today. Notice the pauses between words, the gaps in your schedule that provide rest.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&q=70"
    },
    {
        number: 12,
        title: "The five colors blind the eye",
        text: "The five colors blind the eye. The five tones deafen the ear. The five flavors dull the taste. Racing and hunting madden the mind.",
        application: "Reduce sensory overload today. Turn off notifications, eat a simple meal mindfully, spend time in quiet.",
        image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=70"
    },
    {
        number: 13,
        title: "Accept disgrace willingly",
        text: "Accept disgrace willingly. Accept misfortune as the human condition. Without a body, how could there be misfortune?",
        application: "When something goes wrong today, practice accepting it without resistance. Simply acknowledge 'This is part of being human.'",
        image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=300&q=70"
    },
    {
        number: 14,
        title: "Look, it cannot be seen",
        text: "Look, it cannot be seen - it is beyond form. Listen, it cannot be heard - it is beyond sound. Grasp, it cannot be held - it is intangible.",
        application: "Spend five minutes today sensing the invisible force that animates your life. Feel your breath moving without controlling it.",
        image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&q=70"
    },
    {
        number: 15,
        title: "The ancient Masters were profound",
        text: "The ancient Masters were profound and subtle. Watchful, like those crossing a winter stream. Alert, like those aware of danger.",
        application: "Move through your day with careful attention, like crossing a winter stream. Be alert to the present moment.",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300&q=70"
    },
    {
        number: 16,
        title: "Empty yourself of everything",
        text: "Empty yourself of everything. Let the mind rest at peace. The ten thousand things rise and fall while the Self watches their return.",
        application: "Take a break today to empty yourself completely. Watch thoughts arise and pass like clouds without engaging.",
        image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=300&q=70"
    },
    {
        number: 17,
        title: "The very highest is barely known",
        text: "The very highest is barely known by people. When actions are performed without unnecessary speech, people say, 'We did it ourselves!'",
        application: "Lead by example today without announcing your intentions. Help without seeking recognition.",
        image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=300&q=70"
    },
    {
        number: 18,
        title: "When the great Way is forgotten",
        text: "When the great Way is forgotten, kindness and morality arise. When wisdom and intelligence are born, the great pretense begins.",
        application: "Notice how rules arise when natural harmony is lost. Act from natural kindness rather than imposed morality.",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=300&q=70"
    },
    {
        number: 19,
        title: "Give up sainthood",
        text: "Give up sainthood, renounce wisdom, and it will be a hundred times better for everyone. It is more important to see the simplicity.",
        application: "Drop any pretense of being special today. Be genuinely yourself without trying to appear spiritual or good.",
        image: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=300&q=70"
    },
    {
        number: 20,
        title: "Give up learning",
        text: "Give up learning, and put an end to your troubles. Must I fear what others fear? I alone am drifting, not knowing where I am.",
        application: "Question your assumptions today. Allow yourself to not know, to drift without a fixed position.",
        image: "https://images.unsplash.com/photo-1533563541316-ff6dcab36fdc?w=300&q=70"
    },
    {
        number: 21,
        title: "The Master keeps her mind",
        text: "The Master keeps her mind always at one with the Way. The Way is ungraspable. How can her mind be at one with it? Because she doesn't cling to ideas.",
        application: "Practice not clinging to your ideas today. Allow your understanding to be fluid and flexible.",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&q=70"
    },
    {
        number: 22,
        title: "If you want to become whole",
        text: "If you want to become whole, first let yourself be broken. If you want to become straight, first let yourself be crooked.",
        application: "Embrace your imperfections today. Let yourself be vulnerable where you usually armor up.",
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&q=70"
    },
    {
        number: 23,
        title: "Express yourself completely",
        text: "Express yourself completely, then keep quiet. Be like the forces of nature: when it blows, there is only wind; when it rains, there is only rain.",
        application: "When you speak today, speak fully and authentically, then return to silence. Say what needs to be said, then stop.",
        image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=300&q=70"
    },
    {
        number: 24,
        title: "Those who stand on tiptoe",
        text: "Those who stand on tiptoe don't stand firm. Those who rush ahead don't go far. Those who try to shine dim their own light.",
        application: "Stop striving to impress today. Move at your natural pace. Let your light shine naturally.",
        image: "https://images.unsplash.com/photo-1476611317204-d5fec3af3d2a?w=300&q=70"
    },
    {
        number: 25,
        title: "There was something formless",
        text: "There was something formless and perfect before the universe was born. It is serene. Empty. Solitary. Unchanging. Infinite.",
        application: "Sense the eternal presence within you today. Rest in this serene emptiness for a few moments.",
        image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=300&q=70"
    },
    {
        number: 26,
        title: "The heavy is the root",
        text: "The heavy is the root of the light. The unmoved is the source of all movement. To be light is to lose one's root.",
        application: "Stay rooted in your center today. When chaos arises, return to the heavy stillness within.",
        image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=300&q=70"
    },
    {
        number: 27,
        title: "A good traveler has no fixed plans",
        text: "A good traveler has no fixed plans and is not intent upon arriving. A good artist lets intuition lead wherever it wants.",
        application: "Approach today like a good traveler - with openness rather than fixed plans. Let intuition guide one decision.",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=70"
    },
    {
        number: 28,
        title: "Know the male",
        text: "Know the male, yet keep to the female; receive the world in your arms. If you receive the world, the Way will never leave you.",
        application: "Balance your masculine and feminine energies today. Practice both assertiveness and receptivity.",
        image: "https://images.unsplash.com/photo-1507181179506-598491b53db4?w=300&q=70"
    },
    {
        number: 29,
        title: "Do you want to improve the world?",
        text: "Do you want to improve the world? I don't think it can be done. The world is sacred. It can't be improved.",
        application: "Stop trying to fix everything today. Accept one situation exactly as it is without attempting to improve it.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=70"
    },
    {
        number: 30,
        title: "Whoever relies on the Way",
        text: "Whoever relies on the Way doesn't try to force issues. For every force there is a counterforce. Violence always rebounds upon oneself.",
        application: "Use minimal force today. When you encounter resistance, step back rather than pushing harder.",
        image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=300&q=70"
    },
    {
        number: 31,
        title: "Weapons are instruments of fear",
        text: "Weapons are instruments of fear; all creatures hate them. The wise use them only when there is no choice.",
        application: "Examine your verbal weapons today - sarcasm, criticism, judgment. Practice speaking only from peace.",
        image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=300&q=70"
    },
    {
        number: 32,
        title: "The Way is forever undefined",
        text: "The Way is forever undefined. If leaders could center themselves in it, people would be content with their simple lives.",
        application: "Find contentment in simplicity today. Appreciate what you have. Let natural rhythms guide your day.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300&q=70"
    },
    {
        number: 33,
        title: "Knowing others is intelligence",
        text: "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power.",
        application: "Turn attention inward today. For every judgment about another, ask what it reveals about you.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=70"
    },
    {
        number: 34,
        title: "The great Way flows everywhere",
        text: "The great Way flows everywhere. All things depend upon it for life, and it does not turn away from them.",
        application: "Flow everywhere today like the Way. Help without choosing favorites. Accomplish good quietly.",
        image: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=300&q=70"
    },
    {
        number: 35,
        title: "All things will come",
        text: "All things will come to those who offer the world the great image of the Way. They find peace, security, and well-being.",
        application: "Offer peace instead of entertainment today. Provide calm presence rather than trying to be interesting.",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300&q=70"
    },
    {
        number: 36,
        title: "If you want to shrink something",
        text: "If you want to shrink something, you must first allow it to expand. The soft overcomes the hard.",
        application: "Practice indirect action today. To reduce stress, first acknowledge its full extent. Let softness be your strength.",
        image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=300&q=70"
    },
    {
        number: 37,
        title: "The Way never does anything",
        text: "The Way never does anything, yet through it all things are done. When there is silence, one finds the anchor of the universe.",
        application: "Accomplish through non-doing today. Set things in motion then step back. Feel anchored in the universe's center.",
        image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=300&q=70"
    },
    {
        number: 38,
        title: "The Master doesn't try to be good",
        text: "The Master doesn't try to be good, and is therefore truly good. True virtue is not conscious of itself as virtue.",
        application: "Stop trying to be good today. Let kindness flow naturally. Act from your authentic self.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&q=70"
    },
    {
        number: 39,
        title: "In harmony with the Way",
        text: "In harmony with the Way, the sky is clear, the earth is solid, all creatures flourish together.",
        application: "Notice where you're interfering with natural harmony. Let one situation resolve itself without intervention.",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=70"
    },
    {
        number: 40,
        title: "Return is the movement",
        text: "Return is the movement of the Way. Yielding is the way of the Way. All things are born of being.",
        application: "Practice returning today - to breath, to present, to simplicity. Yield in one conflict and watch strength emerge.",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=300&q=70"
    },
    {
        number: 41,
        title: "When superior people hear the Way",
        text: "When superior people hear of the Way, they immediately practice it. The path into the light seems dark.",
        application: "Embrace paradox today. When the way forward seems blocked, consider stepping back.",
        image: "https://images.unsplash.com/photo-1507181179506-598491b53db4?w=300&q=70"
    },
    {
        number: 42,
        title: "The Way gives birth to One",
        text: "The Way gives birth to One. One gives birth to Two. Two gives birth to Three. Three gives birth to all things.",
        application: "Find value in what others avoid today. Spend time in solitude. Discover gifts in the undesirable.",
        image: "https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=300&q=70"
    },
    {
        number: 43,
        title: "The softest thing",
        text: "The softest thing in the universe overcomes the hardest thing in the universe.",
        application: "Be like water wearing away stone today. Use gentle persistence. Let presence communicate more than words.",
        image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=300&q=70"
    },
    {
        number: 44,
        title: "Which is more important",
        text: "Which is more important, your name or your body? The more you grasp, the more you lose.",
        application: "Question your priorities today. Choose contentment over acquisition. Stop before excess.",
        image: "https://images.unsplash.com/photo-1523464862212-d6631d073194?w=300&q=70"
    },
    {
        number: 45,
        title: "True perfection seems imperfect",
        text: "True perfection seems imperfect, yet it is perfectly itself. True fullness seems empty.",
        application: "Embrace imperfect perfection today. Stop trying to fix what seems broken - it might be perfectly itself.",
        image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=300&q=70"
    },
    {
        number: 46,
        title: "When a country is in harmony",
        text: "When a country is in harmony with the Way, the factories make trucks and tractors. There is no greater illusion than fear.",
        application: "Transform fear into trust today. Lower one defense and see what happens. Convert weapons into tools.",
        image: "https://images.unsplash.com/photo-1502224562085-639556652f33?w=300&q=70"
    },
    {
        number: 47,
        title: "Without opening your door",
        text: "Without opening your door, you can open your heart to the world. The more you know, the less you understand.",
        application: "Travel inward today instead of outward. Close your eyes and see more clearly. Know less, understand more.",
        image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=300&q=70"
    },
    {
        number: 48,
        title: "In pursuit of knowledge",
        text: "In pursuit of knowledge, every day something is added. In pursuit of wisdom, every day something is dropped.",
        application: "Drop something today instead of adding. Let go of one belief or habit. Practice the art of subtraction.",
        image: "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?w=300&q=70"
    },
    {
        number: 49,
        title: "The Master has no mind",
        text: "The Master has no mind of her own. She is good to people who are good. She is also good to people who aren't good.",
        application: "Expand your goodness today to include those you judge. Work with others' perspectives rather than imposing yours.",
        image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=300&q=70"
    },
    {
        number: 50,
        title: "Between birth and death",
        text: "Between birth and death, three in ten are followers of life, three in ten are followers of death.",
        application: "Live fully today without clinging to life or fearing death. Move with ease knowing both are part of the Way.",
        image: "https://images.unsplash.com/photo-1516571748831-5d81767b788d?w=300&q=70"
    },
    {
        number: 51,
        title: "The Way gives life",
        text: "The Way gives life to all things and nurtures them. It gives life without possessing.",
        application: "Give without possessing today. Help someone without them knowing. Practice the Way's hidden virtue.",
        image: "https://images.unsplash.com/photo-1474398777795-42089e60c9c2?w=300&q=70"
    },
    {
        number: 52,
        title: "The universe began",
        text: "The universe began with the Mother of all things. Close your mouth, guard your senses, and life is ever full.",
        application: "Return to the source today. Spend less time with distractions and more with essential stillness.",
        image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=300&q=70"
    },
    {
        number: 53,
        title: "If I have even a little sense",
        text: "If I have even a little sense, I will walk on the main road. When the palace is splendid, the fields are full of weeds.",
        application: "Stay on your main road today. Tend to basics before luxuries. Care for essentials before decorations.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300&q=70"
    },
    {
        number: 54,
        title: "What is firmly established",
        text: "What is firmly established cannot be uprooted. Cultivate virtue in yourself, and virtue will be real.",
        application: "Build something lasting today. Plant seeds of virtue through one consistent practice.",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&q=70"
    },
    {
        number: 55,
        title: "Those filled with virtue",
        text: "Those who are filled with virtue are like newborn children. Their bones are soft, their muscles weak, but their grip is firm.",
        application: "Rediscover childlike wholeness today. Trust your natural protection. Be soft yet firm.",
        image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=300&q=70"
    },
    {
        number: 56,
        title: "Those who know don't talk",
        text: "Those who know don't talk. Those who talk don't know. Close your mouth, settle your dust.",
        application: "Practice knowing without talking today. Soften sharp edges. Give yourself to the flow continually.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=70"
    },
    {
        number: 57,
        title: "If you want to be a great leader",
        text: "If you want to be a great leader, you must learn to follow the Way. Stop trying to control.",
        application: "Lead by following today. Remove a rule rather than adding one. Let situations govern themselves.",
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=70"
    },
    {
        number: 58,
        title: "When the government is too intrusive",
        text: "When the government is too intrusive, people lose their spirit. If governed with tolerance, people are comfortable.",
        application: "Govern yourself with tolerance today. Loosen your grip on control. Trust more, supervise less.",
        image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=300&q=70"
    },
    {
        number: 59,
        title: "In caring for others",
        text: "In caring for others and serving heaven, there is nothing like moderation.",
        application: "Practice moderation in caring today. Give help without exhausting yourself. Serve without martyrdom.",
        image: "https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=300&q=70"
    },
    {
        number: 60,
        title: "Governing a large country",
        text: "Governing a large country is like frying a small fish. You spoil it with too much poking.",
        application: "Stop poking at problems today. Address issues with minimal intervention. Let small fish cook undisturbed.",
        image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=300&q=70"
    },
    {
        number: 61,
        title: "A great nation is like low land",
        text: "A great nation is like a low land where all streams flow. The one who yields, wins.",
        application: "Position yourself low today. Yield rather than dominate. Be like low land gathering all waters.",
        image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300&q=70"
    },
    {
        number: 62,
        title: "The Way is the treasure",
        text: "The Way is the treasure of the good person and the refuge of the bad.",
        application: "Be a refuge for someone struggling today. Offer presence rather than advice. Don't abandon the lost.",
        image: "https://images.unsplash.com/photo-1518709911915-712d5fd04677?w=300&q=70"
    },
    {
        number: 63,
        title: "Act without doing",
        text: "Act without doing; work without effort. Confront the difficult while it is still easy.",
        application: "Handle difficulties while small today. Break large tasks into tiny steps. Work without strain.",
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=300&q=70"
    },
    {
        number: 64,
        title: "What is at rest",
        text: "What is at rest is easy to grasp. Prevent trouble before it arises.",
        application: "Tend to things before they become problems. Address small irritations before they become conflicts.",
        image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=300&q=70"
    },
    {
        number: 65,
        title: "The ancient Masters",
        text: "The ancient Masters didn't try to educate people, but kindly taught them to not-know.",
        application: "Teach by helping others discover today. Admit what you don't know. Value not-knowing as wisdom's door.",
        image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=300&q=70"
    },
    {
        number: 66,
        title: "All streams flow to ocean",
        text: "All streams flow to the ocean because it is lower than they are. Humility gives it its power.",
        application: "Lead from below today. Put others' needs first. Lower yourself like the ocean.",
        image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=300&q=70"
    },
    {
        number: 67,
        title: "Three treasures",
        text: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
        application: "Practice your three treasures today. Simplify one situation. Be patient with frustration. Show compassion.",
        image: "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=300&q=70"
    },
    {
        number: 68,
        title: "The best warrior",
        text: "The best warrior is never aggressive. The best fighter is never angry.",
        application: "Win without competing today. Fight without anger. Be a warrior of peace.",
        image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&q=70"
    },
    {
        number: 69,
        title: "The generals have a saying",
        text: "The generals have a saying: Rather than make the first move it is better to wait and see.",
        application: "Practice strategic non-action today. In conflict, wait rather than attacking first.",
        image: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=300&q=70"
    },
    {
        number: 70,
        title: "My teachings are easy",
        text: "My teachings are easy to understand and easy to put into practice. If you want to know me, look inside your heart.",
        application: "Stop trying to intellectually understand. Look for wisdom in your heart rather than your head.",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300&q=70"
    },
    {
        number: 71,
        title: "Not-knowing is true knowledge",
        text: "Not-knowing is true knowledge. Presuming to know is a disease.",
        application: "Diagnose your 'knowing disease' today. Practice saying 'I don't know'. Heal through uncertainty.",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=300&q=70"
    },
    {
        number: 72,
        title: "When people lack awe",
        text: "When people lack a sense of awe, there will be disaster.",
        application: "Restore awe to your day. Marvel at something ordinary. Know your worth without displaying it.",
        image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&q=70"
    },
    {
        number: 73,
        title: "The Way of heaven",
        text: "The Way of heaven is to benefit, not to harm. The Way of the sage is to act, not to compete.",
        application: "Choose the bravery of restraint today. Act without competing. Trust heaven's mysterious favor.",
        image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=70"
    },
    {
        number: 74,
        title: "If people do not fear death",
        text: "If people do not fear death, then threatening them with death has no power.",
        application: "Stop trying to be the executioner in others' lives. Let natural consequences teach their lessons.",
        image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=300&q=70"
    },
    {
        number: 75,
        title: "When taxes are too high",
        text: "When taxes are too high, people go hungry. Why is life so hard? Because people take it too seriously.",
        application: "Stop taxing yourself today. Reduce self-demands. Take one thing less seriously.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=70"
    },
    {
        number: 76,
        title: "People are born soft",
        text: "People are born soft and supple; dead, they are stiff and hard.",
        application: "Choose softness over rigidity today. Stay supple in thinking. Be a disciple of life through flexibility.",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=300&q=70"
    },
    {
        number: 77,
        title: "The Way of heaven is like a bow",
        text: "The Way of heaven is like drawing a bow. The high is lowered, the low is raised.",
        application: "Balance your life like heaven balances a bow. Where you have excess, give. Where you lack, receive.",
        image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=300&q=70"
    },
    {
        number: 78,
        title: "Nothing in the world",
        text: "Nothing in the world is softer than water. Yet nothing is better at overcoming the hard and strong.",
        application: "Use water's wisdom today. Meet hardness with softness. Overcome resistance with gentle persistence.",
        image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=300&q=70"
    },
    {
        number: 79,
        title: "After a bitter quarrel",
        text: "After a bitter quarrel, some resentment remains. The sage keeps the left-hand portion of the contract.",
        application: "Let go of scorekeeping today. Focus on your part rather than demanding from others.",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=300&q=70"
    },
    {
        number: 80,
        title: "If a country is governed wisely",
        text: "If a country is governed wisely, its inhabitants will be content with their simple, everyday lives.",
        application: "Find contentment in your immediate life today. Stop seeking happiness elsewhere.",
        image: "https://images.unsplash.com/photo-1496450681664-3df85efbd29f?w=300&q=70"
    },
    {
        number: 81,
        title: "True words aren't eloquent",
        text: "True words aren't eloquent; eloquent words aren't true. The more she gives to others, the wealthier she is.",
        application: "Speak simply and truly today. Give without counting cost. End where you began - with simple truth.",
        image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=300&q=70"
    }
];
// Complete Tao Te Ching passages data
const passages = [
    {
                number: 1,
                title: "The Way that can be spoken",
                text: "The Way that can be spoken is not the eternal Way. The name that can be named is not the eternal name. The nameless is the beginning of heaven and earth. The named is the mother of ten thousand things. Ever desireless, one can see the mystery. Ever desiring, one can see the manifestations. These two spring from the same source but differ in name; this appears as darkness. Darkness within darkness. The gate to all mystery.",
                application: "Today, embrace the mystery of life without needing to label or define everything. Allow yourself to experience moments without immediately categorizing them as good or bad. Practice sitting quietly for five minutes, observing your thoughts without naming or judging them.",
                image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400",
                imageDesc: "Misty mountain path"
            },
            {
                number: 2,
                title: "When people see some things as beautiful",
                text: "When people see some things as beautiful, other things become ugly. When people see some things as good, other things become bad. Being and non-being create each other. Difficult and easy support each other. Long and short define each other. High and low depend on each other. Before and after follow each other. Therefore the Master acts without doing anything and teaches without saying anything.",
                application: "Notice how you create opposites in your mind today. When you judge something as 'bad,' pause and consider how this judgment creates suffering. Practice accepting one challenging situation today without labeling it, seeing it simply as part of the whole tapestry of experience.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
                imageDesc: "Mountain balance"
            },
            {
                number: 3,
                title: "Not exalting the gifted",
                text: "Not exalting the gifted prevents quarreling. Not collecting treasures prevents stealing. Not seeing desirable things prevents confusion of the heart. The wise therefore rule by emptying hearts and filling bellies, by weakening ambitions and strengthening bones. If people lack knowledge and desire, then intellectuals will not try to interfere. If nothing is done, then all will be well.",
                application: "Simplify one area of your life today. Clean out a drawer, delete unnecessary apps, or unsubscribe from emails that create desire for things you don't need. Notice how reducing external stimulation brings inner peace.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=400",
                imageDesc: "Simple stones"
            },
            {
                number: 4,
                title: "The Way is empty",
                text: "The Way is empty but inexhaustible, bottomless, the ancestor of all things. It blunts the sharpness, unties the knots, softens the glare, settles the dust. It is hidden but always present. I do not know whose child it is. It is older than the gods.",
                application: "Create space in your day for emptiness. Between meetings, tasks, or conversations, pause for thirty seconds of nothing. Don't check your phone or plan ahead. Just be empty and notice how this emptiness refreshes and renews you.",
                image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400",
                imageDesc: "Empty vessel"
            },
            {
                number: 5,
                title: "Heaven and earth are impartial",
                text: "Heaven and earth are impartial; they see all things as straw dogs. The wise are impartial; they see all people as straw dogs. The space between heaven and earth is like a bellows. The shape changes but not the form; the more it moves, the more it yields. More words count less. Hold fast to the center.",
                application: "Practice impartiality today by treating everyone you meet with equal kindness - the cashier, your boss, a stranger, a loved one. Notice your tendency to favor some and dismiss others. Return to treating all with equal respect.",
                image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=400",
                imageDesc: "Vast sky equality"
            },
            {
                number: 6,
                title: "The valley spirit never dies",
                text: "The valley spirit never dies; it is the woman, primal mother. Her gateway is the root of heaven and earth. It is like a veil barely seen. Use it; it will never fail.",
                application: "Connect with the feminine principle of receptivity today. Instead of pushing to make things happen, practice receiving what comes. Listen more than you speak. Accept help when offered. Notice how this receptive energy can be surprisingly powerful.",
                image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400",
                imageDesc: "Valley gateway"
            },
            {
                number: 7,
                title: "Heaven and earth endure",
                text: "Heaven and earth endure forever. Why do heaven and earth last forever? They are unborn, so ever living. The sage stays behind, thus he is ahead. He is detached, thus at one with all. Through selfless action, he attains fulfillment.",
                application: "Practice putting others first in small ways today. Hold the door, let someone go ahead in line, listen without waiting for your turn to speak. Notice how this 'staying behind' paradoxically fulfills you.",
                image: "https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=400",
                imageDesc: "Eternal mountains"
            },
            {
                number: 8,
                title: "The highest good is like water",
                text: "The highest good is like water. Water gives life to all things and does not compete. It flows in places people reject and so is like the Way. In dwelling, be close to the land. In meditation, go deep in the heart. In dealing with others, be gentle and kind. In speech, be true. In ruling, be just. In business, be competent. In action, watch the timing.",
                application: "Be like water today. When you encounter resistance, flow around it rather than pushing through. Adapt to the shape of your circumstances. Seek the humble position. Notice how gentleness accomplishes more than force.",
                image: "https://images.unsplash.com/photo-1455577380025-4321f1e1dca7?w=400",
                imageDesc: "Flowing river"
            },
            {
                number: 9,
                title: "Better to stop short",
                text: "Better to stop short than fill to the brim. Oversharpen the blade, and the edge will soon blunt. Amass a store of gold and jade, and no one can protect it. Claim wealth and titles, and disaster will follow. Retire when the work is done. This is the way of heaven.",
                application: "Practice moderation today. Stop eating before you're completely full. End a conversation while it's still enjoyable. Complete a task without perfecting every detail. Notice the satisfaction in having 'enough' rather than 'too much.'",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
                imageDesc: "Half-full glass"
            },
            {
                number: 10,
                title: "Can you coax your mind",
                text: "Can you coax your mind from its wandering and keep to the original oneness? Can you let your body become supple as a newborn child's? Can you cleanse your inner vision until you see nothing but the light? Can you love people and lead them without imposing your will? Can you deal with the most vital matters by letting events take their course? Can you step back from your own mind and thus understand all things?",
                application: "Practice returning to simplicity today. When your mind complicates things, ask 'What would a child do?' Approach one task with the curiosity and openness of a beginner. Let go of the need to control one situation and see what unfolds.",
                image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
                imageDesc: "Child's wonder"
            },
            {
                number: 11,
                title: "Thirty spokes share the wheel's hub",
                text: "Thirty spokes share the wheel's hub; it is the center hole that makes it useful. Shape clay into a vessel; it is the space within that makes it useful. Cut doors and windows for a room; it is the holes which make it useful. Therefore profit comes from what is there; usefulness from what is not there.",
                application: "Appreciate the value of space and emptiness today. Notice the pauses between words that make speech meaningful, the space in your home that allows movement, the gaps in your schedule that provide rest. Create more useful emptiness in your life.",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
                imageDesc: "Hollow bamboo"
            },
            {
                number: 12,
                title: "The five colors blind the eye",
                text: "The five colors blind the eye. The five tones deafen the ear. The five flavors dull the taste. Racing and hunting madden the mind. Precious things lead one astray. Therefore the wise are guided by what they feel and not by what they see. They let go of that and choose this.",
                application: "Reduce sensory overload today. Turn off notifications, eat a simple meal mindfully, spend time in quiet. When making a decision, check in with your inner feeling rather than being swayed by external attractions.",
                image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400",
                imageDesc: "Simple clarity"
            },
            {
                number: 13,
                title: "Accept disgrace willingly",
                text: "Accept disgrace willingly. Accept misfortune as the human condition. What do you mean by 'Accept disgrace willingly'? Accept being unimportant. Do not be concerned with loss or gain. This is called 'accepting disgrace willingly.' What do you mean by 'Accept misfortune as the human condition'? Misfortune comes from having a body. Without a body, how could there be misfortune?",
                application: "When something goes wrong today, practice accepting it without resistance. Instead of asking 'Why me?', simply acknowledge 'This is part of being human.' Notice how acceptance transforms your experience of difficulty.",
                image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=400",
                imageDesc: "Bowing bamboo"
            },
            {
                number: 14,
                title: "Look, it cannot be seen",
                text: "Look, it cannot be seen - it is beyond form. Listen, it cannot be heard - it is beyond sound. Grasp, it cannot be held - it is intangible. These three are indefinable; therefore they are joined in one. From above it is not bright; from below it is not dark: an unbroken thread beyond description. It returns to nothingness.",
                application: "Spend five minutes today trying to sense the invisible force that animates your life. Feel your breath moving without controlling it. Notice the life force that beats your heart. Appreciate this invisible mystery that sustains you.",
                image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400",
                imageDesc: "Invisible mist"
            },
            {
                number: 15,
                title: "The ancient Masters were profound",
                text: "The ancient Masters were profound and subtle. Their wisdom was unfathomable. Because it was unfathomable, all we can do is describe their appearance: Watchful, like those crossing a winter stream. Alert, like those aware of danger. Courteous, like visiting guests. Yielding, like ice about to melt. Simple, like uncarved blocks of wood.",
                application: "Move through your day with the careful attention of someone crossing a winter stream. Be alert to the present moment, courteous to all you meet, ready to yield when appropriate. Practice the dignified simplicity of the ancient masters.",
                image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400",
                imageDesc: "Winter stream crossing"
            },
            {
                number: 16,
                title: "Empty yourself of everything",
                text: "Empty yourself of everything. Let the mind rest at peace. The ten thousand things rise and fall while the Self watches their return. They grow and flourish and then return to the source. Returning to the source is stillness, which is the way of nature. The way of nature is unchanging. Knowing constancy is insight.",
                application: "Take a break today to empty yourself completely. Sit quietly and watch your thoughts and feelings arise and pass away like clouds. Don't engage with them; just observe their coming and going. Return to the stillness beneath all movement.",
                image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=400",
                imageDesc: "Still pond surface"
            },
            {
                number: 17,
                title: "The very highest is barely known",
                text: "The very highest is barely known by people. Then comes that which they know and love. Then that which is feared. Then that which is despised. Those who do not trust enough will not be trusted. When actions are performed without unnecessary speech, people say, 'We did it ourselves!'",
                application: "Lead by example today without announcing your intentions. Help without seeking recognition. Accomplish tasks so naturally that others feel they did it themselves. Practice invisible leadership through quiet action.",
                image: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?w=400",
                imageDesc: "Subtle presence"
            },
            {
                number: 18,
                title: "When the great Way is forgotten",
                text: "When the great Way is forgotten, kindness and morality arise. When wisdom and intelligence are born, the great pretense begins. When there is no peace within the family, filial piety and devotion arise. When the country is confused and in chaos, loyal ministers appear.",
                application: "Notice today how rules and regulations arise when natural harmony is lost. In your interactions, try operating from natural kindness rather than imposed morality. Act from your heart's wisdom rather than from shoulds and oughts.",
                image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400",
                imageDesc: "Wild forest path"
            },
            {
                number: 19,
                title: "Give up sainthood",
                text: "Give up sainthood, renounce wisdom, and it will be a hundred times better for everyone. Give up kindness, renounce morality, and people will rediscover filial piety and love. Give up ingenuity, renounce profit, and bandits and thieves will disappear. These three are outward forms alone; they are not sufficient in themselves. It is more important to see the simplicity, to realize one's true nature.",
                application: "Drop any pretense of being special or wise today. Be genuinely yourself without trying to appear spiritual or good. Notice how this authenticity naturally brings out the best in your interactions with others.",
                image: "https://images.unsplash.com/photo-1537420327992-d6e192287183?w=400",
                imageDesc: "True simplicity"
            },
            {
                number: 20,
                title: "Give up learning",
                text: "Give up learning, and put an end to your troubles. Is there a difference between yes and no? Is there a difference between good and evil? Must I fear what others fear? What nonsense! Other people are contented, enjoying the sacrificial feast of the ox. In spring some go to the park and climb the terrace, but I alone am drifting, not knowing where I am.",
                application: "Question your assumptions today. What beliefs do you hold simply because others do? Choose one opinion you've always had and explore its opposite. Allow yourself to not know, to drift without a fixed position.",
                image: "https://images.unsplash.com/photo-1533563541316-ff6dcab36fdc?w=400",
                imageDesc: "Drifting clouds"
            },
            {
                number: 21,
                title: "The Master keeps her mind",
                text: "The Master keeps her mind always at one with the Way; that is what gives her radiance. The Way is ungraspable. How can her mind be at one with it? Because she doesn't cling to ideas. The Way is dark and unfathomable. How can it make her radiant? Because she lets it. Since before time and space were, the Way is. It is beyond is and is not.",
                application: "Practice not clinging to your ideas today. When you catch yourself insisting on being right, loosen your grip. Allow your understanding to be fluid and flexible. Let wisdom come through you rather than from you.",
                image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400",
                imageDesc: "Radiant openness"
            },
            {
                number: 22,
                title: "If you want to become whole",
                text: "If you want to become whole, first let yourself be broken. If you want to become straight, first let yourself be crooked. If you want to become full, first let yourself be empty. If you want to be reborn, first let yourself die. If you want to be given everything, give everything up. The Master, by residing in the Way, sets an example for all beings.",
                application: "Embrace your imperfections today. Instead of hiding your weaknesses, acknowledge them openly. Let yourself be vulnerable in one situation where you usually armor up. Notice how this acceptance of brokenness leads to wholeness.",
                image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400",
                imageDesc: "Broken becoming whole"
            },
            {
                number: 23,
                title: "Express yourself completely",
                text: "Express yourself completely, then keep quiet. Be like the forces of nature: when it blows, there is only wind; when it rains, there is only rain; when the clouds pass, the sun shines through. If you open yourself to the Way, you are at one with the Way and you can embody it completely. If you are open to insight, you are at one with insight.",
                application: "When you speak today, speak fully and authentically, then return to silence. Don't dilute your words with endless explanation. Say what needs to be said, then stop. Practice being as natural and complete as a rain shower.",
                image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400",
                imageDesc: "Natural expression"
            },
            {
                number: 24,
                title: "Those who stand on tiptoe",
                text: "Those who stand on tiptoe don't stand firm. Those who rush ahead don't go far. Those who try to shine dim their own light. Those who define themselves can't know who they really are. Those who have power over others can't empower themselves. Those who cling to their work will create nothing that endures.",
                application: "Stop striving to impress today. Don't stand on tiptoe to appear taller. Move at your natural pace rather than rushing. Let your light shine naturally without trying to be seen. Create from joy rather than from need for recognition.",
                image: "https://images.unsplash.com/photo-1476611317204-d5fec3af3d2a?w=400",
                imageDesc: "Natural stance"
            },
            {
                number: 25,
                title: "There was something formless",
                text: "There was something formless and perfect before the universe was born. It is serene. Empty. Solitary. Unchanging. Infinite. Eternally present. It is the mother of the universe. For lack of a better name, I call it the Way. It flows through all things, inside and outside, and returns to the origin of all things.",
                application: "Sense the eternal presence within you today. Beyond your thoughts, emotions, and sensations, feel the unchanging awareness that has been with you since birth. Rest in this serene emptiness for a few moments throughout your day.",
                image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400",
                imageDesc: "Infinite cosmos"
            },
            {
                number: 26,
                title: "The heavy is the root",
                text: "The heavy is the root of the light. The unmoved is the source of all movement. Thus the Master travels all day without leaving home. However splendid the views, she stays serenely in herself. Why should the lord of ten thousand chariots act lightly in public? To be light is to lose one's root. To be restless is to lose one's control.",
                application: "Stay rooted in your center today, no matter what swirls around you. When chaos or excitement arise, return to the heavy stillness within. Carry your home with you wherever you go by maintaining inner stability.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400",
                imageDesc: "Deep roots"
            },
            {
                number: 27,
                title: "A good traveler has no fixed plans",
                text: "A good traveler has no fixed plans and is not intent upon arriving. A good artist lets intuition lead wherever it wants. A good scientist has freed herself of concepts and keeps her mind open to what is. Thus the Master is available to all people and doesn't reject anyone. She is ready to use all situations and doesn't waste anything.",
                application: "Approach today like a good traveler - with openness rather than fixed plans. Let intuition guide at least one decision. Be available to whoever crosses your path. See everything that happens as useful, wasting nothing.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
                imageDesc: "Open journey"
            },
            {
                number: 28,
                title: "Know the male",
                text: "Know the male, yet keep to the female; receive the world in your arms. If you receive the world, the Way will never leave you and you will be like a little child. Know the white, but keep to the black; be a pattern for the world. If you are a pattern for the world, the Way will be strong inside you.",
                application: "Balance your masculine and feminine energies today. If you tend to be aggressive, practice receptivity. If you're usually passive, practice assertiveness. Hold both potentials within you, choosing which to express moment by moment.",
                image: "https://images.unsplash.com/photo-1507181179506-598491b53db4?w=400",
                imageDesc: "Perfect balance"
            },
            {
                number: 29,
                title: "Do you want to improve the world?",
                text: "Do you want to improve the world? I don't think it can be done. The world is sacred. It can't be improved. If you tamper with it, you'll ruin it. If you treat it like an object, you'll lose it. There is a time for being ahead, a time for being behind; a time for being in motion, a time for being at rest.",
                application: "Stop trying to fix everything today. Accept one situation exactly as it is without attempting to improve it. Notice your urge to tamper and adjust. Let the world be sacred and perfect in its imperfection.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400",
                imageDesc: "Sacred forest"
            },
            {
                number: 30,
                title: "Whoever relies on the Way",
                text: "Whoever relies on the Way in governing people doesn't try to force issues or defeat enemies by force of arms. For every force there is a counterforce. Violence, even well intentioned, always rebounds upon oneself. The Master does her job and then stops. She understands that the universe is forever out of control.",
                application: "Use minimal force today. When you encounter resistance, step back rather than pushing harder. Complete your tasks without forcing outcomes. Trust that the universe has its own wisdom beyond your control.",
                image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400",
                imageDesc: "Gentle strength"
            },
            {
                number: 31,
                title: "Weapons are instruments of fear",
                text: "Weapons are instruments of fear; all creatures hate them. Therefore followers of the Way never use them. The wise prefer the left; the warrior prefers the right. Weapons are instruments of fear; they are not wise tools. The wise use them only when there is no choice.",
                application: "Examine your verbal weapons today - sarcasm, criticism, judgment. Notice when you arm yourself with words. Practice speaking only from peace. If you must address conflict, do so with the reluctance of one who has no other choice.",
                image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400",
                imageDesc: "Peaceful dove"
            },
            {
                number: 32,
                title: "The Way is forever undefined",
                text: "The Way is forever undefined. Small though it is in the unformed state, it cannot be grasped. If leaders could center themselves in it, the whole world would be transformed by itself, in its natural rhythms. People would be content with their simple, everyday lives, in harmony, and free of desires.",
                application: "Find contentment in simplicity today. Instead of seeking more, appreciate what you already have. Eat a simple meal with full attention. Take pleasure in ordinary activities. Let natural rhythms guide your day.",
                image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400",
                imageDesc: "Simple contentment"
            },
            {
                number: 33,
                title: "Knowing others is intelligence",
                text: "Knowing others is intelligence; knowing yourself is true wisdom. Mastering others is strength; mastering yourself is true power. If you realize that you have enough, you are truly rich. If you stay in the center and embrace death with your whole heart, you will endure forever.",
                application: "Turn your attention inward today. For every judgment you make about another, ask what it reveals about you. Notice where you try to control others and redirect that energy toward self-mastery. Celebrate the riches you already possess.",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400",
                imageDesc: "Inner reflection"
            },
            {
                number: 34,
                title: "The great Way flows everywhere",
                text: "The great Way flows everywhere, both to the left and to the right. All things depend upon it for life, and it does not turn away from them. It accomplishes its purpose silently and makes no claim. It nourishes infinite worlds, yet it doesn't demand to be master. It can be called humble.",
                application: "Flow everywhere today like the Way. Be available to help without choosing favorites. Accomplish good quietly without taking credit. Nourish others without trying to control them. Practice humble greatness.",
                image: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=400",
                imageDesc: "Flowing everywhere"
            },
            {
                number: 35,
                title: "All things will come",
                text: "All things will come to those who offer the world the great image of the Way. They come and are not harmed; they find peace, security, and well-being. Music and good food make travelers stop. But the Way, without flavor or sound, seems bland and uninteresting. Yet those who use it find it inexhaustible.",
                application: "Offer peace instead of entertainment today. In conversations, provide calm presence rather than trying to be interesting. Create spaces of safety for others through your centered stability. Be the rest stop others need.",
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400",
                imageDesc: "Peaceful sanctuary"
            },
            {
                number: 36,
                title: "If you want to shrink something",
                text: "If you want to shrink something, you must first allow it to expand. If you want to get rid of something, you must first allow it to flourish. If you want to take something, you must first allow it to be given. This is called the subtle perception of the way things are. The soft overcomes the hard. The slow overcomes the fast.",
                application: "Practice indirect action today. If you want to reduce stress, first acknowledge its full extent. If you want to let go of anger, feel it completely first. Work with natural cycles rather than against them. Let softness be your strength.",
                image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400",
                imageDesc: "Soft water shaping stone"
            },
            {
                number: 37,
                title: "The Way never does anything",
                text: "The Way never does anything, yet through it all things are done. If powerful people could center themselves in it, the whole world would be transformed naturally, in its own perfect time. When there is silence, one finds the anchor of the universe within oneself.",
                application: "Accomplish through non-doing today. Set things in motion and then step back. Create conditions for success rather than forcing results. In moments of silence, feel yourself anchored in the universe's center.",
                image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400",
                imageDesc: "Effortless nature"
            },
            {
                number: 38,
                title: "The Master doesn't try to be good",
                text: "The Master doesn't try to be good, and is therefore truly good. Others try to be good, and therefore are not good. The Master does nothing, yet leaves nothing undone. Others are always doing things, yet many more are left to be done. True virtue is not conscious of itself as virtue, and therefore really is virtue.",
                application: "Stop trying to be good today. Don't perform kindness; let it flow naturally. Act from your authentic self rather than from ideas about how you should be. Notice how effortless goodness arises when you stop forcing it.",
                image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400",
                imageDesc: "Natural virtue"
            },
            {
                number: 39,
                title: "In harmony with the Way",
                text: "In harmony with the Way, the sky is clear and spacious, the earth is solid and full, all creatures flourish together, content with the way they are, endlessly repeating themselves, endlessly renewed. When humanity interferes with the Way, the sky becomes filthy, the earth becomes depleted, the equilibrium crumbles.",
                application: "Notice where you're interfering with natural harmony today. Where are you complicating what could be simple? Step back and let one situation resolve itself without your intervention. Trust the Way's inherent balance.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400",
                imageDesc: "Natural harmony"
            },
            {
                number: 40,
                title: "Return is the movement of the Way",
                text: "Return is the movement of the Way. Yielding is the way of the Way. All things are born of being. Being is born of non-being.",
                application: "Practice returning today - to your breath, to the present, to simplicity. When you drift into complexity, return to what's essential. Yield in one conflict and watch how yielding creates unexpected strength.",
                image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400",
                imageDesc: "Returning cycle"
            },
            {
                number: 41,
                title: "When superior people hear of the Way",
                text: "When superior people hear of the Way, they immediately practice it. When average people hear of the Way, they half believe it. When foolish people hear of the Way, they laugh out loud. If they didn't laugh, it wouldn't be the Way. The path into the light seems dark, the path forward seems to go back.",
                application: "Embrace paradox today. When the way forward seems blocked, consider stepping back. When clarity seems distant, rest in not-knowing. Trust paths that seem to contradict conventional wisdom.",
                image: "https://images.unsplash.com/photo-1507181179506-598491b53db4?w=400",
                imageDesc: "Path of paradox"
            },
            {
                number: 42,
                title: "The Way gives birth to One",
                text: "The Way gives birth to One. One gives birth to Two. Two gives birth to Three. Three gives birth to all things. All things have their backs to the female and stand facing the male. When male and female combine, all things achieve harmony. Ordinary people hate solitude. But the Master makes use of it.",
                application: "Find value in what others avoid today. Spend time in solitude without distraction. Embrace a task everyone else procrastinates on. Discover the gifts hidden in what appears undesirable.",
                image: "https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=400",
                imageDesc: "Sacred solitude"
            },
            {
                number: 43,
                title: "The softest thing in the universe",
                text: "The softest thing in the universe overcomes the hardest thing in the universe. That without substance can enter where there is no room. Hence I know the value of non-action. Teaching without words and work without doing are understood by very few.",
                application: "Be like water wearing away stone today. Use gentle persistence rather than force. Teach through example rather than lecture. Let your presence communicate more than your words.",
                image: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400",
                imageDesc: "Soft overcoming hard"
            },
            {
                number: 44,
                title: "Which is more important",
                text: "Which is more important, your name or your body? Which means more to you, your body or your wealth? Which is more harmful, winning or losing? The more you grasp, the more you lose. If you're content with what you have, you'll never be disappointed. If you know when to stop, you'll never be in danger.",
                application: "Question your priorities today. What are you chasing that matters less than your peace? Choose contentment over acquisition in one area. Stop before excess in eating, working, or talking.",
                image: "https://images.unsplash.com/photo-1523464862212-d6631d073194?w=400",
                imageDesc: "True priorities"
            },
            {
                number: 45,
                title: "True perfection seems imperfect",
                text: "True perfection seems imperfect, yet it is perfectly itself. True fullness seems empty, yet it is fully present. True straightness seems crooked. True wisdom seems foolish. True art seems artless. The Master allows things to happen. She shapes events as they come.",
                application: "Embrace the imperfect perfection of your life today. Stop trying to fix what seems broken - it might be perfectly itself. Allow your natural crookedness. Let wisdom appear foolish if it must.",
                image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400",
                imageDesc: "Imperfect perfection"
            },
            {
                number: 46,
                title: "When a country is in harmony",
                text: "When a country is in harmony with the Way, the factories make trucks and tractors. When a country goes counter to the Way, warheads are stockpiled outside the cities. There is no greater illusion than fear, no greater wrong than preparing to defend yourself, no greater misfortune than having an enemy.",
                application: "Transform fear into trust today. Notice where you're stockpiling defenses - emotional walls, harsh words, protective behaviors. Lower one defense and see what happens. Convert weapons into tools.",
                image: "https://images.unsplash.com/photo-1502224562085-639556652f33?w=400",
                imageDesc: "Tools not weapons"
            },
            {
                number: 47,
                title: "Without opening your door",
                text: "Without opening your door, you can open your heart to the world. Without looking out your window, you can see the essence of the Way. The more you know, the less you understand. The Master arrives without leaving, sees the light without looking, achieves without doing a thing.",
                application: "Travel inward today instead of outward. Find the whole universe within yourself. Close your eyes and see more clearly. Stay still and arrive everywhere. Know less and understand more.",
                image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=400",
                imageDesc: "Inner universe"
            },
            {
                number: 48,
                title: "In pursuit of knowledge",
                text: "In pursuit of knowledge, every day something is added. In the pursuit of wisdom, every day something is dropped. Less and less do you need to force things, until finally you arrive at non-action. When nothing is done, nothing is left undone. True mastery can be gained by letting things go their own way.",
                application: "Drop something today instead of adding. Let go of one belief, habit, or possession. Do less and accomplish more. Practice the art of subtraction. Master one situation by not interfering.",
                image: "https://images.unsplash.com/photo-1506485338023-6ce5f36692df?w=400",
                imageDesc: "Letting go"
            },
            {
                number: 49,
                title: "The Master has no mind",
                text: "The Master has no mind of her own. She works with the mind of the people. She is good to people who are good. She is also good to people who aren't good. This is true goodness. She trusts people who are trustworthy. She also trusts people who aren't trustworthy. This is true trust.",
                application: "Expand your goodness today to include those you usually judge. Trust someone who seems untrustworthy. Work with others' perspectives rather than imposing your own. Let your mind be as open as the sky.",
                image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=400",
                imageDesc: "Open sky mind"
            },
            {
                number: 50,
                title: "Between birth and death",
                text: "Between birth and death, three in ten are followers of life, three in ten are followers of death, and three in ten just pass from birth to death. And one? That one is perfectly at ease, traveling through life without fear of wild animals or weapons, not needing armor or shields.",
                application: "Live fully today without clinging to life or fearing death. Take reasonable precautions but don't armor yourself with worry. Move through your day with the ease of one who knows that life and death are both part of the Way.",
                image: "https://images.unsplash.com/photo-1516571748831-5d81767b788d?w=400",
                imageDesc: "Fearless journey"
            },
            {
                number: 51,
                title: "The Way gives life",
                text: "The Way gives life to all things and nurtures them. It produces them and does not claim them as its own. It does all this without asking for anything in return. It gives life without possessing, helps without taking credit, guides without controlling. This is the hidden virtue of the Way.",
                application: "Give without possessing today. Help someone without them knowing. Guide without controlling. Nurture a plant, animal, or person without claiming ownership. Practice the Way's hidden virtue.",
                image: "https://images.unsplash.com/photo-1474398777795-42089e60c9c2?w=400",
                imageDesc: "Nurturing without owning"
            },
            {
                number: 52,
                title: "The universe began with the Mother",
                text: "The universe began with the Mother of all things. Once you have found the Mother, you can know her children. Having known the children, hold tightly to the Mother. And you will endure. Close your mouth, guard your senses, and life is ever full. Open your mouth, always be busy, and life is beyond hope.",
                application: "Return to the source today. Spend less time with the 'children' (endless details and distractions) and more with the 'Mother' (essential stillness). Close your mouth more often. Guard your senses from overstimulation.",
                image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=400",
                imageDesc: "Return to source"
            },
            {
                number: 53,
                title: "If I have even a little sense",
                text: "If I have even a little sense, I will walk on the main road and my only fear will be of straying from it. Keeping to the main road is easy, but people love to be sidetracked. When the palace is splendid, the fields are full of weeds and the granaries are empty.",
                application: "Stay on your main road today. Resist attractive detours. Tend to basics before luxuries. Make sure your 'fields' (health, relationships, work) are cared for before decorating your 'palace' (pursuing status or pleasure).",
                image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400",
                imageDesc: "Simple straight path"
            },
            {
                number: 54,
                title: "What is firmly established",
                text: "What is firmly established cannot be uprooted. What is firmly grasped cannot slip away. It will be honored from generation to generation. Cultivate virtue in yourself, and virtue will be real. Cultivate it in the family, and virtue will abound. Cultivate it in the village, and virtue will grow.",
                application: "Build something lasting today. Plant seeds of virtue in yourself through one consistent practice. Extend that virtue to your family through patient kindness. Let your positive influence ripple outward naturally.",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400",
                imageDesc: "Deep cultivation"
            },
            {
                number: 55,
                title: "Those who are filled with virtue",
                text: "Those who are filled with virtue are like newborn children. Wasps and serpents will not sting them. Wild beasts will not attack them. Birds of prey will not strike them. Their bones are soft, their muscles weak, but their grip is firm. They have not experienced the union of man and woman, but are whole.",
                application: "Rediscover childlike wholeness today. Approach one situation with complete innocence. Trust your natural protection rather than your defenses. Be soft yet firm, weak yet powerful, simple yet complete.",
                image: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=400",
                imageDesc: "Childlike wholeness"
            },
            {
                number: 56,
                title: "Those who know don't talk",
                text: "Those who know don't talk. Those who talk don't know. Close your mouth, block off your senses, blunt your sharpness, untie your knots, soften your glare, settle your dust. This is the primal identity. Be like the Way: you can't seek it or escape it, benefit it or harm it, honor it or disgrace it. It gives itself up continually.",
                application: "Practice knowing without talking today. Keep one piece of wisdom to yourself. Soften your sharp edges in interactions. Settle your internal dust through stillness. Give yourself up to the flow continually.",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
                imageDesc: "Silent knowing"
            },
            {
                number: 57,
                title: "If you want to be a great leader",
                text: "If you want to be a great leader, you must learn to follow the Way. Stop trying to control. Let go of fixed plans and concepts, and the world will govern itself. The more prohibitions you have, the less virtuous people will be. The more weapons you have, the less secure people will be.",
                application: "Lead by following today. Remove a rule rather than adding one. Trust people's natural virtue instead of trying to enforce it. Create security through openness rather than defense. Let situations govern themselves.",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400",
                imageDesc: "Natural leadership"
            },
            {
                number: 58,
                title: "When the government is too intrusive",
                text: "When the government is too intrusive, people lose their spirit. Act for the people's benefit. Trust them; leave them alone. If a country is governed with tolerance, the people are comfortable and honest. If a country is governed with repression, the people are depressed and crafty.",
                application: "Govern yourself and others with tolerance today. Loosen your grip on control. Trust more, supervise less. Notice how freedom brings out the best in people while restriction brings out the worst.",
                image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=400",
                imageDesc: "Gentle governance"
            },
            {
                number: 59,
                title: "In caring for others",
                text: "In caring for others and serving heaven, there is nothing like moderation. Moderation begins with giving up one's ideas. This depends on virtue gathered in the past. If there is a store of virtue, then nothing is impossible. If nothing is impossible, then there are no limits.",
                application: "Practice moderation in caring today. Give help without exhausting yourself. Serve without becoming a martyr. Give up fixed ideas about how caring should look. Draw on your stored virtue from past practice.",
                image: "https://images.unsplash.com/photo-1478476868527-002ae3f3e159?w=400",
                imageDesc: "Moderate caring"
            },
            {
                number: 60,
                title: "Governing a large country",
                text: "Governing a large country is like frying a small fish. You spoil it with too much poking. Center your country in the Way and evil will have no power. Not that it isn't there, but you'll step out of its way. Give evil nothing to oppose and it will disappear by itself.",
                application: "Stop poking at problems today. Address one issue with minimal intervention. Don't feed negativity with resistance. Step aside from drama rather than engaging. Let small fish cook without constant stirring.",
                image: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=400",
                imageDesc: "Still water"
            },
            {
                number: 61,
                title: "A great nation is like a low land",
                text: "A great nation is like a low land where all streams flow. It is the mother of the world. The female overcomes the male with stillness, lying low in stillness. Therefore if a great nation yields to a smaller nation, it will conquer the smaller nation. The one who yields, wins.",
                application: "Position yourself low today. In disagreements, yield rather than dominate. Attract rather than pursue. Win by not fighting. Be like low land that naturally gathers all waters to itself.",
                image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400",
                imageDesc: "Valley stream"
            },
            {
                number: 62,
                title: "The Way is the treasure",
                text: "The Way is the treasure of the good person and the refuge of the bad. Beautiful words can buy honor; good deeds can gain respect. If people seem bad, don't abandon them. Therefore on the day the emperor is crowned, or the three officers of state installed, don't send gifts of jade and teams of horses.",
                application: "Be a refuge for someone struggling today. Offer the treasure of presence rather than advice. Don't abandon those who seem lost. Give the gift of acceptance rather than trying to fix or impress.",
                image: "https://images.unsplash.com/photo-1518709911915-712d5fd04677?w=400",
                imageDesc: "Sheltering cave"
            },
            {
                number: 63,
                title: "Act without doing",
                text: "Act without doing; work without effort. Think of the small as large and the few as many. Confront the difficult while it is still easy; accomplish the great task by a series of small acts. The Master never reaches for the great; thus she achieves greatness.",
                application: "Handle difficulties while they're still small today. Break one large task into tiny steps. Don't reach for greatness; focus on the next small right action. Work without strain, act without forcing.",
                image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=400",
                imageDesc: "Small becoming great"
            },
            {
                number: 64,
                title: "What is at rest is easy to grasp",
                text: "What is at rest is easy to grasp. What hasn't happened yet is easy to plan for. What is brittle is easy to break. What is small is easy to scatter. Prevent trouble before it arises. Put things in order before they exist. The giant pine tree grows from a tiny sprout.",
                application: "Tend to things before they become problems today. Address the small irritation before it becomes a conflict. Organize one area before it becomes chaotic. Plant seeds of future peace through present awareness.",
                image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400",
                imageDesc: "Tiny sprout beginning"
            },
            {
                number: 65,
                title: "The ancient Masters",
                text: "The ancient Masters didn't try to educate people, but kindly taught them to not-know. When they think they know the answers, people are difficult to guide. When they know that they don't know, people can find their own way. Those who use the Way to rule don't try to give people cleverness.",
                application: "Teach by helping others discover today, not by giving answers. Admit what you don't know. Guide someone to their own insight rather than imposing yours. Value not-knowing as a doorway to wisdom.",
                image: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400",
                imageDesc: "Ancient wisdom"
            },
            {
                number: 66,
                title: "All streams flow to the ocean",
                text: "All streams flow to the ocean because it is lower than they are. Humility gives it its power. If you want to govern people, you must place yourself below them. If you want to lead people, you must learn to follow them. The Master is above people, and no one feels oppressed.",
                application: "Lead from below today. Put others' needs first in one interaction. Follow before attempting to lead. Lower yourself like the ocean and watch how naturally others flow toward you.",
                image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=400",
                imageDesc: "Ocean receiving streams"
            },
            {
                number: 67,
                title: "Some say that my teaching is nonsense",
                text: "Some say that my teaching is nonsense. Others call it lofty but impractical. But to those who have looked inside themselves, this nonsense makes perfect sense. I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
                application: "Practice your three treasures today. Simplify one complex situation. Be patient with one frustrating person or circumstance. Show compassion to yourself when you fall short. These simple practices hold profound power.",
                image: "https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=400",
                imageDesc: "Three treasures"
            },
            {
                number: 68,
                title: "The best warrior",
                text: "The best warrior is never aggressive. The best fighter is never angry. The best tactician is never offensive. The best leader follows the will of the people. All of them embody the virtue of non-competition. All of them embody the virtue of working with others.",
                application: "Win without competing today. Fight without anger. Lead by following. In one challenging situation, embody non-competition. Work with others' energy rather than against it. Be a warrior of peace.",
                image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400",
                imageDesc: "Peaceful warrior"
            },
            {
                number: 69,
                title: "The generals have a saying",
                text: "The generals have a saying: 'Rather than make the first move it is better to wait and see. Rather than advance an inch it is better to retreat a yard.' This is called going forward without advancing, pushing back without using weapons. There is no greater misfortune than underestimating your enemy.",
                application: "Practice strategic non-action today. In conflict, wait rather than attacking first. Retreat to win. Advance by not advancing. Never underestimate the power of stepping back and letting others reveal themselves.",
                image: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=400",
                imageDesc: "Strategic wisdom"
            },
            {
                number: 70,
                title: "My teachings are easy",
                text: "My teachings are easy to understand and easy to put into practice. Yet your intellect will never grasp them, and if you try to practice them, you'll fail. My teachings are older than the world. How can you grasp their meaning? If you want to know me, look inside your heart.",
                application: "Stop trying to intellectually understand today. Look for wisdom in your heart rather than your head. Practice one simple teaching without analyzing it. Find the ancient knowing that exists before thought.",
                image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400",
                imageDesc: "Heart wisdom"
            },
            {
                number: 71,
                title: "Not-knowing is true knowledge",
                text: "Not-knowing is true knowledge. Presuming to know is a disease. First realize that you are sick; then you can move toward health. The Master is her own physician. She has healed herself of all knowing. Thus she is truly whole.",
                application: "Diagnose your 'knowing disease' today. Where do you presume to understand what you don't? Practice saying 'I don't know' when asked for opinions. Heal yourself by embracing uncertainty.",
                image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400",
                imageDesc: "Healing not-knowing"
            },
            {
                number: 72,
                title: "When people lack a sense of awe",
                text: "When people lack a sense of awe, there will be disaster. Do not intrude on their homes. Do not harass them at work. If you don't interfere, they won't weary of you. Therefore the Master knows herself but makes no display, has self-respect but is not arrogant.",
                application: "Restore awe to your day. Marvel at something ordinary - your breathing, a tree, running water. Give others space without intrusion. Know your worth without displaying it. Respect yourself without arrogance.",
                image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400",
                imageDesc: "Awesome mystery"
            },
            {
                number: 73,
                title: "The Way of heaven",
                text: "The Way of heaven is to benefit, not to harm. The Way of the sage is to act, not to compete. Brave when daring leads to death. Brave when not daring leads to life. Which of these two is good and which is harmful? Who knows why heaven favors what it does?",
                application: "Choose the bravery of restraint today. Dare to not dare in one situation where you usually push. Act without competing. Trust heaven's mysterious favor even when you don't understand its choices.",
                image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400",
                imageDesc: "Heaven's way"
            },
            {
                number: 74,
                title: "If people do not fear death",
                text: "If people do not fear death, then threatening them with death has no power. If people fear death and we make death the penalty for breaking the law, who would dare to break the law? There is always an official executioner. If you try to take his place, it is like trying to be a master carpenter and cutting wood.",
                application: "Stop trying to be the executioner in others' lives today. Don't threaten or punish to control behavior. Let natural consequences teach their lessons. Focus on your own life rather than judging others.",
                image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=400",
                imageDesc: "Natural consequences"
            },
            {
                number: 75,
                title: "When taxes are too high",
                text: "When taxes are too high, people go hungry. When the government is too intrusive, people lose their spirit. Act for the people's benefit. Trust them; leave them alone. Why is life so hard? Because people take it too seriously. Those who know life's emptiness are truly wise.",
                application: "Stop taxing yourself and others today. Reduce the demands you place on yourself. Trust life more, control less. Take one thing less seriously. Remember the liberating emptiness at the heart of existence.",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
                imageDesc: "Unburdened path"
            },
            {
                number: 76,
                title: "People are born soft and supple",
                text: "People are born soft and supple; dead, they are stiff and hard. Plants are born tender and pliant; dead, they are brittle and dry. Thus whoever is stiff and inflexible is a disciple of death. Whoever is soft and yielding is a disciple of life.",
                application: "Choose softness over rigidity today. Bend rather than break in one situation. Stay supple in your thinking. Yield in an argument. Be a disciple of life through flexibility and openness.",
                image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400",
                imageDesc: "Supple bamboo"
            },
            {
                number: 77,
                title: "The Way of heaven is like a bow",
                text: "The Way of heaven is like drawing a bow. The high is lowered, the low is raised. If the string is too long, it is shortened; if there is not enough, it is made longer. The Way of heaven takes from those who have too much and gives to those who do not have enough.",
                application: "Balance your life like heaven balances a bow today. Where you have excess, give. Where you lack, receive. Lower what's too high, raise what's too low. Be an agent of natural balance.",
                image: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=400",
                imageDesc: "Perfect balance"
            },
            {
                number: 78,
                title: "Nothing in the world",
                text: "Nothing in the world is softer than water. Yet nothing is better at overcoming the hard and strong. This cannot be changed. Weakness overcomes strength; softness overcomes hardness. Everyone knows this, but no one can put it into practice. Therefore the Master remains serene in the midst of sorrow.",
                application: "Use water's wisdom today. Meet hardness with softness. Overcome a strong resistance with gentle persistence. When sorrow comes, remain serene like a deep pool that accepts all rainfall equally.",
                image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=400",
                imageDesc: "Water wisdom"
            },
            {
                number: 79,
                title: "After a bitter quarrel",
                text: "After a bitter quarrel, some resentment remains. What can be done about this? The sage keeps the left-hand portion of the contract and doesn't make demands on others. The person of virtue performs their part of the contract; the person without virtue requires others to fulfill their obligations.",
                application: "Let go of scorekeeping today. After any conflict, focus on your own part rather than demanding from others. Keep your side of agreements without monitoring others'. Be generous in forgiving old resentments.",
                image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400",
                imageDesc: "Open hands"
            },
            {
                number: 80,
                title: "If a country is governed wisely",
                text: "If a country is governed wisely, its inhabitants will be content. They enjoy their food, take pleasure in being with their families, spend weekends working in their gardens, delight in the doings of the neighborhood. And even though the next country is so close that people can hear its roosters crowing and its dogs barking, they are content to die of old age without ever having gone to see it.",
                application: "Find contentment in your immediate life today. Enjoy simple food, appreciate family, delight in your neighborhood. Stop seeking happiness elsewhere. Everything you need for fulfillment is already here.",
                image: "https://images.unsplash.com/photo-1496450681664-3df85efbd29f?w=400",
                imageDesc: "Home contentment"
            },
            {
                number: 81,
                title: "True words aren't eloquent",
                text: "True words aren't eloquent; eloquent words aren't true. Good people don't argue; those who argue aren't good. Those who know aren't learned; the learned don't know. The Master has no possessions. The more she does for others, the happier she is. The more she gives to others, the wealthier she is.",
                application: "Speak simply and truly today. Give without counting the cost. Do for others without keeping score. Share knowledge without showing off. End where you began - with simple truth and generous action.",
                image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=400",
                imageDesc: "Simple truth"
            }
        ];
/**
 
 Copyright 2017 Koti Syamala.
 
*/

'use strict';
var regex = /(<([^>]+)>)/ig; 
const SPEACH_START_TAG = "<speak>";
const SPEACH_END_TAG = "</speak>";

const LAUNCH_AUDIO  = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/motivational.mp3\" />";
const SPEACH_OUTPUT_START_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/Drop.mp3\" />";
const SPEACH_OUTPUT_END_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/Sc-Fi_intro.mp3\" />";
const MORNING_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/awesomemorning_alarm.mp3\" />";
const MORNING_AUDIO_2 = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/nature_ringtone.mp3\" />";
const GOOD_NIGHT_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/halloween_night.mp3\" />";
const DRUMS_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/baisodrumz.mp3\" />";
const LIFE_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/life_is_strange.mp3\" />";
const MONEY_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/money.mp3\" />";
const SOCIAL_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/facebook_2011.mp3\" />";
const STUDY_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/study_30.mp3\" />";
const TIME_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/time_bomb.mp3\" />";
const WORKOUT_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/guruji/sounds/work_hard.mp3\" />";
const STOP_AUDIO = "<audio src=\"https://s3.amazonaws.com/alexatones/black_hole/Sound_Fx_Sci-fi_No1.mp3\" />";


const BREAK_1S = "<break time='1s' />";
const HELP_SPEACH = "You can ask rich kid give me a life hack or tell me an insspiring story or give me a pice of adivse on workout, or to wakeup early, or to sleep early, or to study, how to stop procastination or give me a style tip or How to quit social media or give me a financial advise or tell me a good habbit to follow";
const MORE_HELP_SPEACH = " Want to know more ? " + HELP_SPEACH;

const WORKOUT_TITLE_CARD = "workout is life!";
const WORKOUT_IMAGE = "https://s3.amazonaws.com/alexatones/guruji/images/jason-briscoe-149781-unsplash.jpg";
const WORKOUT_ADVISES = [
                "Pain is temporary, pride is forever.",
                "You are doing it for you.",
                "If you still look cute after the gym, you didn’t workout hard enough.",
                "Sweat is your fat crying.",
                "I wear black to the gym because it’s like a funeral for my fat.", 
                "Fitness is not about being better than someone. Fitness is about being better than the person you were yesterday.", 
                "Be the girl or boy at the gym that motivates everyone else to push a little harder.",
                "Take care of your body. It’s the only place you have to live.",
                "We all have the same amount of hours in our day. Deciding how to use your hours is up to you.",
                "Gotta squat before I tie the knot.",
                "Muscles are torn in the gym, fed in the kitchen and built in bed.",
                "You are what you eat, so don’t be fast, easy, cheap or fake.",
                "The secret to getting ahead is getting started."
  ];
const SOCIALMEDIA_TITLE_CARD = "Social media is bad way of living life!";
const QUIT_SOCIAL_MEDIA = [
        "You’ll become more confident",
        "You won’t see a need to validate yourself online anymore",
        "Your mood can improve",
        "You’ll see your friends in a new light",
        "You’ll be more aware of your surroundings",
        "Life literally becomes real and you won’t have to doubt yourself",
        "You’ll have a deep sense of appreciation for everything you once enjoyed"
    ];
const FINANCIAL_HELP_TITLE_CARD = "Penny saved is a penny earned!";
const FINANCIAL_HELP = [
        "You can't be rich by doing 9 to 5 job.",
        "Always have a secondary source of income.",
        "Banks give loan to those who already have money.",
        "If you don’t make money while you sleep, you will have to work until you die.",
        "Your house is not an asset.",
        "Rich people constantly learn and grow, poor people think they already know.",
        "Planning, Patience and persistence are the keywords for success.",
        "If you buy things you don't need, soon you will have to sell things that you need.",
        "Investing in stock market is not gambling. It’s a science.",
        "Keep your 40% money in bank account, put aside your 20% for emergency and invest your 40% money in mutual fund or stock market, whatever you think is right for you.",
        "More the risk, more the reward. But never measure the depth of the river with both feet in water."
    ];
const GOOD_HABITS_TITLE_CARD = "A Good Habbit is worth!";
const GOOD_HABITS = [
    "In a healthy body, resides a healthy mind",
    "Everyday, spend some time doing something that you really like.",
    "Do nothing for 10 minutes. Just nothing.",
    "Make a To Do list every morning.",
    "Read. Even if you read just one page, it’s OK.",
    "Talk to the ones who care for you.",
    "Help a needy.",
    "Feed animals.",
    "Observe a creature. Just like you, they are also a piece of life.",
    "Respect time.",
    "You don’t need to take this life too seriously. Remember that.",
    "Don’t hesitate in sharing your knowledge.",
    "Spend at least 15 minutes doing exercise.",
    "Sleep well.",
    "Wake up early. It’s worth the effort.",
    "Turn off the snooze button.",
    "Eat one serving of raw veggies.",
    "Eat one handful of nuts.",
    "Be sure that fruits are a part of your daily diet.",
    "Eat whole grains.",
    "Most importantly, never miss to smile."
    ];
const STYLE_TITLE_CARD = "Style guide!";
const GOOD_LOOKING = [
    "Practice drinking 8–10 glasses of water. Make sure you do not drink water just before or after meals.",
    "Have a sound sleep of 6–8 hours daily.",
    "Protect yourself from the harmful rays of the sun. Use a sunscreen.",
    "Ditch refined grains. Switch to whole wheat, oats, brown rice and other whole grains.",
    "Reduce your daily sugar intake. Beat your sugary cravings with fruits.",
    "Eat at least one serving of raw vegetable salad. Anytime of the day.",
    "Eat one handful of nuts daily. Welcome, glowing skin.",
    "Spend 15 minutes doing exercise. Whenever you find time.",
    "Give your phone, laptop a break. Nature is more fascinating.",
    "Smile. Life is beautiful and so are you?"
    ];
const SLEEPEARLY_TITLE_CARD = "Sleep early!";
const SLEEP_EARLY = [
    "Do not charge your phone in your bedroom.",
    "Have both a light blanket and a heavy blanket nearby.",
    "Stretch for 10 minutes before sleeping.",
    "Exercise in the morning, not at night.",
    "Pretend like you are going to bed an hour before you actually go to bed.",
    "Do NOT go on your phone if you can’t sleep.",
    "Read if you can’t sleep.",
    "Take 20 deep breaths while lying in bed.",
    "Say 3 things you are grateful for before going to bed (it will ease your mind)",
    "Stop being a workaholic that stays up so late.",
    "Don’t have babies (Just kidding… unless you want to sleep)",
    "Get a large bed.",
    "Force yourself to wake up early (you will be tired at the end of the day).",
    "Get off social media an hour before bed.",
    "Don’t meditate (the mental focus will wake you up)",
    "Do whatever it takes to make yourself tired during the day, so that you are exhausted by the time you go to bed.",
    "Only drink coffee in the morning.",
    "Ask yourself, “what’s stressing me out in life?” Try to remove those stresses. They tend to keep you up at night…",
    "Don’t get a puppy (Again, just kidding… unless you want to sleep…)",
    "Get massages every once in a while."
    ];
const PROCATINATION_TITLE_CARD = "Procastination is bad!";
const PROCASTINATION = [
    "Procrastination is the fear of success. People procrastinate because they are afraid of the success that they know will result if they move ahead now.Because success is heavy, carries a responsibility with it, it is much easier to procrastinate and live on the ‘someday I’ll’ philosophy.",
    "Time is an equal opportunity employer. Each human being has exactly the same number of hours and minutes every day. Rich people can’t buy more hours. Scientists can’t invent new minutes. And you can’t save time to spend it on another day. Even so, time is amazingly fair and forgiving. No matter how much time you’ve wasted in the past, you still have an entire tomorrow",
    "How soon ‘not now’ becomes never.",
    "In a moment of decision, the best thing you can do is the right thing to do, the next best thing is the wrong thing,and the worst thing you can do is nothing.",
    "If you don’t pay appropriate attention to what has your attention, it will take more of your attention than it deserves.",
    "Take time to deliberate; but when the time for action arrives, stop thinking and go in.",
    "You don’t have to see the whole staircase, just take the first step.",
    "Do the hard jobs first. The easy jobs will take care of themselves.",
    "Think of many things; do one.",
    "Follow effective actions with quiet reflection. From the quiet reflection will come even more effective action.",
    "To think too long about doing a thing often becomes its undoing.",
    "The secret to getting ahead is getting started.",
    "Procrastination is the thief of time, Year after year it steals, till all are fled, and to the mercies of a moment leaves the vast concerns of an eternal scene."
   ];
const WAKEUP_TITLE_CARD = "Be early bird!";
const WAKEUP_EARLY = [
    "Lose an hour in the morning, and you will be all day hunting for it.",
    "One key to success is to have lunch at the time of day most people have breakfast",
    "Every morning is a beautiful morning.",
    "Morning is an important time of day, because how you spend your morning can often tell you what kind of day you are going to have",
    "Early to bed and early to rise, makes a man healthy, wealthy and wise",
    "The difference between rising at five and seven o’clock in the morning, for forty years, supposing a man to go to bed at the same hour at night, is nearly equivalent to the addition of ten years to a man’s life.",
    "The time just before dawn contains the most energy of all hours of the day. This has helped me become an early riser and an early doer. When I wake to see that it’s light out already, I feel the world has started without me.",
    "The only person who can pull me down is myself, and I’m not going to let myself pull me down anymore",
    "If you can dream it, you can do it.",
    "The early morning has gold in its mouth.",
    "Early rising not only gives us more life in the same number of years, but adds, likewise to their number; and not only enables us to enjoy more of existence in the same time, but increases also the measure",
    "Every morning in Africa, a Gazelle wakes up. It knows it must run faster than the fastest lion or it will be killed.",
    "Every morning a Lion wakes up. It knows it must outrun the slowest Gazelle or it will starve to death.",
    "It doesn’t matter whether you are a Lion or a Gazelle… when the sun comes up, you’d better be running."
    ];
const STUDY_TITLE_CARD = "Life is all about learning!";
const STUDY = [
    "It always seems impossible until it’s done.",
    "Start where you are. Use what you have. Do what you can.",
    "The secret of success is to do the common things uncommonly well.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Don’t wish it were easier; wish you were better.",
    "Push yourself, because no one else is going to do it for you.",
    "There is no substitute for hard work.",
    "You don’t always get what you wish for; you get what you work for.",
    "If it’s important to you, you’ll find a way. If not, you’ll find an excuse.",
    "Don’t say you don’t have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresea, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.",
    "The expert in everything was once a beginner.",
    "Just believe in yourself. Even if you don't pretend that you do and, at some point you will."
    ];
const SAVETIME_TITLE_CARD = "Time is the value!";
const SAVE_TIME = [
    "if you want to read books , download audio books . travel, listen and learn .",
    "As soon as you reach home keep your clothes in hanger , you will save time of ironing",
    "when you are done eating immediately wash your plate , unnecessary mess is avoided.",
    "carry all your accessories for the party and wear it when you commute.You basically will reach a bit early .",
    "Two minute rule, if something takes just two minutes do it , remember delaying it for next time will 5 minutes more .",
    "Write down everything on your book or to do list .however, genius you might be .I don’t care always right and check.",
    "The time boxing . for half an hour to things which is at hand and nothing else no Facebook , no insta and no attention to natures call.",
    "don’t be available to everyone every time keep your phone on silent and return calls in batches.",
    "enough all the best , wait I should right another point .",
    "okay done , follow it now",
    ];
const LIFEHACK_TITLE_CARD = "Fun knowing hacks of life!";
const LIFE_HACKS = [
    "Put toothpaste(white colored) on a pimple and it will disappear over night.",
    "Have itchy mosquito bites? ice it, it stops the itch.",
    "A shaving cut will immediately stop bleeding if you put Chapstick on it.",
    "Want to get rid of bad breath? Brushing your teeth is important but it's more important to brush your tongue. That's where bad breath starts.",
    "Eating tomatoes helps to prevent sunburn. Tomatoes provide the best defense against sun damage.",
    "Want to lose weight? Don't eat anything 4 hours before you go to bed. It makes a huge difference.",
    "If you always feel like eating, you might just be dehydrated.have some water for that time.",
    "Eating spicy food boosts your metabolism and can help you lose weight.",
    "If you weigh over 400 pounds, you can live one year without eating anything.",
    "Eating grapes improves the brain's ability to process new information and thus enhances intelligence.",
    "Eating Pizza once a week can actually help reduce the risk of esophageal cancer. So go eat some Pizza!",
    "Eating a small amount of chocolate in the morning can help you burn calories easily and lose weight throughout the day.",
    "Three passionate kisses a day can double your metabolic rate and can help you lose up to a pound.",
    "Drinking half a glass of water before bed and half a glass when waking up can serve as a psychological cue to remembering all of your dreams.",
    "Smiling for 60 seconds can instantly improve your mood. Try it!",
    "If Internet Explorer can be brave enough to ask you to set him as your default browser, don't tell me you can't dare to ask a girl out.",
    "If you're coughing uncontrollably, raise your hands above your head and it will stop!",
    "Bees can't see you if you aren't moving.",
    "Finding troubles with maths problem? Put the equation into Computational Knowledge Engine and it will solve for you.",
    "Times new roman is the fastest font to read.",
    "Avoid studying in the same place regularly. Changing your study environment while learning helps you retain knowledge effectively.",
    "Instead of searching on Google search on scholar.google.comfor more relevant information for study purpose.",
    "Nutella + milk in the microwave will give you the best hot chocolate ever!",
    "On Supercook: recipe search by ingredients you have at home you just enter what ingredients you have and it tells you what meals you can make and how you can make them.",
    "Angry? Take a deep breath before you speak, because your mouth acts quicker than your brain.",
    "At Bios Urn - The Biodegradable Urn Designed to Grow a Tree you can buy biodegradable Urns that contain a tree seed and get nutrients from your ashes. So that when you die, you can be turned into a tree!",
    "If you have a .edu email address, you can get an Amazon Prime account free for one year . Amazon Prime account lets you watch almost unlimited TV and movies through Amazon.",
    "Go to iamawesome.com and prepare to be amazed!",
    "Got a pimple before something important? Use an ice cube to shrink it!",
    "A bit of toothpaste can successfully fix a scratched cell phone screen.",
    "Got stains on your sneakers? Scrub it with nail polish and they'll come right out.",
    "Mountain Dew was originally made to be mixed with whiskey. Try it!",
    "At Disney World, you can request a wake up call from any Disney character!",
    "Saying Boots 'N' Cats quickly, repeatedly and at varying tempos is the secret to beatboxing.",
    "On Stuffed Dogs and Stuffed Puppies from The Shelter Pups you can send them a picture of your dog and they'll send you a stuffed animal that looks just like it."
    ];
const INSPIRING_STORYS = [
    "The Elephant Rope (Belief) A gentleman was walking through an elephant camp, and he spotted that the elephants weren’t being kept in cages or held by the use of chains. All that was holding them back from escaping the camp, was a small piece of rope tied to one of their legs. As the man gazed upon the elephants, he was completely confused as to why the elephants didn’t just use their strength to break the rope and escape the camp. They could easily have done so, but instead they didn’t try to at all. Curious and wanting to know the answer, he asked a trainer nearby why the elephants were just standing there and never tried to escape. The trainer replied; “when they are very young and much smaller we use the same size rope to tie them and, at that age, it’s enough to hold them. As they grow up, they are conditioned to believe they cannot break away. They believe the rope can still hold them, so they never try to break free.” The only reason that the elephants weren’t breaking free and escaping from the camp was because over time they adopted the belief that it just wasn’t possible. Moral of the story: No matter how much the world tries to hold you back, always continue with the belief that what you want to achieve is possible. Believing you can become successful is the most important step in actually achieving it.",
    "Thinking Out of the Box (Creative Thinking) In a small Italian town, hundreds of years ago, a small business owner owed a large sum of money to a loan-shark. The loan-shark was a very old, unattractive looking guy that just so happened to fancy the business owner’s daughter. He decided to offer the businessman a deal that would completely wipe out the debt he owed him. However, the catch was that we would only wipe out the debt if he could marry the businessman’s daughter. Needless to say, this proposal was met with a look of disgust. The loan-shark said that he would place two pebbles into a bag, one white and one black. The daughter would then have to reach into the bag and pick out a pebble. If it was black, the debt would be wiped, but the loan-shark would then marry her. If it was white, the debt would also be wiped, but the daughter wouldn’t have to marry the loan-shark. Standing on a pebble strewn path in the businessman’s garden, the loan-shark bent over and picked up two pebbles. Whilst he was picking them up, the daughter noticed that he’d picked up two black pebbles and placed them both into the bag. He then asked the daughter to reach into the bag and pick one.The daughter naturally had three choices as to what she could have done: Refuse to pick a pebble from the bag or Take both pebbles out of the bag and expose the loan-shark for cheating or Pick a pebble from the bag fully well knowing it was black and sacrifice herself for her father’s freedom. She drew out a pebble from the bag, and before looking at it ‘accidentally’ dropped it into the midst of the other pebbles. She said to the loan-shark.  “Oh, how clumsy of me. Never mind, if you look into the bag for the one that is left, you will be able to tell which pebble I picked.” The pebble left in the bag is obviously black, and seeing as the loan-shark didn’t want to be exposed, he had to play along as if the pebble the daughter dropped was white, and clear her father’s debt. Moral of the story: It’s always possible to overcome a tough situation through out of the box thinking, and not give in to the only options you think you have to pick from.",
    "The Group of Frogs (Encouragement) As a group of frogs were traveling through the woods, two of them fell into a deep pit. When the other frogs crowded around the pit and saw how deep it was, they told the two frogs that they’re was no hope left for them. However, the two frogs decided to ignore what the others were saying and they proceeded to try and jump out of the pit. Despite their efforts, the group of frogs at the top of he pit were still saying that they should just give up. That they would never make it out. Eventually, one of the frogs took heed to what the others were saying and he gave up, falling down to his death. The other frog continued to jump as hard as he could. Again, the crowd of frogs yelled at him to stop the pain and just die. He jumped even harder and finally made it out. When he got out, the other frogs said, “Did you not hear us?” The frog explained to them that he was deaf. He thought they were encouraging him the entire time. Moral of the story: People’s words can have a big effect on other’s lives. Think about what you say before it comes out of your mouth. It might just be the difference between life and death.",
    "A Pound of Butter (Honesty) There was a farmer who sold a pound of butter to a baker. One day the baker decided to weigh the butter to see if he was getting the right amount, which he wasn’t. Angry about this, he took the farmer to court. The judge asked the farmer if he was using any measure to weight the butter. The farmer replied, “Honor, I am primitive. I don’t have a proper measure, but I do have a scale.” The judge asked, “Then how do you weigh the butter?” The farmer replied. “Your Honor, long before the baker started buying butter from me, I have been buying a pound loaf of bread from him. Every day when the baker brings the bread, I put it on the scale and give him the same weight in butter. If anyone is to be blamed, it is the baker.” Moral of the story: In life, you get what you give. Don’t try and cheat others.",
    "The Obstacle In Our Path (Opportunity), In ancient times, a King had a boulder placed on a roadway. He then hid himself and watched to see if anyone would move the boulder out of the way. Some of the king’s wealthiest merchants and courtiers came by and simply walked around it. Many people loudly blamed the King for not keeping the roads clear, but none of them did anything about getting the stone out of the way. A peasant then came along carrying a load of vegetables. Upon approaching the boulder, the peasant laid down his burden and tried to push the stone out of the road. After much pushing and straining, he finally succeeded. After the peasant went back to pick up his vegetables, he noticed a purse lying in the road where the boulder had been. The purse contained many gold coins and a note from the King explaining that the gold was for the person who removed the boulder from the roadway. Moral of the story: Every obstacle we come across in life gives us an opportunity to improve our circumstances, and whilst the lazy complain, the others are creating opportunities through their kind hearts, generosity and willingness to get things done.",
    "The Butterfly (Struggles), A man found a cocoon of a butterfly. One day a small opening appeared. He sat and watched the butterfly for several hours as it struggled to force its body through that little hole. Until it suddenly stopped making any progress, and looked like it was stuck. So the man decided to help the butterfly. He took a pair of scissors and snipped off the remaining bit of the cocoon. The butterfly then emerged easily, although it had a swollen body and small, shriveled wings. The man didn’t think anything of it, and sat there waiting for the wings to enlarge to support the butterfly. But that didn’t happen. The butterfly spent the rest of its life unable to fly, crawling around with tiny wings and a swollen body. Despite the kind heart of the man, he didn’t understand that the restricting cocoon and the struggle needed by the butterfly to get itself through the small opening; were God’s way of forcing fluid from the body of the butterfly into its wings. To prepare itself for flying once it was out of the cocoon. Moral of the story: Our struggles in life develop our strengths. Without struggles we never grow and never get stronger, so it’s important for us to tackle challenges on our own, and not be relying on help from others.",
    "Control Your Temper (Anger), There once was a little boy who had a very bad temper. His father decided to hand him a bag of nails and said that every time the boy lost his temper, he had to hammer a nail into the fence. On the first day, the boy hammered 37 nails into that fence. The boy gradually began to control his temper over the next few weeks, and number of nails he was hammering into the fence slowly decreased. He discovered it was easier to control his temper than to hammer those nails into the fence. Finally, the day came when the boy didn’t lose his temper at all. He told his father the news and the father suggested that the boy should now pull out a nail every day he kept his temper under control. The days passed and the young boy was finally able to tell his father that all the nails were gone. The father took his son by the hand and led him to the fence. “you have done well, my son, but look at the holes in the fence. The fence will never be the same. When you say things in anger, they leave a scar just like this one. You can put a knife in a man and draw it out. It won’t matter how many times you say I’m sorry, the wound is still there.” Moral of the story: Control your anger, and don’t say things to people in the heat of the moment, that you may later regret. Some things in life, you are unable to take back",
    "The Blind Girl (Change), There was a blind girl who hated herself purely for the fact she was blind. The only person she didn’t hate was her loving boyfriend, as he was always there for her. She said that if she could only see the world, she would marry him. One day, someone donated a pair of eyes to her now she could see everything, including her boyfriend. Her boyfriend asked her, “now that you can see the world, will you marry me?” The girl was shocked when she saw that her boyfriend was blind too, and refused to marry him. Her boyfriend walked away in tears, and later wrote a letter to her saying: “Just take care of my eyes dear.” Moral of the story: When our circumstances change, so does our mind. Some people may not be able to see the way things were before, and might not be able to appreciate them. There are many things to take away from this story, not just one.",
    "Puppies for Sale (Understanding), A shop owner placed a sign above his door that said: “Puppies For Sale.” Signs like this always have a way of attracting young children, and to no surprise, a boy saw the sign and approached the owner; “How much are you going to sell the puppies for?” he asked. The store owner replied, “Anywhere from $30 to $50.” The little boy pulled out some change from his pocket. “I have $2.37,” he said. “Can I please look at them?” The shop owner smiled and whistled. Out of the kennel came Lady, who ran down the aisle of his shop followed by five teeny, tiny balls of fur. One puppy was lagging considerably behind. Immediately the little boy singled out the lagging, limping puppy and said, “What’s wrong with that little dog?” The shop owner explained that the veterinarian had examined the little puppy and had discovered it didn’t have a hip socket. It would always limp. It would always be lame. The little boy became excited. “That is the puppy that I want to buy.” The shop owner said, “No, you don’t want to buy that little dog. If you really want him, I’ll just give him to you.” The little boy got quite upset. He looked straight into the store owner’s eyes, pointing his finger, and said, “I don’t want you to give him to me. That little dog is worth every bit as much as all the other dogs and I’ll pay full price. In fact, I’ll give you $2.37 now, and 50 cents a month until I have him paid for.” The shop owner countered, “You really don’t want to buy this little dog. He is never going to be able to run and jump and play with you like the other puppies.” To his surprise, the little boy reached down and rolled up his pant leg to reveal a badly twisted, crippled left leg supported by a big metal brace. He looked up at the shop owner and softly replied, Well, I don’t run so well myself, and the little puppy will need someone who understands",
    "Box Full of Kisses (Love), Some time ago, a man punished his 3-year-old daughter for wasting a roll of gold wrapping paper. Money was tight and he became infuriated when the child tried to decorate a box to put under the Christmas tree.Nevertheless, the little girl brought the gift to her father the next morning and said, “This is for you, Daddy.” The man became embarrassed by his overreaction earlier, but his rage continue when he saw that the box was empty. He yelled at her; “Don’t you know, when you give someone a present, there is supposed to be something inside?” The little girl looked up at him with tears in her eyes and cried. “Oh, Daddy, it’s not empty at all. I blew kisses into the box. They’re all for you, Daddy.” The father was crushed. He put his arms around his little girl, and he begged for her forgiveness. Only a short time later, an accident took the life of the child. Her father kept the gold box by his bed for many years and, whenever he was discouraged, he would take out an imaginary kiss and remember the love of the child who had put it there. Moral of the story: Love is the most precious gift in the world"
    ];
// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */
       //  if (event.session.application.applicationId !== "amzn1.ask.skill.4fae6c68-2a68-4e57-be4d-7bfffa837287") {
      //         context.fail("Invalid Application ID");
      //  }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);
var speechOutput = SPEACH_START_TAG + LAUNCH_AUDIO +  HELP_SPEACH +SPEACH_END_TAG;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, "", "false"));
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;
        intentRequest.intent.slots.ADVISE.value;

    // dispatch custom intents to handlers here
    if (intentName == 'GetADVISE') {
        if(intentRequest.intent.slots.ADVISE.value == "workout"){
            handlFullTexteAdviseRequest(intent, session, callback, WORKOUT_ADVISES,WORKOUT_TITLE_CARD,WORKOUT_IMAGE, WORKOUT_AUDIO);
        }else if(intentRequest.intent.slots.ADVISE.value == "lifehack" || intentRequest.intent.slots.ADVISE.value == "life hack"){
            handleRandomAdviseRequest(intent, session, callback, LIFE_HACKS);
        }else if(intentRequest.intent.slots.ADVISE.value == "social media"){
            handlFullTexteAdviseRequest(intent, session, callback, QUIT_SOCIAL_MEDIA,SOCIALMEDIA_TITLE_CARD,WORKOUT_IMAGE,SOCIAL_AUDIO);
        }else if(intentRequest.intent.slots.ADVISE.value == "financial" || intentRequest.intent.slots.ADVISE.value == "finance" || intentRequest.intent.slots.ADVISE.value == "personnal finance" || intentRequest.intent.slots.ADVISE.value == "financial advise"){
            handlFullTexteAdviseRequest(intent, session, callback, FINANCIAL_HELP,FINANCIAL_HELP_TITLE_CARD,WORKOUT_IMAGE,MONEY_AUDIO);
        }else if(intentRequest.intent.slots.ADVISE.value == "habbit" || intentRequest.intent.slots.ADVISE.value == "hobby"){
            handleRandomAdviseRequest(intent, session, callback, GOOD_HABITS,GOOD_HABITS_TITLE_CARD);
        }else if(intentRequest.intent.slots.ADVISE.value == "style" || intentRequest.intent.slots.ADVISE.value == "good looking"){
            handlFullTexteAdviseRequest(intent, session, callback, GOOD_LOOKING,STYLE_TITLE_CARD,WORKOUT_IMAGE,DRUMS_AUDIO);
        }else if(intentRequest.intent.slots.ADVISE.value == "wakeup early" || intentRequest.intent.slots.ADVISE.value == "wakeup"){
            handlFullTexteAdviseRequest(intent, session, callback, WAKEUP_EARLY,WAKEUP_TITLE_CARD,WORKOUT_IMAGE, MORNING_AUDIO_2);
        }else if(intentRequest.intent.slots.ADVISE.value == "procastination" || intentRequest.intent.slots.ADVISE.value == "post pone"){
            handlFullTexteAdviseRequest(intent, session, callback, PROCASTINATION,PROCATINATION_TITLE_CARD,WORKOUT_IMAGE,TIME_AUDIO);
        }else if(intentRequest.intent.slots.ADVISE.value == "early bed" || intentRequest.intent.slots.ADVISE.value == "sleep early"){
            handlFullTexteAdviseRequest(intent, session, callback, SLEEP_EARLY,SLEEPEARLY_TITLE_CARD,GOOD_NIGHT_AUDIO);
        }else if(intentRequest.intent.slots.ADVISE.value == "save time" || intentRequest.intent.slots.ADVISE.value == "time"){
            handleRandomAdviseRequest(intent, session, callback, SAVE_TIME);
        }else if(intentRequest.intent.slots.ADVISE.value == "study"){
            handlFullTexteAdviseRequest(intent, session, callback, STUDY,STUDY_TITLE_CARD,WORKOUT_IMAGE,STUDY_AUDIO);
        }else if(intentRequest.intent.slots.ADVISE.value == "story"){
            handleRandomAdviseRequest(intent, session, callback, INSPIRING_STORYS,STUDY_TITLE_CARD,WORKOUT_IMAGE);
        }else if(intentRequest.intent.slots.ADVISE.value == "help"){
              handleHelpRequest(intent, session, callback);
        }else if(intentRequest.intent.slots.ADVISE.value == "stop"){
              handleStopRequest(intent, session, callback);
        }else if(intentRequest.intent.slots.ADVISE.value == "cancel"){
              handleStopRequest(intent, session, callback);
        }
        else{
          console.log("UnIdentified advise:"+intentRequest.intent.slots.ADVISE.value);
        }
    }else if (intentName == 'AMAZON.StopIntent') {
        handleStopRequest(intent, session, callback);
    }
    else if (intentName == 'AMAZON.CancelIntent') {
        handleStopRequest(intent, session, callback);
    }
    else if (intentName == 'AMAZON.HelpIntent') {
        handleHelpRequest(intent, session, callback);
    }else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

function handleStopRequest(intent, session, callback) {
     var cardTitle = "All the best and lots of blessings from Guruji!";
     var speechOutput = SPEACH_START_TAG + "Each day is a blessing that brings an abundance of happiness. Therefore, finding happiness should be like finding a gift in a stack of gifts.";
     speechOutput = speechOutput + STOP_AUDIO + SPEACH_END_TAG;
     var cardContent = speechOutput.replace(regex, "");
     callback(session.attributes,
        buildSpeechletResponse(cardTitle , speechOutput ,cardContent,"", "true"));
}
function handleHelpRequest(intent, session, callback) {
     var cardTitle = "What can I help you with?";
     var speechOutput = SPEACH_START_TAG + HELP_SPEACH + SPEACH_END_TAG;
     var cardContent = speechOutput.replace(regex, "");
     callback(session.attributes,
        buildSpeechletResponse(cardTitle , speechOutput,cardContent,"", "false"));
}
function handleRandomAdviseRequest(intent, session, callback, ARRAY,cardTitle) {
     var speechOutput = SPEACH_START_TAG + SPEACH_OUTPUT_START_AUDIO;
     speechOutput = speechOutput + getRandon(ARRAY);
     var cardContent = speechOutput.replace(regex, "");
     speechOutput = speechOutput + SPEACH_OUTPUT_END_AUDIO + MORE_HELP_SPEACH + SPEACH_END_TAG;
     callback(session.attributes,
        buildSpeechletResponse(cardTitle , speechOutput,cardContent,HELP_SPEACH, "false"));
}
function handlFullTexteAdviseRequest(intent, session, callback, ARRAY,cardTitle, cardImage, AUDIO) {
     var speechOutput = SPEACH_START_TAG + AUDIO;
     speechOutput = speechOutput + getFullText(ARRAY);
     var cardContent = speechOutput.replace(regex, "");
     speechOutput = speechOutput + SPEACH_OUTPUT_END_AUDIO + MORE_HELP_SPEACH + SPEACH_END_TAG;
     callback(session.attributes,
        buildSpeechletResponseWithImageCard(cardTitle , speechOutput,cardContent,HELP_SPEACH,cardImage,cardImage, "false"));
}


// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, cardText, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "SSML",
            ssml: output
        },
        card: {
            type: "Simple",
            title: title,
            content: cardText
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}
function buildSpeechletResponseWithImageCard(title, output, cardText, repromptText, smallImageUrl ,largeImageUrl, shouldEndSession) {
    return {
        outputSpeech: {
            type: "SSML",
            ssml: output
        },
        card: {
            type: "Simple",
            title: title,
            content: cardText
        },
        image: smallImageUrl,
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}
function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "SSML",
            ssml: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
function getRandon(ARRAY) {
    return ARRAY[Math.floor(Math.random() * ARRAY.length)];
}
function getFullText(ARRAY) {
    var i = 0;
    var text = "";
    
    while (ARRAY[i]) {
        text += ARRAY[i] +" "+ BREAK_1S;
        i++;
    }
    return text;
}

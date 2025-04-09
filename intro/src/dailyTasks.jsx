const dailyTasks = [
    // Day 1: Beginner Introvert
    [
      { id: 1, title: 'Initiate Contact: "Greetings, Neighbor"', xp: 10, completed: false },
      { id: 2, title: 'Facial Protocol: "Smile Activation"', xp: 15, completed: false },
      { id: 3, title: 'Signal Gesture: "Wave Sync"', xp: 20, completed: false },
    ],
    // Day 2
    [
      { id: 4, title: 'Voice Module: "Good Morning" to Unit', xp: 15, completed: false },
      { id: 5, title: 'Eye Contact: "Cashier Lock"', xp: 20, completed: false },
      { id: 6, title: 'Query System: "Ask Time"', xp: 25, completed: false },
    ],
    // Day 3
    [
      { id: 7, title: 'Proximity Test: "Stand Near Group"', xp: 20, completed: false },
      { id: 8, title: 'Audio Output: "Compliment Item"', xp: 25, completed: false },
      { id: 9, title: 'Gesture Command: "Thumbs Up"', xp: 30, completed: false },
    ],
    // Day 4
    [
      { id: 10, title: 'Social Ping: "Hello to Stranger"', xp: 25, completed: false },
      { id: 11, title: 'Data Share: "Tell a Fact"', xp: 30, completed: false },
      { id: 12, title: 'Sync Motion: "Nod at Passerby"', xp: 35, completed: false },
    ],
    // Day 5
    [
      { id: 13, title: 'Voice Broadcast: "Loud Hello"', xp: 30, completed: false },
      { id: 14, title: 'Query Engage: "Ask Opinion"', xp: 35, completed: false },
      { id: 15, title: 'Group Signal: "Wave to Crowd"', xp: 40, completed: false },
    ],
    // Day 6
    [
      { id: 16, title: 'Humor Protocol: "Tell a Joke"', xp: 35, completed: false },
      { id: 17, title: 'Contact Link: "Chat 1 Minute"', xp: 40, completed: false },
      { id: 18, title: 'Visual Flare: "Wink at Someone"', xp: 45, completed: false },
    ],
    // Day 7
    [
      { id: 19, title: 'Audio Boost: "Sing Quietly"', xp: 40, completed: false },
      { id: 20, title: 'Social Scan: "Ask Directions"', xp: 45, completed: false },
      { id: 21, title: 'Motion Pulse: "High Five"', xp: 50, completed: false },
    ],
    // Day 8
    [
      { id: 22, title: 'Voice Amplify: "Shout Greeting"', xp: 45, completed: false },
      { id: 23, title: 'Engage Mode: "Talk 2 Minutes"', xp: 50, completed: false },
      { id: 24, title: 'Gesture Overload: "Double Wave"', xp: 55, completed: false },
    ],
    // Day 9
    [
      { id: 25, title: 'Humor Burst: "Loud Joke"', xp: 50, completed: false },
      { id: 26, title: 'Proximity Overclock: "Join Group"', xp: 55, completed: false },
      { id: 27, title: 'Visual Sync: "Stare Contest"', xp: 60, completed: false },
    ],
    // Day 10
    [
      { id: 28, title: 'Audio Flare: "Sing in Public"', xp: 55, completed: false },
      { id: 29, title: 'Query Overload: "Ask 3 Questions"', xp: 60, completed: false },
      { id: 30, title: 'Motion Surge: "Dance Step"', xp: 65, completed: false },
    ],
    // Day 11
    [
      { id: 31, title: 'Voice Surge: "Yell Hello"', xp: 60, completed: false },
      { id: 32, title: 'Social Burst: "Talk 5 Minutes"', xp: 65, completed: false },
      { id: 33, title: 'Gesture Flash: "Spin Wave"', xp: 70, completed: false },
    ],
    // Day 12
    [
      { id: 34, title: 'Humor Overdrive: "Laugh Loudly"', xp: 65, completed: false },
      { id: 35, title: 'Contact Pulse: "Group Chat"', xp: 70, completed: false },
      { id: 36, title: 'Visual Burst: "Wink Twice"', xp: 75, completed: false },
    ],
    // Day 13
    [
      { id: 37, title: 'Audio Overload: "Sing Chorus"', xp: 70, completed: false },
      { id: 38, title: 'Engage Overclock: "Talk 10 Minutes"', xp: 75, completed: false },
      { id: 39, title: 'Motion Blast: "Jump Wave"', xp: 80, completed: false },
    ],
    // Day 14
    [
      { id: 40, title: 'Voice Flash: "Shout Praise"', xp: 75, completed: false },
      { id: 41, title: 'Social Overload: "Meet New Unit"', xp: 80, completed: false },
      { id: 42, title: 'Gesture Surge: "Triple Wave"', xp: 85, completed: false },
    ],
    // Day 15: Halfway to Extrovert
    [
      { id: 43, title: 'Humor Flash: "Tell Pun Loudly"', xp: 80, completed: false },
      { id: 44, title: 'Proximity Surge: "Crowd Stand"', xp: 85, completed: false },
      { id: 45, title: 'Visual Overdrive: "Eye Contact 5s"', xp: 90, completed: false },
    ],
    // Day 16
    [
      { id: 46, title: 'Audio Pulse: "Sing Full Song"', xp: 85, completed: false },
      { id: 47, title: 'Query Burst: "Ask 5 Units"', xp: 90, completed: false },
      { id: 48, title: 'Motion Overload: "Dance in Line"', xp: 95, completed: false },
    ],
    // Day 17
    [
      { id: 49, title: 'Voice Overdrive: "Yell Cheer"', xp: 90, completed: false },
      { id: 50, title: 'Social Flash: "Talk to Crowd"', xp: 95, completed: false },
      { id: 51, title: 'Gesture Blast: "Spin Jump"', xp: 100, completed: false },
    ],
    // Day 18
    [
      { id: 52, title: 'Humor Surge: "Laugh Maniacally"', xp: 95, completed: false },
      { id: 53, title: 'Contact Overdrive: "Host Chat"', xp: 100, completed: false },
      { id: 54, title: 'Visual Pulse: "Wink at Group"', xp: 105, completed: false },
    ],
    // Day 19
    [
      { id: 55, title: 'Audio Burst: "Scream Song"', xp: 100, completed: false },
      { id: 56, title: 'Engage Pulse: "Talk 15 Minutes"', xp: 105, completed: false },
      { id: 57, title: 'Motion Flash: "Dance Circle"', xp: 110, completed: false },
    ],
    // Day 20
    [
      { id: 58, title: 'Voice Blast: "Shout Nonsense"', xp: 105, completed: false },
      { id: 59, title: 'Social Surge: "Join Party"', xp: 110, completed: false },
      { id: 60, title: 'Gesture Overclock: "Wave Frenzy"', xp: 115, completed: false },
    ],
    // Day 21
    [
      { id: 61, title: 'Humor Blast: "Joke to Crowd"', xp: 110, completed: false },
      { id: 62, title: 'Proximity Overload: "Dance in Group"', xp: 115, completed: false },
      { id: 63, title: 'Visual Surge: "Stare 10s"', xp: 120, completed: false },
    ],
    // Day 22
    [
      { id: 64, title: 'Audio Overclock: "Sing Opera"', xp: 115, completed: false },
      { id: 65, title: 'Query Overdrive: "Ask 10 Units"', xp: 120, completed: false },
      { id: 66, title: 'Motion Surge: "Breakdance"', xp: 125, completed: false },
    ],
    // Day 23
    [
      { id: 67, title: 'Voice Overload: "Yell Poem"', xp: 120, completed: false },
      { id: 68, title: 'Social Blast: "Lead Chat"', xp: 125, completed: false },
      { id: 69, title: 'Gesture Pulse: "Spin Dance"', xp: 130, completed: false },
    ],
    // Day 24
    [
      { id: 70, title: 'Humor Overclock: "Laugh for 1 Min"', xp: 125, completed: false },
      { id: 71, title: 'Contact Surge: "Group Speech"', xp: 130, completed: false },
      { id: 72, title: 'Visual Blast: "Wink at All"', xp: 135, completed: false },
    ],
    // Day 25
    [
      { id: 73, title: 'Audio Surge: "Scream Anthem"', xp: 130, completed: false },
      { id: 74, title: 'Engage Overload: "Talk 20 Minutes"', xp: 135, completed: false },
      { id: 75, title: 'Motion Overdrive: "Dance in Public"', xp: 140, completed: false },
    ],
    // Day 26
    [
      { id: 76, title: 'Voice Pulse: "Shout Love"', xp: 135, completed: false },
      { id: 77, title: 'Social Overclock: "Host Event"', xp: 140, completed: false },
      { id: 78, title: 'Gesture Surge: "Wave Storm"', xp: 145, completed: false },
    ],
    // Day 27
    [
      { id: 79, title: 'Humor Pulse: "Joke Marathon"', xp: 140, completed: false },
      { id: 80, title: 'Proximity Blast: "Crowd Dance"', xp: 145, completed: false },
      { id: 81, title: 'Visual Overclock: "Eye Lock 15s"', xp: 150, completed: false },
    ],
    // Day 28
    [
      { id: 82, title: 'Audio Flash: "Sing Epic"', xp: 145, completed: false },
      { id: 83, title: 'Query Surge: "Ask 15 Units"', xp: 150, completed: false },
      { id: 84, title: 'Motion Blast: "Dance Frenzy"', xp: 155, completed: false },
    ],
    // Day 29
    [
      { id: 85, title: 'Voice Overclock: "Yell Story"', xp: 150, completed: false },
      { id: 86, title: 'Social Pulse: "Lead Crowd"', xp: 155, completed: false },
      { id: 87, title: 'Gesture Overload: "Spin Chaos"', xp: 160, completed: false },
    ],
    // Day 30: Near Extrovert Prime
    [
      { id: 88, title: 'Audio Overdrive: "Scream Victory"', xp: 155, completed: false },
      { id: 89, title: 'Engage Blast: "Talk 30 Minutes"', xp: 160, completed: false },
      { id: 90, title: 'Motion Surge: "Dance Everywhere"', xp: 165, completed: false },
    ],
  ];
  
  export default dailyTasks;
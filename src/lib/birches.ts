export type WordNote = {
  word: string;
  theme: string;
  symbolism: string;
  device: string;
  choice: string;
  effect: string;
  ib: string;
};

export type Stanza = {
  id: number;
  label: string;
  /** position of the firefly, in % of viewport */
  x: number;
  y: number;
  text: string;
  summary: string;
  themes: string;
  symbolism: string;
  devices: string;
  choices: string;
  effect: string;
  ib: string;
};

export const stanzas: Stanza[] = [
  {
    id: 1,
    label: "The Wish",
    x: 21,
    y: 30,
    text: `When I see birches bend to left and right
Across the lines of straighter darker trees,
I like to think some boy's been swinging them.
But swinging doesn't bend them down to stay
As ice-storms do.`,
    summary:
      "The speaker notices bent birches and immediately prefers a human, playful explanation over the natural one — before honesty pulls him back to ice.",
    themes: "Imagination versus reality; the pull of nostalgia; nature as teacher.",
    symbolism:
      "The bent birches are the human spirit under pressure; the 'straighter darker trees' are the unbending, unimaginative world around them.",
    devices:
      "Blank verse, visual imagery, antithesis ('bend' / 'straighter'), volta on 'But'.",
    choices:
      "Frost opens in the conditional 'I like to think', flagging the fiction as chosen, not believed — then corrects himself within four lines.",
    effect:
      "The reader is invited into the fantasy and gently evicted from it, feeling the same reluctance the speaker feels.",
    ib: "The tension between the constructed and the observed is announced structurally: Frost dramatises the act of interpretation itself, making the poem partly about how we read the world.",
  },
  {
    id: 2,
    label: "The Ice-Storm",
    x: 47,
    y: 17,
    text: `Often you must have seen them
Loaded with ice a sunny winter morning
After a rain. They click upon themselves
As the breeze rises, and turn many-colored
As the stir cracks and crazes their enamel.
Soon the sun's warmth makes them shed crystal shells
Shattering and avalanching on the snow-crust—
Such heaps of broken glass to sweep away
You'd think the inner dome of heaven had fallen.`,
    summary:
      "A long, luminous digression into the real cause: ice loading the branches until they crack, shine, and shatter.",
    themes: "The beauty and indifference of nature; transience; disillusionment.",
    symbolism:
      "The 'inner dome of heaven' fallen as broken glass — the collapse of an idealised, ordered cosmos into shards.",
    devices:
      "Onomatopoeia ('click', 'cracks'), sibilance, hyperbole, extended metaphor of glass and enamel.",
    choices:
      "Frost lets the 'true' explanation become far more gorgeous than the invented one, refusing to let realism read as bleak.",
    effect:
      "The reader is dazzled; loss and beauty arrive in the same breath, which is the poem's emotional signature.",
    ib: "Frost's pastoral realism resists Romantic escapism while borrowing its music — a key point for comparing Frost to Wordsworth or Keats.",
  },
  {
    id: 3,
    label: "The Bowed Trees",
    x: 68,
    y: 40,
    text: `They are dragged to the withered bracken by the load,
And they seem not to break; though once they are bowed
So low for long, they never right themselves:
You may see their trunks arching in the woods
Years afterwards, trailing their leaves on the ground
Like girls on hands and knees that throw their hair
Before them over their heads to dry in the sun.`,
    summary:
      "The trees survive but are permanently altered — bent for life, likened to girls drying their hair.",
    themes: "Endurance; permanent change; the cost of growth.",
    symbolism:
      "Bowed but unbroken trees stand for a person shaped irreversibly by experience.",
    devices: "Simile, personification, enjambment that mimics the long bending.",
    choices:
      "Frost turns damage into an image of intimacy and warmth, complicating any simple reading of suffering.",
    effect:
      "Sympathy replaces pity; the reader accepts the change rather than mourning it.",
    ib: "A strong close-reading site: the simile feminises and domesticates the landscape, raising questions about gaze, tenderness and pastoral convention.",
  },
  {
    id: 4,
    label: "The Boy Alone",
    x: 33,
    y: 60,
    text: `But I was going to say when Truth broke in
With all her matter-of-fact about the ice-storm,
I should prefer to have some boy bend them
As he went out and in to fetch the cows—
Some boy too far from town to learn baseball,
Whose only play was what he found himself,
Summer or winter, and could play alone.`,
    summary:
      "The speaker interrupts himself to reclaim his fiction: a solitary farm boy who invents his own games.",
    themes: "Childhood; solitude; imagination as self-sufficiency.",
    symbolism:
      "The boy is the speaker's younger self and the figure of the poet — someone who makes meaning where none is given.",
    devices: "Personification of Truth, colloquial interruption, caesura.",
    choices:
      "Frost capitalises Truth and makes her an intruder, quietly ranking imagination above fact in the speaker's affections.",
    effect:
      "The conversational swerve feels like overhearing a mind at work, building intimacy.",
    ib: "The metapoetic turn: Frost stages the poet's right to prefer the invented story, which is itself a statement about the function of literature.",
  },
  {
    id: 5,
    label: "The Climb",
    x: 57,
    y: 68,
    text: `One by one he subdued his father's trees
By riding them down over and over again
Until he took the stiffness out of them,
And not one but hung limp, not one was left
For him to conquer. He learned all there was
To learn about not launching out too soon
And so not carrying the tree away
Clear to the ground. He always kept his poise
To the top branches, climbing carefully
With the same pains you use to fill a cup
Up to the brim, and even above the brim.
Then he flung outward, feet first, with a swish,
Kicking his way down through the air to the ground.`,
    summary:
      "The boy masters the trees through patient repetition, then releases into flight.",
    themes: "Discipline and freedom; growth through practice; mastery.",
    symbolism:
      "Climbing to the brim and beyond is aspiration; the swish downward is controlled surrender.",
    devices:
      "Extended metaphor of the filled cup, kinaesthetic imagery, repetition ('not one... not one').",
    choices:
      "Frost gives craft — poise, patience, restraint — the same weight as ecstasy, mirroring the poet's own discipline.",
    effect:
      "The reader physically feels the ascent and the drop; the rhythm slows, then releases.",
    ib: "The cup image is the poem's ars poetica: form filled 'even above the brim' is exactly what blank verse under emotional pressure achieves.",
  },
  {
    id: 6,
    label: "The Return",
    x: 80,
    y: 62,
    text: `So was I once myself a swinger of birches.
And so I dream of going back to be.
It's when I'm weary of considerations,
And life is too much like a pathless wood
Where your face burns and tickles with the cobwebs
Broken across it, and one eye is weeping
From a twig's having lashed across it open.
I'd like to get away from earth awhile
And then come back to it and begin over.
May no fate willfully misunderstand me
And half grant what I ask and snatch me away
Not to return. Earth's the right place for love:
I don't know where it's likely to go better.
I'd like to go by climbing a birch tree,
And climb black branches up a snow-white trunk
Toward heaven, till the tree could set me down again.
That would be good both going and away.
One could do worse than be a swinger of birches.`,
    summary:
      "The speaker admits the memory is his own, asks for temporary escape, and chooses earth and love as the place to return to.",
    themes: "Escape and return; acceptance; mortality; love of the earth.",
    symbolism:
      "The birch as a ladder between earth and heaven; the pathless wood as adult confusion and grief.",
    devices:
      "Metaphor, tonal shift to prayer, understatement in the closing line, chiaroscuro ('black branches', 'snow-white trunk').",
    choices:
      "Frost refuses transcendence: the wish is for a round trip, and the poem ends in litotes rather than triumph.",
    effect:
      "Consolation without sentimentality — the reader is left steadied rather than uplifted.",
    ib: "The ambivalence of the ending is the examinable crux: desire for escape is voiced and then disciplined, so the poem affirms life precisely by admitting the wish to leave it.",
  },
];

export const wordNotes: WordNote[] = [
  {
    word: "birches",
    theme: "Nature as a living text the speaker reads.",
    symbolism: "Flexible trees standing for the resilient, bendable human spirit.",
    device: "Central symbol / title motif.",
    choice: "Frost names an ordinary New England tree rather than a mythic one.",
    effect: "The extraordinary is located in the familiar.",
    ib: "Pastoral realism: the local becomes universal without allegorical machinery.",
  },
  {
    word: "swinging",
    theme: "Play and imagination.",
    symbolism: "Movement between ground and sky — between reality and fantasy.",
    device: "Kinaesthetic imagery; present participle sustaining motion.",
    choice: "Repeated across the poem so the act becomes a way of living.",
    effect: "The reader's body remembers childhood motion.",
    ib: "The poem's governing action links its two worlds structurally.",
  },
  {
    word: "ice-storms",
    theme: "Indifferent natural force; reality.",
    symbolism: "The hardening pressures of experience and time.",
    device: "Concrete natural detail deployed as counter-argument.",
    choice: "Frost gives fact the last word in the opening movement.",
    effect: "The fantasy is punctured but not mocked.",
    ib: "Frost's realism is corrective, not cynical.",
  },
  {
    word: "heaven",
    theme: "Transcendence and its limits.",
    symbolism: "The ideal realm the speaker wants only to visit.",
    device: "Religious diction inside a secular pastoral.",
    choice: "Used twice — once shattered, once climbed toward.",
    effect: "Longing is acknowledged and then bounded.",
    ib: "The poem's refusal of full transcendence is its ethical position.",
  },
  {
    word: "Truth",
    theme: "Reality intruding on imagination.",
    symbolism: "Personified fact as an unwelcome adult visitor.",
    device: "Personification; capitalisation.",
    choice: "Frost makes Truth interrupt mid-sentence.",
    effect: "Comic irritation humanises the speaker.",
    ib: "Metapoetic: the poem argues for the value of the chosen fiction.",
  },
  {
    word: "boy",
    theme: "Childhood and memory.",
    symbolism: "The speaker's earlier self; the figure of the poet.",
    device: "Third-person displacement of autobiography.",
    choice: "Kept impersonal until stanza six reveals 'I was once myself'.",
    effect: "The late revelation lands as confession.",
    ib: "Distance then disclosure is a controlled emotional structure.",
  },
  {
    word: "alone",
    theme: "Solitude as creative condition.",
    symbolism: "Isolation that produces invention rather than despair.",
    device: "End-stopped placement for emphasis.",
    choice: "Frost makes loneliness generative.",
    effect: "Solitude reads as dignity, not deprivation.",
    ib: "Aligns with Frost's wider treatment of rural isolation.",
  },
  {
    word: "brim",
    theme: "Discipline meeting excess.",
    symbolism: "A life or a poem filled to capacity.",
    device: "Extended metaphor; repetition ('brim... above the brim').",
    choice: "A domestic image for an ecstatic act.",
    effect: "Care and abandon are felt as one gesture.",
    ib: "The poem's ars poetica — form held 'even above the brim'.",
  },
  {
    word: "weary",
    theme: "Adult exhaustion.",
    symbolism: "The weight the birches also carry.",
    device: "Tonal shift; abstract diction after concrete narrative.",
    choice: "Frost admits the motive for escape plainly.",
    effect: "Trust: the speaker stops performing.",
    ib: "The confessional pivot that makes the ending earned.",
  },
  {
    word: "pathless",
    theme: "Confusion and grief.",
    symbolism: "The dark wood of adult life, echoing Dante.",
    device: "Metaphor; tactile imagery of cobwebs and lashing twigs.",
    choice: "Pain is made physical and small rather than tragic.",
    effect: "Discomfort the reader can feel on the face.",
    ib: "Intertextual echo raises the stakes without changing register.",
  },
  {
    word: "return",
    theme: "Acceptance; the round trip.",
    symbolism: "Coming back as the condition of leaving.",
    device: "Prayer-like syntax; negation ('Not to return').",
    choice: "Frost guards the wish against being granted too fully.",
    effect: "Relief mixed with fear of mortality.",
    ib: "The poem's resolution: escape is valuable only if temporary.",
  },
  {
    word: "love",
    theme: "Attachment to the world.",
    symbolism: "Earth as the site of meaning.",
    device: "Aphorism; caesura before the declaration.",
    choice: "The poem's flattest line carries its largest claim.",
    effect: "Plain speech reads as hard-won conviction.",
    ib: "Understatement as the vehicle of affirmation — classic Frost.",
  },
];

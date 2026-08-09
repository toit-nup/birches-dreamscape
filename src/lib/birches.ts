export type WordNote = {
  word: string;
  definition: string;
  theme: string;
  symbolism: string;
  device: string;
  choice: string;
  effect: string;
  ib: string;
  quotation: string;
  connection: string;
};

export type Atlas = {
  themes: string[];
  symbols: string[];
  devices: string[];
  purpose: string;
  bigIdea: string;
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
  atlas: Atlas;
};

export type InfoSection = {
  heading: string;
  content: string;
};

export type InfoPanel = {
  id: string;
  label: string;
  /** position of the firefly, in % of viewport */
  x: number;
  y: number;
  title: string;
  subtitle: string;
  sections: InfoSection[];
  atlas: Atlas;
};

export type FireflyItem = Stanza | InfoPanel;

export function isStanza(item: FireflyItem): item is Stanza {
  return typeof (item as Stanza).id === "number";
}

export function isInfoPanel(item: FireflyItem): item is InfoPanel {
  return typeof (item as InfoPanel).id === "string";
}


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
      "The poem opens on an act of perception rather than an event: the speaker sees bent birches and immediately supplies a preferred cause. Within three lines he has built a fiction — a boy swinging — and within two more he has dismantled it himself. The stanza therefore dramatises not a landscape but a mind choosing, and then refusing, to believe its own invention.",
    themes:
      "Imagination and reality are introduced not as opposites but as competing interpretations of one image. The stanza also establishes nature as a text the speaker reads, and reading as an ethical act: what we choose to see reveals what we need. Underneath sits the adult's nostalgia for a childhood explanation of the world.",
    symbolism:
      "The birches, flexible and bowed, symbolise the human capacity to be pressed by experience without snapping, while the 'straighter darker trees' behind them represent an unimaginative, rigid order that never bends and therefore never plays. The imagined boy is the first appearance of the poem's alternate self — the figure through whom the speaker will eventually confess his own longing.",
    devices:
      "Frost sets the poem in unrhymed iambic pentameter so that the voice sounds like speech rather than song. Visual imagery ('bend to left and right') is set against the antithesis of 'straighter darker trees', and the monosyllabic 'But' at line four functions as a miniature volta, reversing the movement of the sentence. Enjambment lets the fantasy run on before the caesura of 'As ice-storms do.' arrests it.",
    choices:
      "Frost's most deliberate choice is the modal phrasing 'I like to think', which marks the story as chosen rather than believed — a first-person narrator who admits his own unreliability disarms the reader instead of misleading them. He then places the corrective 'But' at the head of a line, using syntax to enact the intrusion of fact into desire. The blank verse is loosened with conversational fillers so that philosophical reflection arrives in the register of a neighbour talking over a fence, a pastoral realism that keeps abstraction grounded in New England weather. Truncating the final line to two feet leaves an audible silence where the fantasy used to be.",
    effect:
      "The reader is invited into the fiction and then evicted from it in the space of five lines, feeling the same reluctance the speaker feels. Because the correction comes from the speaker himself rather than from an external voice, we trust him and simultaneously sympathise with his loss. The result is a quiet ache that the rest of the poem will keep reopening.",
    ib: "Frost stages the act of interpretation itself, making the opening metapoetic: before the poem argues anything about escape, it shows a consciousness negotiating between the world as it is and the world as it would be preferred. An examiner would note that the stanza sets up the poem's dialectic structurally rather than thematically — the reversal is performed by syntax, not asserted by statement. The refusal to let imagination win at the outset is what earns the poem's final, hard-won affirmation of earth.",
    atlas: {
      themes: ["Reality vs Imagination", "Memory", "Nature"],
      symbols: ["Birch Tree", "Swing", "Ice Storm"],
      devices: ["Visual Imagery", "Blank Verse", "Juxtaposition"],
      purpose:
        "Frost opens with a deliberately false explanation so the reader experiences the seduction of imagination before its correction. By making the speaker both fantasist and sceptic, he establishes a narrative voice honest enough to be trusted with the poem's later, larger wish.",
      bigIdea:
        "The poem begins by admitting that its central fiction is a fiction — and choosing it anyway.",
    },
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
      "Having rejected the fiction, the speaker gives reality its full hearing — and reality turns out to be more spectacular than invention. Nine lines of sustained sensory description follow the ice from loading to cracking to collapse. The digression is long enough to become a small poem of its own, which is precisely the point.",
    themes:
      "Nature is beautiful and wholly indifferent: it neither intends the damage it does nor apologises for it. Transience governs the passage — the ice exists only in the interval between rain and sun. The stanza also proposes that disillusionment need not be impoverishing, since the truth here is richer than the lie it replaced.",
    symbolism:
      "The ice-storm symbolises the pressures of experience that permanently reshape the living thing they touch. The 'inner dome of heaven' fallen as 'broken glass' converts a cosmic, idealised order into domestic debris that someone must sweep up, quietly deflating transcendence into housework. The crystal shells suggest a brittle perfection that must break for warmth to return.",
    devices:
      "Onomatopoeia ('click', 'cracks', 'crazes') and dense sibilance let the reader hear the ice before seeing it. An extended metaphor of glassware — enamel, crystal, shells, broken glass — runs the whole passage, and the hyperbolic simile of the fallen heavenly dome caps it. The dash after 'snow-crust—' breaks the line's momentum exactly as the ice breaks, and the second-person 'you must have seen them' pulls the reader inside the memory.",
    choices:
      "Frost's boldest decision is to make the factual explanation more gorgeous than the imagined one, refusing the easy Romantic equation of truth with disenchantment. He paces the stanza slowly, piling participles ('shattering and avalanching') so that the syntax accumulates weight the way the branches do, then releases it. The shift to second-person narration briefly widens the poem from private reverie to shared rural experience, a pastoral move that grounds the cosmic simile in a chore. By choosing 'you'd think' rather than a flat assertion, he keeps even his grandest image provisional, consistent with the speaker's habit of watching himself imagine.",
    effect:
      "The reader is dazzled and unsettled at once: beauty and destruction arrive in the same sentence, which becomes the poem's emotional signature. The length of the digression makes us forget the boy, so his return in the next movement feels like a genuine act of will. We finish the stanza persuaded that facing reality is not a punishment.",
    ib: "This passage is where Frost's pastoral realism defines itself against Romantic escapism: he borrows the music of Keats or Shelley while withholding their metaphysical consolation. The fallen dome of heaven can be read as a post-Romantic, post-religious image — the ideal has not been rejected, it has simply shattered into something ordinary and must be tidied. An examiner would prize the observation that the poem's argument for staying on earth is won here, aesthetically, long before it is stated in the final lines.",
    atlas: {
      themes: ["Nature", "Reality vs Imagination", "Acceptance"],
      symbols: ["Ice Storm", "Birch Tree", "Heaven"],
      devices: ["Extended Metaphor", "Visual Imagery", "Symbolism"],
      purpose:
        "Frost lets truth outshine fantasy so that his eventual defence of imagination cannot be mistaken for escapism. The digression also enacts the poem's method: reality is examined honestly and found, unexpectedly, to be full of splendour.",
      bigIdea:
        "Reality is granted its full beauty, so that choosing imagination later becomes a considered preference rather than a flight.",
    },
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
      "The trees survive the storm but are permanently altered, and Frost insists on the permanence: 'they never right themselves'. He then converts that image of lasting damage into one of the poem's most tender similes, girls drying their hair in the sun. Survival and disfigurement are held in the same picture.",
    themes:
      "Resilience is redefined here as endurance with visible cost rather than full recovery. The stanza introduces adulthood as a condition of irreversible shaping, quietly anticipating the weariness the speaker will later confess. Nature again supplies the vocabulary through which human experience becomes legible.",
    symbolism:
      "The bowed but unbroken trunk symbolises a person permanently marked by experience yet still living and, crucially, still beautiful. The trailing leaves become hair; the woods become a domestic interior; suffering is rewritten as intimacy. 'Years afterwards' makes the trees into memorials — the landscape itself keeps a record of what happened.",
    devices:
      "The governing device is the extended simile, which swerves the register from botanical observation to human tenderness. Personification ('they seem not to break') grants the trees agency, and long enjambed lines mimic the slow, continuous bending they describe. The colon after 'right themselves:' turns the line into a verdict followed by its evidence.",
    choices:
      "Frost chooses to make damage lovely, and the choice is ethically loaded: by feminising and domesticating the bent trees he refuses to let the reader settle into pity. The simile is drawn from ordinary rural life rather than mythology, keeping the poem's pastoral diction intact while raising its emotional temperature. He controls pacing by letting one sentence run across four lines so that the reader, like the tree, is held bent for a long time before release. Placing this image immediately after the shattering ice softens the preceding violence into aftermath, a structural act of consolation.",
    effect:
      "Sympathy displaces pity: the reader accepts the altered trees rather than mourning them, which prepares us to accept an altered self. The sensory warmth of sun-dried hair after the coldness of ice produces an almost physical relief. We are being taught, gently, how to look at lasting change.",
    ib: "The simile is the stanza's richest close-reading site, since it feminises the landscape and raises questions of gaze, tenderness and pastoral convention that a strong HL response can problematise rather than simply admire. Read against the poem's whole argument, the bowed trees are the middle term between the boy who bends them for play and the man who wishes to be lifted away: they are what happens in between. The insistence that they 'never right themselves' is the poem's most honest statement about time, and it is what makes the closing acceptance credible rather than sentimental.",
    atlas: {
      themes: ["Nature", "Acceptance", "Memory"],
      symbols: ["Birch Tree", "Ice Storm", "Earth"],
      devices: ["Symbolism", "Visual Imagery", "Extended Metaphor"],
      purpose:
        "Frost transforms permanent injury into an image of warmth so that endurance, not restoration, becomes the poem's model of survival. The tenderness of the simile teaches the reader how to regard change before the speaker must regard his own.",
      bigIdea:
        "Experience bends us permanently, and the poem asks us to find that shape beautiful rather than tragic.",
    },
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
      "The speaker interrupts himself to reclaim the fiction he abandoned in stanza one, blaming a personified Truth for the detour. He then builds the boy in detail: rural, unsupervised, too remote for organised games. The fantasy is no longer a passing fancy but a considered preference, signalled by 'I should prefer'.",
    themes:
      "Childhood is presented as a condition of self-sufficiency rather than innocence. Solitude becomes generative — the boy invents because nothing is provided for him. The stanza also stages imagination's counter-attack on fact, the poem's central contest made explicit.",
    symbolism:
      "The boy is simultaneously the speaker's younger self and a figure for the poet: someone who makes meaning where none is given. 'Too far from town to learn baseball' symbolises exclusion from inherited, communal forms and therefore the necessity of invention. Truth, capitalised and gendered, becomes an adult visitor who arrives uninvited and talks too much.",
    devices:
      "Personification is the stanza's engine, converting an abstraction into a rude interlocutor. The colloquial interruption 'But I was going to say' plus mid-line caesurae reproduce the rhythms of spoken correction, and the dash after 'fetch the cows—' lets the sentence drift into reverie. Negative definition ('too far', 'only play') builds the boy out of what he lacks.",
    choices:
      "Frost's decision to dramatise Truth as an interrupting woman with 'all her matter-of-fact' is faintly comic and quietly subversive, ranking desire above accuracy without ever arguing the case. He keeps the syntax deliberately loose and self-correcting so that the reader seems to overhear a mind at work, an intimacy first-person narration alone could not achieve. The pastoral detail of fetching cows anchors the fantasy in labour rather than idyll, so the boy's play is earned between chores. Withholding the autobiographical admission until stanza six is a structural choice: the third-person 'some boy' keeps the confession at arm's length until it can land with full weight.",
    effect:
      "The conversational swerve is disarming; we forgive the speaker's illogic because he has already conceded it. Readers recognise their own habit of returning to a preferred story after facts have spoiled it. The boy's solitude feels enviable rather than sad, which is exactly the reversal Frost needs.",
    ib: "This is the poem's metapoetic turn, where Frost defends the writer's right to prefer the invented account and, by extension, defends literature's function against the tyranny of the merely factual. An examiner would note the risk he takes: having just written the ice-storm passage so magnificently, he can afford to dismiss Truth without appearing evasive. The stanza reframes imagination not as escape from reality but as a discipline practised within it — the boy, after all, is doing chores.",
    atlas: {
      themes: ["Reality vs Imagination", "Childhood", "Memory"],
      symbols: ["Swing", "Birch Tree", "Ice Storm"],
      devices: ["Symbolism", "Tone Shift", "Juxtaposition"],
      purpose:
        "Frost reasserts the invented story after granting reality its due, using a comic personification of Truth to make the preference feel human rather than deluded. The boy is constructed with rural precision so that fantasy retains the texture of fact.",
      bigIdea:
        "Imagination is not defeated by truth; it chooses to keep speaking after truth has finished.",
    },
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
      "The boy masters the birches through patient repetition, learning restraint before he earns release. Frost devotes most of the passage to technique — poise, timing, the danger of launching too soon — and only the final two lines to flight. Mastery is shown to be the precondition of joy.",
    themes:
      "Discipline and freedom are presented as continuous rather than opposed. Childhood here is work: the boy conquers, subdues and learns. The stanza also proposes growth as accumulation of small corrections, a quietly unromantic account of how anyone becomes able to fly.",
    symbolism:
      "Climbing 'to the brim, and even above the brim' symbolises aspiration pushed to the exact edge of what a form can hold without spilling. The birch becomes a ladder that will not carry him too far, and the swish downward symbolises controlled surrender rather than fall. The vocabulary of conquest ('subdued', 'his father's trees') hints at a boy rehearsing inheritance and adulthood.",
    devices:
      "The extended metaphor of the filled cup governs the passage, importing domestic care into an ecstatic act. Kinaesthetic imagery and the repetition of 'not one... not one' give the reader the body's memory of repeated effort, while heavy enjambment across 'not launching out too soon / And so not carrying the tree away / Clear to the ground' delays resolution exactly as the boy delays release. The blank verse tightens into monosyllables at 'flung outward, feet first, with a swish'.",
    choices:
      "Frost's central choice is to grant craft the same lyrical attention as ecstasy, mirroring his own poetic practice: a poem, like a cup, is form filled to and slightly beyond capacity. He slows pacing through subordinate clauses and negatives so the reader must exercise the patience the boy exercises, then releases the syntax into a single fluid line of descent. The diction moves from Latinate control ('subdued', 'conquer', 'poise') to Anglo-Saxon immediacy ('flung', 'feet first', 'swish'), enacting the shift from discipline to abandon at the level of the word. Naming the trees 'his father's' introduces, without comment, the generational frame the final stanza will need.",
    effect:
      "The reader physically feels the ascent, the held breath and the drop; the rhythm withholds and then gives. Admiration replaces the earlier nostalgia — this boy is competent, not merely wistful. By the end of the stanza we want the swing ourselves, which is precisely what makes the speaker's confession in stanza six inevitable.",
    ib: "The cup image is the poem's ars poetica: blank verse held steady under emotional pressure, filled 'even above the brim', is exactly what Frost is doing on the page. A sophisticated reading notes that the passage revises the usual Romantic child — this one is a technician whose imagination depends on skill, which reframes the whole poem's defence of fantasy as a defence of disciplined art. The stanza also quietly rehearses the poem's ending in miniature: rise, poise, and a deliberate return to the ground.",
    atlas: {
      themes: ["Childhood", "Escape", "Nature"],
      symbols: ["Swing", "Birch Tree", "Heaven"],
      devices: ["Extended Metaphor", "Blank Verse", "Visual Imagery"],
      purpose:
        "Frost gives technique the weight usually reserved for rapture, arguing that freedom is something earned by practice. The filled-cup metaphor lets him describe a boy's game and his own poetics in a single figure.",
      bigIdea:
        "Flight is only possible through discipline — the stanza models rise and controlled return before the poem asks for it.",
    },
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
      "The displaced boy is revealed to be the speaker himself, and the poem turns confessional. He names his motive — weariness, a life like a pathless wood — asks for temporary escape, then immediately guards the request against being granted too fully. The closing lines choose earth, love and return, and do so in the flattest language in the poem.",
    themes:
      "Escape and return, held in balance, resolve the poem's opposition between imagination and reality. Mortality enters directly in the fear of being snatched away 'not to return'. Acceptance emerges not as resignation but as a preference actively defended: earth is chosen, not merely tolerated.",
    symbolism:
      "The birch becomes a ladder between earth and heaven that is trusted precisely because it bends and sets you down again — an image of imagination as a round trip. The 'pathless wood' symbolises adult confusion and grief, its cobwebs and lashing twigs making abstract despair small, tactile and irritating rather than grand. 'Black branches up a snow-white trunk' places darkness and light on the same living body, refusing to separate them.",
    devices:
      "The register shifts into prayer ('May no fate willfully misunderstand me'), a syntactic inversion that makes the wish formal and vulnerable at once. Chiaroscuro imagery, the extended metaphor of climbing, and a decisive caesura before 'Earth's the right place for love' organise the close. The final line is litotes — 'One could do worse' — deliberately understating the poem's largest claim.",
    choices:
      "Frost refuses transcendence at the level of grammar: every verb of ascent is paired with one of return, so the syntax will not permit a one-way journey. He deflates the poem's own lyricism at its climax, giving the flattest, most conversational line ('I don't know where it's likely to go better') the heaviest philosophical load, because plain speech reads as conviction where rhetoric would read as performance. The cyclical structure — leaving and returning, rising and being set down — mirrors the boy's climb in stanza five and closes the poem where it began, with a man looking at trees. Ending on litotes rather than triumph is a tonal choice that keeps philosophical reflection within the idiom of a New England farmer who distrusts overstatement.",
    effect:
      "The reader is consoled without being flattered: nothing is resolved, but something is steadied. The abrupt fear of dying — 'snatch me away / Not to return' — makes the preceding wish suddenly serious and implicates our own daydreams of escape. We finish standing on the ground, which is the emotional argument the poem has been building since line one.",
    ib: "The ambivalence of the ending is the examinable crux: the desire to leave is fully voiced and then disciplined, so the poem affirms life precisely by admitting the wish to abandon it. An examiner would value the recognition that Frost's understatement is a rhetorical strategy — litotes protects a sincere metaphysical claim from sentimentality, allowing a secular poem to end in something very close to prayer. Read across the whole text, the birch is imagination itself: valuable because it lifts us, trustworthy because it bends back down.",
    atlas: {
      themes: ["Escape", "Acceptance", "Memory"],
      symbols: ["Birch Tree", "Earth", "Heaven"],
      devices: ["Tone Shift", "Extended Metaphor", "Juxtaposition"],
      purpose:
        "Frost converts a private daydream into a philosophical position, using prayer-like syntax and closing understatement to argue that escape is valuable only if it is temporary. The cyclical movement of the stanza performs the very round trip it asks for.",
      bigIdea:
        "Imagination restores us, but life must ultimately be lived on earth — the poem's wish and its limit, spoken in one breath.",
    },
  },
export const infoPanels: InfoPanel[] = [
  {
    id: "context",
    label: "Context",
    x: 15,
    y: 80,
    title: "Historical & Literary Context",
    subtitle: "1915, New England — between tradition and modernity",
    sections: [
      {
        heading: "Publication and moment",
        content:
          "Birches was first published in 1916 in Robert Frost's third collection, Mountain Interval, though it was written earlier and carried with him from England. The poem appears at a decisive moment in American poetry: Pound and Eliot were pushing modernism toward fragmentation, urban dislocation and allusive difficulty, while Frost returned to New England with a radically different conviction — that the local, the rural and the spoken could sustain modern consciousness. For an IB reader, this context matters because the poem is not a simple nature lyric; it is a quiet argument about where modern poetry should look for its subject matter.",
      },
      {
        heading: "Biographical pressure",
        content:
          "Frost wrote Birches after years of failed farming, financial anxiety and the death of his firstborn son Elliott. His life had already taught him that rural innocence and darkness coexist. The poem's adult weariness, its fear of being 'snatched away / Not to return', and its final acceptance of earth all carry the weight of a poet who has suffered rather than merely observed. The context of loss gives the closing line 'Earth's the right place for love' its defensive, almost wounded tenderness.",
      },
      {
        heading: "Literary context",
        content:
          "The poem inherits the Romantic tradition of Wordsworth and Keats — nature as a site of spiritual instruction — but it revises that tradition through realism. Frost refuses metaphysical consolation; his nature is beautiful and indifferent, his heaven only approached, never possessed. The poem is therefore both post-Romantic and proto-modernist: it keeps traditional form, especially blank verse, but uses it to dramatise a mind in motion rather than a fixed moral lesson.",
      },
      {
        heading: "Reception and significance",
        content:
          "Birches has become one of Frost's most anthologised poems precisely because it appears accessible while remaining analytically rich. Its public popularity sometimes obscures its complexity, but the poem rewards close attention to its syntax, tonal shifts and structural returns. It is a poem about the desire to escape and the discipline of coming back, written by a poet whose entire career was a negotiation between fame and solitude, statement and silence.",
      },
    ],
    atlas: {
      themes: ["Pastoral and Modernity", "Regional Identity", "Loss and Acceptance"],
      symbols: ["New England Landscape", "Farm and Woodland", "The Birch Tree"],
      devices: ["Blank Verse", "Dramatic Monologue", "Conversational Diction"],
      purpose:
        "To locate a modern meditation on imagination and reality within a specific regional landscape, so that the personal becomes representative and the local becomes universal.",
      bigIdea:
        "Frost makes the New England scene carry universal questions about escape, return and the place of love in a mortal world.",
    },
  },
  {
    id: "author",
    label: "Robert Frost",
    x: 82,
    y: 25,
    title: "Robert Frost",
    subtitle: "1874–1963, four-time Pulitzer Prize winner",
    sections: [
      {
        heading: "Life and formation",
        content:
          "Robert Frost was born in San Francisco in 1874 and moved to New England after his father's death. His adult life was marked by farming failures, teaching and the repeated experience of family loss, including the deaths of several children and his wife Elinor. These biographical facts are not decorative background; they inform the undertone of grief that runs beneath the calm surfaces of his best poems. By the time of Birches, Frost had established the voice that would make him the most celebrated American poet of his generation: plain speech, traditional metre and psychological depth concealed under pastoral detail.",
      },
      {
        heading: "The sound of sense",
        content:
          "Frost's theory of the 'sound of sense' is crucial to any analysis of his work. He believed that sentences should carry the natural rhythm of spoken English while maintaining metrical discipline. In Birches this produces the effect of overhearing a neighbour think aloud: the syntax is loose, self-correcting and conversational, but the underlying iambic pentameter keeps the meditation anchored. This dual register — common speech and formal control — is Frost's signature authorial achievement.",
      },
      {
        heading: "Recurring concerns",
        content:
          "Frost's poetry returns again and again to thresholds, boundaries and choices: walls, paths, forks, woods at night, doors left open or closed. He is interested in what happens at the edge of things, where one condition becomes another. Birches belongs to this pattern: the birch tree is a threshold between earth and sky, and the poem asks whether crossing it can be temporary rather than final. His work is therefore less about nature than about the human mind using nature to think.",
      },
      {
        heading: "Reputation and misreading",
        content:
          "Frost won four Pulitzer Prizes and read at the inauguration of John F. Kennedy in 1961, which cemented his reputation as a public, patriotic poet. Yet this popularity has led to frequent misreading; his poems are often treated as simple celebrations of rural America. A strong IB response recognises that Frost is fundamentally ambiguous. Poems like The Road Not Taken and Stopping by Woods on a Snowy Evening share Birches' method: a deceptively simple scene that opens into unresolved moral and psychological complexity. Frost is a poet of darkness made bearable by form.",
      },
    ],
    atlas: {
      themes: ["Nature and Human Limitation", "Isolation and Community", "Choice and Mortality"],
      symbols: ["Woods and Paths", "Walls and Boundaries", "Trees and Farms"],
      devices: ["Sound of Sense", "Dramatic Monologue", "Ambiguity", "Blank Verse"],
      purpose:
        "To use observed rural life as a stage for moral and psychological inquiry, demonstrating that ordinary language can carry uncommon philosophical weight.",
      bigIdea:
        "Frost's plain style is a precision instrument: it makes the familiar strange and the strange familiar, allowing a regional voice to speak about universal limits.",
    },
  },
];

export const fireflyItems: FireflyItem[] = [...stanzas, ...infoPanels];


export const wordNotes: WordNote[] = [
  {
    word: "birches",
    definition:
      "Slender northern hardwood trees with white, papery bark and unusually flexible trunks.",
    theme: "Nature read as a living text; resilience under pressure.",
    symbolism:
      "The bendable tree stands for a human spirit that yields under weight without breaking, and later for imagination itself as a ladder that always returns you to the ground.",
    device: "Central symbol and title motif sustained as extended metaphor.",
    choice:
      "Frost selects an ordinary New England species rather than a mythic tree, insisting that the extraordinary be located in the local and the observable.",
    effect:
      "Readers accept the symbolic weight because the object is unglamorous and real; the metaphor never feels imposed.",
    ib: "Pastoral realism: the particular becomes universal without allegorical machinery, which is Frost's signature departure from Romantic symbolism.",
    quotation: "When I see birches bend to left and right",
    connection:
      "The birch is the poem's argument in physical form — it rises toward heaven and bends back to earth, exactly the round trip the speaker finally asks for.",
  },
  {
    word: "swinging",
    definition: "Riding a sapling down in an arc until it lowers you to the ground.",
    theme: "Play, imagination and the movement between two worlds.",
    symbolism:
      "Oscillation between ground and sky figures the mind's traffic between reality and fantasy; nothing in the action is permanent, which is its virtue.",
    device: "Kinaesthetic imagery; the present participle keeps the motion unfinished.",
    choice:
      "Frost repeats the act across the poem until it stops being a game and becomes a way of living, so the title's gerund quietly names an ethic.",
    effect: "The reader's body remembers childhood motion before the mind interprets it.",
    ib: "The governing action links the poem's two worlds structurally, so the argument is carried by verb rather than statement.",
    quotation: "I like to think some boy's been swinging them.",
    connection:
      "Swinging is escape with a guaranteed return, which is the only kind of escape the poem is willing to endorse.",
  },
  {
    word: "ice-storms",
    definition:
      "Freezing rain that coats branches in ice heavy enough to bow or break them.",
    theme: "Indifferent natural force; the corrective authority of fact.",
    symbolism:
      "The hardening pressures of time and experience, which reshape the living thing permanently and without intention.",
    device: "Concrete natural detail deployed as counter-argument to fantasy.",
    choice:
      "Frost gives fact the last word in the opening movement, then spends nine lines proving that fact is not drab — realism is corrected, not punished.",
    effect: "The fantasy is punctured without being mocked, so the reader keeps trusting the speaker.",
    ib: "Frost's realism is ethical rather than cynical: reality must be seen clearly before imagination may be chosen.",
    quotation: "But swinging doesn't bend them down to stay / As ice-storms do.",
    connection:
      "The storm supplies the permanence the poem must reckon with; everything after it is an attempt to live with irreversible change.",
  },
  {
    word: "heaven",
    definition: "The sky, and the transcendent realm traditionally imagined beyond it.",
    theme: "Transcendence and the deliberate acceptance of its limits.",
    symbolism:
      "An ideal the speaker wishes only to visit; when it appears first as a shattered dome and later as a destination reached by a bending tree, its authority is quietly reduced to something climbable.",
    device: "Religious diction embedded in a secular pastoral.",
    choice:
      "Frost uses the word twice — once falling as broken glass, once approached by climbing — so that the second use is haunted by the first.",
    effect: "Longing is acknowledged and then bounded; the reader feels desire and its check together.",
    ib: "The refusal of full transcendence is the poem's ethical position and its most examinable ambiguity.",
    quotation: "You'd think the inner dome of heaven had fallen.",
    connection:
      "Heaven is where the birch points but never delivers, which is why earth can be named 'the right place for love'.",
  },
  {
    word: "Truth",
    definition: "Factual reality, personified here as an interrupting speaker.",
    theme: "Reality intruding on imagination.",
    symbolism:
      "Adult, matter-of-fact authority that arrives uninvited and spoils a good story with accuracy.",
    device: "Personification reinforced by capitalisation and gendered pronoun.",
    choice:
      "Frost lets Truth break in mid-sentence so the interruption is performed by syntax, then dismisses her with faintly comic exasperation rather than argument.",
    effect: "The irritation humanises the speaker and licenses the reader's own preference for the story.",
    ib: "Metapoetic: the poem defends the value of the chosen fiction without ever denying the facts it sets aside.",
    quotation: "But I was going to say when Truth broke in",
    connection:
      "This is the poem's contest in one line — fact and desire competing for the same landscape.",
  },
  {
    word: "boy",
    definition: "A solitary farm child, invented by the speaker as an alternative explanation.",
    theme: "Childhood, memory and displaced autobiography.",
    symbolism:
      "The speaker's earlier self and a figure for the poet — someone who makes meaning where none is provided.",
    device: "Third-person displacement; negative definition builds him from what he lacks.",
    choice:
      "Frost keeps the boy impersonal until stanza six, so the delayed 'I was once myself' functions as confession rather than reminiscence.",
    effect: "The late revelation reframes everything preceding it and lands with disproportionate force.",
    ib: "Distance followed by disclosure is a controlled emotional structure typical of Frost's dramatic lyrics.",
    quotation: "Some boy too far from town to learn baseball,",
    connection:
      "The boy is the bridge between the poem's two selves, making the argument about imagination personal rather than abstract.",
  },
  {
    word: "alone",
    definition: "Without company; here, without provided games or instruction.",
    theme: "Solitude as a creative condition rather than a deprivation.",
    symbolism: "Isolation that produces invention, the necessary weather of the imagination.",
    device: "End-stopped placement gives the word the full weight of the line's close.",
    choice:
      "Frost makes loneliness generative, ending the stanza on the word so it resonates instead of resolving.",
    effect: "Solitude reads as dignity, and the reader envies rather than pities the boy.",
    ib: "Consistent with Frost's wider treatment of rural isolation as both cost and condition of insight.",
    quotation: "Summer or winter, and could play alone.",
    connection:
      "If imagination is self-made, then the adult's later weariness is the loss of that self-sufficiency.",
  },
  {
    word: "brim",
    definition: "The upper edge of a vessel; the exact point before spilling.",
    theme: "Discipline meeting excess.",
    symbolism:
      "A life, or a poem, filled to the limit of what its form can hold — and then pressed just past it.",
    device: "Extended metaphor of the filled cup, intensified by repetition.",
    choice:
      "Frost imports a domestic, unheroic image into an ecstatic moment, so care and abandon are felt as a single gesture.",
    effect: "The reader senses restraint inside the thrill and understands that the flight was earned.",
    ib: "The poem's ars poetica: blank verse held steady under emotional pressure is form filled 'even above the brim'.",
    quotation: "Up to the brim, and even above the brim.",
    connection:
      "Technique is the condition of freedom here, which reframes the poem's fantasy as disciplined art rather than escapism.",
  },
  {
    word: "weary",
    definition: "Exhausted, worn down by continued effort or thought.",
    theme: "Adult exhaustion and the motive for escape.",
    symbolism: "The same accumulated weight that bows the birches, now carried internally.",
    device: "Tonal shift into abstraction after sustained concrete narrative.",
    choice:
      "Frost states the motive plainly and briefly, refusing to dramatise his own suffering, which makes the admission more credible.",
    effect: "The speaker stops performing and the reader's trust deepens into intimacy.",
    ib: "The confessional pivot that makes the final acceptance feel earned rather than decorative.",
    quotation: "It's when I'm weary of considerations,",
    connection:
      "Weariness is what the whole imaginative apparatus of the poem exists to answer.",
  },
  {
    word: "pathless",
    definition: "Without a track or route; trackless and disorienting.",
    theme: "Confusion, grief and the loss of direction in adult life.",
    symbolism:
      "The dark wood of middle life, echoing Dante's selva oscura, but scaled down to cobwebs and stinging twigs.",
    device: "Metaphor extended through tactile imagery of burning, tickling and lashing.",
    choice:
      "Frost makes despair physical and petty rather than tragic, since minor irritations are harder to dignify and therefore truer.",
    effect: "The reader feels the discomfort on the face before naming it as sorrow.",
    ib: "The intertextual echo raises the stakes without shifting register — allusion absorbed into pastoral idiom.",
    quotation: "And life is too much like a pathless wood",
    connection:
      "The wood is the counter-landscape to the birch grove: one traps you, the other lifts you and sets you down.",
  },
  {
    word: "return",
    definition: "To come back to the place one has left.",
    theme: "Acceptance; the necessity of the round trip.",
    symbolism: "Coming back is the condition that makes leaving permissible.",
    device: "Prayer-like syntax; negation placed at the head of the line for emphasis.",
    choice:
      "Frost guards his wish against over-fulfilment, dramatising a fear that a careless fate might take the request literally.",
    effect: "Relief and mortal fear arrive together, sharpening a daydream into something serious.",
    ib: "The poem's resolution in miniature: escape has value only while it remains temporary.",
    quotation: "And half grant what I ask and snatch me away / Not to return.",
    connection:
      "Every ascent in the poem is licensed by a descent; this word names the rule.",
  },
  {
    word: "love",
    definition: "Attachment to and care for the world and the people in it.",
    theme: "Commitment to earthly life.",
    symbolism: "Earth as the only available site of meaning and affection.",
    device: "Aphorism preceded by a decisive caesura.",
    choice:
      "Frost gives his largest claim the poem's flattest phrasing, trusting plain speech to carry conviction where elevated diction would sound like performance.",
    effect: "The line reads as hard-won rather than decorative, and it steadies the reader.",
    ib: "Understatement as the vehicle of affirmation — classic Frost, and the hinge of the poem's ethics.",
    quotation: "Earth's the right place for love:",
    connection:
      "This is the poem's verdict: imagination may lift us, but love happens only on the ground.",
  },
];

// Buddy Fence, all site copy in one place. Edit here, then `node build.js`.
// Cloned from the Buddy Tile site (same generator, same brand system).

const SITE = {
  name: 'Buddy Fence',
  domain: 'https://buddyfence.com',
  tagline: 'Built for Your Home.',
  phone: process.env.BF_PHONE || '(360) 899-6336',
  email: 'info@buddyfence.com',
  // Platform API, the lead form posts straight into the Buddy Built CRM
  apiBase: 'https://buddybuilt.com',
  // "Buddy Fencing" division in the platform (same id in dev and prod)
  divisionId: 19,
  tileDivisionId: 19,
  accent: '#F6B015',
  navy: '#1C2E44',
  // Acorn Finance dealer pre-qual link (blocks iframing, always open a new tab)
  acornUrl: 'https://www.acornfinance.com/pre-qualify/?d=2T7C4&utm_medium=web_pre_qual_link_copy_welcome',
  legalLine:
    'Buddy Fence is a registered trade name of Buddy Built LLC · WA reg #BUDDYBL746MO · OR CCB #PENDING',
  serviceAreaBlurb: 'Serving Vancouver, Portland, and the surrounding metro, Washington and Oregon.',
};

const SERVICES = [
  {
    slug: 'cedar-privacy-fence',
    name: 'Cedar Privacy Fences',
    h1: 'Cedar Privacy Fence Installation',
    metaTitle: 'Cedar Privacy Fence Installation | Vancouver WA & Portland OR | Buddy Fence',
    metaDescription:
      'Cedar privacy fences built to last in the Pacific Northwest: pressure-treated posts set in concrete, tight-knot cedar, and clean gates. Free estimates in Vancouver WA and Portland OR.',
    intro:
      'A cedar privacy fence is the Northwest classic, and it only stays beautiful if the bones are right. We set every post in concrete below the frost line, frame with pressure-treated rails, and face it in tight-knot Western Red Cedar that weathers to silver instead of rotting out.',
    bullets: [
      'Posts set in concrete, 24" to 30" deep, never just tamped',
      'Pressure-treated 4x4 or 4x6 posts, cedar pickets and rails',
      '6 ft and 8 ft heights, dog-ear, flat-top, or capped styles',
      'Lattice tops, kickboards, and post caps on request',
      'Old fence hauled away, property line respected, mess gone the same day',
    ],
    faqs: [
      { q: 'How much does a cedar privacy fence cost in Vancouver WA?', a: 'Most 6 ft cedar privacy fences run $38-$55 per linear foot installed, depending on height, style, gates, and how many corners and slopes the line has. A typical 150 ft backyard lands between $6,000 and $8,500. Your written in-home estimate is free.' },
      { q: 'How long does a cedar fence last in the Pacific Northwest?', a: 'Western Red Cedar naturally resists rot and insects. With posts set in concrete and a stain or seal every few years, a cedar fence lasts 20 to 30 years in our climate.' },
      { q: 'How long does installation take?', a: 'Most residential fences are done in 1 to 3 days after the posts cure. We tear out the old fence, set posts on day one, and frame and picket once the concrete has set.' },
      { q: 'Do I need a permit for a fence in Vancouver or Portland?', a: 'Fences up to 6 ft in the back and side yards usually do not need a permit. Front-yard heights, corner lots, and 8 ft fences can. We check the rules for your address before we quote.' },
    ],
    photo: 'cedar-privacy-fence.jpg',
    icon: 'fence',
  },
  {
    slug: 'vinyl-fence',
    name: 'Vinyl Fences',
    h1: 'Vinyl Fence Installation',
    metaTitle: 'Vinyl Fence Installation | Vancouver WA & Portland OR | Buddy Fence',
    metaDescription:
      'Low-maintenance vinyl privacy and picket fences installed on concrete-set posts. No staining, no rot. Free estimates in Vancouver WA and Portland OR.',
    intro:
      'Vinyl is the fence you never think about again: no staining, no rot, no warping. We install heavy-wall vinyl systems with aluminum-reinforced rails and posts set in concrete, so the panels stay straight through our wet winters.',
    bullets: [
      'Privacy, semi-privacy, and picket profiles in white, tan, and gray',
      'Aluminum-reinforced bottom rails on privacy panels',
      'Posts set in concrete with steel inserts at gates',
      'Matching gates with self-closing hardware',
      'Lifetime manufacturer warranty on the material',
    ],
    faqs: [
      { q: 'How much does a vinyl fence cost?', a: 'Vinyl privacy fences typically run $45-$65 per linear foot installed. It costs more than cedar up front and less over its life, since there is nothing to stain or replace.' },
      { q: 'Does vinyl fencing hold up in the rain?', a: 'Yes. Vinyl does not absorb water, so it cannot rot or grow mold the way untreated wood can. A rinse with a hose keeps it clean.' },
      { q: 'Can vinyl fence panels be installed on a slope?', a: 'Yes. We rack or step panels to follow the grade so the fence looks intentional rather than gapped at the bottom.' },
    ],
    photo: 'vinyl-fence.jpg',
    icon: 'grid',
  },
  {
    slug: 'horizontal-cedar-fence',
    name: 'Horizontal & Modern Fences',
    h1: 'Horizontal Cedar & Modern Fence Installation',
    metaTitle: 'Horizontal Cedar Fence | Modern Fence Installation | Vancouver WA & Portland OR',
    metaDescription:
      'Horizontal cedar, shadowbox, and modern slat fences with steel or cedar posts. Clean lines built plumb and level. Free estimates in Vancouver WA and Portland OR.',
    intro:
      'Horizontal fences are the look of the modern Northwest backyard, and they are less forgiving than a picket fence: every board reads as a line. We build them on steel or oversized cedar posts, with boards gapped evenly and screwed, not nailed, so the pattern stays straight.',
    bullets: [
      'Horizontal 1x6 and 1x4 cedar, tight or gapped',
      'Steel post options for a straight fence that stays straight',
      'Shadowbox and good-neighbor styles that look finished from both sides',
      'Matching horizontal gates with welded steel frames',
      'Stain and seal packages so the cedar keeps its color',
    ],
    faqs: [
      { q: 'How much does a horizontal cedar fence cost?', a: 'Horizontal fences run $55-$85 per linear foot installed. They use more lumber and more labor than a standard privacy fence because every board has to be straight and evenly spaced.' },
      { q: 'Should I use steel or wood posts for a horizontal fence?', a: 'Steel posts cost more but never twist, so the boards stay in line for the life of the fence. We recommend steel on long runs and modern designs.' },
      { q: 'Do horizontal fences sag?', a: 'Not when the posts are close enough and the boards are fastened with screws. We keep post spacing at 6 ft on horizontal runs.' },
    ],
    photo: 'horizontal-cedar-fence.jpg',
    icon: 'rows',
  },
  {
    slug: 'chain-link-fence',
    name: 'Chain Link Fences',
    h1: 'Chain Link Fence Installation',
    metaTitle: 'Chain Link Fence Installation | Vancouver WA & Portland OR | Buddy Fence',
    metaDescription:
      'Galvanized and black vinyl-coated chain link fences for yards, dogs, and commercial lots. Free estimates in Vancouver WA and Portland OR.',
    intro:
      'Chain link is the workhorse: affordable, tough, and fast to install. We build it with the details that matter, terminal posts in concrete, tension wire at the bottom, and tight fabric, so it does not sag or lift at the corners.',
    bullets: [
      'Galvanized or black vinyl-coated fabric, 4 ft to 8 ft heights',
      'Bottom tension wire so dogs stay in and pests stay out',
      'Walk gates and double drive gates with drop rods',
      'Privacy slats and windscreen options',
      'Residential and commercial lots',
    ],
    faqs: [
      { q: 'How much does chain link fencing cost?', a: 'Galvanized chain link runs $18-$28 per linear foot installed; black vinyl-coated adds a few dollars a foot. A 150 ft backyard is usually $3,000 to $4,500.' },
      { q: 'Is chain link good for dogs?', a: 'Yes. It is the most dog-proof fence per dollar. We add bottom tension wire and can bury the fabric a few inches for diggers.' },
    ],
    photo: 'chain-link-fence.jpg',
    icon: 'link',
  },
  {
    slug: 'fence-gates',
    name: 'Gates & Driveway Gates',
    h1: 'Fence Gates & Driveway Gate Installation',
    metaTitle: 'Fence Gates & Driveway Gates | Vancouver WA & Portland OR | Buddy Fence',
    metaDescription:
      'Walk gates, double drive gates, and steel-framed cedar gates that swing true for years. Free estimates in Vancouver WA and Portland OR.',
    intro:
      'The gate is the part of the fence you touch every day, and the first part to fail when it is built like a panel. We frame gates on welded steel or diagonal-braced cedar, hang them on heavy hinges, and set the gate posts deeper than the rest of the line.',
    bullets: [
      'Steel-framed cedar gates that never sag',
      'Double drive gates up to 16 ft for RVs and boats',
      'Self-closing hinges and keyed or coded latches',
      'Gate posts set deeper and larger than line posts',
      'Repair or replacement of a sagging existing gate',
    ],
    faqs: [
      { q: 'How much does a fence gate cost?', a: 'A 4 ft cedar walk gate installed runs $450-$750. Steel-framed and double drive gates run $900 to $2,500 depending on width and hardware.' },
      { q: 'Why does my gate sag?', a: 'Usually the gate post moved or the gate has no diagonal brace. We reset the post in concrete and rebuild the gate on a steel frame so it stays square.' },
    ],
    photo: 'fence-gates.jpg',
    icon: 'door',
  },
  {
    slug: 'fence-repair',
    name: 'Fence Repair',
    h1: 'Fence Repair & Post Replacement',
    metaTitle: 'Fence Repair & Post Replacement | Vancouver WA & Portland OR | Buddy Fence',
    metaDescription:
      'Leaning fences, rotted posts, storm damage, and broken gates fixed fast. Free estimates in Vancouver WA and Portland OR.',
    intro:
      'Not every fence needs replacing. Rotted posts, a leaning section after a windstorm, or a gate that will not latch can usually be fixed in a morning. We tell you honestly when a repair makes sense and when the fence is done.',
    bullets: [
      'Rotted or leaning post replacement, set in concrete',
      'Storm damage and fallen-section rebuilds',
      'Picket, rail, and panel replacement matched to your fence',
      'Gate re-hangs and hardware upgrades',
      'Honest repair-or-replace advice, in writing',
    ],
    faqs: [
      { q: 'How much does fence repair cost?', a: 'Replacing a single post runs $250-$400. Rebuilding a fallen section is usually $500 to $1,200 depending on length. We quote the exact price at a free visit.' },
      { q: 'Can you match my existing cedar fence?', a: 'Usually, yes. New cedar starts brighter and weathers to match within a season, and we can stain the repair to blend it sooner.' },
    ],
    photo: 'fence-repair.jpg',
    icon: 'hammer',
  },
  {
    slug: 'fence-staining',
    name: 'Fence Staining & Sealing',
    h1: 'Fence Staining & Sealing',
    metaTitle: 'Fence Staining & Sealing | Vancouver WA & Portland OR | Buddy Fence',
    metaDescription:
      'Pressure wash, brighten, and stain your cedar fence so it lasts. Free estimates in Vancouver WA and Portland OR.',
    intro:
      'A cedar fence lasts twice as long when it is sealed. We wash and brighten the wood, let it dry, and apply a penetrating oil stain that blocks water and UV without peeling like paint.',
    bullets: [
      'Pressure wash and wood brightener before any stain',
      'Semi-transparent and solid penetrating stains',
      'New-fence sealing once the cedar has dried',
      'Re-stain schedule reminders so it never gets away from you',
    ],
    faqs: [
      { q: 'How often should a cedar fence be stained?', a: 'Every 2 to 4 years in the Pacific Northwest, depending on sun exposure. North-facing fences that stay damp benefit from the shorter end of that range.' },
      { q: 'Should I stain a new cedar fence right away?', a: 'Wait 4 to 8 weeks for the wood to dry, then seal it. Staining wet cedar traps moisture and the stain will not penetrate.' },
    ],
    photo: null,
    icon: 'droplet',
  },
  {
    slug: 'commercial-fencing',
    name: 'Commercial Fencing',
    h1: 'Commercial Fence Installation',
    metaTitle: 'Commercial Fence Installation | Vancouver WA & Portland OR | Buddy Fence',
    metaDescription:
      'Security, perimeter, and screening fences for businesses, HOAs, and property managers. Licensed and insured in WA and OR.',
    intro:
      'Perimeter fencing for lots, dumpster enclosures, HOA common areas, and jobsite screening, built to spec, on schedule, with a certificate of insurance on file before we start.',
    bullets: [
      'Chain link, ornamental steel, and cedar screening',
      'Dumpster and utility enclosures',
      'HOA and property-management repair contracts',
      'Certificate of insurance and W-9 on request',
    ],
    faqs: [
      { q: 'Do you work with property managers?', a: 'Yes. We handle recurring repairs and full replacements across multiple properties, with one point of contact and one invoice per job.' },
    ],
    photo: null,
    icon: 'building',
  },
];

const CITIES = [
  { slug: 'vancouver', lat: 45.6387, lng: -122.6615, name: 'Vancouver', state: 'WA', neighborhoods: ['Salmon Creek', 'Felida', 'Cascade Park', 'Fishers Landing', 'Hazel Dell', 'Camas', 'Ridgefield', 'Battle Ground'], blurb: 'Our home base. Same-week estimates across Clark County, Salmon Creek, Felida, Cascade Park, Camas, and Ridgefield.' },
  { slug: 'portland', lat: 45.5152, lng: -122.6784, name: 'Portland', state: 'OR', neighborhoods: ['Sellwood', 'St. Johns', 'Alberta', 'Mt. Tabor', 'Multnomah Village', 'Woodstock'], blurb: 'Full service across Portland, from tight city lots in Sellwood to big backyards in Mt. Tabor.' },
  { slug: 'beaverton', lat: 45.4871, lng: -122.8037, name: 'Beaverton', state: 'OR', neighborhoods: ['Cedar Hills', 'Aloha', 'Raleigh Hills', 'Sexton Mountain'], blurb: 'Privacy fences and gates across Beaverton, Cedar Hills, and Aloha.' },
  { slug: 'gresham', lat: 45.5001, lng: -122.4302, name: 'Gresham', state: 'OR', neighborhoods: ['Troutdale', 'Fairview', 'Wood Village', 'Powell Valley'], blurb: 'Serving Gresham, Troutdale, and Fairview with the same crews and the same standard.' },
  { slug: 'hillsboro', lat: 45.5229, lng: -122.9898, name: 'Hillsboro', state: 'OR', neighborhoods: ['Orenco', 'Tanasbourne', 'Jackson School', 'Reedville'], blurb: 'Fence work for Hillsboro and Orenco, fast scheduling for new builds and HOAs.' },
  { slug: 'salem', lat: 44.9429, lng: -123.0351, name: 'Salem', state: 'OR', neighborhoods: ['Keizer', 'South Salem', 'West Salem', 'Four Corners'], blurb: 'Weekly routes to Salem and Keizer, book ahead and we bundle your neighborhood.' },
];

// Smaller towns named on the city pages, plotted on the service-area map as
// secondary pins (no page of their own).
const NEARBY_TOWNS = [
  // Washington
  { name: 'Camas', state: 'WA', lat: 45.5871, lng: -122.3995 },
  { name: 'Battle Ground', state: 'WA', lat: 45.7807, lng: -122.5334 },
  { name: 'Ridgefield', state: 'WA', lat: 45.8151, lng: -122.7426 },
  { name: 'Longview', state: 'WA', lat: 46.1382, lng: -122.9382 },
  { name: 'Castle Rock', state: 'WA', lat: 46.2751, lng: -122.9076 },
  // Oregon
  { name: 'Tigard', state: 'OR', lat: 45.4312, lng: -122.7715 },
  { name: 'Lake Oswego', state: 'OR', lat: 45.4207, lng: -122.6706 },
  { name: 'Happy Valley', state: 'OR', lat: 45.4468, lng: -122.5303 },
  { name: 'Milwaukie', state: 'OR', lat: 45.4462, lng: -122.6393 },
  { name: 'Troutdale', state: 'OR', lat: 45.5393, lng: -122.3873 },
  { name: 'Fairview', state: 'OR', lat: 45.5387, lng: -122.434 },
  { name: 'Forest Grove', state: 'OR', lat: 45.5199, lng: -123.1107 },
  { name: 'McMinnville', state: 'OR', lat: 45.2101, lng: -123.1987 },
  { name: 'Keizer', state: 'OR', lat: 44.9901, lng: -123.0262 },
  { name: 'Hood River', state: 'OR', lat: 45.7054, lng: -121.5215 },
];

// How you'll be treated, the emotional core of the pitch. Every line is a
// promise about the homeowner's experience, not a feature.
const PROMISE = [
  { short: 'We protect your yard.', title: 'We protect your yard like it\'s ours', body: 'Utilities located before we dig, plywood down where the wheelbarrow rolls, and every scrap of the old fence gone when we leave. You live here. We never forget that.' },
  { short: 'You\'ll always know what\'s next.', title: 'You\'ll never wonder what\'s happening', body: 'A start date before we take a deposit, a text the morning we arrive, and photos of the posts in concrete before the boards go on. No chasing your contractor for updates. Ever.' },
  { short: 'Your price is your price.', title: 'Your budget is safe with us', body: 'A written price per foot before we start, and it doesn\'t move unless you change the plan. No surprise invoices, no games.' },
  { short: 'We\'re done when you smile.', title: 'We\'re not done until you smile', body: 'You walk the line with your crew lead, swing every gate, and the invoice only comes after you\'ve signed off happy. That\'s the order it should happen in.' },
];

// Placeholders until real Google reviews come in, swap before launch.
const TESTIMONIALS = [
  { quote: 'They set every post in concrete, hauled off our old fence, and the whole thing was done in two days. The gate closes with one finger.', name: 'Rachel M.', where: 'Vancouver, WA' },
  { quote: 'Straight, level, and they sent a photo of the post holes before the boards went on. Exactly what they quoted, not a dollar more.', name: 'Dan & Priya K.', where: 'Camas, WA' },
  { quote: 'Horizontal cedar on steel posts. Three neighbors have asked who built it.', name: 'Steve T.', where: 'Beaverton, OR' },
];

const STEPS = [
  { short: 'Show us the line', title: 'Request an estimate', body: 'Two minutes online or one phone call. Tell us the yard, the length, and the look you want.' },
  { short: 'Measure it', title: 'On-site visit, same-day estimate', body: 'We walk the property line, measure every run and gate, and your written estimate lands in your inbox the same day.' },
  { short: 'We build it', title: 'Approve from your phone', body: 'Approve online in one tap. Utilities located, posts in concrete, photos to your phone before the boards go on.' },
  { short: 'Enjoy it', title: 'Final walkthrough', body: 'You walk the finished fence with your crew lead and swing every gate. The invoice only comes after you\'ve signed off happy, and the warranty is by name.' },
];

const TRUST = [
  { title: 'Family Owned & Operated', body: 'You talk to the owner, not a call center, and the person who quotes your fence knows the crew who builds it by name.' },
  { title: 'Posts Set in Concrete', body: 'Every post, every time, below the frost line. We photograph the holes before the boards go on.' },
  { title: 'Free On-Site Estimates', body: 'Your written estimate the same day, approved online.' },
  { title: 'Clear Per-Foot Pricing', body: 'The price is written per foot and per gate before we start, and it does not move unless you change the plan.' },
  { title: 'Licensed, Bonded & Insured', body: 'Registered in Washington and Oregon.' },
  { title: 'One Warranty. One Number.', body: 'A Buddy Built company, the warranty outlives any one crew.' },
];

// Kept for the shared generator; the fence site has no design configurator yet.
const BALLPARK = { disclaimerShort: 'Not a final quote. Your exact price comes from a free on-site estimate.', laborOnly: '', projects: [], extras: [], rangeLow: 0.9, rangeHigh: 1.2, jobMinCents: 150000 };
const DESIGNER = { rates: {}, features: [], rangeLo: 0.8, rangeHi: 1.3 };

module.exports = { SITE, SERVICES, CITIES, NEARBY_TOWNS, STEPS, TRUST, PROMISE, TESTIMONIALS, BALLPARK, DESIGNER };

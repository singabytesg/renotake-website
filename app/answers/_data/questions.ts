import { QAItem, CATEGORIES } from "./types"
export { CATEGORIES } from "./types"

// ==========================================
// Q&A DATA MANAGEMENT FOR CLAUDE CODE
// ==========================================
//
// TO ADD NEW Q&As:
// 1. Copy the template below
// 2. Fill in all required fields
// 3. Add to the appropriate section
// 4. Run validation to ensure data quality
//
// TEMPLATE:
// {
//   id: "unique-id-here",
//   question: "Your question here?",
//   shortAnswer: "Quick 1-2 sentence answer.",
//   detailedAnswer: `Comprehensive answer with multiple paragraphs...`,
//   category: "category-here",
//   keywords: ["keyword1", "keyword2"],
//   lastUpdated: "2024-12-26",
//   priority: 100,
// },

export const questions: QAItem[] = [
  // ==========================================
  // HDB & BTO RULES
  // ==========================================
  {
    id: "can-hack-walls-bto",
    question: "Can I hack walls in my new BTO flat?",
    shortAnswer:
      "Yes, you can hack non-structural walls in your BTO, but you need HDB's permit first. Structural walls and columns cannot be hacked under any circumstances.",
    detailedAnswer: `You can hack non-structural partition walls in your BTO flat, but there are strict rules to follow:

**What You CAN Hack (with permit):**
- Non-load bearing partition walls between rooms
- Kitchen entrance walls (popular for open kitchen concept)
- Walls between bedrooms to create larger spaces
- Store room walls

**What You CANNOT Hack:**
- Structural walls (usually thicker, concrete walls)
- Columns and beams
- Walls with embedded pipes/electrical conduits
- External walls and facade
- Walls shared with neighbors

**Permit Requirements:**
You must obtain HDB's renovation permit before any hacking work. The permit costs around S$30-50 and requires submission of floor plans. Professional contractors will usually handle this application for you. Hacking without permit can result in fines up to S$5,000 and you'll be required to reinstate the wall at your own cost.

**Timeline:** Permit approval typically takes 7-14 working days. Factor this into your renovation timeline.`,
    category: "hdb-bto-rules",
    keywords: [
      "hack walls BTO",
      "HDB hacking permit",
      "remove walls HDB",
      "BTO renovation rules",
      "structural wall Singapore",
    ],
    relatedQuestions: ["hdb-hacking-permit-cost", "kitchen-wall-removal"],
    lastUpdated: "2024-12-26",
    featured: true,
    sources: ["https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/renovation"],
    priority: 1,
    warningNote:
      "Never hack any walls without proper permits. Illegal hacking can compromise building safety and result in severe penalties.",
  },

  {
    id: "renovation-start-after-keys",
    question: "When can I start renovation after collecting BTO keys?",
    shortAnswer:
      "You can start renovation immediately after key collection, but you have a 3-month deadline to complete all noisy works like hacking and drilling.",
    detailedAnswer: `You can begin renovation works immediately after collecting your BTO keys, but there are important timelines to follow:

**3-Month Renovation Period:**
HDB gives you 3 months from key collection to complete all renovation works that generate noise and debris. This includes:
- Hacking and demolition
- Drilling and hammering
- Tiling and masonry work
- Major carpentry installations

**After 3 Months:**
Once you've moved in or after the 3-month period (whichever is earlier), renovation works are restricted to:
- Weekdays: 9am to 6pm
- Saturdays: 9am to 6pm
- Not allowed on Sundays and Public Holidays

**Best Practice Timeline:**
- Week 1-2: Permits, planning, and contractor mobilization
- Week 3-6: Hacking, masonry, and wet works
- Week 7-10: Carpentry and installations
- Week 11-12: Painting, cleaning, and touch-ups

**Pro Tip:** Most contractors are familiar with this timeline and will schedule works accordingly. However, always buffer 2-3 weeks for delays due to material shortages or weather (for corridor works).`,
    category: "timeline-process",
    keywords: [
      "BTO renovation timeline",
      "when start renovation BTO",
      "3 month renovation period",
      "HDB key collection renovation",
    ],
    lastUpdated: "2024-12-26",
    priority: 2,
    timeEstimate: "3 months for noisy works",
  },

  // ==========================================
  // RENOVATION COSTS
  // ==========================================
  {
    id: "contractor-deposit-amount",
    question: "How much deposit should I pay to my renovation contractor?",
    shortAnswer:
      "Industry standard is 30-50% initial deposit, but never pay more than 50% upfront. The safest approach is 30% deposit, 30% mid-progress, 30% upon completion, and 10% after defects rectification.",
    detailedAnswer: `The deposit structure is crucial for protecting yourself from contractor issues. Here's the recommended payment schedule:

**Standard Payment Structure (Recommended):**
- Initial deposit: 30% upon signing contract
- Progress payment 1: 30% when carpentry/masonry starts
- Progress payment 2: 30% upon substantial completion
- Final payment: 10% after defects rectification (1-2 weeks)

**Red Flags to Avoid:**
- Contractors asking for >50% upfront
- Full payment before work completion
- Cash-only payments with no receipts
- Vague payment terms in contract

**How to Protect Yourself:**
1. Never pay large sums in cash - use bank transfer for records
2. Link payments to specific milestones, not dates
3. Document all completed works before each payment
4. Withhold final payment until all defects are rectified
5. Get receipts for every payment made

**What if contractor demands more?**
If a contractor insists on >50% deposit, it often indicates cash flow problems. Consider finding another contractor. Legitimate contractors understand customer concerns and are flexible with payment terms.

**Industry insight:** Large renovation firms typically require less deposit (20-30%) as they have better cash flow. Smaller contractors may need 40-50% to purchase materials.`,
    category: "contractor-id",
    keywords: [
      "renovation deposit",
      "contractor payment schedule",
      "how much pay contractor",
      "renovation payment terms Singapore",
    ],
    lastUpdated: "2024-12-26",
    featured: true,
    priority: 3,
    warningNote:
      "Never pay 100% upfront, regardless of discounts offered. This is the #1 cause of renovation disputes.",
  },

  {
    id: "cheapest-flooring-hdb",
    question: "What is the cheapest flooring option for HDB flats?",
    shortAnswer:
      "Vinyl flooring is the cheapest at S$3-5 per square foot installed. It's waterproof, durable, and comes in designs that mimic wood or tiles.",
    detailedAnswer: `Here's a cost comparison of flooring options for HDB flats (prices include installation):

**1. Vinyl Flooring (S$3-5 psf) - CHEAPEST**
- Total cost for 4-room HDB: S$2,700 - S$4,500
- Pros: Waterproof, easy maintenance, wide variety of designs
- Cons: Can feel less premium, may show scratches
- Best for: Budget renovations, families with young children

**2. Laminate Flooring (S$4-7 psf)**
- Total cost for 4-room HDB: S$3,600 - S$6,300
- Pros: Looks like real wood, durable surface
- Cons: Not waterproof, can't be refinished
- Best for: Bedrooms and living areas (avoid wet areas)

**3. Ceramic Tiles (S$5-10 psf)**
- Total cost for 4-room HDB: S$4,500 - S$9,000
- Pros: Extremely durable, waterproof, cooling effect
- Cons: Cold feeling, grout maintenance, harder on feet
- Best for: Kitchen, bathrooms, and balcony

**4. Engineered Wood (S$8-15 psf)**
- Total cost for 4-room HDB: S$7,200 - S$13,500
- Pros: Real wood surface, can be refinished once
- Cons: Expensive, sensitive to moisture
- Best for: Premium renovations

**Money-Saving Tip:** Use vinyl in bedrooms and living room, tiles only in kitchen and bathrooms. This combination gives you the best balance of cost and practicality.`,
    category: "materials-finishes",
    keywords: [
      "cheap flooring HDB",
      "vinyl flooring Singapore",
      "HDB flooring cost",
      "budget flooring options",
    ],
    lastUpdated: "2024-12-26",
    priority: 4,
    costRange: { min: 3, max: 15, unit: "S$/psf" },
  },

  // ==========================================
  // PERMITS & LEGAL
  // ==========================================
  {
    id: "hdb-permit-requirements",
    question: "Which renovation works require HDB permit?",
    shortAnswer:
      "HDB permits are required for hacking walls, replacing windows/doors, installing glass partitions, and any structural changes. Basic works like painting and flooring don't need permits.",
    detailedAnswer: `Understanding which works require permits helps avoid fines and delays:

**Works REQUIRING HDB Permit:**
1. Hacking of any walls (even non-structural)
2. Installation of full-height glass partitions
3. Replacement of windows and window grilles
4. Replacement of main door
5. Any structural alterations
6. Relocation of WC in bathroom
7. Installation of bay windows or planter boxes
8. AC compressor on facade/service yard

**Works NOT Requiring Permit:**
- Painting and wallpapering
- Floor finishes (tiles, vinyl, etc.)
- Kitchen cabinets and carpentry
- Electrical rewiring (but need LEW certification)
- Basic plumbing works
- False ceiling installation
- Built-in furniture

**Permit Application Process:**
1. Submit application via HDB InfoWEB or at HDB Branch
2. Include floor plans showing proposed changes
3. Pay permit fee (S$30-50)
4. Wait 7-14 working days for approval
5. Display permit at renovation site

**Important Notes:**
- Contractors usually handle permit applications
- Some works need professional engineer endorsement
- Permit validity is 3 months (extendable once)
- Fine for renovation without permit: Up to S$5,000`,
    category: "permits-legal",
    keywords: [
      "HDB permit requirements",
      "renovation permit Singapore",
      "HDB approval needed",
      "what needs permit HDB",
    ],
    lastUpdated: "2024-12-26",
    featured: true,
    priority: 5,
    sources: [
      "https://www.hdb.gov.sg/cs/infoweb/residential/living-in-an-hdb-flat/renovation/applying-for-approval",
    ],
  },

  // ==========================================
  // TIMELINE & PROCESS
  // ==========================================
  {
    id: "bto-renovation-duration",
    question: "How long does a typical BTO renovation take?",
    shortAnswer:
      "A typical 4-room BTO renovation takes 8-12 weeks from start to handover, with most completing in 10 weeks if there are no major delays.",
    detailedAnswer: `The renovation timeline depends on scope and complexity, but here's a typical breakdown:

**Standard Timeline (8-10 weeks):**
- Week 1-2: Hacking, demolition, and debris clearing
- Week 2-3: Masonry work (floor screed, wall building, tiling base)
- Week 3-5: Plumbing and electrical rough-in
- Week 4-6: Tiling for floors and walls
- Week 5-7: Carpentry installation (cabinets, wardrobes)
- Week 7-8: Painting and ceiling works
- Week 8-9: Installation of fixtures and fittings
- Week 9-10: Cleaning and touch-ups

**Factors That Add Time:**
- Extensive hacking (+1 week)
- Complex false ceiling designs (+3-5 days)
- Custom carpentry designs (+1-2 weeks)
- Material delays (variable)
- Weather delays for corridor works (+3-7 days)

**Fast-Track Timeline (6-8 weeks):**
Possible with:
- Minimal hacking
- Standard designs
- Good contractor coordination
- All materials ready upfront
- No major customization

**Delays to Expect:**
- Material shortages (especially 2024-2025)
- Permit approvals taking longer
- Multiple contractors coordination issues
- Defects rectification period

**Pro Tip:** Add 2-week buffer to contractor's promised timeline. If they say 8 weeks, plan for 10 weeks.`,
    category: "timeline-process",
    keywords: [
      "BTO renovation duration",
      "how long renovation take",
      "HDB renovation timeline",
      "4-room renovation time",
    ],
    lastUpdated: "2024-12-26",
    priority: 6,
    timeEstimate: "8-12 weeks typical",
  },

  // ==========================================
  // COMMON PROBLEMS
  // ==========================================
  {
    id: "contractor-delays-renovation",
    question: "What can I do if my contractor keeps delaying the renovation?",
    shortAnswer:
      "Document all delays, refer to contract penalties, send written notices, and withhold payments tied to incomplete milestones. For serious delays, you can file a claim with CASE or Small Claims Tribunal.",
    detailedAnswer: `Contractor delays are frustrating but manageable with the right approach:

**Immediate Actions:**
1. **Document Everything** - Keep records of promised vs actual dates
2. **Written Communication** - Send formal email/WhatsApp stating concerns
3. **Refer to Contract** - Check for delay penalties (liquidated damages)
4. **Withhold Payment** - Don't pay for incomplete milestone works

**Escalation Steps:**

**Step 1: Formal Notice**
Send written notice giving 7 days to resume work or provide explanation. State intention to terminate if no response.

**Step 2: Mediation**
- Contact CASE (Consumers Association of Singapore)
- Mediation costs ~S$250-500
- Usually resolves within 2-4 weeks

**Step 3: Legal Action**
- Small Claims Tribunal (claims up to S$20,000)
- Filing fee: S$10-50
- Self-representation allowed
- Decision within 1-2 months

**Prevention Tips:**
- Choose contractors with good track records
- Include penalty clauses (e.g., S$50/day for delays)
- Link payments to completion milestones
- Never pay too much upfront
- Get timeline commitments in writing

**Common Delay Excuses & Responses:**
- "Material shortage" → Ask for proof of order
- "Other urgent projects" → Remind of contract priority
- "Worker shortage" → Their problem to solve
- "Waiting for your decision" → Make decisions promptly in writing`,
    category: "common-problems",
    keywords: [
      "contractor delays",
      "renovation delayed",
      "contractor not completing work",
      "renovation dispute Singapore",
    ],
    lastUpdated: "2024-12-26",
    featured: true,
    priority: 7,
    warningNote: "Always keep 10-20% final payment until all works are satisfactorily completed.",
  },

  {
    id: "renovation-defects-liability",
    question: "How long is the defects liability period for renovation works?",
    shortAnswer:
      "Standard defects liability period is 12 months for structural works and 6-12 months for general renovation works. During this period, contractors must fix defects at no cost.",
    detailedAnswer: `The defects liability period protects you from poor workmanship discovered after renovation:

**Standard Defects Liability Periods:**
- Structural works: 12 months minimum
- Waterproofing: 5-10 years (specialist contractors)
- General carpentry: 6-12 months
- Electrical/plumbing: 12 months
- Painting: 6 months
- Tiling: 12 months

**What's Covered:**
✓ Peeling paint or wallpaper
✓ Loose tiles or grout
✓ Warped carpentry doors
✓ Leaking pipes or waterproofing failure
✓ Electrical faults from poor installation
✓ Cracked cement screed
✓ Faulty workmanship

**What's NOT Covered:**
✗ Normal wear and tear
✗ Damage from misuse
✗ Natural material changes (wood expansion)
✗ Owner-supplied material defects
✗ Changes in taste/preference

**How to Claim:**
1. Document defect with photos/videos
2. Notify contractor in writing immediately
3. Give reasonable time for inspection (7 days)
4. Allow access for rectification works
5. Sign off only when satisfied

**Pro Tips:**
- Do thorough inspection before final payment
- Create defects list before handover
- Keep 5-10% retention sum until defects period ends
- Take photos of completed works for reference
- Get warranties for expensive items (waterproofing, windows)`,
    category: "contractor-id",
    keywords: [
      "defects liability period",
      "renovation warranty",
      "contractor warranty Singapore",
      "renovation defects",
    ],
    lastUpdated: "2024-12-26",
    priority: 8,
  },

  // ==========================================
  // MATERIALS & FINISHES
  // ==========================================
  {
    id: "quartz-vs-solid-surface",
    question: "Should I choose quartz or solid surface for kitchen countertops?",
    shortAnswer:
      "Quartz is harder and more scratch-resistant but costs more (S$80-120/ft run). Solid surface is cheaper (S$60-90/ft run), seamless, and repairable but scratches easier.",
    detailedAnswer: `Here's a detailed comparison to help you decide:

**Quartz Countertops:**
- Price: S$80-120 per foot run
- Durability: 9/10 (extremely hard, scratch-resistant)
- Heat Resistance: Moderate (use trivets for hot pans)
- Maintenance: Low (just wipe clean, no sealing needed)
- Appearance: Natural stone look with consistent patterns
- Seams: Visible at joints
- Repairs: Difficult, chips need professional repair
- Best for: Busy kitchens, families who cook frequently

**Solid Surface (Corian/Similar):**
- Price: S$60-90 per foot run
- Durability: 7/10 (softer, can scratch but repairable)
- Heat Resistance: Low (will damage from hot pans)
- Maintenance: Low (sand out scratches yourself)
- Appearance: Uniform color, matte finish options
- Seams: Can be invisible when professionally joined
- Repairs: Easy, scratches can be buffed out
- Best for: Modern minimalist designs, budget-conscious

**Other Options to Consider:**

**Compact Laminate (S$40-60/ft run)**
- Budget-friendly, decent durability
- Good for rental properties or tight budgets

**Sintered Stone (S$100-150/ft run)**
- Premium option, extremely durable
- Heat/scratch/stain resistant
- Thin profile possible (12mm)

**Recommendation:** For most HDB kitchens, quartz offers the best value - it's durable enough for daily use and the price difference (~S$300-500 total) is worth the upgrade from solid surface.`,
    category: "materials-finishes",
    keywords: [
      "quartz vs solid surface",
      "kitchen countertop Singapore",
      "Corian vs quartz",
      "countertop materials HDB",
    ],
    lastUpdated: "2024-12-26",
    priority: 9,
    costRange: { min: 60, max: 120, unit: "S$/ft run" },
  },

  // ==========================================
  // DESIGN & PLANNING
  // ==========================================
  {
    id: "open-vs-closed-kitchen",
    question: "Should I go for open or closed kitchen design in my HDB?",
    shortAnswer:
      "Open kitchens create spacious feel and are trendy, but cooking smells spread easily. Closed kitchens contain mess and smells but feel more cramped. Consider your cooking habits.",
    detailedAnswer: `This is one of the biggest design decisions for HDB flats. Here's what to consider:

**Open Kitchen Pros:**
- Makes home feel 30-40% more spacious
- Better natural light distribution
- Easier to supervise children while cooking
- Great for entertaining guests
- Modern, trendy appearance
- Increases resale appeal to younger buyers

**Open Kitchen Cons:**
- Cooking smells spread throughout home
- Grease and steam affect nearby furniture
- Kitchen always needs to be tidy
- Requires powerful hood/exhaust system
- Noise from kitchen appliances carries

**Closed Kitchen Pros:**
- Contains cooking smells and grease
- Can be messy without affecting living space
- Better for heavy Asian-style cooking (wok hei)
- More wall space for cabinets
- Traditional buyers prefer this

**Closed Kitchen Cons:**
- Feels more cramped
- Less natural light
- Isolated when cooking
- Dated appearance to some buyers

**Compromise Solutions:**

**1. Half-Open Kitchen**
- Keep half-height wall or counter
- Install glass panels above counter
- Best of both worlds

**2. Glass Partition**
- Full-height glass doors (sliding/folding)
- Open when needed, close when cooking
- Costs extra S$3,000-5,000

**Decision Framework:**
- Cook daily with wok/heavy frying → Closed
- Light cooking/baking mainly → Open
- Young family, entertainment focus → Open
- Multi-generational living → Closed

**Resale Consideration:** Open kitchens generally appeal more to younger buyers and can add 5-10% to resale value in trendy estates.`,
    category: "design-planning",
    keywords: [
      "open vs closed kitchen",
      "HDB kitchen design",
      "open kitchen HDB",
      "kitchen layout Singapore",
    ],
    lastUpdated: "2024-12-26",
    featured: true,
    priority: 10,
    proTip:
      "If going open, invest in a good quality hood (minimum 1000 m³/hr extraction rate) to manage cooking smells.",
  },

  // ==========================================
  // ADDITIONAL Q&As - BATCH 2
  // ==========================================

  {
    id: "hdb-aircon-installation-rules",
    question: "Can I install air conditioner in my HDB flat without permit?",
    shortAnswer:
      "You need HDB's permit to install aircon compressor on facade or service yard. Window units and split system condensers on ledges don't require permits if within guidelines.",
    detailedAnswer: `Air conditioner installation in HDB flats has specific rules depending on the type and location:

**Installations REQUIRING HDB Permit:**
- Compressor units on building facade (external walls)
- Compressors on service yard with brackets
- Any alteration to facade structure
- Commercial-grade systems

**Installations WITHOUT Permit (within guidelines):**
- Window unit aircons (within window frame)
- Split system with compressor on AC ledge (provided space)
- Portable/mobile aircons
- Service yard floor placement without brackets

**HDB Guidelines for Installation:**
1. **Compressor Position:** Must be within designated AC ledge area
2. **Noise Level:** Not exceeding 60dB at 1 meter distance
3. **Drainage:** Proper condensate drainage (not dripping onto neighbors)
4. **Safety:** Professional installation with proper mounting
5. **Facade:** No drilling into structural walls without permit

**Costs:**
- Permit application: S$20-40
- Installation without permit (ledge): S$400-800 per unit
- Installation with permit (facade): S$600-1,200 per unit

**Common Violations & Penalties:**
- Installing without required permit: Fine up to S$5,000
- Improper drainage affecting neighbors: Written warning + rectification
- Excessive noise: Complaints to Town Council

**Pro Tips:**
- Most 4-room BTOs have 2-3 AC ledges pre-planned
- Discuss placement with contractor during renovation
- Consider multi-split systems to maximize ledge space
- Book installation before key collection for 3-month window`,
    category: "hdb-bto-rules",
    keywords: [
      "HDB aircon installation",
      "air conditioner permit HDB",
      "aircon rules Singapore",
      "BTO aircon installation",
      "AC compressor HDB facade",
    ],
    relatedQuestions: ["hdb-permit-requirements"],
    lastUpdated: "2025-09-26",
    priority: 11,
    sources: ["https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/air-conditioners"],
    warningNote: "Always check with HDB before installing aircon on facade to avoid penalties.",
  },

  {
    id: "interior-designer-vs-contractor",
    question: "Should I hire interior designer or contractor for my HDB renovation?",
    shortAnswer:
      "Interior designers provide design + renovation (S$30k-60k), contractors do execution only (S$20k-40k). Choose designer for complex design needs, contractor for straightforward renovations.",
    detailedAnswer: `The choice between interior designer (ID) and contractor depends on your needs and budget:

**Interior Designer (ID Firm):**

**Pros:**
- Complete design concept and 3D visualizations
- One-stop solution (design + renovation)
- Project management included
- Better space planning expertise
- Material selection guidance
- Professional warranties (1-2 years)

**Cons:**
- 20-30% more expensive
- Less flexibility to change during renovation
- Design may not match personal taste
- Longer planning phase

**Typical Costs (4-room HDB):**
- Budget ID firms: S$30,000-45,000
- Mid-range: S$45,000-60,000
- Premium: S$60,000-80,000+

**Best for:** First-time renovators, complex layouts, open concept designs, full-home makeovers

**Contractor (Direct Hire):**

**Pros:**
- 20-30% cheaper than ID firms
- More flexibility during renovation
- Direct communication with workers
- Can source own materials for savings
- Faster decision-making

**Cons:**
- No design service (DIY planning)
- Need to coordinate multiple trades yourself
- Higher risk of delays/disputes
- Limited warranties (6-12 months)

**Typical Costs (4-room HDB):**
- Budget renovation: S$20,000-30,000
- Standard: S$30,000-40,000
- Premium: S$40,000-50,000

**Best for:** Experienced renovators, simple layouts, clear vision, hands-on involvement

**Hybrid Approach (Recommended for many):**
1. Hire ID for design only (S$2,000-5,000)
2. Get multiple contractor quotes with design
3. Hire contractor for execution
4. Save 15-20% vs full ID package

**Decision Framework:**
- First-time renovator + complex needs → Interior Designer
- Experienced + straightforward reno → Contractor
- Tight budget + willing to DIY → Contractor
- No time + want turnkey → Interior Designer`,
    category: "contractor-id",
    keywords: [
      "interior designer vs contractor",
      "ID or contractor Singapore",
      "HDB renovation who to hire",
      "interior design firm vs contractor",
    ],
    lastUpdated: "2025-09-26",
    featured: true,
    priority: 12,
    proTip:
      "Get quotes from both IDs and contractors before deciding - the price difference might be smaller than expected.",
  },

  {
    id: "bathroom-waterproofing-cost",
    question: "How much does bathroom waterproofing cost in Singapore?",
    shortAnswer:
      "Professional bathroom waterproofing costs S$800-1,500 for HDB bathrooms. Price varies by size, method (membrane vs epoxy), and warranty coverage (5-10 years).",
    detailedAnswer: `Bathroom waterproofing is crucial for preventing leaks to neighbors. Here's the complete cost breakdown:

**Waterproofing Costs by Method:**

**1. Membrane Waterproofing (Most Common)**
- Small bathroom (3-4 sqm): S$800-1,200
- Standard bathroom (4-6 sqm): S$1,200-1,800
- Large bathroom (6-8 sqm): S$1,500-2,500
- Method: Applied membrane coating on walls/floor
- Warranty: 5-10 years
- Drying time: 48-72 hours

**2. Epoxy/Polyurethane Coating**
- Small bathroom: S$600-1,000
- Standard bathroom: S$1,000-1,500
- Large bathroom: S$1,200-2,000
- Method: Liquid coating that hardens
- Warranty: 3-5 years
- Drying time: 24-48 hours

**3. Cementitious Waterproofing**
- Small bathroom: S$500-800
- Standard bathroom: S$800-1,200
- Large bathroom: S$1,000-1,500
- Method: Cement-based coating
- Warranty: 3-5 years
- Budget option

**What's Included:**
✓ Surface preparation and cleaning
✓ Crack repair and leveling
✓ 2-3 layers of waterproofing compound
✓ Floor trap sealing
✓ Water ponding test (24-48 hours)
✓ Certificate of completion

**Additional Costs:**
- Hacking old tiles: S$200-400
- Floor screed replacement: S$300-600
- Wall treatment: S$200-400
- Re-tiling after waterproofing: S$800-1,500

**Red Flags to Avoid:**
- Contractors skipping water ponding test
- Quotes below S$600 (likely poor quality)
- No warranty provided
- Only 1 layer of coating (need 2-3)

**Pro Tips:**
- Always insist on 48-hour water ponding test
- Get 5-10 year warranty in writing
- Waterproof before tiling, not after
- Extend waterproofing 300mm up walls
- Document with photos before tiling over`,
    category: "renovation-costs",
    keywords: [
      "bathroom waterproofing cost",
      "HDB waterproofing price Singapore",
      "bathroom leak prevention",
      "waterproofing contractor",
    ],
    lastUpdated: "2025-09-26",
    priority: 13,
    costRange: { min: 800, max: 2500, unit: "S$" },
    warningNote:
      "Poor waterproofing is the #1 cause of neighbor disputes. Don't compromise on quality to save a few hundred dollars.",
  },

  {
    id: "laminate-vs-vinyl-flooring",
    question: "Laminate or vinyl flooring - which is better for HDB?",
    shortAnswer:
      "Vinyl flooring (S$3-5/sqft) is better for most HDB flats - fully waterproof, cheaper, easier to maintain. Laminate (S$4-7/sqft) looks more premium but cannot handle water.",
    detailedAnswer: `Here's a detailed comparison to help you choose the right flooring:

**Vinyl Flooring (Winner for most HDB homes)**

**Pros:**
- 100% waterproof (perfect for Singapore humidity)
- Cheapest option at S$3-5 per sqft installed
- Easy DIY installation (click-lock system)
- Wide variety of designs (wood, tile, stone looks)
- Soft underfoot, warmer feel
- Very low maintenance
- Can be installed directly over existing tiles

**Cons:**
- Can feel less premium than laminate
- May show scratches over time (high traffic areas)
- Some designs can look artificial
- Dents from heavy furniture possible

**Best for:** Entire HDB flat, kitchen, bathrooms, families with young children

**Laminate Flooring**

**Pros:**
- More realistic wood appearance
- Harder, more scratch-resistant surface
- Premium feel and look
- Good resale value perception
- Slightly better sound insulation

**Cons:**
- NOT waterproof (water damage from spills/humidity)
- More expensive at S$4-7 per sqft
- Cannot use in wet areas (kitchen, bathrooms)
- Expansion gaps needed at walls
- Cannot refinish like real wood

**Best for:** Bedrooms, living room only (avoid wet areas)

**Cost Comparison (4-room HDB ~90 sqm):**

**Full Vinyl:**
- Total: S$2,700-4,500
- All rooms including kitchen

**Full Laminate:**
- Total: S$3,600-6,300
- Bedrooms + living only, still need tiles for kitchen/bathrooms

**Hybrid Approach (Common):**
- Vinyl in kitchen, bathrooms, balcony: S$1,000-1,500
- Laminate in bedrooms, living: S$2,000-3,500
- Total: S$3,000-5,000

**Durability Test Results:**
- Vinyl lifespan: 10-15 years
- Laminate lifespan: 8-12 years (if kept dry)

**Recommendation for Singapore:**
Go with vinyl for the entire flat. Singapore's humidity and occasional water spills make laminate risky. Modern SPC (Stone Plastic Core) vinyl looks just as good as laminate but handles water perfectly.

**Top Brands in Singapore:**
- Vinyl: Floorify, Berry Alloc, Quick-Step
- Laminate: Pergo, Kronotex, Egger`,
    category: "materials-finishes",
    keywords: [
      "laminate vs vinyl flooring",
      "HDB flooring comparison",
      "vinyl flooring Singapore",
      "SPC flooring HDB",
      "best flooring for HDB",
    ],
    lastUpdated: "2025-09-26",
    featured: true,
    priority: 14,
    costRange: { min: 3, max: 7, unit: "S$/sqft" },
    proTip:
      "Choose SPC (Stone Plastic Core) vinyl over WPC for Singapore - it's 100% waterproof and more durable.",
  },

  {
    id: "renovation-noise-hours-hdb",
    question: "What are the allowed renovation hours for HDB flats?",
    shortAnswer:
      "During 3-month renovation period: 9am-6pm daily (including Sundays). After moving in: 9am-6pm on weekdays/Saturdays only. No noisy works on Sundays/Public Holidays.",
    detailedAnswer: `HDB has strict regulations on renovation noise to minimize disruption to neighbors:

**During 3-Month Initial Renovation Period (Before Moving In):**

**Allowed Hours:**
- Monday to Sunday: 9am to 6pm
- Public Holidays: 9am to 6pm
- Total: 9 hours per day, every day

**Works Permitted:**
- All types including drilling, hacking, hammering
- Delivery of materials
- Debris removal
- Any construction noise

**After 3 Months OR After Moving In (Whichever Earlier):**

**Allowed Hours:**
- Monday to Friday: 9am to 6pm
- Saturday: 9am to 6pm
- Sunday & Public Holidays: NO NOISY WORKS

**Restricted Works:**
- Drilling, hacking, demolition
- Power tool usage
- Heavy hammering
- Loud installations

**Quiet Works Allowed Anytime:**
- Painting (without power tools)
- Light touch-ups
- Furniture assembly (manual)
- Cleaning and tidying

**Penalties for Violations:**

**First Offense:**
- Written warning from Town Council
- Required to stop works immediately

**Subsequent Offenses:**
- Fine of S$1,000 per violation
- Legal action possible
- Renovation permit suspension

**Neighbor Complaint Process:**
1. Neighbor reports to Town Council
2. Town Council officer investigates
3. Warning issued if found guilty
4. Repeat violations = fines

**Pro Tips to Minimize Complaints:**

1. **Inform Neighbors:**
   - Distribute notice letters 1 week before
   - Include contact number and expected duration
   - Offer apology in advance

2. **Schedule Smartly:**
   - Do loudest works (hacking) in weeks 2-4
   - Avoid early mornings (9-10am) and lunch (12-2pm)
   - Don't start on Mondays (people WFH)

3. **Control Noise:**
   - Use rubber mats to dampen vibrations
   - Close doors/windows when drilling
   - Brief workers on noise complaints

4. **Communicate:**
   - Give neighbors your contractor's number
   - Respond quickly to complaints
   - Offer goodwill gestures (snacks, apology cards)

**Common Violations:**
- Starting before 9am (most common)
- Continuing past 6pm
- Sunday drilling (major offense)
- Not stopping when warned`,
    category: "permits-legal",
    keywords: [
      "HDB renovation hours",
      "renovation noise rules Singapore",
      "HDB drilling hours",
      "renovation timing restrictions",
      "Town Council noise complaint",
    ],
    lastUpdated: "2025-09-26",
    priority: 15,
    sources: ["https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/renovation"],
    warningNote:
      "Violating noise regulations can result in S$1,000 fines and strained neighbor relationships. Always comply with timing rules.",
  },

  {
    id: "small-hdb-layout-tips",
    question: "How to maximize space in a small 3-room HDB flat?",
    shortAnswer:
      "Maximize small HDB space with: multi-functional furniture, floor-to-ceiling storage, mirrors for visual expansion, light colors, and open kitchen concept. Can gain 20-30% usable space.",
    detailedAnswer: `Small 3-room HDB flats (60-65 sqm) require smart design to feel spacious. Here are proven strategies:

**1. Open Concept Design (+30% perceived space)**

**Kitchen:**
- Remove kitchen wall for open concept
- Adds 2-3 sqm of visual space
- Use glass partition for flexibility
- Cost: S$1,500-3,000 for hacking + modification

**Living/Dining:**
- Combine into one flowing space
- Remove unnecessary partition walls
- Use area rugs to define zones
- Cost: Minimal (just furniture arrangement)

**2. Smart Storage Solutions**

**Floor-to-Ceiling Cabinets:**
- Utilize vertical space fully
- Add 40% more storage vs standard cabinets
- Cost: S$3,000-5,000 for bedroom
- Maximize ceiling height (2.6-2.8m in HDB)

**Built-in Solutions:**
- Platform bed with storage drawers (S$2,000-4,000)
- Bay window seat with hidden storage (S$1,500-3,000)
- TV console with full wall storage (S$3,000-6,000)

**3. Multi-functional Furniture**

**Must-haves:**
- Foldable dining table (expand when needed)
- Sofa bed for occasional guests (S$800-2,000)
- Ottoman with storage (S$200-500)
- Wall-mounted foldable desk (S$300-800)

**Space Saved:** 3-5 sqm of floor area

**4. Visual Expansion Tricks**

**Mirrors:**
- Full-height mirror on one wall
- Makes room feel 2x larger
- Cost: S$300-800
- Best placement: Opposite windows

**Colors:**
- White/light colors for walls (90% light reflectance)
- Avoid dark colors (makes space feel cramped)
- Monochromatic scheme creates flow

**Lighting:**
- Eliminate dark corners with cove lighting
- Under-cabinet lights in kitchen
- Cost: S$500-1,500 for full flat

**5. Smart Room Combinations**

**Master Bedroom + Study:**
- Built-in desk along window wall
- Saves dedicated study room
- Cost: S$1,500-3,000

**Bathroom Upgrades:**
- Replace bathtub with standing shower (+1 sqm)
- Use sliding doors instead of swing doors
- Wall-mounted fixtures
- Cost: S$3,000-5,000

**6. Decluttering & Organization**

**Vertical Storage:**
- Wall hooks and pegboards (S$50-200)
- Magnetic strips in kitchen (S$30-100)
- Over-door organizers (S$20-80)

**Hidden Storage:**
- Under-bed storage boxes
- Behind-door storage racks
- Ceiling-mounted bike racks

**Budget Allocation (3-room HDB Space Optimization):**

**Minimal Budget (S$8,000-12,000):**
- Open kitchen concept: S$2,000
- One feature wall with mirror: S$500
- Multi-functional furniture: S$3,000
- Smart storage solutions: S$2,500

**Standard Budget (S$15,000-25,000):**
- Open concept + glass partition: S$4,000
- Full built-in wardrobes: S$6,000
- Platform bed with storage: S$3,000
- TV console with storage: S$4,000
- Lighting upgrades: S$1,500

**Premium Budget (S$30,000-40,000):**
- Complete open concept redesign: S$8,000
- Full-height custom carpentry: S$15,000
- Smart home automation: S$3,000
- Premium finishes: S$10,000

**Expected Results:**
- 20-30% more perceived space
- 40-50% more storage capacity
- Better natural light distribution
- Higher resale value (+5-8%)`,
    category: "design-planning",
    keywords: [
      "small HDB space maximization",
      "3-room HDB layout",
      "space saving HDB",
      "small flat design Singapore",
      "HDB storage solutions",
    ],
    lastUpdated: "2025-09-26",
    featured: true,
    priority: 16,
    proTip:
      "The biggest space gains come from removing the kitchen wall - it's the single most impactful change for small HDBs.",
  },

  {
    id: "contractor-ghosting-solutions",
    question: "What to do when contractor stops responding or disappears?",
    shortAnswer:
      "Document all communication, send formal notice with 7-day deadline, file complaint with CASE if no response, claim remaining deposit through Small Claims Tribunal. Act within 30 days.",
    detailedAnswer: `Contractor ghosting is a serious issue requiring immediate action. Here's your step-by-step response plan:

**Immediate Actions (Days 1-3):**

**1. Document Everything:**
- Screenshot all messages and calls
- List all payments made with receipts
- Photo all completed and incomplete works
- Review contract for breach of contract clauses
- Calculate total paid vs work completed

**2. Attempt Contact:**
- Call during business hours (9am-6pm)
- Send WhatsApp/SMS with read receipts
- Email to official business email
- Visit contractor's business address if known
- Contact other clients/projects for info

**3. Check Contractor Status:**
- Verify business registration (ACRA)
- Check if phone number still active
- Search online for similar complaints
- Contact any guarantor mentioned in contract

**Escalation (Days 4-7):**

**Send Formal Legal Notice:**

Template email/letter:
"Dear [Contractor Name],

Re: Incomplete Works - [Your Address]

This is formal notice regarding breach of contract dated [date]. Works have been abandoned since [date] with outstanding items worth S$[amount].

You have 7 working days from receipt of this letter to:
1. Resume works immediately, OR
2. Refund outstanding deposit of S$[amount], OR
3. Provide written explanation and revised timeline

Failure to respond will result in:
- Complaint to CASE
- Small Claims Tribunal filing
- Negative reviews on all platforms
- Report to police if fraud suspected

Contact me by [date] to resolve amicably.

Regards,
[Your Name]
[Contact]"

**Further Actions (Days 8-14):**

**1. File CASE Complaint:**
- Cost: S$250-500 for mediation
- Submit evidence package
- CASE contacts contractor
- Mediation session arranged
- 70% success rate

**Website:** www.case.org.sg
**Hotline:** 6100 0315

**2. Small Claims Tribunal (if mediation fails):**
- For claims up to S$20,000
- Filing fee: S$10-50
- No lawyer needed
- Decision within 1-2 months
- 85% success rate with evidence

**Required Documents:**
- Contract copy
- Payment receipts
- Communication records
- Photos of incomplete works
- Written quotations

**3. Police Report (if suspected fraud):**
- File if contractor took >50% payment
- Provide evidence of intent to deceive
- Required for insurance claims
- Strengthens civil case

**4. Hire Completion Contractor:**
- Get 2-3 quotes to complete works
- Price difference can be claimed from original contractor
- Document all additional costs incurred

**Prevention for Others:**

**Share Experience:**
- Leave detailed reviews on:
  - Google Business
  - Facebook
  - Renovation forums
  - HardwareZone
- Help others avoid same contractor

**Financial Recovery:**

**Typical Outcomes:**
- Full refund: 30% of cases
- Partial settlement: 45% of cases
- Contractor completes work: 15% of cases
- No recovery: 10% of cases

**Maximizing Recovery:**
- Act within 30 days
- Have strong documentation
- Use bank transfers (not cash)
- Engage CASE early
- Be persistent with follow-ups

**Red Flags to Recognize Early:**

1. Asking for >50% upfront (high risk)
2. Only accepts cash (no paper trail)
3. No business registration
4. Keeps delaying for "material issues"
5. Not answering calls after payment
6. Sudden family emergencies repeatedly

**Emergency Replacement Plan:**

**Week 1:** Secure site, prevent theft
**Week 2:** Get completion quotes
**Week 3:** File claims, hire new contractor
**Week 4:** Resume works with new team

**Cost Buffer:** Add 10-15% budget for completion contractor premium

**Legal Timeline:**
- CASE mediation: 2-4 weeks
- Small Claims filing: 1-2 weeks
- Hearing date: 4-8 weeks
- Judgment enforcement: 2-4 weeks
- Total: 3-4 months for full resolution`,
    category: "common-problems",
    keywords: [
      "contractor disappeared",
      "contractor ghosting",
      "renovation contractor not responding",
      "contractor abandoned project Singapore",
      "CASE complaint contractor",
    ],
    lastUpdated: "2025-09-26",
    priority: 17,
    warningNote:
      "Time is critical - evidence degrades and memories fade. Document and act within the first week of ghosting.",
  },

  {
    id: "built-in-wardrobe-cost",
    question: "How much does a built-in wardrobe cost for HDB bedroom?",
    shortAnswer:
      "Built-in wardrobes cost S$1,200-2,500 per bedroom in HDB flats. Price depends on height (floor-to-ceiling adds S$300-500), material quality, and internal fittings.",
    detailedAnswer: `Built-in wardrobes are essential for HDB bedrooms. Here's the complete cost breakdown:

**Price by Room Type:**

**Master Bedroom (4m wall length):**
- Budget: S$1,800-2,500
- Standard: S$2,500-3,500
- Premium: S$3,500-5,000

**Common Bedroom (3m wall length):**
- Budget: S$1,200-1,800
- Standard: S$1,800-2,500
- Premium: S$2,500-3,500

**Small Bedroom (2.5m wall length):**
- Budget: S$1,000-1,500
- Standard: S$1,500-2,000
- Premium: S$2,000-2,800

**Factors Affecting Price:**

**1. Height:**
- Standard (2.4m): Base price
- Floor-to-ceiling (2.6-2.8m): +S$300-500
- Recommendation: Always go floor-to-ceiling for max storage

**2. Material Type:**
- Laminated plywood: S$300-400/m (budget)
- Melamine board: S$400-500/m (standard)
- Acrylic finish: S$500-700/m (premium)
- Solid wood veneer: S$700-1,000/m (luxury)

**3. Internal Fittings:**

**Basic Package (included):**
- Hanging rod (1-2 rods)
- Fixed shelves (3-4 shelves)
- Standard handles
- Soft-close hinges

**Add-ons (extra cost):**
- Pull-out shoe rack: +S$200-400
- Built-in drawers: +S$150-300 each
- Pull-down hanging rod: +S$150-250
- LED lighting: +S$100-200
- Mirror panel: +S$150-300
- Pants rack: +S$100-200
- Laundry basket: +S$100-150

**4. Door Type:**
- Swing doors: Standard (included)
- Sliding doors: +S$300-600 (saves floor space)
- Bi-fold doors: +S$400-800 (less common)

**Typical Configurations:**

**Master Bedroom Package (S$2,800-3,500):**
- 4m wall length, floor-to-ceiling
- Melamine finish
- Double hanging rods (long + short)
- 5 shelves + 2 drawers
- Pull-out shoe rack
- Soft-close mechanisms
- Standard handles

**Common Bedroom Package (S$1,800-2,500):**
- 3m wall length, floor-to-ceiling
- Laminated plywood
- Single + double hanging rods
- 4 shelves + 1 drawer
- Soft-close hinges
- Basic handles

**Money-Saving Tips:**

**1. DIY Options:**
- IKEA PAX system: S$800-1,500 (self-install)
- Saves 30-40% vs custom carpentry
- Modular, can bring to next home

**2. Material Choices:**
- Laminate instead of acrylic: Save S$300-500
- Standard handles vs branded: Save S$100-200
- Fixed shelves vs pull-outs: Save S$200-400

**3. Timing:**
- Bundle with other carpentry for 5-10% discount
- Buy during renovation fair (March, August): Save 10-15%
- Off-peak season (Jan-Mar): Better negotiation

**4. Design Smart:**
- Maximize vertical space (floor-to-ceiling)
- Use full wall width (no wasted corners)
- Open shelves cheaper than enclosed drawers

**Quality Indicators:**

**Good Carpentry:**
- Edges neatly finished (no exposed board)
- Doors aligned perfectly
- Soft-close mechanisms standard
- Clean internal joints
- Stable structure (no wobbling)

**Poor Workmanship:**
- Visible gaps at ceiling/floor
- Uneven door alignment
- Rough edges
- Cheap hinges (slam shut)
- Weak shelves (sag over time)

**Warranty Expectations:**
- Standard: 6-12 months
- Premium: 12-24 months
- Covers: Hinges, handles, alignment
- Excludes: Normal wear, misuse damage

**Total Cost for 4-Room HDB (3 bedrooms):**
- Budget: S$3,500-5,500
- Standard: S$5,500-8,000
- Premium: S$8,000-12,000

**ROI for Resale:**
Built-in wardrobes add 3-5% to flat value and are expected by buyers. Without them, you may need to reduce asking price more than the wardrobe cost.`,
    category: "renovation-costs",
    keywords: [
      "built-in wardrobe cost",
      "HDB wardrobe price Singapore",
      "bedroom carpentry cost",
      "custom wardrobe HDB",
    ],
    lastUpdated: "2025-09-26",
    priority: 18,
    costRange: { min: 1200, max: 5000, unit: "S$ per bedroom" },
    proTip:
      "Always choose floor-to-ceiling wardrobes - the extra S$300-500 gives you 30-40% more storage space.",
  },

  {
    id: "kitchen-island-feasibility-hdb",
    question: "Can I add a kitchen island in my HDB flat?",
    shortAnswer:
      "Kitchen islands work in HDB flats only if you have 4m+ of clear width after removing the kitchen wall. Requires 90cm clearance on all sides. Feasible for most 4-5 room flats.",
    detailedAnswer: `Kitchen islands are popular but require careful space planning in HDB flats:

**Space Requirements (Critical):**

**Minimum Dimensions:**
- Clear width needed: 4m (kitchen side to opposite wall)
- Island size: 120cm x 60cm (minimum functional)
- Clearance around island: 90cm minimum (120cm ideal)
- Total floor area: 8-10 sqm minimum

**HDB Flat Suitability:**

**3-Room (60-65 sqm):**
- Generally NOT recommended
- Kitchen too narrow (2.5-3m typical width)
- Open concept helps but still tight

**4-Room (90-100 sqm):**
- Feasible if kitchen wall removed
- Typical post-hacking width: 4-4.5m
- Works well with compact island (120x60cm)
- Cost: S$2,000-4,000 for island

**5-Room (110-120 sqm):**
- Ideal for kitchen island
- Width: 4.5-5m after wall removal
- Can accommodate larger island (150x80cm)
- Cost: S$3,000-6,000 for island

**Executive (130+ sqm):**
- Perfect for kitchen island
- Width: 5m+
- Can add seating area
- Cost: S$4,000-8,000 for island

**Types of Kitchen Islands:**

**1. Fixed Island with Storage (Most Popular)**
- Built-in cabinets below
- Worktop surface
- Cost: S$2,500-5,000
- Pros: Max storage, fixed stability
- Cons: Permanent, cannot move

**2. Moveable/Mobile Island**
- Wheels for flexibility
- IKEA/furniture store options
- Cost: S$500-1,500
- Pros: Flexible, cheaper, removable
- Cons: Less storage, not as stable

**3. Island with Seating**
- Breakfast bar extension
- 2-3 stools
- Cost: S$3,500-6,000
- Pros: Dining + prep area
- Cons: Needs more space (3.5m total length)

**4. Island with Cooktop/Sink**
- Requires plumbing/gas line relocation
- HDB permit needed
- Cost: S$5,000-10,000 (incl. relocation works)
- Pros: Ultra-functional, professional kitchen
- Cons: Expensive, complex installation

**Detailed Cost Breakdown:**

**Basic Island (Storage + Worktop):**
- Carpentry work: S$1,500-3,000
- Countertop (quartz): S$500-1,000
- Installation: S$300-500
- Total: S$2,300-4,500

**Island with Seating:**
- Basic island cost: S$2,300-4,500
- Extended countertop overhang: +S$500-800
- Bar stools (2-3): +S$300-600
- Total: S$3,100-5,900

**Island with Cooktop:**
- Basic island cost: S$2,300-4,500
- Gas pipe relocation: +S$800-1,500
- Cooktop installation: +S$500-1,000
- Hood above island: +S$1,500-3,000
- HDB permit: +S$30-50
- Total: S$5,130-10,050

**Design Considerations:**

**1. Workflow (Kitchen Triangle):**
- Island shouldn't disrupt flow
- Maintain 120cm min between island & cabinets
- Place opposite stove for prep zone

**2. Storage Planning:**
- Use island for pots, pans, baking items
- Add pull-out drawers for easy access
- Consider open shelves one side

**3. Electrical/Plumbing:**
- Plan for island power sockets (2-3 min)
- Plumbing for sink adds S$1,000-2,000
- Gas relocation needs HDB approval

**4. Material Selection:**
- Countertop: Quartz or solid surface (S$80-120/ft)
- Cabinet: Match existing kitchen (consistency)
- Legs/supports: Hidden in cabinetry

**Alternatives for Small Kitchens:**

**1. Peninsula Counter (+30cm extension)**
- Extends from existing counter
- No clearance needed on sides
- Cost: S$800-1,500
- Works in 3-room flats

**2. Foldable/Drop-leaf Table**
- Fold up when not in use
- Cost: S$300-800
- Great for occasional prep space

**3. Rolling Cart**
- Portable prep station
- Cost: S$200-500
- Can wheel away after use

**Pros & Cons Summary:**

**Pros:**
- Additional 1-2 sqm prep space
- Central gathering point
- Increases storage 20-30%
- Modern aesthetic appeal
- Can add seating (saves dining space)

**Cons:**
- Requires open concept (wall removal S$1,500-3,000)
- Reduces walking space
- Expensive (S$2,000-6,000+)
- Permanent fixture (affects resale flexibility)

**ROI Consideration:**
Kitchen islands add 3-5% to perceived home value and appeal strongly to younger buyers. However, some traditional buyers prefer closed kitchens, so consider your target resale market.`,
    category: "design-planning",
    keywords: [
      "kitchen island HDB",
      "kitchen island feasibility Singapore",
      "HDB open kitchen island",
      "kitchen island small space",
    ],
    lastUpdated: "2025-09-26",
    priority: 19,
    costRange: { min: 2000, max: 10000, unit: "S$" },
    proTip:
      "Measure your space twice - 4m clear width is the absolute minimum. Less than that, consider a peninsula counter instead.",
  },

  {
    id: "bto-defects-inspection-checklist",
    question: "What should I check during BTO defects inspection?",
    shortAnswer:
      "Check for cracks (walls/ceiling), water leaks, door/window alignment, electrical works, floor levelness, and test all fixtures. Document everything with photos. You have 3 months to report defects.",
    detailedAnswer: `BTO defects inspection is crucial before renovation. Here's your comprehensive checklist:

**Timing & Process:**

**When:** Within 7-14 days of key collection
**Duration:** 2-3 hours for thorough inspection
**Defects Report Deadline:** 3 months from key collection
**Second Inspection:** 1 year after moving in (warranty period)

**Essential Tools to Bring:**

- Marble (check floor levelness): S$5-10
- Masking tape (mark defects): S$3-5
- Measuring tape: S$10-15
- Spirit level: S$15-25
- Torch/flashlight: S$10-20
- Camera/phone for documentation
- Checklist printout
- Pen and notebook

**Detailed Inspection Checklist:**

**1. Walls & Ceilings (30 mins)**

Check for:
✓ Cracks in walls/ceilings (especially corners)
✓ Paint bubbling or peeling
✓ Uneven surface (run hand along)
✓ Water stains (ceiling/top corners)
✓ Hollow sounds (tap with knuckles)
✓ Color consistency

Common issues:
- Hairline cracks at corners: Cosmetic (monitor)
- Wide cracks (>2mm): Structural concern (report immediately)
- Water stains: Plumbing/waterproofing issue

**2. Flooring (20 mins)**

✓ Check levelness with marble (roll test)
✓ Look for cracks in tiles
✓ Tap tiles for hollow sounds (delamination)
✓ Check grout lines (consistent width)
✓ Test for water pooling (bathroom)
✓ Inspect corners and edges

Red flags:
- Marble rolls to one side: Uneven floor screed
- Hollow sounds: Poor tile adhesion
- Standing water: Drainage issues

**3. Doors & Windows (25 mins)**

**Doors:**
✓ Open/close smoothly (no sticking)
✓ Lock mechanism works properly
✓ Door frame alignment (check gaps)
✓ No scratches or dents
✓ Hinges secure and lubricated
✓ Door stop installed

**Windows:**
✓ Opens/closes smoothly
✓ Locking mechanism functional
✓ No gaps when closed (air leaks)
✓ Glass panels secure
✓ Window tracks clean
✓ No water seepage marks

**4. Plumbing & Bathroom (30 mins)**

**Bathroom:**
✓ Flush toilet 3-4 times (check for leaks)
✓ Run all taps for 5 min (hot & cold)
✓ Check under sink for leaks
✓ Shower head water pressure
✓ Floor trap draining properly
✓ Bath/shower waterproofing (fill & drain test)
✓ Bathroom door threshold (prevent water escape)

**Kitchen:**
✓ Sink drainage (fill & drain)
✓ Check below sink for dampness
✓ Hot water heater working
✓ Gas pipe installed correctly
✓ Water pressure adequate

Critical: Run water tests for minimum 15 minutes to detect slow leaks

**5. Electrical System (20 mins)**

✓ All light switches working
✓ All power sockets functional (use phone charger)
✓ Distribution board labeled correctly
✓ Circuit breakers trip when overloaded (safety)
✓ MCB/RCCB installed
✓ Check for exposed wires
✓ Phone/internet points installed

Test equipment: Phone charger, small lamp

**6. Built-in Items (15 mins)**

✓ Kitchen cabinets (open/close, alignment)
✓ Cabinet doors swing freely
✓ Drawer runners smooth
✓ Countertop level and secure
✓ Service yard shelves stable
✓ Any built-in wardrobes functional

**7. Other Important Checks (20 mins)**

✓ Bomb shelter door functional
✓ Letterbox lock working
✓ Main gate/door alignment
✓ Intercom system operational
✓ AC ledge clear and level
✓ Corridor space clean
✓ No visible defects on facade

**Common BTO Defects by Priority:**

**Priority 1 (Report Immediately):**
- Structural cracks (>2mm wide)
- Water leakage from ceiling/walls
- Electrical hazards (exposed wires)
- Non-functional water heater
- Door/window lock malfunctions
- Gas pipe issues

**Priority 2 (Report Within 1 Week):**
- Hollow tiles
- Uneven floors
- Paint defects
- Cabinet alignment issues
- Minor cracks (<2mm)
- Grout problems

**Priority 3 (Monitor & Report if Worsens):**
- Hairline cracks
- Minor scratches
- Color inconsistencies
- Small gaps

**Documentation Best Practices:**

1. **Photos:**
   - Take wide shots + close-ups
   - Include reference (tape measure, coin)
   - Mark defect location with tape
   - Minimum 3 photos per defect

2. **Notes:**
   - Location (room, wall, exact spot)
   - Size/extent of defect
   - Date and time discovered
   - Any associated issues

3. **Video:**
   - Walk-through recording
   - Narrate what you're checking
   - Show water flow/drainage

**Reporting Defects:**

**Method 1: MyHDBPage (Recommended)**
- Log in to MyHDBPage
- Submit defects with photos
- Get acknowledgment within 3 days
- Track repair status online

**Method 2: HDB Branch**
- Visit nearest HDB branch
- Submit defects report form
- Bring photos and documentation
- Get receipt for submission

**Timeline for Repairs:**
- Minor defects: 1-4 weeks
- Major defects: 4-8 weeks
- Structural issues: 8-12 weeks (may involve PE)

**What HDB Will Fix (Warranty Period):**

✓ Structural defects
✓ Water seepage from common areas
✓ Defective electrical works (main system)
✓ Faulty built-in fixtures
✓ Floor/tile defects (if reported early)

**What HDB Won't Fix:**

✗ Damage from renovation works
✗ Normal wear and tear
✗ Modifications you made
✗ Cosmetic issues (minor scratches)
✗ Issues reported after 3 months (unless structural)

**Pro Tips:**

1. **Hire Professional Inspector:** S$200-400 for detailed check
   - Worth it for peace of mind
   - They catch what you might miss
   - Professional documentation

2. **Do Joint Inspection:** With neighbor to compare
   - Similar defects may indicate building issue
   - Stronger case for rectification
   - Share inspection costs

3. **Check Before Renovation:** Crucial timing
   - Once you renovate, hard to determine original defects
   - Some defects only visible on bare walls
   - HDB won't accept claims if already renovated

4. **Keep Records:** Essential for warranty claims
   - All photos and documentation
   - HDB correspondence
   - Repair dates and outcomes

**Defects vs. Normal Variations:**

**Normal (Not Defects):**
- Very minor color variations (within tolerance)
- Small settling cracks (<0.5mm)
- Slight unevenness (within +/-3mm per 2m)

**Actual Defects (Must Report):**
- Functional issues (leaks, doors, electrical)
- Significant cracks (>2mm)
- Hollow tiles (delamination)
- Water seepage

**After Inspection Action Plan:**

Week 1: Complete inspection + report defects
Week 2-3: HDB acknowledges + schedules repair
Week 4-8: Repairs completed
Week 9: Verify all repairs done
Week 10+: Start renovation

**Budget Impact:**
- Professional inspection: S$200-400 (optional)
- Early detection saves: S$1,000-5,000 in disputes
- Rectification by HDB: Free (within warranty)`,
    category: "timeline-process",
    keywords: [
      "BTO defects inspection",
      "HDB defects checklist",
      "BTO inspection what to check",
      "new HDB flat inspection",
      "BTO key collection inspection",
    ],
    lastUpdated: "2025-09-26",
    featured: true,
    priority: 20,
    timeEstimate: "2-3 hours for thorough inspection",
    warningNote:
      "Report all defects within 3 months of key collection. After renovation starts, it's nearly impossible to prove defects were pre-existing.",
  },

  // ==========================================
  // More questions to be added by Claude Code as needed
  // Use the template at the top of this file
  // ==========================================
]

// Export functions for easy management
export function getQuestionsByCategory(category: string): QAItem[] {
  return questions.filter((q) => q.category === category)
}

export function getFeaturedQuestions(): QAItem[] {
  return questions
    .filter((q) => q.featured)
    .sort((a, b) => (a.priority || 100) - (b.priority || 100))
}

export function searchQuestions(query: string): QAItem[] {
  const lowerQuery = query.toLowerCase()
  return questions.filter(
    (q) =>
      q.question.toLowerCase().includes(lowerQuery) ||
      q.shortAnswer.toLowerCase().includes(lowerQuery) ||
      q.keywords.some((k) => k.toLowerCase().includes(lowerQuery))
  )
}

export function getRelatedQuestions(questionId: string): QAItem[] {
  const question = questions.find((q) => q.id === questionId)
  if (!question || !question.relatedQuestions) return []

  return question.relatedQuestions
    .map((id) => questions.find((q) => q.id === id))
    .filter((q): q is QAItem => q !== undefined)
}

// Validation for development
export function validateAllQuestions(): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  const ids = new Set<string>()

  questions.forEach((q, index) => {
    if (ids.has(q.id)) {
      errors.push(`Duplicate ID at index ${index}: ${q.id}`)
    }
    ids.add(q.id)

    if (!q.question) errors.push(`Missing question at index ${index}`)
    if (!q.shortAnswer) errors.push(`Missing short answer at index ${index}`)
    if (!q.detailedAnswer) errors.push(`Missing detailed answer at index ${index}`)
    if (!q.category) errors.push(`Missing category at index ${index}`)
    if (!q.keywords || q.keywords.length === 0) {
      errors.push(`Missing keywords at index ${index}`)
    }
  })

  return {
    valid: errors.length === 0,
    errors,
  }
}

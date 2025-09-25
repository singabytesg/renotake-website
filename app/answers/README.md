# Quick Answers Q&A Management Guide

## For Claude Code: How to Add/Edit Q&As

### Quick Add - Single Q&A

To add a new question, edit `/app/answers/_data/questions.ts`:

```typescript
// Add to the questions array:
{
  id: "unique-id-here",
  question: "Your question here?",
  shortAnswer: "Quick 1-2 sentence answer (under 150 chars).",
  detailedAnswer: `Comprehensive multi-paragraph answer...`,
  category: "renovation-costs", // Choose from available categories
  keywords: ["keyword1", "keyword2", "Singapore specific"],
  lastUpdated: "2024-12-26",
  priority: 100, // Lower number = higher priority
  featured: true, // Optional: show in featured section
},
```

### Quick Add - Using Generator

Use the generator in `/app/answers/_data/qa-generator.ts`:

```typescript
import { generateQA, validateQA, formatQAForFile } from "./_data/qa-generator"

// Generate a cost-related Q&A
const newQA = generateQA("cost", {
  ITEM: "bathroom renovation",
  MIN: "5000",
  MAX: "15000",
  MID: "8000",
  FACTORS: "size and material quality",
  // ... fill in other placeholders
})

// Validate
const validation = validateQA(newQA)
console.log(validation.errors) // Fix any errors
console.log(validation.warnings) // Consider warnings

// Format for file
const formatted = formatQAForFile(newQA)
// Copy and paste into questions.ts
```

### Categories Available

- `hdb-bto-rules` - HDB/BTO regulations and requirements
- `renovation-costs` - Pricing and budget questions
- `contractor-id` - Contractor and ID related
- `materials-finishes` - Materials selection
- `timeline-process` - Duration and scheduling
- `common-problems` - Issues and solutions
- `permits-legal` - Permits and legal requirements
- `design-planning` - Design and layout questions

### SEO Best Practices

1. **Keywords**: Include 3-5 keywords minimum
   - Always include "Singapore", "HDB", or "BTO"
   - Use current year (2024/2025)
   - Include location names when relevant

2. **Question Format**: Natural language as users would search
   - "Can I..." / "How much..." / "How long..." / "What if..."

3. **Answer Length**:
   - Short: 50-150 characters
   - Detailed: 500+ characters with formatting

4. **Structure Detailed Answers**:

   ```markdown
   **Section Headers:**

   - Bullet points for lists
   - Clear yes/no for rules

   **Costs:** Always use S$ format
   **Timeline:** Be specific (days/weeks)
   **Sources:** Link to HDB/BCA when citing rules
   ```

### Batch Operations

To add multiple Q&As at once:

```typescript
// In qa-generator.ts
const batchQAs = generateBatchQAs([
  {
    type: "cost",
    replacements: {
      ITEM: "vinyl flooring",
      MIN: "3",
      MAX: "8",
      // ... all replacements
    },
  },
  {
    type: "hdbRules",
    replacements: {
      ACTION: "install air conditioning",
      // ... all replacements
    },
  },
])

// Validate all
batchQAs.forEach((qa) => {
  const validation = validateQA(qa)
  if (validation.isValid) {
    console.log(formatQAForFile(qa))
  }
})
```

### Update Existing Q&As

1. Find the Q&A in `questions.ts` by ID
2. Update the fields needed
3. **Always update `lastUpdated` field**
4. Run validation to ensure quality

### Testing Your Changes

After adding Q&As:

1. Check the page loads: `npm run dev` → visit `/answers`
2. Test search works with your keywords
3. Verify category filtering
4. Check FAQ schema in browser dev tools

### Common Templates

#### Cost Question

```typescript
{
  id: "cost-[item-name]",
  question: "How much does [item] cost in Singapore?",
  shortAnswer: "[Item] costs S$X-Y in Singapore for typical HDB renovation.",
  detailedAnswer: `[Comprehensive breakdown with factors, options, tips]`,
  category: "renovation-costs",
  keywords: ["[item] cost Singapore", "[item] price HDB"],
  costRange: { min: X, max: Y, unit: "S$" },
  lastUpdated: "2024-12-26",
  priority: 100
}
```

#### HDB Rule Question

```typescript
{
  id: "hdb-rule-[topic]",
  question: "Can I [action] in my HDB flat?",
  shortAnswer: "Yes/No, you can/cannot [action]. [Key requirement].",
  detailedAnswer: `[Official rules, requirements, penalties]`,
  category: "hdb-bto-rules",
  keywords: ["HDB [action]", "[action] allowed HDB"],
  sources: ["https://www.hdb.gov.sg/..."],
  warningNote: "[Important warning if applicable]",
  lastUpdated: "2024-12-26",
  priority: 100
}
```

### Priority Guidelines

- 1-20: Critical/most searched questions
- 21-50: Common important questions
- 51-100: Standard questions
- 101+: Less common/niche questions

### Featured Questions

Set `featured: true` for questions that should appear in the "Most Popular" section. Limit to 6-10 total.

### Related Questions

Link related Q&As by adding their IDs:

```typescript
relatedQuestions: ["id-1", "id-2", "id-3"]
```

### Quick Commands for Claude Code

```bash
# Find all cost questions
grep "category: \"renovation-costs\"" questions.ts

# Count total questions
grep -c "id:" questions.ts

# Find questions missing keywords
grep -B1 "keywords: \[\]" questions.ts

# Check for duplicate IDs
grep "id:" questions.ts | sort | uniq -d
```

## File Structure

```
/app/answers/
├── _data/
│   ├── types.ts         # TypeScript types
│   ├── questions.ts     # Main Q&A database
│   └── qa-generator.ts  # Helper utilities
├── page.tsx            # Main answers page
├── layout.tsx          # SEO metadata
└── README.md          # This file
```

## Important Notes

1. **Always validate** before committing changes
2. **Test search** with your new keywords
3. **Check mobile view** - answers should be readable
4. **Update lastUpdated** when editing existing Q&As
5. **Use Singapore context** - prices in S$, mention HDB/BTO
6. **Be specific** - actual numbers, timeframes, costs

## Need Help?

- Check existing Q&As for examples
- Use the generator for consistent format
- Validate to catch common errors
- Test on development server before deploying

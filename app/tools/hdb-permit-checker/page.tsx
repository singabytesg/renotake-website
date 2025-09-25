"use client"

import { useState, useEffect } from "react"
import { generateSEOMetadata } from "@/components/seo-metadata"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Download,
  Printer,
  Save,
  RefreshCw,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Define types for permit requirements
type RequirementStatus = "yes" | "no" | "prohibited" | "unchecked"
type WorkCategory =
  | "walls"
  | "floors"
  | "bathroom"
  | "windows"
  | "doors"
  | "electrical"
  | "plumbing"
  | "external"

interface PermitRequirement {
  id: string
  category: WorkCategory
  task: string
  permitRequired: RequirementStatus
  guidelines: string
  specialistRequired?: string
  warningNote?: string
  btoRestriction?: boolean
  processingTime?: string
}

// Comprehensive permit requirements data based on HDB regulations
const permitRequirements: PermitRequirement[] = [
  // Walls Category
  {
    id: "wall-1",
    category: "walls",
    task: "Hacking/demolishing non-load bearing walls",
    permitRequired: "yes",
    guidelines: "Must be evaluated by HDB. Demolition must not take more than 3 consecutive days.",
    specialistRequired: "QP/PE may be required for complex cases",
    processingTime: "Up to 3 weeks",
  },
  {
    id: "wall-2",
    category: "walls",
    task: "Hacking structural (RC) walls, beams, columns",
    permitRequired: "prohibited",
    guidelines: "Strictly forbidden under any circumstances. This is a serious safety violation.",
    warningNote: "Can result in fines up to S$5,000 and mandatory reinstatement",
  },
  {
    id: "wall-3",
    category: "walls",
    task: "Creating new openings or arches in walls",
    permitRequired: "yes",
    guidelines: "Requires structural assessment to ensure building integrity",
    processingTime: "Up to 3 weeks",
  },
  {
    id: "wall-4",
    category: "walls",
    task: "Plastering walls without hacking",
    permitRequired: "no",
    guidelines: "Total thickness of plaster and finishes must not exceed 25mm",
  },
  {
    id: "wall-5",
    category: "walls",
    task: "Replacing wall tiles (with hacking)",
    permitRequired: "yes",
    guidelines: "Required when removing existing tiles. Total thickness must not exceed 25mm",
    processingTime: "1-2 weeks",
  },
  // Floors Category
  {
    id: "floor-1",
    category: "floors",
    task: "Hacking and replacing floor tiles/finishes",
    permitRequired: "yes",
    guidelines:
      "Total thickness of screed and finishes must not exceed 50mm. Use pre-packed screed only.",
    processingTime: "1-2 weeks",
  },
  {
    id: "floor-2",
    category: "floors",
    task: "Installing overlay flooring (vinyl/laminate) over existing",
    permitRequired: "no",
    guidelines: "Permitted as it doesn't involve hacking or significant load increase",
  },
  {
    id: "floor-3",
    category: "floors",
    task: "Raising floor level in kitchen/bathroom/balcony",
    permitRequired: "yes",
    guidelines: "Must not cause excessive loading on floor slab (max 150kg/sqm)",
    warningNote: "Critical for waterproofing integrity",
    processingTime: "2-3 weeks",
  },
  {
    id: "floor-4",
    category: "floors",
    task: "Excessive floor loading (>150kg/sqm)",
    permitRequired: "prohibited",
    guidelines: "Any renovation resulting in overloading is strictly prohibited",
    warningNote: "Structural safety risk",
  },
  // Bathroom Category
  {
    id: "bath-1",
    category: "bathroom",
    task: "Hacking bathroom tiles in BTO (within 3 years)",
    permitRequired: "prohibited",
    guidelines: "Forbidden to protect waterproofing membrane warranty",
    btoRestriction: true,
    warningNote: "3-year moratorium from block completion date",
  },
  {
    id: "bath-2",
    category: "bathroom",
    task: "Hacking bathroom tiles in BTO (after 3 years)",
    permitRequired: "yes",
    guidelines: "Must engage PUB Licensed Plumber. New waterproofing must be applied.",
    specialistRequired: "PUB Licensed Plumber",
    btoRestriction: true,
    processingTime: "2-3 weeks",
  },
  {
    id: "bath-3",
    category: "bathroom",
    task: "Repositioning toilet bowl/sink",
    permitRequired: "yes",
    guidelines: "Requires PUB Licensed Plumber for all sanitary works",
    specialistRequired: "PUB Licensed Plumber",
    processingTime: "2-3 weeks",
  },
  {
    id: "bath-4",
    category: "bathroom",
    task: "Extending bathroom area",
    permitRequired: "yes",
    guidelines: "Max extension 600mm width and 0.6sqm area. Must remain 'dry area'",
    specialistRequired: "PUB Licensed Plumber",
    warningNote: "Strict size limitations",
    processingTime: "3 weeks",
  },
  {
    id: "bath-5",
    category: "bathroom",
    task: "Replacing fixtures (taps/showerheads) only",
    permitRequired: "no",
    guidelines: "Direct replacement without pipe relocation doesn't need permit",
  },
  // Windows Category
  {
    id: "win-1",
    category: "windows",
    task: "Installing or replacing any windows",
    permitRequired: "yes",
    guidelines:
      "Design, colour, type must match HDB's approved scheme. BCA-approved contractor required.",
    specialistRequired: "BCA-Approved Window Contractor",
    processingTime: "2-3 weeks",
  },
  {
    id: "win-2",
    category: "windows",
    task: "Installing window grilles",
    permitRequired: "yes",
    guidelines: "Must follow HDB's approved grille design for your block",
    specialistRequired: "BCA-Approved Window Contractor",
    processingTime: "1-2 weeks",
  },
  {
    id: "win-3",
    category: "windows",
    task: "Changing to full-height windows",
    permitRequired: "prohibited",
    guidelines: "Not allowed to maintain building facade uniformity and safety",
    warningNote: "Violation of building regulations",
  },
  // Doors Category
  {
    id: "door-1",
    category: "doors",
    task: "Relocating internal doors",
    permitRequired: "yes",
    guidelines: "Involves wall hacking, requires HDB structural evaluation",
    processingTime: "2-3 weeks",
  },
  {
    id: "door-2",
    category: "doors",
    task: "Replacing main door (fire escape route)",
    permitRequired: "yes",
    guidelines: "Must be half-hour fire-rated door with door closer",
    warningNote: "Critical fire safety requirement",
    processingTime: "1-2 weeks",
  },
  {
    id: "door-3",
    category: "doors",
    task: "Replacing main door (not on fire escape route)",
    permitRequired: "no",
    guidelines: "No permit needed if no structural alteration",
  },
  {
    id: "door-4",
    category: "doors",
    task: "Replacing bedroom doors",
    permitRequired: "no",
    guidelines: "Direct replacement without structural changes allowed",
  },
  // Electrical Category
  {
    id: "elec-1",
    category: "electrical",
    task: "Installing air-con (resale flat with 30A switch)",
    permitRequired: "yes",
    guidelines: "Required for new 15A points or 20A isolators to prevent overload",
    specialistRequired: "Licensed Electrical Worker (LEW)",
    processingTime: "1-2 weeks",
  },
  {
    id: "elec-2",
    category: "electrical",
    task: "Installing air-con on BTO designated ledge",
    permitRequired: "no",
    guidelines: "BTO flats are pre-designed for this load",
    btoRestriction: true,
  },
  {
    id: "elec-3",
    category: "electrical",
    task: "Replacing light fixtures",
    permitRequired: "no",
    guidelines: "Direct replacement without rewiring allowed",
  },
  {
    id: "elec-4",
    category: "electrical",
    task: "Major electrical rewiring",
    permitRequired: "yes",
    guidelines: "Must be done by Licensed Electrical Worker",
    specialistRequired: "Licensed Electrical Worker (LEW)",
    processingTime: "2-3 weeks",
  },
  // Plumbing Category
  {
    id: "plumb-1",
    category: "plumbing",
    task: "Relocating water pipes",
    permitRequired: "yes",
    guidelines: "Must engage PUB Licensed Plumber",
    specialistRequired: "PUB Licensed Plumber",
    processingTime: "2-3 weeks",
  },
  {
    id: "plumb-2",
    category: "plumbing",
    task: "Relocating gas pipes",
    permitRequired: "yes",
    guidelines: "Must engage EMA Licensed Gas Service Worker",
    specialistRequired: "EMA Licensed Gas Service Worker",
    warningNote: "Safety critical work",
    processingTime: "2-3 weeks",
  },
  {
    id: "plumb-3",
    category: "plumbing",
    task: "Installing new gas appliances",
    permitRequired: "yes",
    guidelines: "Requires EMA Licensed Gas Service Worker",
    specialistRequired: "EMA Licensed Gas Service Worker",
    processingTime: "1-2 weeks",
  },
  // External Category
  {
    id: "ext-1",
    category: "external",
    task: "Installing external air-con compressor",
    permitRequired: "yes",
    guidelines: "If projecting from building, needs installation report approval",
    processingTime: "1-2 weeks",
  },
  {
    id: "ext-2",
    category: "external",
    task: "Enclosing balcony",
    permitRequired: "yes",
    guidelines: "Requires PE submission to SCDF for fire clearance before HDB approval",
    specialistRequired: "Professional Engineer (PE)",
    warningNote: "Complex approval process",
    processingTime: "4-6 weeks",
  },
  {
    id: "ext-3",
    category: "external",
    task: "Plastering ceiling",
    permitRequired: "prohibited",
    guidelines: "Application of plaster or skim coat to ceilings not allowed",
    warningNote: "Safety and structural concern",
  },
  {
    id: "ext-4",
    category: "external",
    task: "Installing built-in cabinets/wardrobes",
    permitRequired: "no",
    guidelines: "Permitted as long as no structural changes are made",
  },
  {
    id: "ext-5",
    category: "external",
    task: "Interior painting",
    permitRequired: "no",
    guidelines: "No permit required for painting internal walls",
  },
]

// Category display names and descriptions
const categories = {
  walls: {
    name: "Walls & Partitions",
    icon: "🏗️",
    description: "Hacking, demolition, and wall modifications",
  },
  floors: {
    name: "Flooring",
    icon: "🏠",
    description: "Floor finishes, overlays, and leveling",
  },
  bathroom: {
    name: "Bathroom & Toilet",
    icon: "🚿",
    description: "Wet area renovations and plumbing",
  },
  windows: {
    name: "Windows & Grilles",
    icon: "🪟",
    description: "Window replacement and grille installation",
  },
  doors: {
    name: "Doors",
    icon: "🚪",
    description: "Door replacement and relocation",
  },
  electrical: {
    name: "Electrical & Air-Con",
    icon: "⚡",
    description: "Electrical works and air-conditioning",
  },
  plumbing: {
    name: "Plumbing & Gas",
    icon: "🔧",
    description: "Water and gas pipe works",
  },
  external: {
    name: "External & Others",
    icon: "🏢",
    description: "Balcony, ceiling, and built-ins",
  },
}

export default function HDBPermitChecker() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("walls")
  const [flatType, setFlatType] = useState<"bto" | "resale">("resale")
  const [btoAge, setBtoAge] = useState<number>(0)
  const [showResults, setShowResults] = useState(false)

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("hdb-permit-checker")
    if (saved) {
      try {
        const data = JSON.parse(saved)
        setCheckedItems(new Set(data.checkedItems))
        setFlatType(data.flatType || "resale")
        setBtoAge(data.btoAge || 0)
      } catch (e) {
        console.error("Error loading saved data:", e)
      }
    }
  }, [])

  // Save progress to localStorage
  const saveProgress = () => {
    const data = {
      checkedItems: Array.from(checkedItems),
      flatType,
      btoAge,
      savedDate: new Date().toISOString(),
    }
    localStorage.setItem("hdb-permit-checker", JSON.stringify(data))
  }

  // Calculate progress
  const totalItems = permitRequirements.length
  const checkedCount = checkedItems.size
  const progress = (checkedCount / totalItems) * 100

  // Toggle item check
  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setCheckedItems(newChecked)
  }

  // Reset all selections
  const resetAll = () => {
    setCheckedItems(new Set())
    setShowResults(false)
    localStorage.removeItem("hdb-permit-checker")
  }

  // Get filtered requirements based on category and flat type
  const getFilteredRequirements = (category: WorkCategory) => {
    return permitRequirements.filter((req) => {
      if (req.category !== category) return false

      // Filter BTO-specific restrictions
      if (flatType === "bto" && req.btoRestriction) {
        if (req.task.includes("within 3 years") && btoAge >= 3) return false
        if (req.task.includes("after 3 years") && btoAge < 3) return false
      }

      return true
    })
  }

  // Generate summary report
  const generateSummary = () => {
    const checked = permitRequirements.filter((req) => checkedItems.has(req.id))
    const requiresPermit = checked.filter((req) => req.permitRequired === "yes")
    const prohibited = checked.filter((req) => req.permitRequired === "prohibited")
    const noPermit = checked.filter((req) => req.permitRequired === "no")
    const specialists = new Set(
      checked.filter((req) => req.specialistRequired).map((req) => req.specialistRequired)
    )

    return {
      total: checked.length,
      requiresPermit: requiresPermit.length,
      prohibited: prohibited.length,
      noPermit: noPermit.length,
      specialists: Array.from(specialists),
      permitItems: requiresPermit,
      prohibitedItems: prohibited,
      estimatedTime: requiresPermit.length > 0 ? "3-4 weeks" : "No permit needed",
    }
  }

  // Print functionality
  const handlePrint = () => {
    window.print()
  }

  // Export to PDF-friendly format
  const handleExport = () => {
    const summary = generateSummary()
    const reportContent = `
HDB RENOVATION PERMIT CHECKLIST REPORT
Generated: ${new Date().toLocaleDateString("en-SG")}
Property Type: ${flatType.toUpperCase()} ${flatType === "bto" ? `(${btoAge} years old)` : ""}

SUMMARY
========
Total Items Selected: ${summary.total}
Items Requiring Permit: ${summary.requiresPermit}
Prohibited Items: ${summary.prohibited}
No Permit Required: ${summary.noPermit}

ITEMS REQUIRING HDB PERMIT
==========================
${summary.permitItems
  .map(
    (item) => `
- ${item.task}
  Category: ${categories[item.category].name}
  Guidelines: ${item.guidelines}
  ${item.specialistRequired ? `Specialist Required: ${item.specialistRequired}` : ""}
  Processing Time: ${item.processingTime || "Up to 3 weeks"}
`
  )
  .join("")}

${
  summary.prohibited > 0
    ? `
PROHIBITED WORKS (WARNING!)
===========================
${summary.prohibitedItems
  .map(
    (item) => `
- ${item.task}
  Warning: ${item.warningNote}
`
  )
  .join("")}
`
    : ""
}

SPECIALISTS REQUIRED
====================
${summary.specialists.length > 0 ? summary.specialists.join("\n") : "None"}

ESTIMATED PERMIT PROCESSING TIME: ${summary.estimatedTime}

IMPORTANT REMINDERS
==================
1. All renovation works must be done by HDB-registered contractors
2. Submit permit application at least 3 weeks before planned start date
3. BTO flats have 3-year restriction on bathroom/toilet hacking
4. Keep all permit documents for future resale
5. Noisy works only allowed 9am-5pm on weekdays

For more information: https://renotake.sg
`

    // Create a blob and download
    const blob = new Blob([reportContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `hdb-permit-checklist-${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const summary = showResults ? generateSummary() : null

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          HDB Renovation Permit Checker 2024
        </h1>
        <p className="text-lg text-muted-foreground">
          Check which renovation works require HDB permits. Save time and avoid S$5,000 fines by
          understanding permit requirements before starting your renovation.
        </p>
      </div>

      {/* Property Type Selection */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your HDB Flat Details</CardTitle>
          <CardDescription>
            Select your flat type to get accurate permit requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Flat Type</label>
              <div className="flex gap-2">
                <Button
                  variant={flatType === "bto" ? "default" : "outline"}
                  onClick={() => setFlatType("bto")}
                  className="flex-1"
                >
                  BTO Flat
                </Button>
                <Button
                  variant={flatType === "resale" ? "default" : "outline"}
                  onClick={() => setFlatType("resale")}
                  className="flex-1"
                >
                  Resale Flat
                </Button>
              </div>
            </div>
            {flatType === "bto" && (
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Years Since Block Completion
                </label>
                <select
                  value={btoAge}
                  onChange={(e) => setBtoAge(Number(e.target.value))}
                  className="w-full rounded-md border px-3 py-2"
                >
                  <option value={0}>Less than 1 year</option>
                  <option value={1}>1 year</option>
                  <option value={2}>2 years</option>
                  <option value={3}>3 years</option>
                  <option value={4}>More than 3 years</option>
                </select>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Progress Bar */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">Checklist Progress</span>
            <span className="text-sm text-muted-foreground">
              {checkedCount} of {totalItems} items reviewed
            </span>
          </div>
          <Progress value={progress} className="mb-4" />
          <div className="flex flex-wrap gap-2">
            <Button onClick={saveProgress} size="sm" variant="outline">
              <Save className="mr-2 h-4 w-4" />
              Save Progress
            </Button>
            <Button onClick={resetAll} size="sm" variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset All
            </Button>
            <Button onClick={handlePrint} size="sm" variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button onClick={handleExport} size="sm" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            {checkedCount > 0 && (
              <Button onClick={() => setShowResults(!showResults)} size="sm" variant="default">
                {showResults ? "Hide" : "Show"} Summary
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      {showResults && summary && (
        <Card className="mb-6 border-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Your Permit Requirements Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-green-50 p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{summary.requiresPermit}</div>
                <div className="text-sm text-muted-foreground">Require HDB Permit</div>
              </div>
              <div className="rounded-lg bg-red-50 p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{summary.prohibited}</div>
                <div className="text-sm text-muted-foreground">Prohibited Works</div>
              </div>
              <div className="rounded-lg bg-blue-50 p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{summary.noPermit}</div>
                <div className="text-sm text-muted-foreground">No Permit Needed</div>
              </div>
            </div>

            {summary.prohibited > 0 && (
              <Alert className="mb-4 border-red-200 bg-red-50">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Warning:</strong> You have selected {summary.prohibited} prohibited work
                  {summary.prohibited > 1 ? "s" : ""}. These are strictly forbidden and can result
                  in fines up to S$5,000 and mandatory reinstatement.
                </AlertDescription>
              </Alert>
            )}

            {summary.specialists.length > 0 && (
              <div className="mb-4">
                <h4 className="mb-2 font-medium">Specialists Required:</h4>
                <div className="flex flex-wrap gap-2">
                  {summary.specialists.map((specialist) => (
                    <Badge key={specialist} variant="secondary">
                      {specialist}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="text-sm text-muted-foreground">
              <Info className="mr-1 inline-block h-4 w-4" />
              Estimated permit processing time: <strong>{summary.estimatedTime}</strong>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Renovation Works Checklist</CardTitle>
          <CardDescription>
            Select all renovation works you plan to do. We'll tell you which need permits.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as WorkCategory)}>
            <TabsList className="mb-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
              {Object.entries(categories).map(([key, cat]) => (
                <TabsTrigger key={key} value={key} className="text-xs">
                  <span className="hidden md:inline">{cat.icon}</span>
                  <span className="md:ml-1">{cat.name.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(categories).map(([key, cat]) => (
              <TabsContent key={key} value={key}>
                <div className="space-y-3">
                  <div className="mb-4 rounded-lg bg-muted p-3">
                    <div className="flex items-center gap-2 font-medium">
                      <span className="text-2xl">{cat.icon}</span>
                      <span>{cat.name}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                  </div>

                  {getFilteredRequirements(key as WorkCategory).map((req) => (
                    <div
                      key={req.id}
                      className={cn(
                        "rounded-lg border p-4 transition-colors",
                        checkedItems.has(req.id) ? "border-primary/20 bg-primary/5" : ""
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={checkedItems.has(req.id)}
                          onCheckedChange={() => toggleItem(req.id)}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="mb-2 flex items-start justify-between">
                            <label
                              htmlFor={req.id}
                              className="cursor-pointer font-medium"
                              onClick={() => toggleItem(req.id)}
                            >
                              {req.task}
                            </label>
                            <div className="flex gap-1">
                              {req.permitRequired === "yes" && (
                                <Badge variant="default" className="bg-blue-500">
                                  Permit Required
                                </Badge>
                              )}
                              {req.permitRequired === "no" && (
                                <Badge variant="secondary" className="bg-green-100 text-green-800">
                                  No Permit
                                </Badge>
                              )}
                              {req.permitRequired === "prohibited" && (
                                <Badge variant="destructive">Prohibited</Badge>
                              )}
                            </div>
                          </div>

                          <p className="mb-2 text-sm text-muted-foreground">{req.guidelines}</p>

                          <div className="flex flex-wrap gap-2 text-xs">
                            {req.specialistRequired && (
                              <div className="flex items-center gap-1 text-blue-600">
                                <AlertCircle className="h-3 w-3" />
                                <span>Requires: {req.specialistRequired}</span>
                              </div>
                            )}
                            {req.processingTime && (
                              <div className="text-muted-foreground">
                                Processing: {req.processingTime}
                              </div>
                            )}
                            {req.btoRestriction && (
                              <Badge variant="outline" className="text-xs">
                                BTO Specific
                              </Badge>
                            )}
                          </div>

                          {req.warningNote && (
                            <Alert className="mt-2 px-3 py-2">
                              <AlertDescription className="text-xs">
                                ⚠️ {req.warningNote}
                              </AlertDescription>
                            </Alert>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Important Reminders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                All renovation works must be carried out by HDB-registered contractors from the
                Directory of Renovation Contractors (DRC).
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Submit permit applications at least 3 weeks before your planned renovation start
                date.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Noisy works (hacking, drilling) are only allowed 9am-5pm on weekdays. No work on
                Sundays and public holidays.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <Card className="mt-6 border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-semibold">Need More Help with Your HDB Renovation?</h3>
            <p className="mb-4 text-muted-foreground">
              Get our complete HDB renovation guide with cost breakdowns, contractor tips, and
              timeline planning.
            </p>
            <Button size="lg">Download Free HDB Renovation Guide</Button>
          </div>
        </CardContent>
      </Card>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            font-size: 12pt;
          }
          .print-break {
            page-break-after: always;
          }
        }
      `}</style>
    </div>
  )
}

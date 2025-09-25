"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  TrendingUp,
  TrendingDown,
  Info,
  DollarSign,
  Clock,
  Shield,
  Droplets,
  Flame,
  Wrench,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Download,
  Calculator,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Material categories
type MaterialCategory = "flooring" | "countertops" | "siding" | "paint"

// Material interface
interface Material {
  id: string
  category: MaterialCategory
  name: string
  type: "budget" | "mid-range" | "premium"
  priceRange: {
    min: number
    max: number
    unit: "sq ft" | "linear ft" | "gallon"
  }
  installationCost: {
    min: number
    max: number
  }
  lifespan: number // in years
  durability: number // 1-5 rating
  waterResistance: number // 1-5 rating
  heatResistance?: number // 1-5 rating (for countertops)
  fireResistance?: number // 1-5 rating (for siding)
  maintenance: {
    level: "low" | "medium" | "high"
    frequency: string
    annualCost: number
  }
  pros: string[]
  cons: string[]
  bestFor: string[]
  suppliers: string[]
  popularBrands: string[]
}

// Comprehensive materials database based on 2025 market analysis
const materialsDatabase: Material[] = [
  // FLOORING MATERIALS
  {
    id: "solid-hardwood",
    category: "flooring",
    name: "Solid Hardwood",
    type: "premium",
    priceRange: { min: 6, max: 25, unit: "sq ft" },
    installationCost: { min: 3, max: 10 },
    lifespan: 100,
    durability: 3,
    waterResistance: 1,
    maintenance: {
      level: "medium",
      frequency: "Refinish every 7-10 years",
      annualCost: 150,
    },
    pros: [
      "Can be refinished multiple times",
      "Increases home value",
      "Classic aesthetic",
      "100+ year lifespan",
    ],
    cons: ["Susceptible to moisture damage", "Can scratch and dent", "Not suitable for basements"],
    bestFor: ["Living rooms", "Bedrooms", "Dining rooms"],
    suppliers: ["Floor & Decor", "Lumber Liquidators", "Home Depot"],
    popularBrands: ["Bruce", "Anderson Tuftex", "Mohawk"],
  },
  {
    id: "engineered-wood",
    category: "flooring",
    name: "Engineered Wood",
    type: "mid-range",
    priceRange: { min: 7, max: 20, unit: "sq ft" },
    installationCost: { min: 3, max: 8 },
    lifespan: 30,
    durability: 3,
    waterResistance: 2,
    maintenance: {
      level: "low",
      frequency: "Limited refinishing (1-2 times)",
      annualCost: 100,
    },
    pros: [
      "More stable than solid wood",
      "Better moisture resistance",
      "Can be installed in basements",
    ],
    cons: [
      "Limited refinishing capability",
      "Thin veneer can be damaged",
      "Shorter lifespan than solid",
    ],
    bestFor: ["Kitchens", "Basements", "Any room"],
    suppliers: ["Floor & Decor", "BuildDirect", "Wayfair"],
    popularBrands: ["Shaw", "Armstrong", "Pergo"],
  },
  {
    id: "luxury-vinyl",
    category: "flooring",
    name: "Luxury Vinyl Tile/Plank (LVT/LVP)",
    type: "mid-range",
    priceRange: { min: 4, max: 16, unit: "sq ft" },
    installationCost: { min: 1.5, max: 6 },
    lifespan: 20,
    durability: 4,
    waterResistance: 5,
    maintenance: {
      level: "low",
      frequency: "Regular cleaning only",
      annualCost: 50,
    },
    pros: [
      "100% waterproof",
      "Scratch resistant",
      "Easy installation",
      "Realistic wood/stone look",
    ],
    cons: ["Cannot be refinished", "Can dent under heavy weight", "May fade in direct sunlight"],
    bestFor: ["Bathrooms", "Kitchens", "Basements", "High-traffic areas"],
    suppliers: ["Floor & Decor", "Home Depot", "Lowes"],
    popularBrands: ["COREtec", "Karndean", "Armstrong"],
  },
  {
    id: "laminate",
    category: "flooring",
    name: "Laminate",
    type: "budget",
    priceRange: { min: 3, max: 13, unit: "sq ft" },
    installationCost: { min: 2, max: 8 },
    lifespan: 15,
    durability: 3,
    waterResistance: 2,
    maintenance: {
      level: "low",
      frequency: "Regular cleaning only",
      annualCost: 30,
    },
    pros: [
      "Very affordable",
      "Scratch resistant",
      "Easy DIY installation",
      "Wide variety of styles",
    ],
    cons: [
      "Not waterproof",
      "Cannot be refinished",
      "Can sound hollow",
      "Visible damage cannot be repaired",
    ],
    bestFor: ["Bedrooms", "Living rooms", "Hallways"],
    suppliers: ["Home Depot", "Lowes", "Costco"],
    popularBrands: ["Pergo", "Quick-Step", "Mannington"],
  },
  {
    id: "porcelain-tile",
    category: "flooring",
    name: "Porcelain Tile",
    type: "premium",
    priceRange: { min: 15, max: 50, unit: "sq ft" },
    installationCost: { min: 5, max: 15 },
    lifespan: 50,
    durability: 5,
    waterResistance: 5,
    maintenance: {
      level: "low",
      frequency: "Grout sealing every 2-3 years",
      annualCost: 75,
    },
    pros: ["Extremely durable", "Waterproof", "Heat resistant", "50+ year lifespan"],
    cons: ["Cold and hard underfoot", "Grout maintenance", "Can chip if heavy object dropped"],
    bestFor: ["Bathrooms", "Kitchens", "Entryways", "Commercial spaces"],
    suppliers: ["Floor & Decor", "Dal-Tile", "Home Depot"],
    popularBrands: ["Daltile", "American Olean", "Marazzi"],
  },
  {
    id: "bamboo",
    category: "flooring",
    name: "Bamboo",
    type: "mid-range",
    priceRange: { min: 5, max: 15, unit: "sq ft" },
    installationCost: { min: 3, max: 8 },
    lifespan: 25,
    durability: 4,
    waterResistance: 2,
    maintenance: {
      level: "low",
      frequency: "Occasional refinishing",
      annualCost: 100,
    },
    pros: ["Eco-friendly", "Harder than many hardwoods", "Unique appearance", "Renewable resource"],
    cons: ["Sensitive to humidity", "Can scratch", "Limited refinishing", "Quality varies widely"],
    bestFor: ["Living areas", "Bedrooms", "Home offices"],
    suppliers: ["BuildDirect", "Lumber Liquidators", "Wayfair"],
    popularBrands: ["Cali Bamboo", "Teragren", "Ambient"],
  },

  // COUNTERTOP MATERIALS
  {
    id: "granite",
    category: "countertops",
    name: "Granite",
    type: "mid-range",
    priceRange: { min: 45, max: 150, unit: "sq ft" },
    installationCost: { min: 10, max: 25 },
    lifespan: 100,
    durability: 5,
    waterResistance: 4,
    heatResistance: 5,
    maintenance: {
      level: "medium",
      frequency: "Annual sealing required",
      annualCost: 200,
    },
    pros: ["Heat resistant", "Scratch resistant", "Unique patterns", "Adds home value"],
    cons: ["Requires regular sealing", "Can stain if not sealed", "Can crack under impact"],
    bestFor: ["Kitchen countertops", "Bathroom vanities", "Bar tops"],
    suppliers: ["MSI Surfaces", "Dal-Tile", "Local fabricators"],
    popularBrands: ["MSI", "Coldspring", "Levantina"],
  },
  {
    id: "quartz",
    category: "countertops",
    name: "Quartz",
    type: "premium",
    priceRange: { min: 50, max: 200, unit: "sq ft" },
    installationCost: { min: 10, max: 30 },
    lifespan: 50,
    durability: 5,
    waterResistance: 5,
    heatResistance: 3,
    maintenance: {
      level: "low",
      frequency: "No sealing needed",
      annualCost: 50,
    },
    pros: ["Non-porous", "No sealing required", "Consistent patterns", "Stain resistant"],
    cons: ["Can be damaged by heat", "Visible seams", "More expensive than granite"],
    bestFor: ["Kitchen countertops", "Bathroom vanities", "Commercial kitchens"],
    suppliers: ["MSI Surfaces", "Home Depot", "Local fabricators"],
    popularBrands: ["Caesarstone", "Silestone", "Cambria"],
  },
  {
    id: "laminate-countertop",
    category: "countertops",
    name: "Laminate",
    type: "budget",
    priceRange: { min: 19, max: 45, unit: "sq ft" },
    installationCost: { min: 5, max: 15 },
    lifespan: 15,
    durability: 2,
    waterResistance: 3,
    heatResistance: 1,
    maintenance: {
      level: "low",
      frequency: "Regular cleaning only",
      annualCost: 25,
    },
    pros: ["Very affordable", "Many patterns available", "Easy to clean", "DIY-friendly"],
    cons: [
      "Can scratch and chip",
      "Not heat resistant",
      "Cannot be repaired",
      "Lower resale value",
    ],
    bestFor: ["Rental properties", "Budget renovations", "Laundry rooms"],
    suppliers: ["Home Depot", "Lowes", "IKEA"],
    popularBrands: ["Formica", "Wilsonart", "Arborite"],
  },
  {
    id: "butcher-block",
    category: "countertops",
    name: "Butcher Block (Wood)",
    type: "mid-range",
    priceRange: { min: 35, max: 200, unit: "sq ft" },
    installationCost: { min: 10, max: 25 },
    lifespan: 30,
    durability: 3,
    waterResistance: 2,
    heatResistance: 2,
    maintenance: {
      level: "high",
      frequency: "Monthly oiling, annual sanding",
      annualCost: 300,
    },
    pros: ["Warm appearance", "Can be sanded/refinished", "Good for food prep", "Eco-friendly"],
    cons: [
      "High maintenance",
      "Can stain and scratch",
      "Water damage risk",
      "Requires regular oiling",
    ],
    bestFor: ["Kitchen islands", "Baking stations", "Rustic kitchens"],
    suppliers: ["IKEA", "Lumber Liquidators", "Home Depot"],
    popularBrands: ["John Boos", "Watco", "Howard"],
  },
  {
    id: "marble",
    category: "countertops",
    name: "Marble",
    type: "premium",
    priceRange: { min: 40, max: 250, unit: "sq ft" },
    installationCost: { min: 15, max: 35 },
    lifespan: 100,
    durability: 2,
    waterResistance: 4,
    heatResistance: 4,
    maintenance: {
      level: "high",
      frequency: "Frequent sealing, careful cleaning",
      annualCost: 400,
    },
    pros: ["Luxurious appearance", "Heat resistant", "Unique veining", "Excellent for baking"],
    cons: ["Stains easily", "Etches from acids", "High maintenance", "Very expensive"],
    bestFor: ["Baking areas", "Bathroom vanities", "Statement pieces"],
    suppliers: ["MSI Surfaces", "Local stone yards", "Specialty importers"],
    popularBrands: ["Carrara", "Calacatta", "Statuario"],
  },

  // SIDING MATERIALS
  {
    id: "vinyl-siding",
    category: "siding",
    name: "Vinyl Siding",
    type: "budget",
    priceRange: { min: 3, max: 12, unit: "sq ft" },
    installationCost: { min: 2, max: 5 },
    lifespan: 30,
    durability: 3,
    waterResistance: 4,
    fireResistance: 1,
    maintenance: {
      level: "low",
      frequency: "Annual cleaning",
      annualCost: 100,
    },
    pros: ["Most affordable", "Low maintenance", "Many colors/styles", "Never needs painting"],
    cons: ["Can crack in cold", "May fade over time", "Not fire resistant", "Can look cheap"],
    bestFor: ["Budget homes", "Rental properties", "Mild climates"],
    suppliers: ["Home Depot", "Lowes", "ABC Supply"],
    popularBrands: ["CertainTeed", "Alside", "Royal"],
  },
  {
    id: "fiber-cement",
    category: "siding",
    name: "Fiber Cement",
    type: "mid-range",
    priceRange: { min: 5, max: 15, unit: "sq ft" },
    installationCost: { min: 5, max: 10 },
    lifespan: 50,
    durability: 5,
    waterResistance: 5,
    fireResistance: 5,
    maintenance: {
      level: "low",
      frequency: "Paint every 10-15 years",
      annualCost: 150,
    },
    pros: ["Fire resistant", "Termite proof", "50+ year lifespan", "Looks like wood"],
    cons: ["Heavy installation", "More expensive than vinyl", "Requires painting"],
    bestFor: ["Any climate", "Fire-prone areas", "Quality homes"],
    suppliers: ["Home Depot", "ABC Supply", "Beacon"],
    popularBrands: ["James Hardie", "Allura", "Nichiha"],
  },
  {
    id: "wood-siding",
    category: "siding",
    name: "Natural Wood",
    type: "premium",
    priceRange: { min: 6, max: 18, unit: "sq ft" },
    installationCost: { min: 4, max: 8 },
    lifespan: 30,
    durability: 3,
    waterResistance: 2,
    fireResistance: 1,
    maintenance: {
      level: "high",
      frequency: "Paint/stain every 3-5 years",
      annualCost: 500,
    },
    pros: ["Beautiful natural look", "Can be painted any color", "Eco-friendly", "Good insulation"],
    cons: ["High maintenance", "Vulnerable to pests", "Fire risk", "Can rot if not maintained"],
    bestFor: ["Historic homes", "Luxury properties", "Dry climates"],
    suppliers: ["Local lumber yards", "Russin", "84 Lumber"],
    popularBrands: ["Cedar", "Redwood", "Pine"],
  },
  {
    id: "engineered-wood-siding",
    category: "siding",
    name: "Engineered Wood",
    type: "mid-range",
    priceRange: { min: 7, max: 15, unit: "sq ft" },
    installationCost: { min: 3, max: 7 },
    lifespan: 25,
    durability: 4,
    waterResistance: 3,
    fireResistance: 2,
    maintenance: {
      level: "medium",
      frequency: "Paint every 7-10 years",
      annualCost: 200,
    },
    pros: [
      "Looks like real wood",
      "More stable than natural wood",
      "Pest resistant",
      "Lower cost than wood",
    ],
    cons: ["Can have moisture issues", "Requires painting", "Shorter lifespan than fiber cement"],
    bestFor: ["Moderate climates", "Wood look without maintenance", "Mid-range homes"],
    suppliers: ["Home Depot", "Lowes", "ProBuild"],
    popularBrands: ["LP SmartSide", "TruWood", "KWP"],
  },

  // PAINT FINISHES
  {
    id: "flat-paint",
    category: "paint",
    name: "Flat/Matte Paint",
    type: "budget",
    priceRange: { min: 20, max: 40, unit: "gallon" },
    installationCost: { min: 2, max: 4 },
    lifespan: 7,
    durability: 1,
    waterResistance: 1,
    maintenance: {
      level: "high",
      frequency: "Cannot be washed, needs repainting",
      annualCost: 200,
    },
    pros: ["Hides imperfections", "No glare", "Elegant look", "Good coverage"],
    cons: ["Cannot be cleaned", "Shows marks easily", "Not durable", "Absorbs moisture"],
    bestFor: ["Ceilings", "Low-traffic bedrooms", "Formal dining rooms"],
    suppliers: ["Home Depot", "Lowes", "Sherwin Williams"],
    popularBrands: ["Behr", "Benjamin Moore", "Sherwin Williams"],
  },
  {
    id: "eggshell-paint",
    category: "paint",
    name: "Eggshell Paint",
    type: "budget",
    priceRange: { min: 25, max: 45, unit: "gallon" },
    installationCost: { min: 2, max: 4 },
    lifespan: 10,
    durability: 2,
    waterResistance: 2,
    maintenance: {
      level: "medium",
      frequency: "Light cleaning possible",
      annualCost: 100,
    },
    pros: [
      "Slight sheen",
      "More washable than flat",
      "Good for walls",
      "Hides minor imperfections",
    ],
    cons: ["Shows some imperfections", "Not very scrubble", "Can show touch-ups"],
    bestFor: ["Living rooms", "Dining rooms", "Adult bedrooms"],
    suppliers: ["Home Depot", "Lowes", "PPG Paints"],
    popularBrands: ["Valspar", "Glidden", "Dutch Boy"],
  },
  {
    id: "satin-paint",
    category: "paint",
    name: "Satin Paint",
    type: "mid-range",
    priceRange: { min: 30, max: 50, unit: "gallon" },
    installationCost: { min: 2, max: 4 },
    lifespan: 12,
    durability: 3,
    waterResistance: 3,
    maintenance: {
      level: "low",
      frequency: "Regular cleaning",
      annualCost: 50,
    },
    pros: ["Durable", "Washable", "Pearl-like sheen", "Good for high-traffic areas"],
    cons: ["Shows imperfections", "Can look plastic-y", "Shows brush strokes"],
    bestFor: ["Kitchens", "Bathrooms", "Kids rooms", "Hallways"],
    suppliers: ["Benjamin Moore", "Sherwin Williams", "Kelly-Moore"],
    popularBrands: ["Benjamin Moore", "Sherwin Williams", "PPG"],
  },
  {
    id: "semi-gloss-paint",
    category: "paint",
    name: "Semi-Gloss Paint",
    type: "mid-range",
    priceRange: { min: 35, max: 55, unit: "gallon" },
    installationCost: { min: 2, max: 5 },
    lifespan: 15,
    durability: 4,
    waterResistance: 4,
    maintenance: {
      level: "low",
      frequency: "Easy to clean",
      annualCost: 25,
    },
    pros: ["Very durable", "Moisture resistant", "Easy to clean", "Good for trim"],
    cons: ["Shows all imperfections", "Shiny finish", "Requires good prep"],
    bestFor: ["Trim", "Doors", "Cabinets", "Bathrooms"],
    suppliers: ["Home Depot", "Sherwin Williams", "Benjamin Moore"],
    popularBrands: ["Behr Premium Plus", "Benjamin Moore Advance", "ProClassic"],
  },
  {
    id: "zero-voc-paint",
    category: "paint",
    name: "Zero-VOC Paint",
    type: "premium",
    priceRange: { min: 50, max: 60, unit: "gallon" },
    installationCost: { min: 3, max: 5 },
    lifespan: 10,
    durability: 3,
    waterResistance: 3,
    maintenance: {
      level: "low",
      frequency: "Regular cleaning",
      annualCost: 75,
    },
    pros: ["No harmful fumes", "Better air quality", "Safe for kids/pets", "Low odor"],
    cons: ["More expensive", "Limited color options", "May need more coats"],
    bestFor: ["Nurseries", "Bedrooms", "Schools", "Healthcare facilities"],
    suppliers: ["Benjamin Moore", "Sherwin Williams", "Green Building Supply"],
    popularBrands: ["Benjamin Moore Natura", "Sherwin Williams Harmony", "Clare"],
  },
]

// Supplier recommendations based on category and budget
const supplierRecommendations: Record<MaterialCategory, Record<string, string[]>> = {
  flooring: {
    budget: ["Home Depot", "Lowes", "Costco"],
    "mid-range": ["Floor & Decor", "BuildDirect", "Lumber Liquidators"],
    premium: ["Local showrooms", "Specialty flooring stores", "Designer collections"],
  },
  countertops: {
    budget: ["IKEA", "Home Depot", "Lowes"],
    "mid-range": ["Local fabricators", "MSI Surfaces", "Dal-Tile"],
    premium: ["Stone yards", "Custom fabricators", "Designer showrooms"],
  },
  siding: {
    budget: ["Home Depot", "Lowes", "Menards"],
    "mid-range": ["ABC Supply", "Beacon", "ProBuild"],
    premium: ["Specialty dealers", "Local lumber yards", "Custom mills"],
  },
  paint: {
    budget: ["Home Depot", "Lowes", "Walmart"],
    "mid-range": ["Sherwin Williams", "Benjamin Moore", "PPG Paints"],
    premium: ["Designer paint stores", "Farrow & Ball", "Fine Paints of Europe"],
  },
}

export default function MaterialCostComparator() {
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory>("flooring")
  const [comparisonItems, setComparisonItems] = useState<string[]>([])
  const [projectSize, setProjectSize] = useState(100) // sq ft
  const [yearsToConsider, setYearsToConsider] = useState(10)
  const [includeMaintenance, setIncludeMaintenance] = useState(true)
  const [budgetFilter, setBudgetFilter] = useState<"all" | "budget" | "mid-range" | "premium">(
    "all"
  )

  // Filter materials by category and budget
  const filteredMaterials = materialsDatabase.filter(
    (m) => m.category === selectedCategory && (budgetFilter === "all" || m.type === budgetFilter)
  )

  // Toggle material selection for comparison
  const toggleComparison = (materialId: string) => {
    setComparisonItems((prev) => {
      if (prev.includes(materialId)) {
        return prev.filter((id) => id !== materialId)
      } else if (prev.length < 3) {
        return [...prev, materialId]
      }
      return prev
    })
  }

  // Calculate total cost including maintenance
  const calculateTotalCost = (material: Material) => {
    const avgMaterialCost = (material.priceRange.min + material.priceRange.max) / 2
    const avgInstallCost = (material.installationCost.min + material.installationCost.max) / 2
    const initialCost = (avgMaterialCost + avgInstallCost) * projectSize
    const maintenanceCost = includeMaintenance
      ? material.maintenance.annualCost * yearsToConsider
      : 0

    return {
      initial: initialCost,
      maintenance: maintenanceCost,
      total: initialCost + maintenanceCost,
      perYear: (initialCost + maintenanceCost) / yearsToConsider,
    }
  }

  // Get materials for comparison
  const comparisonMaterials = comparisonItems
    .map((id) => materialsDatabase.find((m) => m.id === id))
    .filter(Boolean) as Material[]

  // Calculate quality score (weighted average of ratings)
  const calculateQualityScore = (material: Material) => {
    const weights = {
      durability: 0.3,
      waterResistance: 0.25,
      lifespan: 0.25,
      maintenance: 0.2,
    }

    const maintenanceScore =
      material.maintenance.level === "low" ? 5 : material.maintenance.level === "medium" ? 3 : 1

    const lifespanScore =
      material.lifespan >= 50
        ? 5
        : material.lifespan >= 30
          ? 4
          : material.lifespan >= 20
            ? 3
            : material.lifespan >= 10
              ? 2
              : 1

    return (
      material.durability * weights.durability +
      material.waterResistance * weights.waterResistance +
      lifespanScore * weights.lifespan +
      maintenanceScore * weights.maintenance
    ).toFixed(1)
  }

  // Export comparison data
  const exportComparison = () => {
    const data = comparisonMaterials
      .map((m) => {
        const cost = calculateTotalCost(m)
        return `
${m.name}
========
Type: ${m.type}
Initial Cost: S$${cost.initial.toLocaleString()}
${yearsToConsider}-Year Total: S$${cost.total.toLocaleString()}
Annual Cost: S$${cost.perYear.toLocaleString()}
Quality Score: ${calculateQualityScore(m)}/5
Lifespan: ${m.lifespan} years
Maintenance: ${m.maintenance.level}

Pros: ${m.pros.join(", ")}
Cons: ${m.cons.join(", ")}
Best For: ${m.bestFor.join(", ")}
`
      })
      .join("\n")

    const blob = new Blob(
      [
        `Material Cost Comparison Report\nGenerated: ${new Date().toLocaleDateString("en-SG")}\n\n${data}`,
      ],
      { type: "text/plain" }
    )
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `material-comparison-${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Singapore Material Cost Comparator 2024
        </h1>
        <p className="text-lg text-muted-foreground">
          Compare renovation materials side-by-side. Analyze upfront costs vs long-term value
          including maintenance and lifespan.
        </p>
      </div>

      {/* Settings Panel */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Settings</CardTitle>
          <CardDescription>Customize your comparison parameters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Category</label>
              <Select
                value={selectedCategory}
                onValueChange={(v) => setSelectedCategory(v as MaterialCategory)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flooring">Flooring</SelectItem>
                  <SelectItem value="countertops">Countertops</SelectItem>
                  <SelectItem value="siding">External Siding</SelectItem>
                  <SelectItem value="paint">Paint Finishes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Budget Filter</label>
              <Select value={budgetFilter} onValueChange={(v) => setBudgetFilter(v as any)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Materials</SelectItem>
                  <SelectItem value="budget">Budget-Friendly</SelectItem>
                  <SelectItem value="mid-range">Mid-Range</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Project Size: {projectSize} sq ft
              </label>
              <Slider
                value={[projectSize]}
                onValueChange={(v) => setProjectSize(v[0])}
                min={10}
                max={1000}
                step={10}
                className="mt-2"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Time Horizon: {yearsToConsider} years
              </label>
              <Slider
                value={[yearsToConsider]}
                onValueChange={(v) => setYearsToConsider(v[0])}
                min={5}
                max={30}
                step={5}
                className="mt-2"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <Switch checked={includeMaintenance} onCheckedChange={setIncludeMaintenance} />
            <label className="text-sm">Include maintenance costs in calculations</label>
          </div>
        </CardContent>
      </Card>

      {/* Materials Grid */}
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            Available {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}{" "}
            Materials
          </h2>
          <div className="text-sm text-muted-foreground">Select up to 3 materials to compare</div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredMaterials.map((material) => {
            const isSelected = comparisonItems.includes(material.id)
            const cost = calculateTotalCost(material)
            const qualityScore = calculateQualityScore(material)

            return (
              <Card
                key={material.id}
                className={cn(
                  "cursor-pointer transition-all",
                  isSelected ? "ring-2 ring-primary" : "hover:shadow-lg"
                )}
                onClick={() => toggleComparison(material.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{material.name}</CardTitle>
                      <Badge
                        variant={
                          material.type === "budget"
                            ? "secondary"
                            : material.type === "mid-range"
                              ? "default"
                              : "destructive"
                        }
                        className="mt-1"
                      >
                        {material.type}
                      </Badge>
                    </div>
                    {isSelected && <CheckCircle2 className="h-5 w-5 text-primary" />}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Price Range</span>
                      <span className="font-medium">
                        S${material.priceRange.min}-${material.priceRange.max}/
                        {material.priceRange.unit}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Quality Score</span>
                      <span className="font-medium">{qualityScore}/5.0</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Lifespan</span>
                      <span className="font-medium">{material.lifespan} years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Maintenance</span>
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-xs",
                          material.maintenance.level === "low" && "text-green-600",
                          material.maintenance.level === "medium" && "text-yellow-600",
                          material.maintenance.level === "high" && "text-red-600"
                        )}
                      >
                        {material.maintenance.level}
                      </Badge>
                    </div>

                    <div className="border-t pt-2">
                      <div className="text-sm text-muted-foreground">
                        {yearsToConsider}-year total cost:
                      </div>
                      <div className="text-lg font-bold text-primary">
                        S${cost.total.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Comparison Table */}
      {comparisonMaterials.length > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Side-by-Side Comparison</CardTitle>
              <Button onClick={exportComparison} variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Criteria</th>
                    {comparisonMaterials.map((m) => (
                      <th key={m.id} className="px-4 py-2 text-left">
                        {m.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Initial Cost</td>
                    {comparisonMaterials.map((m) => {
                      const cost = calculateTotalCost(m)
                      return (
                        <td key={m.id} className="px-4 py-3">
                          S${cost.initial.toLocaleString()}
                        </td>
                      )
                    })}
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Maintenance ({yearsToConsider} years)</td>
                    {comparisonMaterials.map((m) => {
                      const cost = calculateTotalCost(m)
                      return (
                        <td key={m.id} className="px-4 py-3">
                          S${cost.maintenance.toLocaleString()}
                        </td>
                      )
                    })}
                  </tr>
                  <tr className="border-b bg-primary/5">
                    <td className="px-4 py-3 font-medium">Total {yearsToConsider}-Year Cost</td>
                    {comparisonMaterials.map((m) => {
                      const cost = calculateTotalCost(m)
                      return (
                        <td key={m.id} className="px-4 py-3 font-bold">
                          S${cost.total.toLocaleString()}
                        </td>
                      )
                    })}
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Annual Cost</td>
                    {comparisonMaterials.map((m) => {
                      const cost = calculateTotalCost(m)
                      return (
                        <td key={m.id} className="px-4 py-3">
                          S${Math.round(cost.perYear).toLocaleString()}
                        </td>
                      )
                    })}
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Quality Score</td>
                    {comparisonMaterials.map((m) => (
                      <td key={m.id} className="px-4 py-3">
                        <Badge variant="outline">{calculateQualityScore(m)}/5.0</Badge>
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Lifespan</td>
                    {comparisonMaterials.map((m) => (
                      <td key={m.id} className="px-4 py-3">
                        {m.lifespan} years
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Durability</td>
                    {comparisonMaterials.map((m) => (
                      <td key={m.id} className="px-4 py-3">
                        {"⭐".repeat(m.durability)}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Water Resistance</td>
                    {comparisonMaterials.map((m) => (
                      <td key={m.id} className="px-4 py-3">
                        {"💧".repeat(m.waterResistance)}
                      </td>
                    ))}
                  </tr>
                  {selectedCategory === "countertops" && (
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">Heat Resistance</td>
                      {comparisonMaterials.map((m) => (
                        <td key={m.id} className="px-4 py-3">
                          {"🔥".repeat(m.heatResistance || 0)}
                        </td>
                      ))}
                    </tr>
                  )}
                  {selectedCategory === "siding" && (
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">Fire Resistance</td>
                      {comparisonMaterials.map((m) => (
                        <td key={m.id} className="px-4 py-3">
                          {"🔥".repeat(m.fireResistance || 0)}
                        </td>
                      ))}
                    </tr>
                  )}
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Maintenance</td>
                    {comparisonMaterials.map((m) => (
                      <td key={m.id} className="px-4 py-3">
                        <Badge
                          variant={
                            m.maintenance.level === "low"
                              ? "default"
                              : m.maintenance.level === "medium"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {m.maintenance.level}
                        </Badge>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {m.maintenance.frequency}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pros and Cons */}
            <div className="mt-6 space-y-4">
              {comparisonMaterials.map((m) => (
                <div key={m.id} className="rounded-lg border p-4">
                  <h4 className="mb-3 font-semibold">{m.name}</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">Pros</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {m.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium">Cons</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {m.cons.map((con, i) => (
                          <li key={i}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-3 border-t pt-3">
                    <div className="mb-1 flex items-center gap-2">
                      <Info className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium">Best For</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{m.bestFor.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Supplier Recommendations */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Where to Buy in Singapore</CardTitle>
          <CardDescription>Recommended suppliers based on your budget</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="budget">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="budget">Budget-Friendly</TabsTrigger>
              <TabsTrigger value="mid-range">Mid-Range</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>
            {(["budget", "mid-range", "premium"] as const).map((tier) => (
              <TabsContent key={tier} value={tier}>
                <div className="grid gap-4 md:grid-cols-2">
                  {Object.entries(supplierRecommendations).map(([cat, suppliers]) => (
                    <div key={cat} className="rounded-lg border p-4">
                      <h4 className="mb-2 font-medium capitalize">{cat}</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {suppliers[tier].map((supplier, i) => (
                          <li key={i}>• {supplier}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Value Analysis Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Long-Term Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-medium">
                <TrendingUp className="h-4 w-4 text-green-600" />
                Best Value Materials (2024)
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  • <strong>Flooring:</strong> LVT/LVP - Waterproof, durable, 20+ year lifespan
                </li>
                <li>
                  • <strong>Countertops:</strong> Quartz - No sealing required, consistent quality
                </li>
                <li>
                  • <strong>Siding:</strong> Fiber Cement - 50+ years, fire resistant
                </li>
                <li>
                  • <strong>Paint:</strong> Satin finish - Durable and washable
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-medium">
                <Calculator className="h-4 w-4 text-blue-600" />
                Cost-Saving Tips
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Consider maintenance costs, not just initial price</li>
                <li>• Choose materials appropriate for the room's use</li>
                <li>• Buy during sales periods (GSS, Black Friday)</li>
                <li>• Compare total installed cost, not just materials</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>2025 Market Insight:</strong> Construction costs expected to rise 5-7% due to
              inflation. Lock in prices early and consider "performance-value" materials like
              engineered wood and quartz that offer premium aesthetics with lower maintenance.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}

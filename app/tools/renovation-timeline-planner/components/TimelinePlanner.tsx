"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  CalendarDays,
  Hammer,
  FileCheck,
  Package,
  Info,
  GripVertical,
  Link2,
  AlertTriangle,
  Target,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Phase and Task Types
interface Task {
  id: string
  name: string
  duration: number // in days
  description: string
  category: "permit" | "demolition" | "construction" | "finishing" | "inspection" | "other"
  dependencies?: string[] // IDs of tasks that must be completed before this one
  isNoisy?: boolean // For HDB noisy work restrictions
  isCritical?: boolean // Critical path tasks
  bufferRecommended?: number // Recommended buffer days
  completionPercentage: number
  startDate?: Date
  endDate?: Date
  actualStartDate?: Date
  actualEndDate?: Date
  notes?: string
}

interface Phase {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  tasks: Task[]
  durationRange: { min: number; max: number } // in weeks
  order: number
}

// Default renovation phases based on Singapore BTO requirements
const defaultPhases: Phase[] = [
  {
    id: "pre-renovation",
    name: "Pre-Renovation",
    description: "Planning, permits, and preparation",
    icon: <FileCheck className="h-4 w-4" />,
    durationRange: { min: 2, max: 4 },
    order: 1,
    tasks: [
      {
        id: "key-collection",
        name: "Key Collection & Defect Check",
        duration: 7,
        description:
          "Collect keys and inspect for defects. Must complete within 7 days for HDB DLP warranty.",
        category: "inspection",
        isCritical: true,
        bufferRecommended: 3,
        completionPercentage: 0,
      },
      {
        id: "defect-rectification",
        name: "Defect Rectification by HDB",
        duration: 14,
        description: "Wait for HDB to fix reported defects before renovation starts",
        category: "inspection",
        dependencies: ["key-collection"],
        isCritical: true,
        completionPercentage: 0,
      },
      {
        id: "permit-application",
        name: "HDB Permit Application",
        duration: 14,
        description: "Submit and await approval for renovation permit",
        category: "permit",
        dependencies: ["key-collection"],
        isCritical: true,
        bufferRecommended: 7,
        completionPercentage: 0,
      },
      {
        id: "material-selection",
        name: "Finalize Material Selection",
        duration: 7,
        description: "Confirm all tiles, laminates, fixtures selections",
        category: "other",
        dependencies: ["key-collection"],
        completionPercentage: 0,
      },
    ],
  },
  {
    id: "demolition",
    name: "Demolition & Hacking",
    description: "Structural changes and removal works",
    icon: <Hammer className="h-4 w-4" />,
    durationRange: { min: 1, max: 2 },
    order: 2,
    tasks: [
      {
        id: "site-protection",
        name: "Site Protection Setup",
        duration: 1,
        description: "Install protection for floors, windows, and common areas",
        category: "other",
        dependencies: ["permit-application", "defect-rectification"],
        completionPercentage: 0,
      },
      {
        id: "hacking-works",
        name: "Wall Hacking & Demolition",
        duration: 3,
        description:
          "Remove walls and old fixtures. Must complete within 3 consecutive days (HDB rule)",
        category: "demolition",
        dependencies: ["site-protection"],
        isNoisy: true,
        isCritical: true,
        completionPercentage: 0,
      },
      {
        id: "debris-clearance",
        name: "Debris Clearance",
        duration: 1,
        description: "Clear all demolition waste",
        category: "demolition",
        dependencies: ["hacking-works"],
        completionPercentage: 0,
      },
    ],
  },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    description: "Building, plumbing, and electrical works",
    icon: <Settings className="h-4 w-4" />,
    durationRange: { min: 3, max: 5 },
    order: 3,
    tasks: [
      {
        id: "masonry-works",
        name: "Masonry & Wet Works",
        duration: 10,
        description: "Build new walls, shower kerbs, cabinet bases",
        category: "construction",
        dependencies: ["debris-clearance"],
        isCritical: true,
        completionPercentage: 0,
      },
      {
        id: "plumbing-rough",
        name: "Plumbing Piping",
        duration: 7,
        description: "Install water supply and drainage pipes",
        category: "construction",
        dependencies: ["masonry-works"],
        completionPercentage: 0,
      },
      {
        id: "electrical-wiring",
        name: "Electrical Wiring",
        duration: 7,
        description: "Run electrical cables and install outlets",
        category: "construction",
        dependencies: ["masonry-works"],
        isCritical: true,
        completionPercentage: 0,
      },
      {
        id: "aircon-trunking",
        name: "Air-Con Trunking",
        duration: 3,
        description: "Install air conditioning pipes and trunking",
        category: "construction",
        dependencies: ["electrical-wiring"],
        completionPercentage: 0,
      },
      {
        id: "false-ceiling",
        name: "False Ceiling Installation",
        duration: 5,
        description: "Install false ceiling where required",
        category: "construction",
        dependencies: ["aircon-trunking", "electrical-wiring"],
        completionPercentage: 0,
      },
      {
        id: "flooring",
        name: "Flooring Installation",
        duration: 7,
        description: "Install tiles or vinyl flooring",
        category: "construction",
        dependencies: ["false-ceiling", "plumbing-rough"],
        isCritical: true,
        bufferRecommended: 3,
        completionPercentage: 0,
      },
    ],
  },
  {
    id: "carpentry",
    name: "Carpentry & Fixtures",
    description: "Custom carpentry and built-in furniture",
    icon: <Package className="h-4 w-4" />,
    durationRange: { min: 3, max: 4 },
    order: 4,
    tasks: [
      {
        id: "carpentry-measurement",
        name: "Carpentry Site Measurement",
        duration: 1,
        description: "Critical milestone - measure after walls and floors are complete",
        category: "other",
        dependencies: ["flooring"],
        isCritical: true,
        completionPercentage: 0,
      },
      {
        id: "carpentry-fabrication",
        name: "Carpentry Fabrication (Off-site)",
        duration: 14,
        description: "Factory fabrication of custom carpentry",
        category: "construction",
        dependencies: ["carpentry-measurement"],
        bufferRecommended: 7,
        completionPercentage: 0,
      },
      {
        id: "carpentry-installation",
        name: "Carpentry Installation",
        duration: 7,
        description: "Install all custom carpentry on-site",
        category: "construction",
        dependencies: ["carpentry-fabrication"],
        isCritical: true,
        completionPercentage: 0,
      },
      {
        id: "countertop-measurement",
        name: "Countertop Measurement",
        duration: 1,
        description: "Measure for quartz/granite after base cabinets installed",
        category: "other",
        dependencies: ["carpentry-installation"],
        completionPercentage: 0,
      },
      {
        id: "countertop-installation",
        name: "Countertop Installation",
        duration: 3,
        description: "Install kitchen and vanity countertops",
        category: "construction",
        dependencies: ["countertop-measurement"],
        completionPercentage: 0,
      },
    ],
  },
  {
    id: "finishing",
    name: "Finishing Works",
    description: "Final touches and completion",
    icon: <CheckCircle2 className="h-4 w-4" />,
    durationRange: { min: 2, max: 3 },
    order: 5,
    tasks: [
      {
        id: "painting-primer",
        name: "First Coat Painting",
        duration: 3,
        description: "Apply primer and first coat of paint",
        category: "finishing",
        dependencies: ["carpentry-installation"],
        completionPercentage: 0,
      },
      {
        id: "glass-works",
        name: "Glass & Mirror Installation",
        duration: 2,
        description: "Install shower screens, mirrors",
        category: "finishing",
        dependencies: ["painting-primer"],
        completionPercentage: 0,
      },
      {
        id: "plumbing-fixtures",
        name: "Plumbing Fixtures Installation",
        duration: 2,
        description: "Install sinks, taps, toilet bowls",
        category: "finishing",
        dependencies: ["countertop-installation"],
        completionPercentage: 0,
      },
      {
        id: "painting-final",
        name: "Final Coat Painting",
        duration: 3,
        description: "Apply final coat and touch-ups",
        category: "finishing",
        dependencies: ["glass-works", "plumbing-fixtures"],
        completionPercentage: 0,
      },
      {
        id: "lighting-installation",
        name: "Lighting & Switch Installation",
        duration: 2,
        description: "Install all light fixtures and switches",
        category: "finishing",
        dependencies: ["painting-final"],
        completionPercentage: 0,
      },
      {
        id: "chemical-wash",
        name: "Chemical Wash & Cleaning",
        duration: 2,
        description: "Professional cleaning to remove construction residue",
        category: "finishing",
        dependencies: ["lighting-installation"],
        completionPercentage: 0,
      },
      {
        id: "final-inspection",
        name: "Final Inspection & Handover",
        duration: 1,
        description: "Walkthrough with contractor, create defect list",
        category: "inspection",
        dependencies: ["chemical-wash"],
        isCritical: true,
        completionPercentage: 0,
      },
      {
        id: "rectification",
        name: "Defect Rectification",
        duration: 7,
        description: "Fix any issues found during final inspection",
        category: "inspection",
        dependencies: ["final-inspection"],
        bufferRecommended: 7,
        completionPercentage: 0,
      },
    ],
  },
]

// Helper functions
const formatDate = (date: Date | undefined) => {
  if (!date) return ""
  return new Intl.DateTimeFormat("en-SG", {
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
  }).format(date)
}

const addDays = (date: Date, days: number): Date => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const addWorkingDays = (startDate: Date, days: number): Date => {
  let currentDate = new Date(startDate)
  let daysAdded = 0

  while (daysAdded < days) {
    currentDate.setDate(currentDate.getDate() + 1)
    const dayOfWeek = currentDate.getDay()
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysAdded++
    }
  }

  return currentDate
}

const differenceInDays = (date1: Date, date2: Date): number => {
  const diffTime = Math.abs(date2.getTime() - date1.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

const calculateProjectDuration = (phases: Phase[]): number => {
  let minDate = new Date()
  let maxDate = new Date()
  let hasValidDates = false

  phases.forEach((phase) => {
    phase.tasks.forEach((task) => {
      if (task.startDate && task.endDate) {
        if (!hasValidDates) {
          minDate = task.startDate
          maxDate = task.endDate
          hasValidDates = true
        } else {
          if (task.startDate < minDate) minDate = task.startDate
          if (task.endDate > maxDate) maxDate = task.endDate
        }
      }
    })
  })

  return hasValidDates ? differenceInDays(maxDate, minDate) : 0
}

const exportToICS = (phases: Phase[], projectName: string) => {
  let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//RenoTake//Renovation Timeline//EN
CALSCALE:GREGORIAN
X-WR-CALNAME:${projectName} Renovation Timeline
X-WR-TIMEZONE:Asia/Singapore

`

  phases.forEach((phase) => {
    phase.tasks.forEach((task) => {
      if (task.startDate && task.endDate) {
        const formatICSDate = (date: Date) => {
          return date.toISOString().replace(/[-:]/g, "").split("T")[0]
        }

        const startStr = formatICSDate(task.startDate)
        const endStr = formatICSDate(addDays(task.endDate, 1))

        icsContent += `BEGIN:VEVENT
UID:${task.id}@renotake.sg
DTSTAMP:${formatICSDate(new Date())}T000000Z
DTSTART;VALUE=DATE:${startStr}
DTEND;VALUE=DATE:${endStr}
SUMMARY:${task.name}
DESCRIPTION:${task.description}${task.dependencies ? " | Dependencies: " + task.dependencies.join(", ") : ""}
CATEGORIES:${phase.name}
STATUS:CONFIRMED
END:VEVENT

`
      }
    })
  })

  icsContent += "END:VCALENDAR"

  const blob = new Blob([icsContent], { type: "text/calendar" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${projectName.toLowerCase().replace(/\s+/g, "-")}-renovation-timeline.ics`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default function TimelinePlanner() {
  const [phases, setPhases] = useState<Phase[]>(defaultPhases)
  const [projectStartDate, setProjectStartDate] = useState<Date>(new Date())
  const [projectName, setProjectName] = useState("My 4-Room BTO Renovation")
  const [viewMode, setViewMode] = useState<"timeline" | "gantt" | "checklist">("timeline")
  const [includeBuffer, setIncludeBuffer] = useState(true)

  // Calculate dates based on dependencies and durations
  useEffect(() => {
    const calculateSchedule = () => {
      const taskMap = new Map<string, Task>()
      const updatedPhases = [...phases]

      // Build task map
      updatedPhases.forEach((phase) => {
        phase.tasks.forEach((task) => {
          taskMap.set(task.id, task)
        })
      })

      // Calculate start and end dates based on dependencies
      updatedPhases.forEach((phase) => {
        phase.tasks.forEach((task) => {
          if (task.dependencies && task.dependencies.length > 0) {
            // Find latest end date from dependencies
            let latestEndDate = projectStartDate
            task.dependencies.forEach((depId) => {
              const depTask = taskMap.get(depId)
              if (depTask && depTask.endDate && depTask.endDate > latestEndDate) {
                latestEndDate = depTask.endDate
              }
            })
            task.startDate = addDays(latestEndDate, 1)
          } else {
            // No dependencies, can start at project start
            task.startDate = projectStartDate
          }

          // Calculate end date based on duration
          if (task.startDate) {
            // Add buffer if recommended and enabled
            const bufferDays = includeBuffer && task.bufferRecommended ? task.bufferRecommended : 0
            const totalDuration = task.duration + bufferDays

            // Handle noisy work restrictions (weekdays only)
            if (task.isNoisy) {
              task.endDate = addWorkingDays(task.startDate, totalDuration)
            } else {
              task.endDate = addDays(task.startDate, totalDuration)
            }
          }
        })
      })

      setPhases(updatedPhases)
    }

    calculateSchedule()
  }, [projectStartDate, includeBuffer])

  // Update task completion
  const updateTaskCompletion = (taskId: string, percentage: number) => {
    const updatedPhases = phases.map((phase) => ({
      ...phase,
      tasks: phase.tasks.map((task) =>
        task.id === taskId ? { ...task, completionPercentage: percentage } : task
      ),
    }))
    setPhases(updatedPhases)
  }

  // Calculate critical path
  const getCriticalPath = () => {
    const criticalTasks: Task[] = []
    phases.forEach((phase) => {
      phase.tasks.forEach((task) => {
        if (task.isCritical) {
          criticalTasks.push(task)
        }
      })
    })
    return criticalTasks
  }

  // Calculate project progress
  const calculateProgress = () => {
    let totalTasks = 0
    let totalCompletion = 0

    phases.forEach((phase) => {
      phase.tasks.forEach((task) => {
        totalTasks++
        totalCompletion += task.completionPercentage
      })
    })

    return totalTasks > 0 ? Math.round(totalCompletion / totalTasks) : 0
  }

  const projectProgress = calculateProgress()
  const projectDuration = calculateProjectDuration(phases)
  const criticalPath = getCriticalPath()

  return (
    <>
      {/* Project Settings */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Project Configuration</CardTitle>
          <CardDescription>Set up your renovation project details</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label htmlFor="project-name">Project Name</Label>
              <Input
                id="project-name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="My 4-Room BTO Renovation"
              />
            </div>
            <div>
              <Label htmlFor="start-date">Key Collection Date</Label>
              <Input
                id="start-date"
                type="date"
                value={projectStartDate.toISOString().split("T")[0]}
                onChange={(e) => setProjectStartDate(new Date(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="buffer-toggle" className="flex items-center gap-2">
                <Switch
                  id="buffer-toggle"
                  checked={includeBuffer}
                  onCheckedChange={setIncludeBuffer}
                />
                Include Buffer Time
              </Label>
              <p className="mt-1 text-xs text-muted-foreground">
                Add recommended buffer for critical tasks
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="mb-2 flex items-center justify-between">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span className="text-2xl font-bold">{projectDuration}</span>
            </div>
            <p className="text-sm text-muted-foreground">Total Days</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-2 flex items-center justify-between">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span className="text-2xl font-bold">{projectProgress}%</span>
            </div>
            <p className="text-sm text-muted-foreground">Overall Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-2 flex items-center justify-between">
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
              <span className="text-2xl font-bold">{criticalPath.length}</span>
            </div>
            <p className="text-sm text-muted-foreground">Critical Tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="mb-2 flex items-center justify-between">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-2xl font-bold">
                {phases.reduce((acc, phase) => acc + phase.tasks.length, 0)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Total Tasks</p>
          </CardContent>
        </Card>
      </div>

      {/* View Mode Tabs */}
      <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as any)}>
        <div className="mb-4 flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="timeline">Timeline View</TabsTrigger>
            <TabsTrigger value="gantt">Gantt Chart</TabsTrigger>
            <TabsTrigger value="checklist">Checklist</TabsTrigger>
          </TabsList>
          <Button onClick={() => exportToICS(phases, projectName)} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export to Calendar
          </Button>
        </div>

        {/* Timeline View */}
        <TabsContent value="timeline">
          <div className="space-y-4">
            {phases.map((phase) => (
              <Card key={phase.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {phase.icon}
                      <CardTitle>{phase.name}</CardTitle>
                    </div>
                    <Badge variant="outline">
                      {phase.durationRange.min}-{phase.durationRange.max} weeks
                    </Badge>
                  </div>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {phase.tasks.map((task, index) => (
                      <div
                        key={task.id}
                        className={cn(
                          "rounded-lg border bg-white p-3",
                          task.isCritical && "border-red-300 bg-red-50"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 cursor-grab">
                            <GripVertical className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="mb-1 flex items-center justify-between">
                              <h4 className="font-medium">{task.name}</h4>
                              <div className="flex items-center gap-2">
                                {task.isNoisy && (
                                  <Badge variant="secondary" className="text-xs">
                                    Noisy Work
                                  </Badge>
                                )}
                                {task.isCritical && (
                                  <Badge variant="destructive" className="text-xs">
                                    Critical
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs">
                                  {task.duration} days
                                </Badge>
                              </div>
                            </div>
                            <p className="mb-2 text-sm text-muted-foreground">{task.description}</p>
                            {task.dependencies && task.dependencies.length > 0 && (
                              <div className="mb-2 flex items-center gap-1 text-xs text-blue-600">
                                <Link2 className="h-3 w-3" />
                                <span>Depends on: {task.dependencies.join(", ")}</span>
                              </div>
                            )}
                            {task.startDate && task.endDate && (
                              <div className="mb-2 text-xs text-muted-foreground">
                                {formatDate(task.startDate)} - {formatDate(task.endDate)}
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <div className="flex-1">
                                <Slider
                                  value={[task.completionPercentage]}
                                  onValueChange={(v) => updateTaskCompletion(task.id, v[0])}
                                  max={100}
                                  step={10}
                                  className="w-full"
                                />
                              </div>
                              <span className="text-sm font-medium">
                                {task.completionPercentage}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Gantt Chart View */}
        <TabsContent value="gantt">
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  {/* Gantt Chart Header */}
                  <div className="mb-4 grid grid-cols-12 gap-1 text-center text-xs">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="font-medium text-muted-foreground">
                        Week {i + 1}
                      </div>
                    ))}
                  </div>

                  {/* Gantt Chart Rows */}
                  {phases.map((phase) => (
                    <div key={phase.id} className="mb-4">
                      <h3 className="mb-2 font-medium">{phase.name}</h3>
                      {phase.tasks.map((task) => {
                        const startWeek = task.startDate
                          ? Math.floor(differenceInDays(task.startDate, projectStartDate) / 7)
                          : 0
                        const duration =
                          task.endDate && task.startDate
                            ? Math.ceil(differenceInDays(task.endDate, task.startDate) / 7)
                            : 1

                        return (
                          <div key={task.id} className="mb-1 grid grid-cols-12 gap-1">
                            <div
                              className={cn(
                                "rounded p-1 text-center text-xs text-white",
                                task.isCritical ? "bg-red-500" : "bg-blue-500"
                              )}
                              style={{
                                gridColumnStart: Math.max(1, startWeek + 1),
                                gridColumnEnd: Math.min(13, startWeek + duration + 1),
                              }}
                            >
                              {task.name}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Checklist View */}
        <TabsContent value="checklist">
          <div className="space-y-4">
            {phases.map((phase) => (
              <Card key={phase.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {phase.icon}
                    {phase.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {phase.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center gap-3 rounded p-2 hover:bg-muted"
                      >
                        <input
                          type="checkbox"
                          checked={task.completionPercentage === 100}
                          onChange={(e) =>
                            updateTaskCompletion(task.id, e.target.checked ? 100 : 0)
                          }
                          className="h-4 w-4"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                task.completionPercentage === 100 &&
                                  "text-muted-foreground line-through"
                              )}
                            >
                              {task.name}
                            </span>
                            {task.isCritical && (
                              <Badge variant="destructive" className="text-xs">
                                Critical
                              </Badge>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Duration: {task.duration} days
                            {task.startDate && task.endDate && (
                              <>
                                {" "}
                                | {formatDate(task.startDate)} - {formatDate(task.endDate)}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Important Reminders */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>HDB Renovation Rules & Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Noisy Work Restrictions</AlertTitle>
              <AlertDescription>
                Hacking, drilling, and cutting are only allowed 9am-5pm on weekdays. No noisy work
                on weekends and public holidays.
              </AlertDescription>
            </Alert>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>3-Day Hacking Rule</AlertTitle>
              <AlertDescription>
                All hacking and demolition must be completed within 3 consecutive days per HDB
                regulations.
              </AlertDescription>
            </Alert>
            <Alert>
              <Clock className="h-4 w-4" />
              <AlertTitle>Buffer Recommendation</AlertTitle>
              <AlertDescription>
                Experts recommend 2-4 weeks buffer time for the overall project to handle unexpected
                delays.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

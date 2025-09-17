import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestColorsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">RenoTake Color System Test</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Text Colors</h2>
        <div className="space-y-2">
          <p className="text-foreground">Default text (should be charcoal #292524)</p>
          <p className="text-primary">Primary green text (#00A67E)</p>
          <p className="text-muted-foreground">Muted text (gray)</p>
          <p className="text-green-600">Green-600 text</p>
          <p className="text-charcoal">Charcoal text</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Backgrounds</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-background border rounded">
            <p>Default background (white)</p>
          </div>
          <div className="p-4 bg-muted rounded">
            <p>Muted background (light gray)</p>
          </div>
          <div className="p-4 bg-primary text-primary-foreground rounded">
            <p>Primary background with white text</p>
          </div>
          <div className="p-4 bg-green-50 rounded">
            <p>Green-50 background</p>
          </div>
          <div className="p-4 bg-green-600 text-white rounded">
            <p>Green-600 with white text</p>
          </div>
          <div className="p-4 bg-accent rounded">
            <p className="text-accent-foreground">Accent background</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Custom Green</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Card description text</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content with default styling</p>
            </CardContent>
          </Card>

          <Card className="border-green-600">
            <CardHeader>
              <CardTitle className="text-green-600">Green Accent Card</CardTitle>
              <CardDescription>With green border</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content with green accents</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Brand Colors</h2>
        <div className="grid grid-cols-6 gap-4">
          <div>
            <div className="h-20 bg-green-600 rounded mb-2"></div>
            <p className="text-sm">Primary Green</p>
            <p className="text-xs text-muted-foreground">#00A67E</p>
          </div>
          <div>
            <div className="h-20 bg-charcoal rounded mb-2"></div>
            <p className="text-sm">Charcoal</p>
            <p className="text-xs text-muted-foreground">#292524</p>
          </div>
          <div>
            <div className="h-20 bg-hdb-orange rounded mb-2"></div>
            <p className="text-sm">HDB Orange</p>
            <p className="text-xs text-muted-foreground">#FF9A7A</p>
          </div>
          <div>
            <div className="h-20 bg-condo-blue rounded mb-2"></div>
            <p className="text-sm">Condo Blue</p>
            <p className="text-xs text-muted-foreground">#2E86AB</p>
          </div>
          <div>
            <div className="h-20 bg-landed-gold rounded mb-2"></div>
            <p className="text-sm">Landed Gold</p>
            <p className="text-xs text-muted-foreground">#D4A574</p>
          </div>
          <div>
            <div className="h-20 bg-green-500 rounded mb-2"></div>
            <p className="text-sm">Success Green</p>
            <p className="text-xs text-muted-foreground">#10B981</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contrast Tests</h2>
        <div className="space-y-4">
          <div className="p-4 bg-white text-charcoal border rounded">
            <p className="font-semibold">White background + Charcoal text (Best contrast)</p>
            <p>This should be highly readable with excellent contrast.</p>
          </div>
          <div className="p-4 bg-green-600 text-white rounded">
            <p className="font-semibold">Green background + White text</p>
            <p>This should have good contrast for buttons and CTAs.</p>
          </div>
          <div className="p-4 bg-gray-100 text-gray-900 rounded">
            <p className="font-semibold">Light gray background + Dark gray text</p>
            <p>This should be readable for secondary sections.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
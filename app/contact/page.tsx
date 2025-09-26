"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Mail, MessageSquare, HelpCircle, Send, CheckCircle, Clock, Shield } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    if (!formData.email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 2 business days.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Have questions about your renovation? Need help navigating our guides? We're here to
              help. Get in touch with the RenoTake team.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 2 business days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a topic (optional)</option>
                        <option value="general">General Inquiry</option>
                        <option value="guide">Guide Question</option>
                        <option value="technical">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback or Suggestion</option>
                        <option value="correction">Content Correction</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                      <p className="text-xs text-gray-500">
                        Please provide as much detail as possible so we can assist you better.
                      </p>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg bg-green-50 p-4 text-sm">
                      <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <p className="text-gray-700">
                        Your information is protected under Singapore's PDPA. We will never share
                        your details with third parties. See our{" "}
                        <Link
                          href="/privacy"
                          className="font-medium text-green-600 hover:underline"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-green-600" />
                    Email Us Directly
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-gray-900">General Inquiries</p>
                    <a href="mailto:hello@renotake.sg" className="text-green-600 hover:underline">
                      hello@renotake.sg
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Editorial & Content</p>
                    <a href="mailto:content@renotake.sg" className="text-green-600 hover:underline">
                      content@renotake.sg
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Privacy & Data</p>
                    <a href="mailto:privacy@renotake.sg" className="text-green-600 hover:underline">
                      privacy@renotake.sg
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-green-600" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <p>We typically respond within 2 business days</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <p>Complex inquiries may take up to 5 business days</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                    <p>Check your spam folder if you don't hear from us</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="h-5 w-5 text-green-600" />
                    Quick Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-gray-700">
                    Before contacting us, check if your question is answered in:
                  </p>
                  <div className="space-y-2">
                    <Link href="/guides" className="block text-green-600 hover:underline">
                      → Comprehensive Guides
                    </Link>
                    <Link href="/answers" className="block text-green-600 hover:underline">
                      → Quick Answers
                    </Link>
                    <Link href="/ask-renoai" className="block text-green-600 hover:underline">
                      → Ask RenoAI (24/7)
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 rounded-xl bg-gray-50 p-8">
            <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">Do you provide contractor recommendations?</h3>
                <p className="text-sm text-gray-600">
                  No, RenoTake is an independent educational platform. We don't recommend specific
                  contractors or receive commissions. Our guides teach you how to evaluate and
                  choose contractors yourself.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Can you review my quotation?</h3>
                <p className="text-sm text-gray-600">
                  While we can't review individual quotations, our cost breakdown guides provide
                  detailed pricing benchmarks. Use our Budget Calculator to compare against market
                  rates.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Is your content up to date?</h3>
                <p className="text-sm text-gray-600">
                  Yes, we regularly update our guides with the latest HDB regulations, BCA
                  requirements, and market prices. Each guide shows its last update date.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Can I contribute to RenoTake?</h3>
                <p className="text-sm text-gray-600">
                  We welcome suggestions for new content and corrections to existing guides. Email
                  us at content@renotake.sg with your ideas.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Prefer to get updates instead?{" "}
              <Link href="/#newsletter" className="font-medium text-green-600 hover:underline">
                Subscribe to our newsletter
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link href="/" className="text-xl font-bold">
              Reno<span className="text-green-600">Take</span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">
              Singapore's trusted renovation guide for BTO owners and homeowners.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} RenoTake. All rights reserved. Not affiliated with HDB
              or BCA.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface RenoAIWaitlistEmailProps {
  source?: string
}

export default function RenoAIWaitlistEmail({ source = "unknown" }: RenoAIWaitlistEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>You're on the RenoAI waitlist! Early access coming Q4 2025.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={logo}>
              Reno<span style={logoHighlight}>Take</span>
            </Heading>
          </Section>

          <Section style={content}>
            <Heading style={heading}>You're on the RenoAI Waitlist! 🎉</Heading>

            <Text style={paragraph}>
              Thanks for your interest in RenoAI - your future 24/7 AI renovation assistant!
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightHeading}>🚀 What to Expect</Text>
              <Text style={highlightText}>
                <strong>Launch Date:</strong> Q4 2025
                <br />
                <strong>Your Position:</strong> Early Access List
                <br />
                <strong>Special Offer:</strong> Exclusive launch pricing for waitlist members
              </Text>
            </Section>

            <Text style={paragraph}>
              <strong>What is RenoAI?</strong>
            </Text>

            <Text style={paragraph}>
              RenoAI will be your intelligent renovation assistant trained specifically on Singapore
              HDB/BCA regulations, real project costs, and thousands of renovation experiences.
              Think ChatGPT, but specialized for Singapore renovations.
            </Text>

            <Section style={featuresSection}>
              <Text style={featureItem}>
                ✓ <strong>Instant Answers</strong> - Get responses in seconds, not days
              </Text>
              <Text style={featureItem}>
                ✓ <strong>Always Current</strong> - Updated with latest regulations and prices
              </Text>
              <Text style={featureItem}>
                ✓ <strong>Singapore-Specific</strong> - Trained on local renovation data
              </Text>
              <Text style={featureItem}>
                ✓ <strong>24/7 Available</strong> - Ask anything, anytime
              </Text>
            </Section>

            <Text style={paragraph}>
              <strong>What happens next?</strong>
            </Text>

            <Text style={paragraph}>
              We'll keep you updated on RenoAI's development and notify you immediately when it
              launches. As a waitlist member, you'll get:
            </Text>

            <Section style={benefitsBox}>
              <Text style={benefitItem}>🎁 Early access before public launch</Text>
              <Text style={benefitItem}>💰 Special launch pricing (limited time)</Text>
              <Text style={benefitItem}>📊 Behind-the-scenes development updates</Text>
              <Text style={benefitItem}>🎯 Priority support during launch week</Text>
            </Section>

            <Text style={paragraph}>
              <strong>While you wait...</strong>
            </Text>

            <Text style={paragraph}>
              Don't let your renovation planning stop! Check out our free resources:
            </Text>

            <Section style={linksSection}>
              <Text style={paragraph}>
                <Link href="https://renotake.sg/guides/ultimate-hdb-bto-guide" style={link}>
                  📚 Ultimate BTO Renovation Guide
                </Link>
              </Text>
              <Text style={paragraph}>
                <Link
                  href="https://renotake.sg/guides/singapore-renovation-budgeting-bible"
                  style={link}
                >
                  💰 Complete Budgeting Bible
                </Link>
              </Text>
              <Text style={paragraph}>
                <Link href="https://renotake.sg/tools" style={link}>
                  🛠️ Interactive Planning Tools
                </Link>
              </Text>
              <Text style={paragraph}>
                <Link href="https://renotake.sg/answers" style={link}>
                  ❓ Quick Answers Database
                </Link>
              </Text>
            </Section>

            <Section style={ctaSection}>
              <Heading style={ctaHeading}>Spread the Word</Heading>
              <Text style={paragraph}>
                Know someone renovating their BTO or HDB? Share RenoTake with them!
              </Text>
              <Button style={button} href="https://renotake.sg">
                Visit RenoTake
              </Button>
            </Section>

            <Text style={paragraph}>
              Have questions about RenoAI or want to suggest features? Just hit reply - we read
              every email!
            </Text>

            <Text style={signature}>
              See you in Q4 2025!
              <br />
              The RenoTake Team
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              RenoTake - Singapore's Intelligent Renovation Guide
              <br />
              <Link href="https://renotake.sg" style={footerLink}>
                renotake.sg
              </Link>
            </Text>
            <Text style={footerText}>
              Not affiliated with HDB or BCA. Independent renovation resource.
            </Text>
            <Text style={footerText}>
              <Link href="https://renotake.sg/privacy" style={footerLink}>
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="{{unsubscribe_url}}" style={footerLink}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
}

const header = {
  padding: "32px 20px",
  textAlign: "center" as const,
  backgroundColor: "#f5f5f5",
}

const logo = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#292524",
  margin: "0",
}

const logoHighlight = {
  color: "#00A67E",
}

const content = {
  padding: "40px 20px",
}

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#292524",
  marginBottom: "16px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#292524",
  marginBottom: "16px",
}

const highlightBox = {
  backgroundColor: "#fef3c7",
  padding: "20px",
  borderRadius: "8px",
  borderLeft: "4px solid #f59e0b",
  margin: "24px 0",
}

const highlightHeading = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#92400e",
  marginBottom: "12px",
}

const highlightText = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#292524",
  marginBottom: "0",
}

const featuresSection = {
  margin: "20px 0",
}

const featureItem = {
  fontSize: "15px",
  lineHeight: "28px",
  color: "#292524",
  marginBottom: "8px",
}

const benefitsBox = {
  backgroundColor: "#f0fdf4",
  padding: "20px",
  borderRadius: "8px",
  margin: "20px 0",
}

const benefitItem = {
  fontSize: "15px",
  lineHeight: "28px",
  color: "#292524",
  marginBottom: "8px",
}

const linksSection = {
  margin: "20px 0",
}

const link = {
  color: "#00A67E",
  textDecoration: "none",
  fontWeight: "500",
}

const ctaSection = {
  textAlign: "center" as const,
  backgroundColor: "#f0fdf4",
  padding: "32px 24px",
  borderRadius: "8px",
  margin: "32px 0",
}

const ctaHeading = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#292524",
  marginBottom: "12px",
}

const button = {
  backgroundColor: "#00A67E",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "14px 32px",
  marginTop: "16px",
}

const signature = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#292524",
  marginTop: "32px",
}

const footer = {
  borderTop: "1px solid #e5e7eb",
  padding: "32px 20px",
  textAlign: "center" as const,
}

const footerText = {
  fontSize: "13px",
  lineHeight: "20px",
  color: "#6b7280",
  marginBottom: "8px",
}

const footerLink = {
  color: "#00A67E",
  textDecoration: "none",
}

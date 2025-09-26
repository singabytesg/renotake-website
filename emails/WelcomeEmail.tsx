import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface WelcomeEmailProps {
  downloadUrl: string
}

export default function WelcomeEmail({ downloadUrl }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to RenoTake! Your free HDB renovation checklist is ready.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={logo}>
              Reno<span style={logoHighlight}>Take</span>
            </Heading>
          </Section>

          <Section style={content}>
            <Heading style={heading}>Welcome to RenoTake! 🎉</Heading>

            <Text style={paragraph}>
              Thanks for joining thousands of Singapore homeowners on their renovation journey.
              You've made a smart choice!
            </Text>

            <Text style={paragraph}>
              As promised, here's your free HDB Renovation Checklist to help you save money and
              avoid common mistakes:
            </Text>

            <Section style={buttonContainer}>
              <Button style={button} href={downloadUrl}>
                Download Your Free Checklist
              </Button>
            </Section>

            <Section style={benefits}>
              <Text style={benefitsHeading}>What's inside your checklist:</Text>
              <Text style={benefitItem}>✓ Complete timeline from key collection to move-in</Text>
              <Text style={benefitItem}>✓ HDB permit requirements & approval process</Text>
              <Text style={benefitItem}>✓ Cost breakdown for every renovation item</Text>
              <Text style={benefitItem}>✓ Contractor red flags to watch out for</Text>
            </Section>

            <Text style={paragraph}>
              <strong>What happens next?</strong>
            </Text>

            <Text style={paragraph}>
              You'll receive weekly renovation tips, cost updates, and regulation changes tailored
              for Singapore homeowners. No spam, just practical advice you can use.
            </Text>

            <Section style={resourcesSection}>
              <Text style={resourcesHeading}>Start exploring:</Text>
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
            </Section>

            <Text style={paragraph}>
              Have questions? Just hit reply to this email. We read every message.
            </Text>

            <Text style={signature}>
              Happy renovating!
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

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
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
}

const benefits = {
  backgroundColor: "#f0fdf4",
  padding: "24px",
  borderRadius: "8px",
  margin: "24px 0",
}

const benefitsHeading = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#292524",
  marginBottom: "12px",
}

const benefitItem = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#292524",
  marginBottom: "8px",
}

const resourcesSection = {
  margin: "24px 0",
}

const resourcesHeading = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#292524",
  marginBottom: "12px",
}

const link = {
  color: "#00A67E",
  textDecoration: "none",
  fontWeight: "500",
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

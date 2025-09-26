import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Hr,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import * as React from "react"

interface NewsletterEmailProps {
  subscriberName?: string
  articles: {
    title: string
    excerpt: string
    url: string
    category: string
  }[]
  featuredTip?: {
    title: string
    content: string
  }
}

export default function NewsletterEmail({
  subscriberName = "there",
  articles,
  featuredTip,
}: NewsletterEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your weekly renovation tips and updates from RenoTake</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={logo}>
              Reno<span style={logoHighlight}>Take</span>
            </Heading>
            <Text style={tagline}>Weekly Renovation Insights</Text>
          </Section>

          <Section style={content}>
            <Heading style={heading}>Hi {subscriberName}! 👋</Heading>

            <Text style={paragraph}>
              Here's this week's curated renovation knowledge to help you make smarter decisions.
            </Text>

            {featuredTip && (
              <Section style={tipBox}>
                <Text style={tipLabel}>💡 Pro Tip of the Week</Text>
                <Heading style={tipHeading}>{featuredTip.title}</Heading>
                <Text style={tipContent}>{featuredTip.content}</Text>
              </Section>
            )}

            <Heading style={sectionHeading}>Latest Guides & Updates</Heading>

            {articles.map((article, index) => (
              <Section key={index} style={articleSection}>
                <Text style={articleCategory}>{article.category}</Text>
                <Heading style={articleTitle}>{article.title}</Heading>
                <Text style={articleExcerpt}>{article.excerpt}</Text>
                <Link href={article.url} style={articleLink}>
                  Read more →
                </Link>
                {index < articles.length - 1 && <Hr style={divider} />}
              </Section>
            ))}

            <Section style={ctaSection}>
              <Heading style={ctaHeading}>Need quick help?</Heading>
              <Text style={paragraph}>
                Our interactive tools can help you plan and budget your renovation right now.
              </Text>
              <Button style={button} href="https://renotake.sg/tools">
                Try Our Free Tools
              </Button>
            </Section>

            <Text style={paragraph}>
              Questions or feedback? Hit reply - we read every email and love hearing from you!
            </Text>

            <Text style={signature}>
              Happy renovating,
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
  margin: "0 0 8px 0",
}

const logoHighlight = {
  color: "#00A67E",
}

const tagline = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
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

const sectionHeading = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#292524",
  marginTop: "32px",
  marginBottom: "20px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#292524",
  marginBottom: "16px",
}

const tipBox = {
  backgroundColor: "#fef3c7",
  padding: "24px",
  borderRadius: "8px",
  borderLeft: "4px solid #f59e0b",
  margin: "24px 0",
}

const tipLabel = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#92400e",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  marginBottom: "8px",
}

const tipHeading = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#292524",
  marginBottom: "12px",
}

const tipContent = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#292524",
  marginBottom: "0",
}

const articleSection = {
  marginBottom: "24px",
}

const articleCategory = {
  fontSize: "12px",
  fontWeight: "600",
  color: "#00A67E",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  marginBottom: "8px",
}

const articleTitle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#292524",
  marginBottom: "8px",
}

const articleExcerpt = {
  fontSize: "15px",
  lineHeight: "24px",
  color: "#6b7280",
  marginBottom: "12px",
}

const articleLink = {
  color: "#00A67E",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "15px",
}

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
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

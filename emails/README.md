# Email Templates

This directory contains React Email templates for RenoTake's email communications.

## Templates

### WelcomeEmail.tsx

Sent to new subscribers immediately after signing up. Includes:

- Welcome message
- Free HDB renovation checklist download link
- Links to key resources
- What to expect from the newsletter

**Usage:**

```typescript
import WelcomeEmail from "@/emails/WelcomeEmail"

await resend.emails.send({
  from: "RenoTake <hello@renotake.sg>",
  to: "subscriber@example.com",
  subject: "Welcome to RenoTake! Your Free HDB Checklist Inside",
  react: WelcomeEmail({
    downloadUrl: "https://renotake.sg/downloads/checklist.pdf",
  }),
})
```

### NewsletterEmail.tsx

Weekly newsletter template with curated content. Includes:

- Personalized greeting
- Pro tip of the week (optional)
- Latest guides and articles
- Call-to-action section

**Usage:**

```typescript
import NewsletterEmail from "@/emails/NewsletterEmail"

await resend.emails.send({
  from: "RenoTake <hello@renotake.sg>",
  to: "subscriber@example.com",
  subject: "Your Weekly Renovation Tips",
  react: NewsletterEmail({
    subscriberName: "John",
    articles: [
      {
        title: "HDB Kitchen Renovation Guide",
        excerpt: "Everything you need to know...",
        url: "https://renotake.sg/guides/kitchen",
        category: "Budget Planning",
      },
    ],
    featuredTip: {
      title: "Save S$2,000 on flooring",
      content: "Consider vinyl overlay instead of hacking...",
    },
  }),
})
```

## Development

### Preview Emails Locally

1. Install React Email CLI globally:

```bash
npm install -g react-email
```

2. Run the preview server:

```bash
cd /path/to/renotake-website
email dev
```

3. Open http://localhost:3000 to see all templates

### Testing

Test emails by sending to your own email address:

```typescript
// In your API route or script
import { resend } from "@/lib/resend"
import WelcomeEmail from "@/emails/WelcomeEmail"

await resend.emails.send({
  from: "RenoTake <hello@renotake.sg>",
  to: "your-email@example.com",
  subject: "Test Email",
  react: WelcomeEmail({
    downloadUrl: "https://renotake.sg/downloads/test.pdf",
  }),
})
```

## Best Practices

1. **Always test on multiple clients**: Gmail, Outlook, Apple Mail, Mobile
2. **Keep it simple**: Email HTML has limited CSS support
3. **Include alt text**: For all images (accessibility)
4. **Plain text fallback**: Resend automatically generates this
5. **Unsubscribe link**: Always include (required by law)
6. **From address**: Use verified domain (hello@renotake.sg)

## Design Guidelines

- **Colors**: Use RenoTake green (#00A67E) for primary actions
- **Typography**: System fonts for best compatibility
- **Width**: Max 600px for optimal mobile viewing
- **CTA buttons**: Clear, single primary action per email
- **Spacing**: Generous padding for readability

## Resend Configuration

Required environment variables in `.env.local`:

```bash
RESEND_API_KEY=re_your_key_here
RESEND_AUDIENCE_ID=audience_id_here  # Optional
```

## Troubleshooting

### Emails not sending

- Check RESEND_API_KEY is set correctly
- Verify domain is verified in Resend dashboard
- Check API rate limits (100 emails/day on free tier)

### Styling issues

- Email clients have limited CSS support
- Use inline styles or React Email components
- Test with Resend's email testing tool

### Images not loading

- Use absolute URLs (not relative paths)
- Host images on CDN or public folder
- Include alt text for accessibility

## Resources

- [React Email Docs](https://react.email/docs)
- [Resend Docs](https://resend.com/docs)
- [Email Client CSS Support](https://www.caniemail.com/)

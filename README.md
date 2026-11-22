"# bhuvana-marketing-portfolio" 
# Bhuvana Sri Chikoti — Portfolio

## Contact form email delivery

The form sends submissions through Resend from `app/api/contact/route.ts`. Copy `.env.example` to `.env.local`, then set `RESEND_API_KEY`, `CONTACT_EMAIL` (the inbox that receives submissions), and `CONTACT_FROM_EMAIL` (a sender address verified in Resend). The Resend test sender can be used for local testing, but delivery to an arbitrary inbox requires a verified sending domain. Keep the API key server-side; never add it to a `NEXT_PUBLIC_` variable.

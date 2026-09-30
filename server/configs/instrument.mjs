import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://bfada24bfa907f1b06a8c4195cabd16e@o4511183313567744.ingest.us.sentry.io/4511183322021888",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
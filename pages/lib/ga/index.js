export const pageview = (url) => {
  if (typeof window !== 'undefined') {
    window.gtag("config", process.env.ANALYTICS, {
      page_location: url,
    });
  }
}

export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
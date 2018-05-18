export default function logError (err, meta = {}) {
  if (window.Raven) {
    const sentry = window.Raven.captureException(err, {...meta})
    err.sentry = sentry
  } else {
    console.warn(err, meta)
  }
  return err
}

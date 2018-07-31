export default function logError (err, meta = {}) {
  if (window.Raven) {
    window.Raven.captureException(err, {...meta})
    err.eventId = window.Raven.lastEventId()
  } else {
    console.warn(err, meta)
  }
  return err
}

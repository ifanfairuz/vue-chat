export function generateProfile(profile) {
  return {
    id: profile.getId(),
    name: profile.getName(),
    image: profile.getImageUrl(),
    email: profile.getEmail(),
  }
}

export function saveSession(profile) {
  const auth = generateProfile(profile)
  sessionStorage.setItem('_AUTH', JSON.stringify(auth))
}

export function getSession() {
  const auth = sessionStorage.getItem('_AUTH') || '{}'
  return JSON.parse(auth)
}

export function resetSession() {
  return sessionStorage.setItem('_AUTH', '')
}

export default {
  save: saveSession,
  get: getSession,
  reset: resetSession
}
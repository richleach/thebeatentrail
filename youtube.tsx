import { google } from 'googleapis'

const youtube = google.youtube('v3')

const youtubeService = google.youtube({
  version: 'v3',
  auth: 'AIzaSyDFdaGd23nu4RpHJekcUk3cnjmpao11Hjk',
})

export default youtubeService

## Deployed to Vercel

https://youtube-favs-amber.vercel.app/

## Running the project

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TODO

- [x] Create next app with TypeScript and Tailwind
- [x] Add shadcn/ui for quick component creation
- [x] Look into [YouTube API)(https://developers.google.com/youtube/v3/getting-started)
- [x] Create project in GC Console and get API key
- [x] Add API key to .env file
- [x] Create mock call to YouTube API
- [x] Deploy to Vercel
- [x] Add react-query for fetching data
- [x] Add search input and button
- [x] Updated global.css to use youtube red
- [x] Add layout component with sidebar and header
- [ ] Add basic video card component
- [ ] Add basic video player component
- [x] Add Zustand for state management
- [ ] Add to favs button functionality
- [x] Input on splash page to ask for users name
- [ ] Add error if no name is entered
- [ ] Show favourites page first
- [ ] Create store for favourites
- [ ] Add functionality to add/remove from favourites
- [ ] Add store for tracking sidebar open/close
- [ ] local storage for user name
- [ ] Message August about YT API out of free tier

Thoughts:

"create an app which allows users
to search and play YouTube videos via the YouTube API."

YouTube APIs needed:
Search API: https://developers.google.com/youtube/v3/docs/search/list
Videos API: https://developers.google.com/youtube/v3/docs/videos/list

"You also need to enable users to manage local storage and curate a list of
selected or favourite YouTube videos so they can come back to those clips
and watch them again."

Local storage needed. Initial thoughts are to use Zustand for this. Maybe react-query just because I love it so much.

- Use Zustand for state management? Easy to add local storage.
- Use react-query for fetching data? Or too overkill? Decide later.

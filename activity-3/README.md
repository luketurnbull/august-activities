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
- [x] Add Zustand for state management
- [x] Input on splash page to ask for users name
- [x] Show dashboard page first
- [x] local storage for user name
- [x] Message August about YT API out of free tier
- [x] Create store for favourites
- [x] Add store for tracking sidebar open/close
- [x] Add to favs button functionality
- [x] Add functionality to add/remove from favourites
- [x] Create modal to watch videos
- [x] Add basic video player component
- [x] Embed YouTube video in modal
- [x] Updated video card component to look nicer and be reused on search page and favs page
- [x] Add infinite scroll pagination to search results
- [ ] Add sonner for notifications
- [ ] Store search in Zustand store so it doesn't clear when navigating to a different page
- [ ] Add error if no name is entered on the splash page
- [ ] Added error handling to fetchYouTubeVideos
- [ ] Show state of no search results
- [ ] Show state of no favourites
- [ ] Create slightly different video card for favourites page (maybe cross instead of star icon)

## Would be nice to have

- [ ] Add Framer Motion for animations
- [ ] Add Cool splash page - maybe a 3D models of stars that move with the cursor
- [ ] Store search history in Zustand store and display in dropdown

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

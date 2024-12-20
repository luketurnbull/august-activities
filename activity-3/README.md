## Deployed to Vercel

https://youtube-favs-amber.vercel.app/

## Running the project

# Update env variables

Follow instructions in env.template to create .env file

You will need a YouTube API key to run the project with NEXT_PUBLIC_YOUTUBE_API_KEY and NEXT_PUBLIC_IS_MOCK=false

If you want to run the project with mock data, set NEXT_PUBLIC_IS_MOCK=true, although this only returns 3 results and you cannot see the infinite scroll working.

The YouTube API key is free tier, so you will only get 100(ish) requests per day.

# Run the project in dev mode

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
- [x] Add sonner for notifications
- [x] Added error handling to fetchYouTubeVideos
- [x] Show state of no favourites
- [x] Store search in Zustand store so it doesn't clear when navigating to a different page
- [x] Add error if no name is entered on the splash page
- [x] Add Cool splash page - maybe a 3D models of stars that move with the cursor
- [ ] Show state of no search results
- [ ] Add Framer Motion for animations

## Aims

"create an app which allows users
to search and play YouTube videos via the YouTube API."

"You also need to enable users to manage local storage and curate a list of
selected or favourite YouTube videos so they can come back to those clips
and watch them again."

- Search for videos
- Play videos
- Add videos to favourites
- View favourites
- Remove from favourites

# SF Public Spaces

A website that shows off San Francisco's public spaces. 

Visit the site [here](https://soggybag.github.io/sf-public-spaces/)

## Existing Sites and Resources

- https://www.spur.org/sites/default/files/migrated/anchors/popos-guide.pdf
- https://sfpopos.com

## Contributing 

See our [contributing Guide](contributing.md).

Browse the issues to see what needs to be done. 

## TODOS

This is in progress, there is still a lot to be done. 

- List of addresses and collect data about spaces.
- ~~Sticky footer - https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Sticky_footers~~
- ~~Apply Masonary layout with flexbox~~
- ~~Add React Router navigation~~
  - ~~Home page - shows all spaces~~
  - ~~Details page -shows a single space with detail info~~
    - map
    - slide show
    - panorama
  - About or other pages? 
    - Brain storm other pages to show...
- ~~Host on GitHub Pages. Using gh-pages, this is not working. It's failing at logging in on the command line.~~

## Notes 

- Follow these instructions to setup GitHub Pages
  - https://reactgo.com/deploy-react-app-github-pages/
  - npm run deploy
  - If having problems try these: 
    - If not working clear the cache
      - rm -rf node_modules/gh-pages/.cache
    - Follow these instructions if **unable** to login
      - https://mycyberuniverse.com/how-fix-fatal-authentication-failed-for-https-github-com.html
- For images and other files in the public folder use: `process.env.PUBLIC_URL`
  - `<img src={`${process.env.PUBLIC_URL}/${image}`} width="300" height="200" />`
- What to show in a "Public Space" listing? 
  - Address
  - Image 
    - Icon
    - images 
    - by season
    - audio clip
      - hosted on sound cloud
      - ambient
    - amenities
      - coffee
      - bathroom
      - art
      - indoors/outdoors
      - size
      - benches/tables/chairs

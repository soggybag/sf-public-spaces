# SF Public Spaces

A website that shows off San Francisco's public spaces. 

## Existing Sites and Resources

- https://www.spur.org/sites/default/files/migrated/anchors/popos-guide.pdf
- https://sfpopos.com

## TODOS

This is in progress, there is still a lot to be done. 

- Host on GitHub Pages. Using gh-pages, this is not working. It's failing at logging in on the command line. 
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


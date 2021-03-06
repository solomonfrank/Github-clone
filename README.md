# Github - clone

A replica of github profile page using vanilla javacript, pure css and html and wepack

---

#### Guide to setup the project

- Clone the repo
- Run npm install
- Run npm start to run the project.
- Live link https://github-clone-example.netlify.app/

[live](https://github-clone-example.netlify.app/)

## Project top-level directory structure

```
dist
   ├── js
        ├── bundle.css         # Webpack bundle file
   ├── index.html           # finally html with injected bundle js file
src
    ├── css
    │   ├── style.css          #  css style file
    ├── images
    ├── js
        ├── index.js                  # Application entry point

    ├── services                         # Calling of external serveices
    ├── utils                     # reusable functions
    ├── view
        ├── base.js             #  View components
        ├── avatarView.js
        ├── bioView.js
        ├── repoView.js
    ├── index.html          # Html template
```

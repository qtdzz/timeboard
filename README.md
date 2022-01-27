### Introduction

- A simple time board for comparing different timelines in different timezones.
- Code in this project is a mess.
- This is supposed to run in a desktop browser, aka I didn't test in mobile/tablet screens.

### TODO
- [ ] Autosuggest the valid input time zones.
- [ ] DarkMode styles. (I am using Dark Reader extension in Firefox atm)
- [ ] Genearte sharable link. Use query parameters to preload time zones.
- [ ] Tests (of course x_x)

### Requirements

- Node.js and npm

### Getting started

You can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Image used by default template
├── src
│   ├── layout               # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # PostCSS style folder with Tailwind
│   ├── templates            # Default template
│   └── utils                # Utility folder
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

This project's boilerplate is generated by [Next JS Boilerplate](https://github.com/ixartz/Next-js-Boilerplate). See [LICENSE_boilerplate](LICENSE_boilerplate) for more information.

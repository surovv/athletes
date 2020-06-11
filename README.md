
## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install dependencies

```bash
npm install
#or
yarn install
```

3. Start the app
```bash
# Start a postgres database container
docker pull postgres:latest
npm run postgres
npm run migrate
npm run seed
npm start
```

You can find the assignment description in `task.pdf`.

Entrypoint is in `src/index.js`.

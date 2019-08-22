# Rest Api boilerplate

### Motivation
To provide a barebones Rest api with Express and Mongoose technology

## Features
- [Passport Authentication](http://www.passportjs.org/)
- [JWT token](https://jwt.io/)
- [CORS](https://github.com/expressjs/cors#readme)
- [Mongoose](https://mongoosejs.com/)
- [Eslint](https://eslint.org/)
- Password Encryption using [bcrypt](https://www.npmjs.com/package/bcrypt)
- Task Automaton via [Gulp](https://gulpjs.com/)
- Environment Varibles via [DotEnv](https://www.npmjs.com/package/dotenv)


## Prerequisites
- [MongoDb](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/)
- [Gulp Cli](https://gulpjs.com/)
- Command line tools

## Getting started
The easiest way to get started is to clone the repository.
```bash
# Clone the repository
git clone https://github.com/asp143/rest-api-boilerplate.git my-app

# Move to the directory
cd my-app

# Install the dependencies
npm install
```
Then copy and populate the fields on the `.env_sample` to a `.env` file.

Then start the app
```bash
npm start
```
## Contributing

If something is unclear, confusing, or needs to be refactored, please let me know. Pull requests are always welcome, but due to the opinionated nature of this project, I cannot accept every pull request. Please open an issue before submitting a pull request. This project uses Airbnb JavaScript Style Guide with a few minor exceptions. If you are submitting a pull request, please make sure you are using spaces, not tabs.

## License

The MIT License (MIT)

Copyright (c) 2014-2019 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
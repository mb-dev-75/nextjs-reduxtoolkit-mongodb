

<h1>Basic CRUD with NextJs (SSR), Redux-Toolkit and MongoDB.</h1>

<br />

There are many tutorials and repos only with Nextjs and Redux-Toolkit...
Here is one with MongoDB.



<br />
<img src="https://github.com/mb-dev-75/nextjs-reduxtoolkit-mongodb/blob/main/screen.png" />
<br />


## How To Use


```bash
# Clone this repository
$ git clone https://github.com/mb-dev-75/nextjs-reduxtoolkit-mongodb.git

# Go into the repository
$ cd nextjs-reduxtoolkit-mongodb

# Install dependencies
$ yarn (or npm) install

# Configure your database environment variable (in next.config.js)
$ MONGODB_URI: 'mongodb://localhost:27017/xxxx'

# Change the baseUri variable if needed, in particular the port 
# (in redux/features/taskSlice.js and tasksSlice.js)
$ const baseUri = "http://localhost:3000";

# Run the app
$ yarn dev (or npm run dev) 
```

<br />

## Credits

This app uses the following open source packages:

- [NextJs](https://nextjs.org/)
- [redux-toolkit](https://redux-toolkit.js.org/)
- [axios](https://axios-http.com/docs/intro)
- [mongoose](https://mongoosejs.com/)
- [next-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)
- [react-redux](https://react-redux.js.org/)
- [next-connect](https://github.com/hoangvvo/next-connect)

<br />

## Support

Feel free to give me a ⭐ if you like my work.

<br />

## License

MIT

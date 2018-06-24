# Gatsby-Contentful
The default Gatsby starter with additional packages and pages for connecting to the Contentful API to create blog post pages.

See the tutorial [here](https://medium.com/@rbrooker105/contentful-with-gatsbyjs-ce4c18442d43) for more information. If you wish to download and install this Contentful has provided this [Gatsby starter boilerplate](https://github.com/contentful-userland/gatsby-contentful-starter) which may be more suitable for your needs.

However if you wish to use this repo, first you need to clone it:

```
git@github.com:105ron/gatsby-contentful.git
```

Then change into the directory with `cd gatsby-contentful` and install the required dependencies with:

```
npm install
```

Then create the file `.env` in the root directory of your project and add your Contentful API keys like so:

```
SPACE_ID=your_space_id
ACCESS_TOKEN=your_access_token
```

View the medium article for information about deploying it on the web. You can see the preview site [here](https://gatsby-contentful.netlify.com).
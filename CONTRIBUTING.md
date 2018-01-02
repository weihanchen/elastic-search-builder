Project structure
===
```
|-src
   |-index.js --> root builder
   |-__test__/ --> root builder test
   |-body/ --> body builder
      |-__test__ --> body builder test
      |-query --> query builder
         |-__test__ --> query builder test
         |-index.js --> query builder entrypoint
         |-bool --> bool query builder
      |-aggs --> aggs builder, support sub aggs
      |-index.js --> body builder entrypoint

   |-options/ --> options builder
      |-__test__/ options builder test
      |-index.js --> options builder entrypoint
      |-indices.js --> search index option
      |-type.js --> search type option, support comma-separated string, array, args
```

## Commands
* `npm install` - install all dependencies
* `npm run lint` - lint src
* `npm run test` - run all unit test
* `npm run build:docs` - build doc from source code
* `npm run build` - build to dist

## Pull Request guidelines

* Make your changes in a new branch (this will help you rebase your code if/when needed)

```sh
git checkout -b my-feature-branch
```

* Make sure all tests pass

```sh
npm run lint
npm run test
```

You may need to rebase your branch on top of the latest version of the master branch. To do so is simple:

* checkout master

```sh
git checkout master
```

* Pull the latest changes from the server

```sh
git pull upstream master
```

* Switch back to your feature branch

```sh
git checkout my-feature-branch
```

* Rebase it on top of the master branch (there might be conflicts you'll need to resolve)

```sh
git rebase master -i
```

* Push the changes into your remote repository

```sh
git push
```

* Send a pull request to `elastic-search-builder:master`

That's it! Thank you for contributing!
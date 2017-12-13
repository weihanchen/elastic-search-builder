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

## Development
Fork, then clone the repo:

```sh
git clone https://github.com/your-username/elastic-search-builder.git
```

Install dependencies using npm 
```sh
npm install
```

#### Run tests
```sh
npm run lint
npm run test
```


## Pull Request guidelines
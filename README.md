#STATUS
Work In Progress


#WAT
Adds a missing feature of bower: a lockfile with all packages versions pinned

#WHY
Always track versions you deploy in the production.
It will allow you track security vulnerabilities in your releases

#HOW
- install with
`npm install -g bower-lockfile-resolver`

- In your [.bowerrc](http://bower.io/docs/config/)
add `bower-lockfile-resolver`

```
{
  "resolvers": [
    "bower-lockfile-resolver"
  ]
}
```

- run `bower install`
The `bower.lockfile` will be created. It will contain all currently used packages

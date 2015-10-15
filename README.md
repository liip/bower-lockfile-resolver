#STATUS
Work In on Bower* is hopeless:

[alt tag](https://raw.githubusercontent.com/liip/bower-lockfile-resolver/master/docs/most-evil-bower.jpg)

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
The `bower.lock` will be created. It will contain all currently used packages


#TODO
- [ ] autogenerate `bower.lock` if no bower.lock exits or bower update is called
- [ ] store bower packages hash in `bower.lock`
- [ ] emit warning if hash stored in `bower.lock` do not mach `bower.json`
- [ ] if `bower.lock` install depedencies based on `bower.lock`
- [ ] add new dependencies to `bower.lock`
- [ ] bower

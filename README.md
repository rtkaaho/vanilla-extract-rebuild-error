# vanilla-extract-rebuild-error

## Steps to Reproduce

1. Run `yarn dev` which tells vite to watch file changes and rebuild on file changes
2. Navigate to `src/components/button/button` and make a change to the button text
3. Note the error similar to this:

```
[vite:load-fallback] Could not load vanilla-extract-rebuild-error/src/sprinkles.css.ts.vanilla.css?hash=d39ecf9e2120879a6ab8b71bd8033bc8 (imported by src/sprinkles.css.ts?used): ENOENT: no such file or directory, open 'vanilla-extract-rebuild-error/src/sprinkles.css.ts.vanilla.css'
```
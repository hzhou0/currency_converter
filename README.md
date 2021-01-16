# currency_converter

## Um Hi there
I did say I was going to leave it, but I guess I couldn't stop myself. You might be a bit confused at everything here. I'm probably won't be
on until 11 at the earliest. 

I'll try to explain what's going on here. 

Chrome extensions can't import javascript modules very easily. We kind of need request modulfes for conversion rates. To do so would require listing every single file in manifest.json. This boilerplate includes webpack, which compiles all our libraries into single files. 

You may use wonder what all the *.vue files are. Vue is a frontend javascript library. I like it because it's simple and I'm stupid. I didn't want to use a library, but the aforementioned reasons kinda forced me.

## Directory structure
- src (where the codes are)
    - components (reusable components)
    - options (represents the options interface when clicking on extension)
    - popup (interface when you click on it)
- public (ignore this)
- dist (the compiled codes)
## What you should do now
- Pull the changes
- Install webstorm
- cd into this directory and run `npm install` and `npm run serve` with command prompt
- You should now have the dist directory. Load that as a chrome extension
- Look into vue, just the essentials should be enough https://vuejs.org/v2/guide/instance.html

I'll see you soon
:)

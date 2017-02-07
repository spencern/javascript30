![](https://javascript30.com/images/JS3-social-share.png)

# Spencer's JavaScript30 Challenge

This is where I'm publishing my #javascript30 challenge solutions. My approach is to build each project on my own before watching the video and then learning better ways to do the things from the video. In some cases I'll extend the projects and I'll try to note that here.

You can browse my solutions to the projects that I've completed in this repo. This repo is a fork of the original [javascript30 repo](https://github.com/wesbos/JavaScript30).

If you're interested in joining, the challenge is free and available here: [javascript30.com](https://javascript30.com)

#### 1. [Javascript Drum Kit](01-javascript-drum-kit)
This was a fun little project. I hadn't done much of anything with the `<audio>` element yet and it was pretty cool seeing how easy it was to implement a basic drum machine like this. I added mouse functionality to the project before I realized that the original was keyboard input only. My solution is similar but differently implemented than the original. 

Completion Time: ~45 Minutes

#### 2. [Javascript Clock](02-js-and-css-clock)
Quick project. Hadn't ever built an analog clock in JS before, now I have.

🕒 ✔ 

Hadn't used `transform-origin` before, so that was nice to learn about. Will come in handy at some point I'm sure. CSS Transforms are super easy and seem pretty powerful. It's nice to be using them during this challenge as they will feel second nature by the end of the week I'm sure.

Completion Time: ~30 Minutes

#### 3. [CSS Variables](03-css-variables)

Nice intro to CSS variables. These will be super powerful once they are more widely adopted. Unfortunately they don't work in IE or Edge currently so we've got a bit more time until we can start using them in production. According to [http://caniuse.com/#feat=css-variables](http://caniuse.com/#feat=css-variables) they've had support in Chrome since 49 and Firefox since 31. Safari, Opera, iOS Safari, and Chrome for Android also are supported currently. MS Edge is working on it and I doubt we'll ever see it in IE 11.

Completion Time: ~25 Minutes

#### 4. [Array Cardio Day 1](04-array-cardio-1)
Quick refresher on Array prototype methods. If you've used ES6 Arrow functions and Array prototype map, reduce, filter, and sort then this will be a pretty quick lesson. This would be a great lesson for people new to ES6, javascript or beginner programmers with a few weeks of experience under their belt.

Completion Time: ~10 Minutes

#### 5. [Flex Panel Gallery](05-flex-panel-gallery)
Great intro to CSS Flexbox. I learned a few new tricks, such as using a nested flexbox to center content vertically. Pretty cool. A caution about listening for `transitionend` and toggling a class when it has ended. If the transition is interrupted or reversed such as with a double click, you can end up with the `transitionend` listener firing on the wrong ending. I think it's better to explicitly add and remove classes in this case which gives more control in case a transition is interrupted.

Completion Time: ~20 Minutes


#### 6. [Type Ahead](06-type-ahead)
Nice refresher on a new ES6 feature `fetch`. Packs a bunch of JS into a short lesson - `fetch`, `Promises`, `map`, backticks, multi-line strings, and template literals / string interpolation, regular expressions - including building `RegExp` with variables. Really well put together.

Completion Time: ~30 Minutes.

#### 7. [Array Cardio Day 2](07-array-cardio-2)
Really like this style of lesson. It feels like there could be a whole "cardio" spinoff series. Short and sweet with a lot of value. Looks at `some`, `every`, `find`, and `findIndex` array methods as well as the `...` "spread" operator and ES6 style ways to remove an element from an array. Probably mostly refresher if you've got any experience with either [`underscore`](http://underscorejs.org/) or [`lodash`](https://lodash.com/) - but always nice to see how to do the same thing in vanilla JS.

Completion Time: ~10 Minutes


#### 8. [HTML 5 Canvas Painter](08-html5-canvas)
Interesting primer on how the HTML5 Canvas works and a good intro to the building blocks of Canvas and it's Context. Quick tutorial where you get to build "Paint" style features and a good jumping off point for building more complicated painting tools based HTML5 Canvas.

Completion Time: ~20 Minutes

#### 9. [Dev Tools Domination](09-dev-tools-domination)
Some nice tips for using chrome dev tools better. Using `Break On` in Chrome to break any time an attribute or subtree is modified or a node is removed is super useful and I have probably glossed over that feature a thousand times without experimenting. The rest of this lesson is on different `console` functions. Most of these I knew about (`console.table()`, `console.warn()`, `console.time()`, `console.log()`, etc) but `console.group()` and `console.dir()` were both new to me and I can see them being useful.

Completion Time: ~10 Minutes

#### 10. [Hold Shift to Check Multiple Checkboxes](10-hold-shift-and-check-checkboxes)
Really enjoyed this as it wasn't something I'd done before but has a really simple concept. The challenge is: given a list of checkboxes, checking one checkbox and then holding shift and selecting another checkbox should also select all checkboxes in between. I ended up using a depth first search to find all of the checkboxes between the checked and previously checked checkboxes and then checking them if shift was being held. The way Wes did it was definitely way simpler.

Completion Time: ~ 30 Minutes

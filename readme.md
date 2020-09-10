# Areas I'd like help
I would like some advice on the below topics please.

## Header and Footer (and hamburger menu)
I'd like the same header and footer on multiple pages. I presume we shouldn't copy and paste the same HTML code onto the different pages. Should we create a separate HTML file for each of these that can be imported into others somehow?

## Throttling
I made an animation to change the header when someone scrolls. I read that we should probably throttle the event listener, as it is firing a lot. The advice here involved using some libraries. Should I bother with this?

### Answer from Robin

I had to solve the same problem recently. There's a vanilla JS way to limit functions to only fire as often as the screen updates (generally 60Hz), which is [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame "MDN"). I used this to limit the firing of a function which decides whether to show custom left/right scrolling buttons, at [redbadger/esma-website@81141d2d9055f1e1b0e0268e66d66c78d58e98d4](https://github.com/redbadger/esma-website/commit/81141d2d9055f1e1b0e0268e66d66c78d58e98d4#diff-f687f1829229fce967e67c7f6628a9cdR142-R148).

This is advice I learnt from the [Document `scroll` event documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event#Scroll_event_throttling) which talks about throttling the scroll event and gives the following example:

```js
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
```

## Mailchimp sign up
I originally built a simple form for email sign up, and was going to link it to Form keep. But then I saw that Mailchimp actually has a free plan, so thought I should just link it to there.

I took some custom HTML from their site and tried to embed it into my page (in the footer on the home page). There are a lot of extra divs and IDs etc. that I would like to get rid of. However, I'm not sure what I can just delete and what is necessary (some of it is obviously important for stopping bots).

Some questions I have:
- It must be pulling some styling from somewhere. How?
- Which part is defining the next page after the user presses submit?
- What is the #mce-responses divs doing? Can these go? Or are they the bot protection ones? If so, what is the next div that is 5000px off the left doing?
- The form action attribute is obviously necessary. I presume the input name for the email field is critical to match up to their database. Is that it? Can I get rid of most of the other divs and attributes?

## HTML files
I presume we don't put them into separate folders, unless we want the URL path to match that. If I want index.html to be "BrewBix.com" and stockists.html to be BrewBix.com/stockists - how do I need to structure that?

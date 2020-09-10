# Areas I'd like help
I would like some advice on the below topics please.

## Header and Footer (and hamburger menu)
I'd like the same header and footer on multiple pages. I presume we shouldn't copy and paste the same HTML code onto the different pages. Should we create a separate HTML file for each of these that can be imported into others somehow?

## Throttling
I made an animation to change the header when someone scrolls. I read that we should probably throttle the event listener, as it is firing a lot. The advice here involved using some libraries. Should I bother with this?

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
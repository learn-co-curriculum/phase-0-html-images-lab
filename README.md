# HTML Images

<iframe width="640" height="480" src="//www.youtube.com/embed/VQjS7umZeGc?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>

<p><a href="https://www.youtube.com/watch?v=VQjS7umZeGc">HTML Images</a></p>

### Cloning Down Your Repository

If you already have a personal repository:

* Open the Learn IDE, and in the terminal, type

```
git clone https://github.com/<your_username_here>/exceptional-realty
cd exceptional-realty
git fetch --all
git checkout main-pages
```

If you want to use the demo repository to follow along:

```
git clone https://github.com/learn-co-curriculum/exceptional-realty-demo
cd exceptional-realty-demo
git fetch --all
git checkout html-images
```

**Remember to use `httpserver` to live test your webpage**

### `<img>`

Let's go back to `index.html` so we can add an image to our home page right
above our `<p>` tags.

The way we insert images is using the `<img>` element. The `<img>` element has
two main attributes, `src`, the _source_ of the image, and `alt`, the
_alternate_ text.

To add a source to our image, we can provide either a relative path to a file
we have locally, or provide a url to an existing image on the internet. We
downloaded an image to our `images` folder in an earlier lesson, but if you do
not have that image, you can download it manually by saving the file from here: [intro-pic.jpg](http://ironboard-curriculum-content.s3.amazonaws.com/front-end/lab-assets/intro-pic.jpg).
Alternatively, if you're using the in-browser IDE, `cd` into your `images`
folder and type:

```
wget http://ironboard-curriculum-content.s3.amazonaws.com/front-end/lab-assets/intro-pic.jpg
```

To reference this file in our source, we need to provide the exact, relative
path from where we are calling the file. Since the `images` folder is in the
same directory as `index.html`, the relative path would be
`images/intro-pic.jpg`. A file in the same directory would just need the
filename, and if we were leaving the current folder, moving up to a parent
directory, we would use `../` at the beginning of the path. Moving up two
directories would be `../../`, etc..

We should add an `alt` text to this image which will be displayed if the image
fails to load. The `alt` text is also important for screen readers for the
visually impaired, as the alt text will be read outloud. It is necessary to
provide a source for an image to load, and while it isn't required, it is
strongly advised to add an alternate text as well.

In our case, we want our alt text to say that this is an image of `a beautiful living room`.

One additional attribute that can be useful is the `title`. Content added to
this attribute will display when we hover over the image with our mouse. Let's
add 'Welcome to Exceptional Realty' to the `title` attribute. The `<img>`
element should now look like this:

```
<img src="images/intro-pic.jpg" alt="a beautiful living room" title="Welcome to Exceptional Realty">
```

If you're working on your own repository, go ahead and add, commit and push up
the work you've done to your remote, and then let's see what this image looks
like on a live page. Fire up `httpserver` and take a look at our `index.html`
page, we'll see that the image has appeared.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-images' title='HTML Images'>HTML Images</a> on Learn.co and start learning to code for free.</p>

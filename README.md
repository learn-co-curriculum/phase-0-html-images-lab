# HTML Images

## Learning Goals

1. Recognize the `img` tag
2. Use `img` tag attributes
3. Create images

## Introduction

Images are absolutely critical to making appealing and engaging websites. Can
you imagine the web without them? No cat memes. No animated dancing bananas! No
_Instagram_, at all. The internet would be a pretty boring and sad place!

![sad meme](https://s3.amazonaws.com/ironboard-learn/sad_meme.jpg)

In this lesson, we will be discussing how to include images in your HTML, along
with some important attributes of the tag. With images, you can make your web
pages much more engaging and visually appealing.

## Recognize the `img` Tag

Images are inserted into HTML using the `img` tag. The tag can display a variety
of image types, including animated GIFs, bitmaps and vector graphics, though
most often, the images we see on the internet are JPEG and PNG files.

The `img` tag is _self closing_, meaning it doesn't wrap around content or text.
Instead, the relevant information is stored in attributes within the tag itself.

There are two main attributes, `src`, the _source_ of the image, and `alt`, the
_alternate_ text.

## Use the `img` Tag Attributes

### The Image Source Attribute

The `src` attribute provides the relative path or URL to the image file we want
to display.  The image file can be local, say, for instance, if you're
publishing a website and have a local stored in a folder, your source may look
like this:

```html
<img src="../images/my_company_logo.png">
```

However, its very common, even when publishing your own websites, to have images
hosted somewhere else on the internet. In these situations, we need to provide a
full URL as the source:

```html
<img src="https://i.imgur.com/H1qsYEl.png">
```

The `src` attribute always necessary, as without it, the `img` tag would have
nothing to display.

### The Image Alt Attribute

The `alt` attribute contains text relevant to the image we're displaying, and
will appear in its place if the image fails to load.

While it isn't required, it is highly recommended that every image includes an
`alt` attribute. The `alt` text is important for screen readers for the visually
impaired, as the text will be read out loud to the site visitor. It is also nice
to provide some sort of message to a website visitor if the image fails to load,
especially if the image is relevant to the rest of the content.  Alt text on a
failed image will appear along with a small 'broken image' icon:

<img src="http://blog.flatironschool.com/wp-content/uploads/2015/03/FS_Circle_Slashes-150x150.png" alt="flatiron school logo">

To include an `alt` attribute, add it in along with the `src` attribute:

```html
<img src="https://i.imgur.com/H1qsYEl.png" alt="comedic crow gets wholesome support">
```

### The Image Title Attribute

One additional attribute that can be useful is the `title`. Content added to
this attribute will display when we hover over the image with our mouse. If we
were creating an `img` tag with `src`, `alt` and `title` for a company logo, it
might look something like this:

```
<img src="../images/my_company_logo.png" alt="my company name" title="We're here to help you!">
```

When a visitor to your company site hovers over the logo, they'll see a message
appear saying 'We're here to help you!'

The `title` attribute isn't necessary and is often left out, but can be a nice
detail to include.

## Create Images

Its time to practice creating some images! For this challenge, feel free to use
any images you'd like - the tests are looking for the correct tag and
attributes, not the content.  If you're not sure what to use, feel free to use
the following URL as your source:

https://s3.amazonaws.com/ironboard-learn/lion.jpg

![lion](https://s3.amazonaws.com/ironboard-learn/lion.jpg)

Your challenge is to write _three_ image tags:

* The first should have _just_ a _source_ attribute
* The second should include an alt text, in addition to a source
* The third should have both an alt and source attribute, as well as a _title_ attribute

Run `learn` and read the tests as you go.  When you've passed all the tests, run
`learn submit` before continuing on to the next lesson.

## Conclusion

With images, we can fill our web pages with visual content in addition to text.
Brand logos, animated instructional guides, personal artwork and photography, or
pictures of you and your friends - you now have the ability to create visually
appealing content of _any type!_

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-images' title='HTML Images'>HTML Images</a> on Learn.co and start learning to code for free.</p>

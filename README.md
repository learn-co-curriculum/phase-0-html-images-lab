# HTML Images

## Introduction

Images are absolutely critical to making appealing and engaging websites. Can
you imagine the web without them? No cat memes. No animated dancing bananas! No
_Instagram_ at all. The internet would be a pretty boring and sad place!

![sad meme](https://s3.amazonaws.com/ironboard-learn/sad_meme.jpg)

In this lesson, we will be discussing how to include images in your HTML, along
with some important attributes of the tag.

## Objective

- Learn how to add images to HTML using the `img` tag
- Practice using the `img` tag and some of its attributes, `src`, `alt` and `title`

### `img`

Images are inserted into HTML using the `img` tag. The tag can display a variety
of image types, including animated GIFs, bitmaps and vector graphics, though
most often, the images we see on the internet are JPEG and PNG files.

The `img` tag is _self closing_, meaning it doesn't wrap around content or text.
Instead, the relevant information is stored in attributes within the tag itself.

There are two main attributes, `src`, the _source_ of the image, and `alt`, the
_alternate_ text.

#### `src`

The `src` attribute provides the relative path or URL to the image file we want
to display.  The image file can be local, say, for instance, if you're
publishing a website and have a local stored in a folder, your source may look
like this:

```html
<img src="../images/my_company_logo.png">
```

However, its very common, even when publishing your own websites, to have images hosted somewhere else on the internet. In these situations, we need to provide a full URL as the source:

```html
<img src="https://i.imgur.com/H1qsYEl.png">
```

The `src` attribute always necessary, as without it, the `img` tag would have nothing to display.

#### `alt`

The `alt` attribute contains text relevant to the image we're displaying, and
will appear in its place if the image fails to load.

While it isn't required, it is highly recommended that every image includes an
`alt` attribute. The `alt` text is important for screen readers for the visually
impaired, as the text will be read out loud to the site visitor. It is also nice
to provide some sort of message to a website visitor if the image fails to load,
especially if the image is relevant to the rest of the content.  Alt text on a failed image will appear along with a small 'broken image' icon:

<img src="http://blog.flatironschool.com/wp-content/uploads/2015/03/FS_Circle_Slashes-150x150.pn" alt="flatiron school logo">

To include an `alt` attribute, add it in along with the `src` attribute:

```html
<img src="https://i.imgur.com/H1qsYEl.png" alt="comedic crow gets wholesome support">
```

#### `title`

One additional attribute that can be useful is the `title`. Content added to
this attribute will display when we hover over the image with our mouse. If we were creating an `img` tag with `src`, `alt` and `title` for a company logo, it might look something like this:

```
<img src="../images/my_company_logo.png" alt="my company name" title="We're here to help you!">
```

When a visitor to your company site hovers over the logo, they'll see a message
appear saying 'We're here to help you!'

The `title` attribute isn't necessary and is often left out, but can be a nice
detail to include.

## Challenge

Its time to practice creating some images!



<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-images' title='HTML Images'>HTML Images</a> on Learn.co and start learning to code for free.</p>

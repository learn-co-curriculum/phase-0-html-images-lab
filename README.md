# HTML Images

## Learning Goals

- Recognize the `img` tag
- Use `img` tag attributes
- Create images

## Introduction

Images are absolutely critical to making appealing and engaging websites. Can
you imagine the web without them? No cat memes. No animated dancing bananas! No
_Instagram_, at all. The internet would be a pretty boring and sad place!

![sad meme](https://s3.amazonaws.com/ironboard-learn/sad_meme.jpg)

In this lesson, we will be discussing how to include images in your HTML, along
with some important attributes of the tag. With images, you can make your web
pages much more engaging and visually appealing.

## Getting Started

**Fork and clone** this lesson into your local environment. Navigate into its
directory in the terminal, then run `code .` to open the files in Visual Studio
Code.

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
to display. The image file can be local; for example, if you're publishing a
website and have your images stored in a folder within your file structure, your
source may look like this:

```html
<img src="../images/my_company_logo.png" />
```

However, it's very common, even when publishing your own websites, to have
images hosted somewhere else on the internet. In these situations, we need to
provide a full URL as the source:

```html
<img src="https://i.imgur.com/H1qsYEl.png" />
```

The `src` attribute is always necessary, as without it, the `img` tag would have
nothing to display.

### The Image Alt Attribute

The `alt` attribute contains text relevant to the image we're displaying, and
will appear in its place if the image fails to load.

Alt text is important for screen readers for the visually impaired, as the text
will be read out loud to the site visitor. Alt text also improves accessibility
for non-disabled users, who will get a message if the image fails to load. It is
especially important if the image is used as additional content that expands
upon the written content.

Alt text on a failed image will appear along with a small 'broken image' icon:

![Flatiron Logo](broken-image.png)

To include an `alt` attribute, add it in along with the `src` attribute:

```html
<img
  src="https://i.imgur.com/H1qsYEl.png"
  alt="comedic crow gets wholesome support"
/>
```

Note that we've separated out each attribute on its own line in the HTML above.
When an element gets too long for one line in your text editor, separating the
code as shown above will keep your HTML code more readable.

> **Note**: While alt text isn't required _for the browser_, adherence to the
> Americans with Disabilities Act is often enforced through legislation. Your
> browser will not throw an error if there is no alt text with an image, so it
> is up to you as the developer to adhere to best practices for accessibility.

### The Image Title Attribute

One additional attribute that can be useful is the `title`. Content added to
this attribute will display when we hover over the image with our mouse. If we
were creating an `img` tag with `src`, `alt` and `title` for a company logo, it
might look something like this:

```html
<img
  src="../images/my_company_logo.png"
  alt="my company name"
  title="We're here to help you!"
/>
```

When a visitor to your company site hovers over the logo, they'll see a message
appear saying 'We're here to help you!'

The `title` attribute isn't necessary and is often left out, but can be a nice
detail to include.

## Create Images

Its time to practice creating some images! For this challenge, feel free to use
any images you'd like — the tests are looking for the correct tag and
attributes, not the content. If you're not sure what to use, feel free to use
the following URL as your source:

```txt
https://s3.amazonaws.com/ironboard-learn/lion.jpg
```

![lion](https://s3.amazonaws.com/ironboard-learn/lion.jpg)

Your challenge is to write _three_ image tags:

- The first should have _just_ a _source_ attribute
- The second should include an alt attribute, in addition to a source
- The third should have both an alt and source attribute, as well as a _title_
  attribute

Run `npm test` and read the tests as you go.

## Conclusion

With images, we can fill our web pages with visual content in addition to text.
Brand logos, animated instructional guides, personal artwork and photography, or
pictures of you and your friends — you now have the ability to create visually
appealing content of _any type!_

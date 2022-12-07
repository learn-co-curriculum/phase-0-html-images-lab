require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("the first <img>", () => {
  it("exists in the HTML file", () => {
    const img = document.querySelector("img");
    const hint = "The document should have a <img> element";

    expect(img, hint).to.exist;
  });

  it("has a valid src attribute", () => {
    const img = document.querySelector("img");

    const hint1 =
      "Every src attribute needs an assigned value, either a URL or relative path";
    expect(img, hint1).to.have.attribute("src").that.is.not.empty;
  });
});

describe("the second <img>", () => {
  it("exists in the HTML file", () => {
    const img = document.querySelectorAll("img")[1];
    const hint = "The document should have a second <img> element";

    expect(img, hint).to.exist;
  });

  it("has valid src and alt attributes", () => {
    const img = document.querySelectorAll("img")[1];

    const hint1 =
      "Every src attribute needs an assigned value, either a URL or relative path";
    expect(img, hint1).to.have.attribute("src").that.is.not.empty;

    const hint2 =
      "The alt attribute should have text content.  This will show up if the image fails to load";
    expect(img, hint2).to.have.attribute("alt").that.is.not.empty;
  });
});

describe("the third <img>", () => {
  it("exists in the HTML file", () => {
    const img = document.querySelectorAll("img")[2];

    const hint = "The document should have a third <img> element";
    expect(img, hint).to.exist;
  });

  it("has valid src, alt and title attributes", () => {
    const img = document.querySelectorAll("img")[2];

    const hint1 =
      "Every src attribute needs an assigned value, either a URL or relative path";
    expect(img, hint1).to.have.attribute("src").that.is.not.empty;

    const hint2 =
      "The alt attribute should have text content.  This will show up if the image fails to load";
    expect(img, hint2).to.have.attribute("alt").that.is.not.empty;

    const hint3 =
      "The title attribute should have text content.  This will show up when a mouse hovers over the image";
    expect(img, hint3).to.have.attribute("title").that.is.not.empty;
  });
});

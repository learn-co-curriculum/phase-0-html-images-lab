require 'pry'

RSpec.describe 'index.html' do
  it 'contains an initial <img> tag with a src attribute' do
    img = parsed_html.search('img').first
    expect(img).to_not be_nil, "The first <img> tag is missing!"


    expect(img.attributes["src"]).to_not be_nil, "Your first <img> tag needs a src attribute"
    expect(img.attributes["src"].value).to_not eq(""), "Every src attribute needs an assigned value, either a URL or relative path"
  end


  it 'contains a second <img> tag with src and alt attributes' do
    img = parsed_html.search('img')[1]
    expect(img).to_not be_nil, "The third <img> tag is missing!"

    expect(img.attributes["src"]).to_not be_nil, "Your second <img> tag needs a src attribute"
    expect(img.attributes["src"].value).to_not eq(""), "Every src attribute needs an assigned value, either a URL or relative path"
    expect(img.attributes["alt"]).to_not be_nil, "Your second <img> tag needs an alt attribute"
    expect(img.attributes["alt"].value).to_not eq(""), "The alt attribute should have text content.  This will show up if the image fails to load"
  end

  it 'contains a third <img> tag with src, alt and title attributes' do
    img = parsed_html.search('img')[2]
    expect(img).to_not be_nil, "The third <img> tag is missing!"

    expect(img.attributes["src"]).to_not be_nil, "Your third <img> tag needs a src attribute"
    expect(img.attributes["src"].value).to_not eq(""), "Every src attribute needs an assigned value, either a URL or relative path"
    expect(img.attributes["alt"]).to_not be_nil, "Your third <img> tag needs an alt attribute"
    expect(img.attributes["alt"].value).to_not eq(""), "The alt attribute should have text content.  This will show up if the image fails to load"
    expect(img.attributes["title"]).to_not be_nil, "Your third <img> tag needs an title attribute"
    expect(img.attributes["title"].value).to_not eq(""), "The title attribute should have text content.  This will show up when a mouse hovers over the image"
  end
end

class Size {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Image {
    // Add methods here
    // constructor image(string, url, size)
    // method getUrl
    // setUrl
    // hackerrank.com/image3 100 100
    // hackerrank.com/image2 300 400
    // hackerrank.com/image1 100 100
    url;
    height;
    width;
    constructor(url, size) {
        this.url = url;
        this.width = size.width;
        this.height = size.height;
        // console.log(size);
    };

    getUrl() {
        return this.url;
    };
// updates the URL
    setUrl(url) {
         this.url = url;
    };
    // updates the height and width property
    setSize(width, height) {
        this.width = width;
        this.height = height;
    };
// Returns the size of the image and uses new keyword
    getSize() {
        return new Size(this.width, this.height);
    };
    // Creates a clone of the class image using new keyword
    cloneImage() {
        return new Image(this.url, new Size(this.width, this.height));
    };
};
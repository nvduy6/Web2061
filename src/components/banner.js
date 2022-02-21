const Banner = {
    render() {
        var img = [];
        img[0] = "https://dojeannam.com/wp-content/uploads/2017/10/banner-thoi-trang-nam-cong-so-2018.jpg";
        img[1] = "https://theme.hstatic.net/1000373601/1000745736/14/slider_item_1_image.jpg?v=751";
        img[2] = "https://istante.gr/wp-content/uploads/2020/05/banner-polo-continuative-hp-1536x542.jpg";
        var dem = 0;

        function auto() {
            dem = dem + 1;
            document.getElementById('image').src = img[dem];
            if (dem == img.length - 1)
                dem = -1;
        }
        setInterval(auto, 4000);
        return /*html*/ `
        <div class="mt-1">
            <img  class="w-full h-72" src="https://dojeannam.com/wp-content/uploads/2017/10/banner-thoi-trang-nam-cong-so-2018.jpg" id="image" alt="">
        </div>
        `
    }
}
export default Banner;
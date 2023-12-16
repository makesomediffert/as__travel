function carousel({ carouselPath, contents, Duration = 1000, Easing, Delay = 0, startAnimation, finalAnimation }) {

    // Content must be one less than rows
    let rows = $(`${carouselPath} > .carousel_container`).length;
    if (rows >= -1 + contents.length) return console.error('Content must be one less than rows');

    for (let i = 1; i <= rows; i++) {

        let path = `${carouselPath} > .carousel_container:nth-child(${i})`;

        let neatContent = contents.slice(-1) + contents.slice(0, -1);
        neatContent = neatContent.split(',');

        $(`${path} > ul`).html(neatContent);

        let slides = $(`${path} > ul > li`),
            slideWidth = slides.width();

        $(`${path} > ul`).css({
            width: slideWidth * slides.length,
            marginLeft: -slideWidth * i
        });

    }


    // go to previous slide
    function prevSlide() {
        for (let i = 1; i <= rows; i++) {

            let path = `${carouselPath} > .carousel_container:nth-child(${i}) > ul`;

            let slideWidth = $(`${path} > li`).width();

            // The start animation
            if (startAnimation) startAnimation(path, Duration);

            $(path).delay(Delay).animate({

                left: +slideWidth

            }, Duration, Easing, () => {

                $(`${path} > li:last-child`).prependTo(path);
                $(path).css({ left: 0 });

                // The final animation
                if (finalAnimation) finalAnimation(path, Duration);

            });

        }

    }

    // go to next slide
    function nextSlide() {
        for (let i = 1; i <= rows; i++) {

            let path = `${carouselPath} > .carousel_container:nth-child(${i}) > ul`;

            let slideWidth = $(`${path} > li`).width();

            if (startAnimation) startAnimation(path, Duration);

            $(path).delay(Delay).animate({

                left: -slideWidth

            }, Duration, Easing, () => {

                $(`${path} > li:first-child`).appendTo(path);
                $(path).css({ left: 0 });

                if (finalAnimation) finalAnimation(path, Duration);

            });

        }

    }

    // trigger
    $(`${carouselPath} > .control.prev`).click(prevSlide);
    $(`${carouselPath} > .control.next`).click(nextSlide);

    // drag trigger
    function dragTrigger() {

        let path = `${carouselPath} > .carousel_container`,
            mouseDown = false,
            AllowedToMove = true,
            positionX = 0,
            returnToTheFirstPosition;

        $(path).mousedown(function (e) {
            mouseDown = true;
            $(path).css('cursor', 'grabbing');

            positionX = e.pageX;
        });
        $(window).mouseup(function () {
            mouseDown = false;
            $(path).css('cursor', 'grab');
        });

        $(path).mousemove(function (e) {

            if (mouseDown && AllowedToMove) {

                clearTimeout(returnToTheFirstPosition);

                let theAmountOfDisplacement = e.pageX - positionX;

                $(`${carouselPath} > .carousel_container > ul`).css('left', theAmountOfDisplacement);

                if (theAmountOfDisplacement >= 80) {
                    drag('prev')
                }
                else if (theAmountOfDisplacement <= -80) {
                    drag('next')
                }
                else {
                    returnToTheFirstPosition = setTimeout(() => {
                        $(`${carouselPath} > .carousel_container > ul`).animate({

                            left: 0

                        }, 300);
                    }, 500);
                }
            }

        });

        function drag(direction) {
            AllowedToMove = false;


            if (direction === 'prev') {
                for (let i = 1; i <= rows; i++) {

                    let path = `${carouselPath} > .carousel_container:nth-child(${i}) > ul`;
        
                    let slideWidth = $(`${path} > li`).width();
        

                    $(path).animate({
        
                        left: +slideWidth
        
                    }, 400 , () => {
        
                        $(`${path} > li:last-child`).prependTo(path);
                        $(path).css({ left: 0 });
        
                    });
        
                }
            } else {
                for (let i = 1; i <= rows; i++) {

                    let path = `${carouselPath} > .carousel_container:nth-child(${i}) > ul`;
        
                    let slideWidth = $(`${path} > li`).width();
        

                    $(path).animate({
        
                        left: -slideWidth
        
                    }, 400, () => {
        
                        $(`${path} > li:first-child`).appendTo(path);
                        $(path).css({ left: 0 });
        
                    });
        
                }
            }

            mouseDown = false;
            setTimeout(() => AllowedToMove = true, 500);
        }
    }
    dragTrigger();

    // Prevent bugs
    $(`${carouselPath} img`).attr('draggable', false);
}
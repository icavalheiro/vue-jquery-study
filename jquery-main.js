let sliders = $('.slider-selector');
sliders.each(function () {
    let slider = $(this);
    let ball = $(slider.find('div.ball'));
    let inputs = $(slider.find('input'));
    let selectedInput = $(slider.find('input[selected]'));
    inputs.on('change', function () {
        let element = $(this);
        //set selected class
        $(slider.find('label')).removeClass('selected');
        $(element.parent()).addClass('selected');

        //get the index
        let index = parseInt(element.data('index'));

        //move the background element to the right position
        ball.css('left', (200 * index) + 'px');
        ball.show();
    })

    if(selectedInput.length > 0){
        selectedInput.trigger('change');
    }
})
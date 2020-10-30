$(`.submit`).on('click', function(){
    var commentVal = $(`#comment`).val();
    var displayVal = $(`#displayName`).val();
    $(`#inputBox`).prepend(
    `<div class = 'newBox'>
        <div>
            <img src="userIcon.png">
        </div>
        <div class = 'mainDiv'>
            <button class = "submit2">Delete </button> 
            <button class = "submit3"> Edit</button>
            <span>${displayVal}</span>
            <p>${commentVal}</p>
            <div class = 'hideMe'>
                <input class = 'editBar' type = "text" placeholder="Comment" value="">
                <button class = 'hiddenSubmit'>Submit</button>
            </div>
        </div>
    </div>`);  
    
});

$(`#inputBox`).on('click', '.submit2', function(){
    const parent = $(this).parent();
    parent.parent().remove();
});

$(`#inputBox`).on('click', '.submit3', function(){
    const pizza = $(this).next().next().next();
    pizza.toggleClass('showMe');

});

$(`#inputBox`).on('click', '.hiddenSubmit', function(){
    var editVal = $(this).prev().val();
    const icecream = $(this).parent();
    const vanilla = icecream.prev();
    vanilla.replaceWith(`<p>${editVal}</p>`);

});


for(i = 1; i <=24 ; i++) {
    var calendarItem = $('<div>').addClass('d-flex calendar-item align-items-center')
    var timeDiv = $('<div>').addClass('time')
    if(i < 12) {
        var timeSlot = $('<p>').text(i + " AM")
    } else {
        var timeSlot = $('<p>').text(i + " PM")
    }

    // var task = $('<div>').addClass('task')
    var textarea = $('<textarea>')
    var button = $('<button>').addClass('save')

    button.text('Button')
    $('.container').append(calendarItem)
    calendarItem.append(timeDiv, textarea, button)
    timeDiv.append(timeSlot)

    var currentTime = parseInt(moment().format('h'))
    console.log(typeof(currentTime))
    
    // if(currentTime > i) {
    //     calendarItem.addClass('grey-bg')
    //     calendarItem.removeClass('red-bg')
    //     calendarItem.removeClass('green-bg')

    // } else if(currentTime = i) {
    //     calendarItem.addClass('red-bg')
    //     calendarItem.removeClass('grey-bg')
    //     calendarItem.removeClass('green-bg')
    // } else {
    //     calendarItem.addClass('green-bg')
    //     calendarItem.removeClass('grey-bg')
    //     calendarItem.removeClass('red-bg')
    // }

}
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sendEventButton').addEventListener('click', function () {

        console.log('custom-event-1');



        window.dataLayer.push({
            'event': 'custom-event-1',
            'eventCategory': 'Button',
            'eventAction': 'Click',
            'eventLabel': 'Send Event Button',
            'customValue': '77777777777',
            'eventValue': new Date().getTime()  // Add a unique value
        });

    });
});

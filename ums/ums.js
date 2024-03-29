document.getElementById('admission-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var formData = new FormData(this);
    var applicantName = formData.get('name');
    var applicantEmail = formData.get('email');
    var applicantPhone = formData.get('phone');
    var programOfInterest = formData.get('program');

    // Simulate submission and status update (replace with actual server-side processing)
    setTimeout(function() {
        var applicationStatus = 'Under Review'; // Simulated status
        document.getElementById('status').textContent = 'Dear ' + applicantName + ', your application for ' + programOfInterest + ' is ' + applicationStatus + '.';
    }, 2000); // Simulate delay of 2 seconds
});

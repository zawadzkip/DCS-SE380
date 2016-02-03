$(document).ready(function(){
	$('#failLoginAlert').hide();
	$('#loginBtn').click(function(){
		$('#failLoginAlert').hide();
		$.ajax({
			url: '/loginUser',
			success: function(resp){
				console.log(JSON.stringify(resp));
				if(resp.success){
					window.location = '/surveys'
				}
				else{
					$('#failLoginAlert').show();
				}
			},
			error: function(err){
				$('#failLoginAlert').show();
			}
		});
	});
});
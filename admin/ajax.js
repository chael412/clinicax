/// ===== Student Medical Section
$('#visitor_medical_update_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var user_id = $('#visitor_edit_id').val();
	var mp_id = $('#visitor_edit_mpid').val();
	var mh_id = $('#visitor_edit_mhid').val();

	var medicationPresent = $('input[name="visitor_edit_medicationPresent"]:checked').val();
	var diagnosis = $('#visitor_edit_diagnosis').val();
	var treatment = $('#visitor_edit_treatment').val();

	var hyperthension = $('#visitor_edit_hyperthension').is(':checked') ? 1 : 0;
	var diabetes = $('#visitor_edit_diabetes').is(':checked') ? 1 : 0;
	var cardio = $('#visitor_edit_cardio').is(':checked') ? 1 : 0;
	var ptb = $('#visitor_edit_ptb').is(':checked') ? 1 : 0;
	var hyperacidity = $('#visitor_edit_hyperacidity').is(':checked') ? 1 : 0;
	var allergy = $('#visitor_edit_allergy').is(':checked') ? 1 : 0;
	var epilepsy = $('#visitor_edit_epilepsy').is(':checked') ? 1 : 0;
	var asthma = $('#visitor_edit_asthma').is(':checked') ? 1 : 0;
	var dysmenorrhea = $('#visitor_edit_dysmenorrhea').is(':checked') ? 1 : 0;
	var liver = $('#visitor_edit_liver').is(':checked') ? 1 : 0;

	console.log(user_id);

	var data = {
		visitor_medical_update: true,
		user_id: user_id,
		mp_id: mp_id,
		mh_id: mh_id,
		medicationPresent: medicationPresent,
		diagnosis: diagnosis,
		treatment: treatment,
		hyperthension: hyperthension,
		diabetes: diabetes,
		cardio: cardio,
		ptb: ptb,
		hyperacidity: hyperacidity,
		allergy: allergy,
		epilepsy: epilepsy,
		asthma: asthma,
		dysmenorrhea: dysmenorrhea,
		liver: liver,
	};

	// Debugging: Log the data object
	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Updated Successfully!',
				}).then(() => {
					setTimeout(() => {
						window.location.href = 'visitors.php';
					}, 500);
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update',
				});
			}
		},
		error: function (xhr, status, error) {
			console.error('AJAX Error:', status, error);
		},
	});
});
$('#visitor_medical_add_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var user_id = $('#visitor_user_id').val();

	var medicationPresent = $('input[name="visitor_add_medicationPresent"]:checked').val();
	var diagnosis = $('#visitor_add_diagnosis').val();
	var treatment = $('#visitor_add_treatment').val();

	var hyperthension = $('#visitor_add_hyperthension').is(':checked') ? 1 : 0;
	var diabetes = $('#visitor_add_diabetes').is(':checked') ? 1 : 0;
	var cardio = $('#visitor_add_cardio').is(':checked') ? 1 : 0;
	var ptb = $('#visitor_add_ptb').is(':checked') ? 1 : 0;
	var hyperacidity = $('#visitor_add_hyperacidity').is(':checked') ? 1 : 0;
	var allergy = $('#visitor_add_allergy').is(':checked') ? 1 : 0;
	var epilepsy = $('#visitor_add_epilepsy').is(':checked') ? 1 : 0;
	var asthma = $('#visitor_add_asthma').is(':checked') ? 1 : 0;
	var dysmenorrhea = $('#visitor_add_dysmenorrhea').is(':checked') ? 1 : 0;
	var liver = $('#visitor_add_liver').is(':checked') ? 1 : 0;

	var data = {
		visitor_medical_add: true,
		user_id: user_id,
		medicationPresent: medicationPresent,
		diagnosis: diagnosis,
		treatment: treatment,
		hyperthension: hyperthension,
		diabetes: diabetes,
		cardio: cardio,
		ptb: ptb,
		hyperacidity: hyperacidity,
		allergy: allergy,
		epilepsy: epilepsy,
		asthma: asthma,
		dysmenorrhea: dysmenorrhea,
		liver: liver,
	};

	// Debugging: Log the data object
	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Successfully Created',
				}).then(() => {
					setTimeout(() => {
						window.location.href = 'visitors.php';
					}, 500);
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to create',
				});
			}
		},
		error: function (xhr, status, error) {
			console.error('AJAX Error:', status, error);
		},
	});
});

/// ==== Employee Medical Section
$('#employee_medical_add_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var user_id = $('#employee_user_id').val();

	var medicationPresent = $('input[name="employee_add_medicationPresent"]:checked').val();
	var diagnosis = $('#employee_add_diagnosis').val();
	var treatment = $('#employee_add_treatment').val();

	var hyperthension = $('#employee_add_hyperthension').is(':checked') ? 1 : 0;
	var diabetes = $('#employee_add_diabetes').is(':checked') ? 1 : 0;
	var cardio = $('#employee_add_cardio').is(':checked') ? 1 : 0;
	var ptb = $('#employee_add_ptb').is(':checked') ? 1 : 0;
	var hyperacidity = $('#employee_add_hyperacidity').is(':checked') ? 1 : 0;
	var allergy = $('#employee_add_allergy').is(':checked') ? 1 : 0;
	var epilepsy = $('#employee_add_epilepsy').is(':checked') ? 1 : 0;
	var asthma = $('#employee_add_asthma').is(':checked') ? 1 : 0;
	var dysmenorrhea = $('#employee_add_dysmenorrhea').is(':checked') ? 1 : 0;
	var liver = $('#employee_add_liver').is(':checked') ? 1 : 0;

	var data = {
		employee_medical_add: true,
		user_id: user_id,
		medicationPresent: medicationPresent,
		diagnosis: diagnosis,
		treatment: treatment,
		hyperthension: hyperthension,
		diabetes: diabetes,
		cardio: cardio,
		ptb: ptb,
		hyperacidity: hyperacidity,
		allergy: allergy,
		epilepsy: epilepsy,
		asthma: asthma,
		dysmenorrhea: dysmenorrhea,
		liver: liver,
	};

	// Debugging: Log the data object
	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Successfully Created',
				}).then(() => {
					setTimeout(() => {
						window.location.href = 'employees.php';
					}, 500);
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to create',
				});
			}
		},
		error: function (xhr, status, error) {
			console.error('AJAX Error:', status, error);
		},
	});
});
$('#employee_medical_update_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var user_id = $('#employee_edit_id').val();
	var mp_id = $('#employee_edit_mpid').val();
	var mh_id = $('#employee_edit_mhid').val();

	var medicationPresent = $('input[name="employee_edit_medicationPresent"]:checked').val();
	var diagnosis = $('#employee_edit_diagnosis').val();
	var treatment = $('#employee_edit_treatment').val();

	var hyperthension = $('#employee_edit_hyperthension').is(':checked') ? 1 : 0;
	var diabetes = $('#employee_edit_diabetes').is(':checked') ? 1 : 0;
	var cardio = $('#employee_edit_cardio').is(':checked') ? 1 : 0;
	var ptb = $('#employee_edit_ptb').is(':checked') ? 1 : 0;
	var hyperacidity = $('#employee_edit_hyperacidity').is(':checked') ? 1 : 0;
	var allergy = $('#employee_edit_allergy').is(':checked') ? 1 : 0;
	var epilepsy = $('#employee_edit_epilepsy').is(':checked') ? 1 : 0;
	var asthma = $('#employee_edit_asthma').is(':checked') ? 1 : 0;
	var dysmenorrhea = $('#employee_edit_dysmenorrhea').is(':checked') ? 1 : 0;
	var liver = $('#employee_edit_liver').is(':checked') ? 1 : 0;

	console.log(user_id);

	var data = {
		employee_medical_update: true,
		user_id: user_id,
		mp_id: mp_id,
		mh_id: mh_id,
		medicationPresent: medicationPresent,
		diagnosis: diagnosis,
		treatment: treatment,
		hyperthension: hyperthension,
		diabetes: diabetes,
		cardio: cardio,
		ptb: ptb,
		hyperacidity: hyperacidity,
		allergy: allergy,
		epilepsy: epilepsy,
		asthma: asthma,
		dysmenorrhea: dysmenorrhea,
		liver: liver,
	};

	// Debugging: Log the data object
	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Updated Successfully!',
				}).then(() => {
					setTimeout(() => {
						window.location.href = 'employees.php';
					}, 500);
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update',
				});
			}
		},
		error: function (xhr, status, error) {
			console.error('AJAX Error:', status, error);
		},
	});
});

/// ===== Student Medical Section
$('#student_medical_update_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var user_id = $('#student_edit_id').val();
	var mp_id = $('#student_edit_mpid').val();
	var mh_id = $('#student_edit_mhid').val();

	var medicationPresent = $('input[name="student_medicationPresent"]:checked').val();
	var diagnosis = $('#student_edit_diagnosis').val();
	var treatment = $('#student_edit_treatment').val();

	var hyperthension = $('#student_edit_hyperthension').is(':checked') ? 1 : 0;
	var diabetes = $('#student_edit_diabetes').is(':checked') ? 1 : 0;
	var cardio = $('#student_edit_cardio').is(':checked') ? 1 : 0;
	var ptb = $('#student_edit_ptb').is(':checked') ? 1 : 0;
	var hyperacidity = $('#student_edit_hyperacidity').is(':checked') ? 1 : 0;
	var allergy = $('#student_edit_allergy').is(':checked') ? 1 : 0;
	var epilepsy = $('#student_edit_epilepsy').is(':checked') ? 1 : 0;
	var asthma = $('#student_edit_asthma').is(':checked') ? 1 : 0;
	var dysmenorrhea = $('#student_edit_dysmenorrhea').is(':checked') ? 1 : 0;
	var liver = $('#student_edit_liver').is(':checked') ? 1 : 0;

	console.log(user_id);

	var data = {
		student_medical_update: true,
		user_id: user_id,
		mp_id: mp_id,
		mh_id: mh_id,
		medicationPresent: medicationPresent,
		diagnosis: diagnosis,
		treatment: treatment,
		hyperthension: hyperthension,
		diabetes: diabetes,
		cardio: cardio,
		ptb: ptb,
		hyperacidity: hyperacidity,
		allergy: allergy,
		epilepsy: epilepsy,
		asthma: asthma,
		dysmenorrhea: dysmenorrhea,
		liver: liver,
	};

	// Debugging: Log the data object
	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Updated Successfully!',
				}).then(() => {
					setTimeout(() => {
						window.location.href = 'students.php';
					}, 500);
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update',
				});
			}
		},
		error: function (xhr, status, error) {
			console.error('AJAX Error:', status, error);
		},
	});
});

$('#student_medical_add_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var user_id = $('#student_user_id').val();

	var medicationPresent = $('input[name="student_medicationPresent"]:checked').val();
	var diagnosis = $('#student_diagnosis').val();
	var treatment = $('#student_treatment').val();

	var hyperthension = $('#student_hyperthension').is(':checked') ? 1 : 0;
	var diabetes = $('#student_diabetes').is(':checked') ? 1 : 0;
	var cardio = $('#student_cardio').is(':checked') ? 1 : 0;
	var ptb = $('#student_ptb').is(':checked') ? 1 : 0;
	var hyperacidity = $('#student_hyperacidity').is(':checked') ? 1 : 0;
	var allergy = $('#student_allergy').is(':checked') ? 1 : 0;
	var epilepsy = $('#student_epilepsy').is(':checked') ? 1 : 0;
	var asthma = $('#student_asthma').is(':checked') ? 1 : 0;
	var dysmenorrhea = $('#student_dysmenorrhea').is(':checked') ? 1 : 0;
	var liver = $('#student_liver').is(':checked') ? 1 : 0;

	var data = {
		student_medical_add: true,
		user_id: user_id,
		medicationPresent: medicationPresent,
		diagnosis: diagnosis,
		treatment: treatment,
		hyperthension: hyperthension,
		diabetes: diabetes,
		cardio: cardio,
		ptb: ptb,
		hyperacidity: hyperacidity,
		allergy: allergy,
		epilepsy: epilepsy,
		asthma: asthma,
		dysmenorrhea: dysmenorrhea,
		liver: liver,
	};

	// Debugging: Log the data object
	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Successfully Created',
				}).then(() => {
					setTimeout(() => {
						window.location.href = 'students.php';
					}, 500);
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to create',
				});
			}
		},
		error: function (xhr, status, error) {
			console.error('AJAX Error:', status, error);
		},
	});
});

/// ===================================== ADMIN SECTION===============================================================
$('#admin_add_btn').on('click', function (e) {
	e.preventDefault();

	var username = $('#username').val();
	var password = $('#password').val();
	var confirmPassword = $('#confirmpassword').val();

	if (password !== confirmPassword) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Passwords do not match!',
		});
		return;
	}

	// Check if any of the required fields are empty
	if (!username || !password || !confirmPassword) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		admin_add: true,
		username: username,
		password: password,
	};

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Admin Successfully Added',
				});
				$('#adminform_add')[0].reset();
				$('#modal_adminADD').modal('hide');
				$('.admin_table').load(window.location.href + ' .admin_table');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to add admin',
				});
			}
		},
	});
});

$('#admin_update_btn').on('click', function (e) {
	e.preventDefault();

	var adminID = $('#admin_id').val();
	var username = $('#username').val();
	var password = $('#password').val();

	// Check if any of the required fields are empty
	if (!username || !password) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: {
			admin_update: true,
			admin_id: adminID,
			username: username,
			password: password,
		},
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Admin Successfully Updated',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'admin.php';
					}
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Admin update failed',
				});
			}
		},
	});
});

function deleteAdmin(adminID) {
	if (confirm('Are you sure you want to delete this Admin?')) {
		$.ajax({
			url: 'code.php',
			type: 'GET',
			data: { a_idz: adminID },
			success: function (response) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: response,
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'admin.php';
					}
				});
			},
		});
	}
}

/// ===================================== OJT SECTION===============================================================
function deleteOjt(ojt_idx) {
	if (confirm('Are you sure you want to delete this Student?')) {
		$.ajax({
			url: 'code.php',
			type: 'GET',
			data: { ojt_idx: ojt_idx },
			success: function (response) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: response,
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'ojts.php';
					}
				});
			},
		});
	}
}

$('#ojtmed_update_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var ojtID = $('#ojtID').val();
	var urinalysisFile = $('#urinalysis')[0].files[0];
	var xRayFile = $('#x_ray')[0].files[0];
	var pregnancyTestFile = $('#pregnancy_test')[0].files[0];

	// Check if any of the required fields are empty
	if (!ojtID || !urinalysisFile || !xRayFile || !pregnancyTestFile) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return; // Exit function if any required field is empty
	}

	var formData = new FormData();
	formData.append('ojtmed_update', true);
	formData.append('ojtID', ojtID);
	formData.append('urinalysis', urinalysisFile);
	formData.append('x_ray', xRayFile);
	formData.append('pregnancy_test', pregnancyTestFile);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: formData,
		contentType: false,
		processData: false,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Updated Successfully',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'ojts.php';
					}
				});
				$('#ojtform_edit')[0].reset();
				$('.ojts_table').load(window.location.href + ' .ojts_table');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update',
				});
			}
		},
	});
});

$('#ojtmed_add_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var ojtID = $('#ojtID').val();
	var urinalysisFile = $('#urinalysis')[0].files[0];
	var xRayFile = $('#x_ray')[0].files[0];
	var pregnancyTestFile = $('#pregnancy_test')[0].files[0];

	var medicationPresent = $('input[name="medicationPresent"]:checked').val();
	var diagnosis = $('#diagnosis').val();
	var treatment = $('#treatment').val();

	var hyperthension = $('#hyperthension').is(':checked') ? 1 : 0;
	var diabetes = $('#diabetes').is(':checked') ? 1 : 0;
	var cardio = $('#cardio').is(':checked') ? 1 : 0;
	var ptb = $('#ptb').is(':checked') ? 1 : 0;
	var hyperacidity = $('#hyperacidity').is(':checked') ? 1 : 0;
	var allergy = $('#allergy').is(':checked') ? 1 : 0;
	var epilepsy = $('#epilepsy').is(':checked') ? 1 : 0;
	var asthma = $('#asthma').is(':checked') ? 1 : 0;
	var dysmenorrhea = $('#dysmenorrhea').is(':checked') ? 1 : 0;
	var liver = $('#liver').is(':checked') ? 1 : 0;

	//Check if any of the required fields are empty
	if (!ojtID || !urinalysisFile || !xRayFile || !pregnancyTestFile) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Urinalysis, xRay and pregnancyTest are  required.',
		});
		return;
	}

	var formData = new FormData();
	formData.append('ojtmed_add', true);
	formData.append('ojtID', ojtID);
	formData.append('urinalysis', urinalysisFile);
	formData.append('x_ray', xRayFile);
	formData.append('pregnancy_test', pregnancyTestFile);
	formData.append('medicationPresent', medicationPresent);
	formData.append('diagnosis', diagnosis);
	formData.append('treatment', treatment);
	formData.append('hyperthension', hyperthension);
	formData.append('diabetes', diabetes);
	formData.append('cardio', cardio);
	formData.append('ptb', ptb);
	formData.append('hyperacidity', hyperacidity);
	formData.append('allergy', allergy);
	formData.append('epilepsy', epilepsy);
	formData.append('asthma', asthma);
	formData.append('dysmenorrhea', dysmenorrhea);
	formData.append('liver', liver);

	// console Log each key-value pair in FormData
	// for (let pair of formData.entries()) {
	// 	console.log(pair[0] + ', ' + pair[1]);
	// }

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: formData,
		contentType: false,
		processData: false,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Successfully Created',
				});
				$('#ojtform_add')[0].reset();
				$('#modal_ojtADD').modal('hide');
				$('.ojts_table').load(window.location.href + ' .ojts_table');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to create',
				});
			}
		},
	});
});

function performSearch(searchTerm) {
	$.ajax({
		url: 'ojt_search.php',
		method: 'GET',
		data: { searchTerm: searchTerm },
		dataType: 'json',
		success: function (res) {
			console.log(res);
			$('#modal_ojtREQ').modal('show');
			var tbody = $('#modal_ojtREQ .ojtsearch_table');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.student_no + '</td>' + '<td>' + res.student_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.log('Error:', error);
		},
	});
}

$('#ojtsearch_input').on('input', function () {
	var searchTerm = $(this).val();
	console.log('Search term:', searchTerm);
	performSearch(searchTerm);
	var input = $('#ojtsearch_input_input').val();
	console.log(input);
});

$(document).on('click', '#search_ojt_btn', function () {
	console.log('clicked');
	var ojt_id = $(this).attr('id');
	console.log(ojt_id);

	$.ajax({
		url: 'fetchojt.php',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			$('#modal_ojtREQ').modal('show');
			var tbody = $('#modal_ojtREQ .ojtsearch_table');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.student_no + '</td>' + '<td>' + res.student_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$(document).on('click', '.select_ojt', function () {
	var ojt_id = $(this).attr('id');
	console.log(ojt_id);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: { ojt_id: ojt_id },
		dataType: 'json',
		success: function (res) {
			console.log(res);
			$('#modal_ojtREQ').modal('hide');
			// $('#search_input').val('');
			$('#modal_ojtADD #ojtID').val(res.s_id);
			$('#modal_ojtADD #student_name').val(res.student_name);
		},
	});
});

/// ===================================== STUDENT SECTION===============================================================
$('#student_add_btn').on('click', function (e) {
	e.preventDefault();

	var student_no = $('#student_no').val();
	var course_id = $('#course_id').val();
	var firstname = $('#firstname').val();
	var middlename = $('#middlename').val();
	var lastname = $('#lastname').val();
	var birthdate = $('#birthdate').val();
	var sex = $('#sex').val();
	var contact_no = $('#contact_no').val();

	if (!student_no || !course_id || !firstname || !lastname || !sex) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		student_add: true,
		student_no: student_no,
		course_id: course_id,
		firstname: firstname,
		middlename: middlename,
		lastname: lastname,
		birthdate: birthdate,
		sex: sex,
		contact_no: contact_no,
	};

	console.log(data);
	console.log('Clicked');
	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Student Successfully Added',
				});
				$('#studentform_add')[0].reset();
				$('#modal_studentADD').modal('hide');
				$('.students_table').load(window.location.href + ' .students_table');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to add student',
				});
			}
		},
	});
});

$('#student_update_btn').on('click', function (e) {
	e.preventDefault();

	var sID = $('#sID').val();
	var student_no = $('#student_no').val();
	var course_id = $('#course_id').val();
	var firstname = $('#firstname').val();
	var middlename = $('#middlename').val();
	var lastname = $('#lastname').val();
	var birthdate = $('#birthdate').val();
	var sex = $('#sex').val();
	var contact_no = $('#contact_no').val();

	// console.log(course_id);

	if (!student_no || !sID || !course_id || !firstname || !lastname || !sex) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		student_update: true,
		sID: sID,
		student_no: student_no,
		course_id: course_id,
		firstname: firstname,
		middlename: middlename,
		lastname: lastname,
		birthdate: birthdate,
		sex: sex,
		contact_no: contact_no,
	};

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response.trim() === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Student updated successfully',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'students.php';
					}
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update studentrr: ' + response,
				});
			}
		},
		error: function (xhr, status, error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Failed to update student: ' + error,
			});
		},
	});
});

function deleteStudent(stud_idx) {
	if (confirm('Are you sure you want to delete this Student?')) {
		$.ajax({
			url: 'code.php',
			type: 'GET',
			data: { stud_idx: stud_idx },
			success: function (response) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: response,
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'students.php';
					}
				});
			},
		});
	}
}

/// ===================================== RLE SECTION===============================================================
$(document).on('click', '#search_rle_btn', function () {
	console.log('clicked');
	var rle_id = $(this).attr('id');
	console.log(rle_id);

	$.ajax({
		url: 'fetchrle.php',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			$('#modal_rleREQ').modal('show');
			var tbody = $('#modal_rleREQ .rlesearch_table');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.student_no + '</td>' + '<td>' + res.student_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$(document).on('click', '.select_rle', function () {
	var rle_id = $(this).attr('id');
	console.log(rle_id);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: { rle_id: rle_id },
		dataType: 'json',
		success: function (res) {
			console.log(res);
			$('#modal_rleREQ').modal('hide');
			// $('#search_input').val('');
			$('#modal_rleADD #sID').val(res.s_id);
			$('#modal_rleADD #student_name').val(res.student_name);
		},
	});
});

$('#rlemed_add_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var sID = $('#sID').val();
	var urinalysisFile = $('#urinalysis')[0].files[0];
	var xRayFile = $('#x_ray')[0].files[0];
	var pregnancyTestFile = $('#pregnancy_test')[0].files[0];
	var screeningFile = $('#screening')[0].files[0];
	var fecalysisFile = $('#fecalysis')[0].files[0];

	// Check if any of the required fields are empty
	if (!sID || !urinalysisFile || !xRayFile || !pregnancyTestFile || !screeningFile || !fecalysisFile) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var formData = new FormData();
	formData.append('rlemed_add', true);
	formData.append('sID', sID);
	formData.append('urinalysis', urinalysisFile);
	formData.append('x_ray', xRayFile);
	formData.append('pregnancy_test', pregnancyTestFile);
	formData.append('screening', screeningFile);
	formData.append('fecalysis', fecalysisFile);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: formData,
		contentType: false,
		processData: false,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Successfully Created',
				});
				$('#rleform_add')[0].reset();
				$('#modal_rleADD').modal('hide');
				$('.rle_table').load(window.location.href + ' .rle_table');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to create',
				});
			}
		},
	});
});

/// ===================================== TEACHING SECTION===============================================================
$(document).on('click', '#search_teach_btn', function () {
	console.log('clicked');
	var teach_id = $(this).attr('id');
	console.log(teach_id);

	$.ajax({
		url: 'fetchteach.php',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			$('#modal_teachREQ').modal('show');
			var tbody = $('#modal_teachREQ .teachsearch_table');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.student_no + '</td>' + '<td>' + res.student_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$(document).on('click', '.select_teach', function () {
	var teach_id = $(this).attr('id');
	console.log(teach_id);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: { teach_id: teach_id },
		dataType: 'json',
		success: function (res) {
			console.log(res);
			$('#modal_teachREQ').modal('hide');
			// $('#search_input').val('');
			$('#modal_teachADD #sID').val(res.s_id);
			$('#modal_teachADD #student_name').val(res.student_name);
		},
	});
});

$('#teachmed_add_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var sID = $('#sID').val();
	var cbcFile = $('#cbc')[0].files[0];
	var urinalysisFile = $('#urinalysis')[0].files[0];
	var xRayFile = $('#x_ray')[0].files[0];

	// Check if any of the required fields are empty
	if (!sID || !cbcFile || !urinalysisFile || !xRayFile) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var formData = new FormData();
	formData.append('teachmed_add', true);
	formData.append('sID', sID);
	formData.append('cbc', cbcFile);
	formData.append('urinalysis', urinalysisFile);
	formData.append('x_ray', xRayFile);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: formData,
		contentType: false,
		processData: false,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Successfully Created',
				});
				$('#teachform_add')[0].reset();
				$('#modal_teachADD').modal('hide');
				$('.teach_table').load(window.location.href + ' .teach_table');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to create',
				});
			}
		},
	});
});

/// ===================================== FOOD SECTION===============================================================
$(document).on('click', '#search_food_btn', function () {
	console.log('clicked');
	var food_id = $(this).attr('id');
	console.log(food_id);

	$.ajax({
		url: 'fetchfood.php',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			console.log(res);
			$('#modal_rleREQ').modal('show');
			var tbody = $('#modal_foodREQ .foodsearch_table');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.student_no + '</td>' + '<td>' + res.student_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$(document).on('click', '.select_food', function () {
	var food_id = $(this).attr('id');
	console.log(food_id);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: { food_id: food_id },
		dataType: 'json',
		success: function (res) {
			console.log(res);
			$('#modal_foodREQ').modal('hide');
			// $('#search_input').val('');
			$('#modal_foodADD #sID').val(res.s_id);
			$('#modal_foodADD #student_name').val(res.student_name);
		},
	});
});

$('#foodmed_add_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var sID = $('#sID').val();
	var urinalysisFile = $('#urinalysis')[0].files[0];
	var xRayFile = $('#x_ray')[0].files[0];
	var pregnancyTestFile = $('#pregnancy_test')[0].files[0];
	var screeningFile = $('#screening')[0].files[0];
	var fecalysisFile = $('#fecalysis')[0].files[0];

	// Check if any of the required fields are empty
	if (!sID || !urinalysisFile || !xRayFile || !pregnancyTestFile || !screeningFile || !fecalysisFile) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var formData = new FormData();
	formData.append('rlemed_add', true);
	formData.append('sID', sID);
	formData.append('urinalysis', urinalysisFile);
	formData.append('x_ray', xRayFile);
	formData.append('pregnancy_test', pregnancyTestFile);
	formData.append('screening', screeningFile);
	formData.append('fecalysis', fecalysisFile);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: formData,
		contentType: false,
		processData: false,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medical Successfully Created',
				});
				$('#rleform_add')[0].reset();
				$('#modal_rleADD').modal('hide');
				$('.rle_table').load(window.location.href + ' .rle_table');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to create',
				});
			}
		},
	});
});

/// ===================================== 	STUDENT CONSULT SECTION===============================================================
$(document).on('click', '#search_consult_btn', function () {
	console.log('clicked');
	var consult_id = $(this).attr('id');
	console.log(consult_id);

	$.ajax({
		url: 'fetchconsult.php',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			$('#modal_consultREQ').modal('show');
			var tbody = $('#modal_consultREQ .consultsearch_table');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.index + '</td>' + '<td>' + res.client_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$(document).on('click', '.select_consult', function () {
	var consult_id = $(this).attr('id');
	console.log(consult_id);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: { consult_id: consult_id },
		dataType: 'json',
		success: function (res) {
			$('#modal_consultREQ').modal('hide');

			// Update form fields with the data from the server
			$('#consultform_add #uID').val(res.u_id);
			$('#consultform_add #client_name').val(res.client_name);

			// Check if medical records exist
			if (res.mc_id) {
				// Medical records exist, create the medicalInfo HTML
				var medicalInfo = `
                    <tr>
                        <td colspan="2">
                            <p><b>Diagnosis:</b> ${res.mp_diagnosis}</p>
                            <p><b>Treatment:</b> ${res.mp_treatment}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><strong>Hypertension:</strong> 
                                <img width="20" src="${res.Hyperthension == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Diabetes:</strong> 
                                <img width="20" src="${res.Diabetes == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Cardiovascular disease:</strong> 
                                <img width="20" src="${res.Cardiovascular_desease == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Hyperacidity:</strong> 
                                <img width="20" src="${res.Hyperacidity == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                        </td>
                        <td>
                            <p><strong>Allergy:</strong> 
                                <img width="20" src="${res.Allergy == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Epilepsy:</strong> 
                                <img width="20" src="${res.Epilepsy == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Dysmenorrhea:</strong> 
                                <img width="20" src="${res.Dysmenorrhea == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Liver Disease:</strong> 
                                <img width="20" src="${res.liver_Desease == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                        </td>
                    </tr>`;

				// Append the medicalInfo to your table body
				$('#medicalData').html(medicalInfo);
			} else {
				// No medical records, show a message or clear the table
				$('#medicalData').html('<tr><td colspan="2"><h4 class="text-danger">No medical records found.</h4></td></tr>');
			}
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$('#consult_add_btn').on('click', function (e) {
	e.preventDefault();
	console.log('clicked');

	var uID = $('#uID').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	// Initialize empty arrays to store selected medicines and quantities
	var medicines = [];
	var quantities = [];

	// Loop through each added medicine input field
	$('#additionalMedicineInputs')
		.find('div.row')
		.each(function () {
			var medicineId = $(this).find('input[name="medicine_ids[]"]').val();
			var quantity = $(this).find('input[name="quantities[]"]').val();
			// Add medicine id and quantity to arrays
			medicines.push(medicineId);
			quantities.push(quantity);
		});

	// Check if any of the required fields are empty
	if (!uID || !complaints || !recommendation || medicines.length === 0 || quantities.length === 0) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	// Combine medicines and quantities into an array of objects
	var data = {
		consult_add: true,
		uID: uID,
		complaints: complaints,
		recommendation: recommendation,
		medicines: medicines,
		quantities: quantities,
		med_desc: med_desc,
	};

	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Created',
				}).then(() => {
					$('#consultform_add')[0].reset();
					$('#modal_consultADD').modal('hide');
					$('.consult_table').load(window.location.href + ' .consult_table');
					setTimeout(() => {
						window.location.reload();
					}, 2000); // Delay of 2000ms (2 seconds)
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: response,
				});
			}
		},
	});
});

$(document).on('click', '#consult_update_btn', function (e) {
	e.preventDefault();

	var ctId = $('#ct_id').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	var medicines = [];
	var quantities = [];

	$('select[name="medicine[]"]').each(function () {
		var medicineId = $(this).val();
		var quantity = $(this).closest('.row').find('input[name="quantity[]"]').val();

		medicines.push({ id: medicineId, cm_id: $(this).closest('.row').find('#cmID').val() });
		quantities.push(quantity);
	});

	if (!complaints || !recommendation) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		consult_update: true,
		ct_id: ctId,
		complaints: complaints,
		recommendation: recommendation,
		med_desc: med_desc,
		medicines: medicines,
		quantities: quantities,
	};

	console.log(quantities);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Updated',
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update consultation',
				});
			}
		},
	});
});

/// ===================================== 	EMPLOYEES CONSULT SECTION===============================================================
$(document).on('click', '#search_consult_btn1', function () {
	console.log('clicked');
	var consult_id = $(this).attr('id');
	console.log(consult_id);

	$.ajax({
		url: 'fetchconsult1.php',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			$('#modal_consultREQ1').modal('show');
			var tbody = $('#modal_consultREQ1 .consultsearch_table1');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.index + '</td>' + '<td>' + res.client_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$(document).on('click', '.select_consult1', function () {
	var consult_id1 = $(this).attr('id');
	console.log(consult_id1);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: { consult_id1: consult_id1 },
		dataType: 'json',
		success: function (res) {
			console.log(res);
			$('#modal_consultREQ1').modal('hide');

			// Update form fields with the data from the server
			$('#consultform_add1 #uID').val(res.u_id);
			$('#consultform_add1 #client_name').val(res.client_name);

			// Check if medical records exist
			if (res.mc_id) {
				// Medical records exist, create the medicalInfo HTML
				var medicalInfo = `
                    <tr>
                        <td colspan="2">
                            <p><b>Diagnosis:</b> ${res.mp_diagnosis}</p>
                            <p><b>Treatment:</b> ${res.mp_treatment}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><strong>Hypertension:</strong> 
                                <img width="20" src="${res.Hyperthension == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Diabetes:</strong> 
                                <img width="20" src="${res.Diabetes == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Cardiovascular disease:</strong> 
                                <img width="20" src="${res.Cardiovascular_desease == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
							<p><strong>PTB:</strong> 
                                <img width="20" src="${res.PTB == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Hyperacidity:</strong> 
                                <img width="20" src="${res.Hyperacidity == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                        </td>
                        <td>
                            <p><strong>Allergy:</strong> 
                                <img width="20" src="${res.Allergy == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Epilepsy:</strong> 
                                <img width="20" src="${res.Epilepsy == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Dysmenorrhea:</strong> 
                                <img width="20" src="${res.Dysmenorrhea == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Liver Disease:</strong> 
                                <img width="20" src="${res.liver_Desease == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                        </td>
                    </tr>`;

				// Append the medicalInfo to your table body
				$('#medicalData_employee').html(medicalInfo);
			} else {
				// No medical records, show a message or clear the table
				$('#medicalData_employee').html('<tr><td colspan="2"><h4 class="text-danger">No medical records found.</h4></td></tr>');
			}
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$('#consult_add_btn1').on('click', function (e) {
	e.preventDefault();
	//alert('clicked');

	var uID = $('#uID').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	// Initialize empty arrays to store selected medicines and quantities
	var medicines = [];
	var quantities = [];

	// Loop through each added medicine input field
	$('#additionalMedicineInputs')
		.find('div.row')
		.each(function () {
			var medicineId = $(this).find('input[name="medicine_ids[]"]').val();
			var quantity = $(this).find('input[name="quantities[]"]').val();
			// Add medicine id and quantity to arrays
			medicines.push(medicineId);
			quantities.push(quantity);
		});

	// Check if any of the required fields are empty
	if (!uID || !complaints || !recommendation || medicines.length === 0 || quantities.length === 0) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	// Combine medicines and quantities into an array of objects
	var data = {
		consult_add1: true,
		uID: uID,
		complaints: complaints,
		recommendation: recommendation,
		medicines: medicines,
		quantities: quantities,
		med_desc: med_desc,
	};

	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Created',
				}).then(() => {
					$('#consultform_add1')[0].reset();
					$('#modal_consultADD1').modal('hide');
					$('.consult_table1').load(window.location.href + ' .consult_table1');
					setTimeout(() => {
						window.location.reload();
					}, 2000); // Delay of 2000ms (2 seconds)
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: response,
				});
			}
		},
	});
});

$(document).on('click', '#consult_update_btn1', function (e) {
	e.preventDefault();

	var ctId = $('#ct_id').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	var medicines = [];
	var quantities = [];

	$('select[name="medicine[]"]').each(function () {
		var medicineId = $(this).val();
		var quantity = $(this).closest('.row').find('input[name="quantity[]"]').val();

		medicines.push({ id: medicineId, cm_id: $(this).closest('.row').find('#cmID').val() });
		quantities.push(quantity);
	});

	if (!complaints || !recommendation) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		consult_update: true,
		ct_id: ctId,
		complaints: complaints,
		recommendation: recommendation,
		med_desc: med_desc,
		medicines: medicines,
		quantities: quantities,
	};

	console.log(quantities);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Updated',
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update consultation',
				});
			}
		},
	});
});

////////////////11111111111111111111111111111
$(document).on('click', '#search_consult_btn12', function () {
	console.log('clicked');
	var consult_id = $(this).attr('id');
	// alert(consult_id);

	$.ajax({
		url: 'fetchconsult12.php',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			$('#modal_consultREQ12').modal('show');
			var tbody = $('#modal_consultREQ12 .consultsearch_table12');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.index + '</td>' + '<td>' + res.client_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});
$(document).on('click', '.select_consult12', function () {
	var consult_id2 = $(this).attr('id');
	console.log(consult_id2);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: { consult_id2: consult_id2 },
		dataType: 'json',
		success: function (res) {
			$('#modal_consultREQ12').modal('hide');

			// Update form fields with the data from the server
			$('#consultform_add2 #uID').val(res.u_id);
			$('#consultform_add2 #client_name').val(res.client_name);

			// Check if medical records exist
			if (res.mc_id) {
				// Medical records exist, create the medicalInfo HTML
				var medicalInfo = `
                    <tr>
                        <td colspan="2">
                            <p><b>Diagnosis:</b> ${res.mp_diagnosis}</p>
                            <p><b>Treatment:</b> ${res.mp_treatment}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><strong>Hypertension:</strong> 
                                <img width="20" src="${res.Hyperthension == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Diabetes:</strong> 
                                <img width="20" src="${res.Diabetes == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Cardiovascular disease:</strong> 
                                <img width="20" src="${res.Cardiovascular_desease == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Hyperacidity:</strong> 
                                <img width="20" src="${res.Hyperacidity == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                        </td>
                        <td>
                            <p><strong>Allergy:</strong> 
                                <img width="20" src="${res.Allergy == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Epilepsy:</strong> 
                                <img width="20" src="${res.Epilepsy == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Dysmenorrhea:</strong> 
                                <img width="20" src="${res.Dysmenorrhea == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                            <p><strong>Liver Disease:</strong> 
                                <img width="20" src="${res.liver_Desease == 1 ? './assets/check-mark.png' : './assets/no.png'}">
                            </p>
                        </td>
                    </tr>`;

				// Append the medicalInfo to your table body
				$('#medicalData_employee2').html(medicalInfo);
			} else {
				// No medical records, show a message or clear the table
				$('#medicalData_employee2').html('<tr><td colspan="2"><h4 class="text-danger">No medical records found.</h4></td></tr>');
			}
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});
$('#consult_add_btn12').on('click', function (e) {
	e.preventDefault();
	//alert('clicked');

	var uID = $('#uID').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	// Initialize empty arrays to store selected medicines and quantities
	var medicines = [];
	var quantities = [];

	// Loop through each added medicine input field
	$('#additionalMedicineInputs')
		.find('div.row')
		.each(function () {
			var medicineId = $(this).find('input[name="medicine_ids[]"]').val();
			var quantity = $(this).find('input[name="quantities[]"]').val();
			// Add medicine id and quantity to arrays
			medicines.push(medicineId);
			quantities.push(quantity);
		});

	// Check if any of the required fields are empty
	if (!uID || !complaints || !recommendation || medicines.length === 0 || quantities.length === 0) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	// Combine medicines and quantities into an array of objects
	var data = {
		consult_add12: true,
		uID: uID,
		complaints: complaints,
		recommendation: recommendation,
		medicines: medicines,
		quantities: quantities,
		med_desc: med_desc,
	};

	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Created',
				}).then(() => {
					$('#consultform_add2')[0].reset();
					$('#modal_consultADD2').modal('hide');
					$('.consult_table1').load(window.location.href + ' .consult_table2');
					setTimeout(() => {
						window.location.reload();
					}, 2000); // Delay of 2000ms (2 seconds)
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: response,
				});
			}
		},
	});
});
$(document).on('click', '#consult_update_btn12', function (e) {
	e.preventDefault();

	var ctId = $('#ct_id').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	var medicines = [];
	var quantities = [];

	$('select[name="medicine[]"]').each(function () {
		var medicineId = $(this).val();
		var quantity = $(this).closest('.row').find('input[name="quantity[]"]').val();

		medicines.push({ id: medicineId, cm_id: $(this).closest('.row').find('#cmID').val() });
		quantities.push(quantity);
	});

	if (!complaints || !recommendation) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		consult_update: true,
		ct_id: ctId,
		complaints: complaints,
		recommendation: recommendation,
		med_desc: med_desc,
		medicines: medicines,
		quantities: quantities,
	};

	console.log(quantities);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Updated',
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update consultation',
				});
			}
		},
	});
});

///////////////11111111111111111111111111111

/// ===================================== 	VISITORS CONSULT SECTION===============================================================
$(document).on('click', '#search_consult_btn2', function () {
	console.log('clicked');
	var consult_id = $(this).attr('id');
	console.log(consult_id);

	$.ajax({
		url: 'fetchconsult2.php',
		method: 'GET',
		dataType: 'json',
		success: function (res) {
			$('#modal_consultREQ2').modal('show');
			var tbody = $('#modal_consultREQ2 .consultsearch_table2');
			tbody.empty();
			$.each(res.data, function (index, res) {
				var row = '<tr>' + '<td>' + res.index + '</td>' + '<td>' + res.client_name + '</td>' + '<td>' + res.actions + '</td>' + '</tr>';
				tbody.append(row);
			});
		},
		error: function (xhr, status, error) {
			console.error(xhr.responseText);
		},
	});
});

$(document).on('click', '.select_consult2', function () {
	var consult_id = $(this).attr('id');
	console.log(consult_id);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: { consult_id: consult_id },
		dataType: 'json',
		success: function (res) {
			console.log(res);
			$('#modal_consultREQ2').modal('hide');
			// $('#search_input').val('');
			$('#modal_consultADD2 #uID').val(res.u_id);
			$('#modal_consultADD2 #client_name').val(res.client_name);
		},
	});
});

$('#consult_add_btn2').on('click', function (e) {
	e.preventDefault();
	//alert('clicked');

	var uID = $('#uID').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	// Initialize empty arrays to store selected medicines and quantities
	var medicines = [];
	var quantities = [];

	// Loop through each added medicine input field
	$('#additionalMedicineInputs')
		.find('div.row')
		.each(function () {
			var medicineId = $(this).find('input[name="medicine_ids[]"]').val();
			var quantity = $(this).find('input[name="quantities[]"]').val();
			// Add medicine id and quantity to arrays
			medicines.push(medicineId);
			quantities.push(quantity);
		});

	// Check if any of the required fields are empty
	if (!uID || !complaints || !recommendation || medicines.length === 0 || quantities.length === 0) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	// Combine medicines and quantities into an array of objects
	var data = {
		consult_add1: true,
		uID: uID,
		complaints: complaints,
		recommendation: recommendation,
		medicines: medicines,
		quantities: quantities,
		med_desc: med_desc,
	};

	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Created',
				}).then(() => {
					$('#consultform_add2')[0].reset();
					$('#modal_consultADD2').modal('hide');
					$('.consult_table2').load(window.location.href + ' .consult_table2');
					setTimeout(() => {
						window.location.reload();
					}, 2000); // Delay of 2000ms (2 seconds)
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: response,
				});
			}
		},
	});
});

$(document).on('click', '#consult_update_btn2', function (e) {
	e.preventDefault();

	var ctId = $('#ct_id').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	if (!complaints || !recommendation) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		consult_update: true,
		ct_id: ctId,
		complaints: complaints,
		recommendation: recommendation,
		med_desc: med_desc,
	};

	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Updated',
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update consultation',
				});
			}
		},
	});
});

$(document).on('click', '#consult_update_btn3', function (e) {
	e.preventDefault();

	var ctId = $('#ct_id').val();
	var complaints = $('#complaints').val();
	var recommendation = $('#recommendation').val();
	var med_desc = $('#med_desc').val();

	if (!complaints || !recommendation) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		consult_update2: true,
		ct_id: ctId,
		complaints: complaints,
		recommendation: recommendation,
		med_desc: med_desc,
	};

	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			console.log(response);
			if (response === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Consultation Successfully Updated',
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update consultation',
				});
			}
		},
	});
});

/// ===================================== MEDICINE SECTION===============================================================

$('#medicine_add_btn').on('click', function (e) {
	e.preventDefault();

	var brand = $('#brand').val();
	var medicine = $('#medicine').val();
	var ml = $('#ml').val();
	var medicine_type = $('#medicine_type').val();
	var quantity = $('#quantity').val();

	var data = {
		medicine_add: true,
		brand: brand,
		medicine: medicine,
		ml: ml,
		medicine_type: medicine_type,
		quantity: quantity,
	};

	//console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medicine Successfully Added',
				});
				$('#medicineform_add')[0].reset();
				$('#modal_medicineADD').modal('hide');
				$('.medicines_table').load(window.location.href + ' .medicines_table');
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to add medcine',
				});
			}
		},
	});
});

$('#medicine_update_btn').on('click', function (e) {
	e.preventDefault();

	var mdn_id = $('#mdn_id').val();
	var medicine = $('#medicine').val();
	var brand = $('#brand').val();
	var ml = $('#ml').val();
	var medicine_type = $('#medicine_type').val();
	var quantity = $('#quantity').val();

	// console.log(medicine);
	// console.log(mdn_id);

	var data = {
		medicine_update: true,
		mdn_id: mdn_id,
		brand: brand,
		medicine: medicine,
		ml: ml,
		medicine_type: medicine_type,
		quantity: quantity,
	};

	console.log(data);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response == 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Medicine Successfully Updated',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'medicines.php';
					}
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Medicine update failed',
				});
			}
		},
	});
});

function deleteMedicine(mdnID) {
	if (confirm('Are you sure you want to delete this Medicine?')) {
		$.ajax({
			url: 'code.php',
			type: 'GET',
			data: { mdn_idz: mdnID },
			success: function (response) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: response,
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'medicines.php';
					}
				});
			},
		});
	}
}

// =================================== Visitor Section ======================================================
$('#visitorform_add').submit(function (e) {
	e.preventDefault(); // Prevent form submission

	var formData = $(this).serialize();
	formData += '&visitor_add=1';

	console.log(formData);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: formData,
		success: function (response) {
			Swal.fire({
				icon: 'success',
				title: 'Success',
				text: 'Visitor Successfully Added',
			});
			$('#visitorform_add')[0].reset();
			$('#modal_visitorADD').modal('hide');
			$('.visitors_table').load(window.location.href + ' .visitors_table');
		},
		error: function (xhr, status, error) {
			console.log('Error:', error);
		},
	});
});
$('#visitor_update_btn').on('click', function (e) {
	e.preventDefault();

	var vID = $('#vID').val();
	var firstname = $('#firstname').val();
	var middlename = $('#middlename').val();
	var lastname = $('#lastname').val();
	var birthdate = $('#birthdate').val();
	var sex = $('#sex').val();
	var contact_no = $('#contact_no').val();

	if (!vID || !firstname || !middlename || !lastname || !birthdate || !sex || !contact_no) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		visitor_update: true,
		vID: vID,
		firstname: firstname,
		middlename: middlename,
		lastname: lastname,
		birthdate: birthdate,
		sex: sex,
		contact_no: contact_no,
	};

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response.trim() === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Visitor updated successfully',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'visitors.php';
					}
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update visitor: ' + response,
				});
			}
		},
		error: function (xhr, status, error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Failed to update student: ' + error,
			});
		},
	});
});
function deleteVisitor(vID) {
	if (confirm('Are you sure you want to delete this Visitor?')) {
		$.ajax({
			url: 'code.php',
			type: 'POST',
			data: { v_idz: vID },
			success: function (response) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: response,
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'visitors.php';
					}
				});
			},
			error: function (xhr, status, error) {
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: 'An error occurred while deleting the visitor.',
					confirmButtonText: 'OK',
				});
			},
		});
	}
}

// =================================== Employees Section ======================================================
$('#employeeform_add').submit(function (e) {
	e.preventDefault(); // Prevent form submission

	var formData = $(this).serialize();
	formData += '&employee_add=1';

	console.log(formData);

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: formData,
		success: function (response) {
			Swal.fire({
				icon: 'success',
				title: 'Success',
				text: 'Employee Successfully Added',
			});
			$('#employeeform_add')[0].reset();
			$('#modal_employeeADD').modal('hide');
			$('.employees_table').load(window.location.href + ' .employees_table');
		},
		error: function (xhr, status, error) {
			console.log('Error:', error);
		},
	});
});
$('#employee_update_btn').on('click', function (e) {
	e.preventDefault();

	var empID = $('#empID').val();
	var employee_no = $('#employee_no').val();
	var dep_id = $('#dep_id').val();
	var firstname = $('#firstname').val();
	var middlename = $('#middlename').val();
	var lastname = $('#lastname').val();
	var birthdate = $('#birthdate').val();
	var sex = $('#sex').val();
	var contact_no = $('#contact_no').val();

	// console.log(dep_id);

	if (!employee_no || !empID || !dep_id || !firstname || !middlename || !lastname || !birthdate || !sex || !contact_no) {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill in all the required fields.',
		});
		return;
	}

	var data = {
		employee_update: true,
		empID: empID,
		employee_no: employee_no,
		dep_id: dep_id,
		firstname: firstname,
		middlename: middlename,
		lastname: lastname,
		birthdate: birthdate,
		sex: sex,
		contact_no: contact_no,
	};

	$.ajax({
		type: 'POST',
		url: 'code.php',
		data: data,
		success: function (response) {
			if (response.trim() === 'success') {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: 'Employee updated successfully',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'employees.php';
					}
				});
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Failed to update studentrr: ' + response,
				});
			}
		},
		error: function (xhr, status, error) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Failed to update student: ' + error,
			});
		},
	});
});

function deleteEmployee(empID) {
	if (confirm('Are you sure you want to delete this Employee?')) {
		$.ajax({
			url: 'code.php',
			type: 'POST',
			data: { emp_idz: empID },
			success: function (response) {
				Swal.fire({
					icon: 'success',
					title: 'Success',
					text: response,
					confirmButtonText: 'OK',
				}).then((result) => {
					if (result.isConfirmed) {
						window.location.href = 'employees.php';
					}
				});
			},
			error: function (xhr, status, error) {
				Swal.fire({
					icon: 'error',
					title: 'Error',
					text: 'An error occurred while deleting the employee.',
					confirmButtonText: 'OK',
				});
			},
		});
	}
}

<?php
require ('../config/dbconfig.php');


$query = "
SELECT  us.u_id, CONCAT(us.firstname,' ', us.middlename,' ' ,us.lastname) AS visitor_name 
FROM users us
INNER JOIN visitors vs ON us.u_id = vs.u_id
";

$result = mysqli_query($conn, $query);
$i = 1;
$dataArray = [];

// Loop through the result set
while ($row = mysqli_fetch_assoc($result)) {
    $rowData = [
        "index" => $i,
        "client_name" => $row["visitor_name"],
        "actions" => '<div class="action">
                        <button id="' . $row["u_id"] . '" class="select_consult2 btn-sm btn-outline-primary">
                            <i class="fas fa-check"></i>
                            select
                        </button>
                    </div>'
    ];

    // Add the row data to the main array
    $dataArray[] = $rowData;

    // Increment the index counter
    $i++;
}

// Output the JSON-encoded array
echo json_encode(["data" => $dataArray]);

// Close connection
mysqli_close($conn);

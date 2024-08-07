<?php
include ('includes/header.php');
include ('includes/navbar.php');
?>

<div class="container-fluid">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-success">Edit Consult</h6>
            <a class="btn btn-primary btn-sm float-right mb-1" href="consult1.2.php" role="button">
                <i class="fas fa-chevron-circle-left"></i> Back
            </a>
        </div>

        <div class="card-body">

            <?php

            if (isset($_POST['edit_btn'], $_POST['edit_id'])) {
                $ct_id = $_POST['edit_id'];

                $query = "SELECT ctm.ctm_id, us.u_id, cm.ctmm_id, cm.mdn_id, CONCAT(us.firstname, ' ', us.middlename, ' ', us.lastname) AS user_fullname, ctm.chief_complaints, ctm.recommendation, ctm.process_date, GROUP_CONCAT(CONCAT(m.medicine_name, ' (', cm.ctmm_quantity, ')') SEPARATOR ', ') AS medicines_with_quantity, ctm.med_desc
                        FROM consult_monthly ctm
                        INNER JOIN consult_monthly_medicine cm ON ctm.ctm_id = cm.ctm_id
                        LEFT JOIN medicine m ON cm.mdn_id = m.mdn_id 
                        INNER JOIN users us ON ctm.u_id = us.u_id  
                        WHERE ctm.ctm_id = '$ct_id'
                ";
                $query_run = mysqli_query($conn, $query);

                foreach ($query_run as $row) {
                    $ctID = $row['ctm_id'];
                    ?>

                    <form id="consultform_edit">
                        <div class="modal-body" style="overflow-y: auto; max-height: calc(90vh - 120px);">
                            <div class="row justify-content-between">
                                <div class="col-6" style="border-right: 2px solid #9ca3af">
                                    <input type="hidden" id="ct_id" value="<?= $row['ctm_id'] ?>">
                                    <div class="form-group">
                                        <label>Client Name</label>
                                        <input type="hidden" id="uID" class="form-control form-control-sm">
                                        <input type="text" class="form-control form-control-sm" disabled
                                            value="<?= $row['user_fullname'] ?>">
                                    </div>
                                    <div class="form-group">
                                        <label>Chief Complaints</label>
                                        <textarea id="complaints" rows="4" cols="50" class="form-control"
                                            placeholder="Type your complaints here..."><?= $row['chief_complaints'] ?></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label>Recommendation</label>
                                        <textarea id="recommendation" rows="4" cols="50" class="form-control"
                                            placeholder="Type your recommendation here..."><?= $row['recommendation'] ?></textarea>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <h5 class="bg-info py-1 px-2 w-75 text-light">Medicine</h5>
                                    <div class="row medicine-row">

                                        <div class="col-12">
                                            <?php
                                            $ct_id = mysqli_real_escape_string($conn, $ct_id);
                                            $query_medicine = "SELECT m.mdn_id, cm.cm_id, m.medicine_name, cm.cm_quantity
                                            FROM consult_monthly ctm
                                            INNER JOIN consult_medicine cm ON ctm.ctm_id = cm.ct_id 
                                            LEFT JOIN medicine m ON cm.mdn_id = m.mdn_id 
                                            WHERE ctm.ctm_id = '$ct_id'";
                                            $result_medicine = mysqli_query($conn, $query_medicine);
                                            if (mysqli_num_rows($result_medicine) > 0) {
                                                while ($medicine = mysqli_fetch_assoc($result_medicine)) {
                                                    ?>
                                                    <div class="row">

                                                        <input type="hidden" id="cmID" value="<?= $medicine['cm_id'] ?>">
                                                        <div class="col-8">
                                                            <div class="form-group">
                                                                <label>Medicine Name</label>

                                                                <select disabled class="form-control form-control-sm" id="medicines"
                                                                    name="medicine[]" required>
                                                                    <option value="" disabled>------ Select Medicine -------
                                                                    </option>
                                                                    <?php
                                                                    $displayDept = "SELECT * FROM medicine";
                                                                    $deptResult = mysqli_query($conn, $displayDept);

                                                                    if (mysqli_num_rows($deptResult) > 0) {
                                                                        foreach ($deptResult as $deptItem) {
                                                                            $selected = ($deptItem['mdn_id'] == $medicine['mdn_id']) ? 'selected' : '';
                                                                            ?>
                                                                            <option value='<?= $deptItem['mdn_id'] ?>' <?= $selected ?>>
                                                                                <?= $deptItem['medicine_name'] ?>
                                                                            </option>
                                                                            <?php
                                                                        }
                                                                    } else {
                                                                        echo '<option>No Medicine found!</option>';
                                                                    }
                                                                    ?>
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div class="col-2">
                                                            <div class="form-group">
                                                                <label>Quantity</label>
                                                                <input disabled type="number" class="form-control form-control-sm"
                                                                    value="<?= $medicine['cm_quantity'] ?>" name="quantity[]">
                                                            </div>
                                                        </div>

                                                    </div>


                                                    <?php
                                                }
                                            } else {
                                                echo '<div class="form-group"><label>No medicine found</label></div>';
                                            }
                                            ?>
                                        </div>
                                    </div>



                                    <div class="row">
                                        <div class="col">
                                            <label>Medicine Description</label>
                                            <textarea id="med_desc" rows="4" cols="50" class="form-control"
                                                placeholder="Type your medicine description here..."><?= $row['med_desc'] ?></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="d-none d-sm-inline-block btn btn-sm btn-outline-secondary shadow-sm"
                                data-dismiss="modal"><i class="fas fa-ban"></i> Cancel</button>
                            <button type="submit" id="consult_update_btn3" name="consult_update_btn"
                                class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm"><i
                                    class="fas fa-save mx-1"></i>Update</button>
                        </div>
                    </form>

                    <?php
                }
            }
            ?>
        </div>
    </div>

</div>

<?php
include ('includes/scripts.php');
include ('includes/footer.php');
?>
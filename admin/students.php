<?php
include ('includes/header.php');
include ('includes/navbar.php');
include ('modal/modal-student.php');
?>

<div class="container-fluid">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h5 class="m-0 font-weight-bold text-brown">Students
                <button type="button" class="d-none d-sm-inline-block float-right btn btn-sm btn-success shadow-sm m-1"
                    data-toggle="modal" data-target="#modal_studentADD"><i class="fas fa-plus"></i> Add Student</button>
            </h5>
        </div>
        <div class="card-body">

            <?php
            // Improved query to include mc_id directly
            $query = "SELECT us.u_id, st.s_id, st.student_no, us.lastname, us.firstname, us.middlename, mc.mc_id 
                      FROM users us
                      INNER JOIN students st ON us.u_id = st.u_id
                      LEFT JOIN med_cert mc ON us.u_id = mc.u_id
                      ORDER BY st.s_id DESC";
            $query_run = mysqli_query($conn, $query);
            ?>

            <div class="table-responsive">
                <table id="datatableid" class="students_table table table-bordered" width="100%" cellspacing="0">
                    <thead class="thead-light">
                        <tr>
                            <th style="width: 10%">No.</th>
                            <th style="width: 35%">Student No.</th>
                            <th style="width: 35%">Student Name</th>
                            <th style="width: 20%"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $a = 1;
                        if (mysqli_num_rows($query_run) > 0) {
                            while ($row = mysqli_fetch_assoc($query_run)) {
                                ?>
                                <tr>
                                    <td><?= $a++ ?></td>
                                    <td><?= htmlspecialchars($row['student_no']) ?></td>
                                    <td><?= htmlspecialchars($row['lastname']) . ", " . htmlspecialchars($row['firstname']) . " " . htmlspecialchars($row['middlename']) ?>
                                    </td>
                                    <td>
                                        <div class="row justify-content-center">
                                            <?php
                                            // Check if mc_id is empty and display the button if so
                                            if (empty($row['mc_id'])) { ?>
                                                <div class="col col-lg-2 mx-2">
                                                    <a href="student_medical_add.php?u_id=<?= htmlspecialchars($row['u_id']) ?>"
                                                        name="add_medical_history"
                                                        class="d-none d-sm-inline-block btn btn-sm btn-outline-secondary shadow-sm">
                                                        <i class="fas fa-notes-medical"></i>
                                                    </a>
                                                </div>
                                            <?php } ?>

                                            <div class="col col-lg-2">
                                                <form action="student_view.php" method="POST">
                                                    <input type="hidden" name="view_id"
                                                        value="<?= htmlspecialchars($row['s_id']) ?>">
                                                    <button type="submit" name="view_btn"
                                                        class="d-none d-sm-inline-block btn btn-sm btn-outline-primary shadow-sm">
                                                        <i class="fa fa-eye" aria-hidden="true"></i>
                                                    </button>
                                                </form>
                                            </div>
                                            <div class="col col-lg-2 mx-1">
                                                <form action="student_edit.php" method="POST">
                                                    <input type="hidden" name="edit_id"
                                                        value="<?= htmlspecialchars($row['s_id']) ?>">
                                                    <button type="submit" name="edit_btn"
                                                        class="d-none d-sm-inline-block btn btn-sm btn-outline-success shadow-sm">
                                                        <i class="fas fa-edit"></i>
                                                    </button>
                                                </form>
                                            </div>
                                            <div class="col col-lg-2">
                                                <button type="button" name="del_student"
                                                    onclick="deleteStudent(<?= htmlspecialchars($row['s_id']) ?>)"
                                                    class="d-none d-sm-inline-block btn btn-sm btn-outline-danger shadow-sm">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <?php
                            }
                        } else {
                            echo "<tr><td colspan='4'>No Record Found</td></tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>

<?php
include ('includes/scripts.php');
include ('includes/footer.php');
?>
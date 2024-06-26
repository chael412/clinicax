<!-- Add Modal -->
<div class="modal fade" id="modal_adminADD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Admin</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form id="adminform_add">

        <div class="modal-body">

          <div class="form-group">
            <label>Username</label>
            <input type="text" id="username" name="username" class="form-control form-control-sm"
              placeholder="Enter Username">
          </div>

          <div class="form-group">
            <label>Password</label>
            <input type="password" id="password" name="password" class="form-control form-control-sm"
              placeholder="Enter Password">
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" id="confirmpassword" name="confirmpassword" class="form-control form-control-sm"
              placeholder="Confirm Password">
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="d-none d-sm-inline-block btn btn-sm btn-outline-secondary shadow-sm"
            data-dismiss="modal"><i class="fas fa-ban"></i> Cancel</button>
          <button type="submit" id="admin_add_btn" name="registerbtn"
            class="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm">
            <i class="fas fa-save mx-1"></i>Save
          </button>
        </div>
      </form>

    </div>
  </div>
</div>

<!-- #################################################################### -->

<!-- Delete Modal -->

<div class="modal fade" id="deletemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Admin Data</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <form action="code.php" method="POST">

        <div class="modal-body">

          <input type="hidden" name="del_id_admin" id="del_id_admin">

          <h6>Do you want to delete this data?</h6>

        </div>
        <div class="modal-footer">
          <button type="button" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            data-dismiss="modal">No</button>
          <button type="submit" name="deletedata"
            class="d-none d-sm-inline-block btn btn-sm btn-danger shadow-sm">Yes</button>
        </div>
      </form>

    </div>
  </div>
</div>
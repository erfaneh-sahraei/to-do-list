const UpdateForm = ({ updateData,changeTask,updateTask,cancelUpdate }) =>{
  return (
    <>
    <div className='row'>
    <div className='col'>
      <input
      value={ updateData && updateData.title }
      onChange={(e) =>changeTask(e)}
      className='form-control form-control-lg'/>
    </div>
    <div className='col-auto'>
    <button 
    onClick={updateTask}
    className='btn btn-lg btn-success '>
          آپدیت
      </button>
      <button 
      onClick={cancelUpdate}
      className='btn btn-lg btn-warning '>
          انصراف
      </button>
      </div>
  </div>
  <br/>
    </>
  )
}

export default UpdateForm;
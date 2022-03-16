let local_storage_id="kidId"

let student_id_key = Object.keys(localStorage)
  .filter((el) => el.includes(local_storage_id))
  .pop()

chrome.storage.sync.set({kidid: localStorage[student_id_key] }, function () {
  console.log('student_id_key is set to ' + localStorage[student_id_key])
})

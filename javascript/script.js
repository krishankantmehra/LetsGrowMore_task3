$(function(){
    var form = $('#registrationForm');
    var students = []
    var list = $('#studentList')

    $('#submit').click(() => {
        let formData = form.serializeArray()
        let flag = true;
        let curStudent = {}
        formData.forEach(e => {
            if(e.value){
                curStudent[e.name] = e.value
            }
            else{
                $('#error').text(`**All fields are required.`)
                flag = false;
                return
            }
        })
        
        
        if(flag)students.push(curStudent)
        form[0].reset()
        
        show()
    })

    $('#reset').click(() => {
        form[0].reset()
    })

    show = () => {
        var listData = ''

        if(students.length === 0){
            listData = "<h5 class='text-primary m-2'>Students will show here.</h5>"
        }
        else{
           students.forEach((e) => {
            // console.log(e);
            let skills = []
            if(e.html !== undefined)skills.push('HTML')
            if(e.css !== undefined)skills.push('CSS')
            if(e.javascript !== undefined)skills.push('JavaScript')

             listData += `<div class='my-2 ms-2 bg-dark text-light d-flex flex-row justify-content-center align-items-center'>
                <div class='col-8 d-flex flex-column text-start wrap'>
                    <h6>Name : ${e.Name}</h6>
                    <h6>Gender : ${e.gender}</h6>
                    <h6>Email : ${e.email}</h6>
                    <h6>Website : <a href='${e.website}'>${e.website}</a> </h6>
                    <h6>Skills : ${skills}</h6>
                </div>
                <div class='col-3'>
                    <img class='studentImage' src=${e.image} />
                </div>
             </div>`
           })
        }

        list.html(listData)
    }
    show()
});
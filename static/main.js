
console.log('Hello World')

const spinner = document.getElementById('spinner')
const tableBody = document.getElementById('table-body-box')

const modal = document.getElementById('modal-body')

const url = window.location
console.log(url.href)

$.ajax({
    type: 'GET',
    url : '/data-json/',
    success: function(response){
        const data = JSON.parse(response.data)
        
        setTimeout(function(){
            spinner.classList.add('not-visible')
            data.forEach(function(item){
                console.log(item.fields)
                tableBody.innerHTML += `
                    <tr>
                        <td>${item.pk}</td>
                        <td>
                        <div class="my-img" data-toggle="modal" data-target="#previevPicModal" style="cursor:pointer;" data-pic=${url.href}media/${item.fields.sekil}>
                            <img class="rounded h-40 img-photo" src=${url.href}media/${item.fields.sekil} height="40px">
                        </div>
                        </td>
                        <td>${item.fields.info}</td>
                    </tr>
                `
            })
            const imgPhoto = [...document.getElementsByClassName('img-photo')]
            imgPhoto.forEach(function(item){
                item.addEventListener('click',function(e){
                    const pic = e.target.parentElement.getAttribute('data-pic')
                    console.log(pic)
                    modal.innerHTML = `<img src=${pic} height="250px">`
                })
            })
        },500)
    },
    error:function(err){
        console.log(err)
    }
})

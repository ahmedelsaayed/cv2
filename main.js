
$('.temp img').click(function(e){ 
    // e.preventDefault()
    $('.templates').addClass('down')
    $('.templates').removeClass('up')
    let newSrc = $(this).attr('src')
    $('.templates img').attr('src',newSrc) 
    console.log('ns')  
});
$('.bt-close').click(function(e){ 
    // e.preventDefault()
    $('.templates').addClass('up')
    $('.templates').removeClass('down')
    console.log('ns')
    
});
function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
  
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
  
      reader.onload = function(e) {
        imagePreview.src = e.target.result;
      };
  
      reader.readAsDataURL(file);
    } else {
      alert('يرجى اختيار صورة');
    }
  }
  // create cv
  let website = $('.Webaite').val();
  $('.next1').click(function() {
  
    // Hide the first form section
    document.querySelector('.f1').style.display = 'none';  
    // Show the second form section
    document.querySelector('.f2').style.display = 'flex';
  
    // Log only the first name (optional)
  });
  
  $('.back').click(function(){
    document.querySelector(' .f2 ').style.display='none'
    document.querySelector(' .f1 ').style.display='flex'
  })
  $('.Create').click(function(){
    document.querySelector(' .f2 ').style.display='flex'
    document.querySelector(' .f1 ').style.display='none'
    let fname = $('.fname').val();
    let lname = $('.lname').val();
    let email = $('.emaill').val();
    let phone = $('.ph').val();
    let address = $('.add').val();
    let code = $('.code').val();
    let city = $('.citt').val();
    let lang = $('.license').val();
    let gender = $('.ganderr').val();
    let nationality = $('.Nationality').val();
    let marital = $('.Marital').val();
    let linkedIn = $('.LinkedIn').val();
    let website = $('.Webaite').val();
    let jopt = $('.jopt').val();
    let Employer = $('.Employer').val();
    let startdate = $('.start').val();
    let startdated = $('.start-d').val();
    let Enddate  = $('.end').val();
    let Enddated  = $('.end-d').val();
    let Description  = $('.desc').val();
    let Resumeobjective =$('.obj').val()
    let Education =$('.edu').val()
    let Skills =$('.sk').val()
    let country =$('.country').val()     
    let collage =$('.collage').val()

    // Store the data in an object (optional)
    let formData = 
      {
        firstName: fname,
      lastName: lname,
      collage:collage,
      email: email,
      phone: phone,
      address: address,
      code: code,
      city:city,
      lang: lang,
      gender: gender,
      nationality: nationality,
      maritalStatus: marital, // Corrected variable name
      linkedIn: linkedIn,
      website: website,
      jop:jopt,
      Description:Description,
      Resumeobjective:Resumeobjective,
      Education:Education,
      Skills:Skills,
      country:country,
      Employer:Employer,
      startdate:startdate,
      Enddate:Enddate,
      startdated:startdated,
      Enddated:Enddated,
    };
    let info=[]
    info.push(formData)
    console.log(formData)
    $('.one').hide();
    $('.two').show()
    document.querySelector('.cv').style.display = 'block';
    let p = info.map(function(item){
      return(
       `
        <h3 style="text-align: center; margin: 30px auto;">Your CV is created</h3>
        <div class="container">
        <div class="left_Side">
            <div class="profileText">
                <div class="imgBx">
                    <img src="./img/01.jpg" style{width:120px}>
                </div>
                <h2>${item.firstName} ${item.lastName}<br><span>${item.Employer}</span></h2>
            </div>
            <div class="contactInfo">
            <h3 class="title">Contact Info</h3>
            <ul>
                <li>
                    <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <span class="text">${item.phone}</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                    <span class="text">${item.email}</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-globe" aria-hidden="true"></i></span>
                    <span class="text">${item.website}</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-linkedin" aria-hidden="true"></i></span>
                    <span class="text">${item.linkedIn}</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span class="text">${item.address}</span>
                </li>
            </ul>
        </div>
        <div class="contactInfo education">
            <h3 class="title">EDUCATION</h3>
            <ul>
                <li>
                   <h5>${item.startdated} - ${item.Enddated} </h5>
                   <h4>${item.collage}</h4>
                </li>
                <li>
                   <h5>Marital status</h5>
                   <h4>${item.maritalStatus}</h4>
                </li>
                <li>
                   <h5>Nationality</h5>
                   <h4>${item.maritalStatus}</h4>
                </li>
                <li>
                   <h5>Gander</h5>
                   <h4>${item.maritalStatus}</h4>
                </li>
            </ul>
        </div>
        <div class="contactInfo language">
            <h3 class="title">LANGUAGES</h3>
            <ul>
                <li>
                    <span class="text">Arabic</span>
                    <span class="percent"></span>
                    <div style="width: 90%;"></div>
                </li>
                <li>
                    <span class="text">${item.lang}</span>
                    <span class="percent"></span>
                    <div style="width: 50%;"></div>
                </li>
            </ul>
    </div>
    </div>
  <div class="right_Side">
  <div class="about">
    <h2 class="title2">Profile</h2>
    <p style="width: 90%;">${item.Description}</p>
  </div>
  <div class="about">
    <h2 class="title2">Experience</h2>
    <div class="box">
        <div class="year_company">
<h5>${item.startdated} - ${item.Enddated}</h5>
<h5>${item.jop}</h5>
<h4>${item.country}</h4>

        </div>
</div>
  <div class="box">   
</div>
</div>
<div class="about skills">
    <h2 class="title2">Professional Skills</h2>
<div class="box">
    <h4>${item.Skills}<br/></h4>
</div>
</div>
<div class="About interest">
    <h2 class="title2">Interest</h2>
    <ul>
        <h4>${item.Resumeobjective}</br></h4>
    </ul>
</div>
  </div>
    </div>

        `
      )
    })
    $('.cv').html(p)
    $('.back2').css('display','flex')
  })
  $('.back2').click(function(){
      document.querySelector('.cv').style.display = 'none';
      $('.back2').css('display','none')

      // Show the second form section
      document.querySelector('.f2').style.display = 'flex';
  })

$('.fa-list').click(function(){
  $('.nav-right').toggleClass('nav-menue')
})
  